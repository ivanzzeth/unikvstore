import { Dropbox, DropboxResponse, files } from "dropbox";
import { KeyNotFound } from "../errors";
import { IStorage } from "..";

export class DropboxStorage implements IStorage {
  dbx: Dropbox;

  constructor(accessToken: string) {
    this.dbx = new Dropbox({
      accessToken: accessToken,
    });
  }

  async keys(): Promise<string[]> {
    const res = await this.dbx.filesListFolder({
      path: "",
    });
    return res.result.entries.map((entry) => entry.name.replace(".txt", ""));
  }

  async contains(key: string | Promise<string>): Promise<boolean> {
    let resp: DropboxResponse<files.SearchV2Result>;

    resp = await this.dbx.filesSearchV2({
      query: await key,
    });

    return resp!.result.matches.length > 0;
  }

  async get(
    key: string | Promise<string>,
    defaultValue?: string | Promise<string>,
  ): Promise<string> {
    key = await key;

    if (!(await this.contains(key))) {
      if (defaultValue) {
        return defaultValue;
      }

      throw KeyNotFound;
    }

    const content = await this.getFileContent(this.key2Filename(key));

    return content;
  }

  async set(
    key: string | Promise<string>,
    value: string | Promise<string>,
  ): Promise<void> {
    key = await key;
    value = await value;
    if (await this.contains(key)) {
      try {
        await this.dbx.filesDeleteV2({
          path: this.key2Filename(key),
        });
      } catch (e: any) {
        throw new Error(`failed to delete file ${key}: ${e.message}`);
      }
    }

    try {
      await this.dbx.filesUpload({
        path: this.key2Filename(key),
        contents: value,
      });
    } catch (e: any) {
      throw new Error(`failed to upload file ${key}: ${e.message}`);
    }

    // Do additional checks to avoid dropbox searchFile api calls returning unexpected result.
    for (let i = 0; i < 3; i++) {
      console.log(`Dropbox do addtional checks round ${i} for setting ${key}`);
      const contains = await this.contains(key);
      if (contains) {
        return;
      }
    }

    // Unknown error occured on filesUpload so throw the error
    throw new Error(
      "uploading file api call returns ok but not contain on dropbox",
    );
  }

  async delete(key: string | Promise<string>): Promise<void> {
    await this.dbx.filesDeleteV2({
      path: this.key2Filename(await key),
    });
  }

  async clear(): Promise<void> {
    const keys = await this.keys();
      await this.dbx.filesDeleteBatch({
        entries: keys.map((key) => ({
          path: this.key2Filename(key),
        })),
      });

    // Double checks
    for (let i = 0; i < 3; i++) {
      console.log(
        `Dropbox do addtional checks round ${i} for clearing storage`,
      );
      const keys = await this.keys();
      if (keys.length == 0) {
        return;
      }
    }

    throw new Error("failed to clear storage");
  }

  private async getFileContent(filename: string) {
    let content = (await new Promise((resolve, reject) => {
      this.dbx
        .filesDownload({
          path: filename,
        })
        .then((file) => {
          const fileBlob = (file.result as any).fileBlob as Blob;
          const fileBinary = (file.result as any).fileBinary as Buffer;

          if (typeof FileReader !== "undefined") {
            const fileReader = new FileReader();
            fileReader.onload = () => {
              resolve(fileReader.result as string);
            };
            fileReader.readAsText(fileBlob);
          } else {
            if (fileBlob) {
              resolve(fileBlob.text());
            } else {
              resolve(new TextDecoder("utf-8").decode(fileBinary));
            }
          }
        })
        .catch((err) => reject(err));
    })) as string;

    return content!;
  }

  private key2Filename(key: string) {
    return "/" + key + ".txt";
  }
}
