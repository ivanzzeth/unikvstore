import axios, { AxiosResponse } from "axios";

export const MIME_TYPE_GOOGLE_FOLDER: string =
  "application/vnd.google-apps.folder";
export const GOOGLE_API_ROOT = "https://www.googleapis.com"; // https://www.googleapis.com

// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export interface SearchFileParams {
  corpora?: "user" | "domain" | "drive" | "allDrives"; // "user" by default.
  driveId?: string;
  includeItemsFromAllDrives?: boolean;
  orderBy?: string;
  pageSize?: number;
  pageToken?: string;
  q?: string; // A query for filtering the file results. See the "Search for files & folders" guide for supported syntax.
  spaces?: "drive" | "appDataFolder"; // "appDataFolder" by default.
}

export interface ExportFileParams {
  mimeType?: string;
}

export interface ErrorResponse {
  error: {
    message: string;
  };
}

export interface SearchFileResponse {
  nextPageToken: string;
  kind: string;
  incompleteSearch: boolean;
  files: Array<GoogleFile>;
}

export interface GoogleFile {
  kind: string;
  mimeType: string;
  id: string;
  name: string;
}

export class GoogleDrive {
  accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  async createFile(
    filename: string,
    content?: string,
    folderId?: string | "appDataFolder",
    mimeType?: string,
  ) {
    const body = {
      name: filename,
      mimeType: mimeType ? mimeType : "application/octet-stream",
      parents: [folderId],
    };
    const resp = await axios.post(
      `${GOOGLE_API_ROOT}/drive/v3/files?access_token=${this.accessToken}`,
      JSON.stringify(body),
      {
        headers: {
          // 'Authorization': `Bearer ${this.accessToken}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      },
    );

    if (resp.status != axios.HttpStatusCode.Ok) {
      throw Error("Call create file faield: " + resp.data.error.message);
    }

    const fileId = resp.data.id as string;

    if (mimeType == MIME_TYPE_GOOGLE_FOLDER) {
      if (content) {
        throw Error("Insert content in folder");
      }
    }

    if (content) {
      this.updateFile(fileId, content);
    }

    return fileId;
  }

  async createFolder(folderName: string) {
    return this.createFile(
      folderName,
      undefined,
      undefined,
      MIME_TYPE_GOOGLE_FOLDER,
    );
  }

  async updateFile(fileId: string, content: string, mimeType?: string) {
    mimeType = mimeType ? mimeType : "text/plain";
    const resp = await axios.patch(
      `${GOOGLE_API_ROOT}/upload/drive/v3/files/${fileId}?uploadType=media`,
      content,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": mimeType,
        },
      },
    );

    if (resp.status != axios.HttpStatusCode.Ok) {
      throw Error("Call updateFile faield: " + resp.data.error.message);
    }
  }

  async deleteFile(fileId: string) {
    const resp = await axios.delete(
      `${GOOGLE_API_ROOT}/drive/v3/files/${fileId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": `application/json; charset=UTF-8`,
        },
      },
    );

    if (resp.status != axios.HttpStatusCode.NoContent) {
      throw Error("Call deleteFile faield: " + resp.data.error);
    }
  }

  async searchFile(params?: SearchFileParams) {
    if (!params) {
      params = {};
    }
    if (!params.spaces) {
      params.spaces = "appDataFolder";
    }

    const searchParams = new URLSearchParams(
      `access_token=${this.accessToken}`,
    );
    for (let k in params) {
      searchParams.append(k, (params as any)[k]);
    }
    const resp = await axios.get<
      any,
      AxiosResponse<SearchFileResponse | ErrorResponse>
    >(`${GOOGLE_API_ROOT}/drive/v3/files?${searchParams.toString()}`);
    if (resp.status != axios.HttpStatusCode.Ok) {
      throw Error(
        "Call searchFile faield: " + (resp.data as ErrorResponse).error.message,
      );
    }

    const data = resp.data as SearchFileResponse;
    return data;
  }

  async getFile(fileId: string) {
    const searchParams = new URLSearchParams(
      `access_token=${this.accessToken}`,
    );
    searchParams.append(
      "fields",
      "kind,mimeType,id,name,parents,shared,size,viewersCanCopyContent,trashed,createdTime,modifiedTime,modifiedByMeTime,version,isAppAuthorized,capabilities(canDownload,canEdit,canDelete,canModifyContent),webContentLink",
    );

    const metadataResp = await axios.get<
      any,
      AxiosResponse<GoogleFile | ErrorResponse>
    >(`${GOOGLE_API_ROOT}/drive/v3/files/${fileId}?${searchParams.toString()}`);
    if (metadataResp.status != axios.HttpStatusCode.Ok) {
      throw Error(
        "Call getFileMetadata faield: " +
          (metadataResp.data as ErrorResponse).error.message,
      );
    }

    // const fileMetadata = metadataResp.data as GoogleFile;

    searchParams.append("alt", "media");
    searchParams.delete("access_token"); // NOTE: Must delete it for futhering http request, otherwise google will report automated queries and refuse the access.

    const fileResp = await axios.get<
      any,
      AxiosResponse<string | ErrorResponse>
    >(
      `${GOOGLE_API_ROOT}/drive/v3/files/${fileId}?${searchParams.toString()}`,
      {
        // responseType: "stream",
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      },
    );

    if (fileResp.status != axios.HttpStatusCode.Ok) {
      throw Error(
        "Call getFile faield: " +
          (fileResp.data as ErrorResponse).error.message,
      );
    }

    if (typeof fileResp.data != "string") {
      fileResp.data = JSON.stringify(fileResp.data, null, " ");
    }

    return fileResp.data as string;
  }

  async exportFile(fileId: string, params?: ExportFileParams) {
    const searchParams = new URLSearchParams();
    if (!params) {
      params = {};
    }
    if (!params.mimeType) {
      params.mimeType = "text/plain";
    }

    for (let k in params) {
      searchParams.append(k, (params as any)[k]);
    }
    const resp = await axios.get<
      any,
      AxiosResponse<GoogleFile | ErrorResponse>
    >(
      `${GOOGLE_API_ROOT}/drive/v3/files/${fileId}/export?${searchParams.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      },
    );
    if (resp.status != axios.HttpStatusCode.Ok) {
      throw Error(
        "Call exportFile faield: " + (resp.data as ErrorResponse).error.message,
      );
    }
  }
}
