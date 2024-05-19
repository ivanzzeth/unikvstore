import { GoogleDrive, SearchFileResponse } from "./file";
import { KeyNotFound } from "../errors";
import { IStorage } from "..";

export class GoogleDriveStorage implements IStorage {
  drive: GoogleDrive;

  constructor(accessToken: string) {
    this.drive = new GoogleDrive(accessToken);
  }

  async keys(): Promise<string[]> {
    const resp = await this.drive.searchFile();
    return resp.files.map((file) => file.name);

    return [];
  }

  async contains(key: string | Promise<string>): Promise<boolean> {
    key = await key;
    const fileId = await this.getFileId(key);
    return fileId != null;
  }

  async get(
    key: string | Promise<string>,
    defaultValue?: string | Promise<string>,
  ): Promise<string> {
    key = await key;

    const fileId = await this.getFileId(key);
    const contains = fileId != null;

    if (!contains) {
      if (defaultValue) {
        return defaultValue;
      }
      throw KeyNotFound;
    }

    let content: string;
    content = await this.drive.getFile(fileId!);

    return content!;
  }

  async set(
    key: string | Promise<string>,
    value: string | Promise<string>,
  ): Promise<void> {
    key = await key;
    value = await value;

    const fileId = await this.getFileId(key);
    const contains = fileId != null;

    if (!contains) {
      await this.drive.createFile(key, value, "appDataFolder");
      return;
    }

    this.drive.updateFile(fileId, value);
  }

  async delete(key: string | Promise<string>): Promise<void> {
    const fileId = await this.getFileId(key);
    
    if (fileId) {
      await this.drive.deleteFile(fileId);
    }
  }

  async clear(): Promise<void> {
    const resp = await this.drive.searchFile({
      q: `'appDataFolder' in parents`,
    });
    const ids = resp.files.map((file) => file.id);
    await Promise.all(ids.map((id) => this.drive.deleteFile(id)));
  }

  private async getFileId(
    key: string | Promise<string>,
  ): Promise<string | undefined> {
    let resp!: SearchFileResponse;
    resp = await this.drive.searchFile({ q: `name = '${key}'` });

    if (resp.files.length > 1) {
      throw new Error("Duplicate entries");
    }

    let fileId: string | undefined;
    if (resp.files.length == 1) {
      fileId = resp.files[0]!.id;
    }

    return fileId;
  }
}
