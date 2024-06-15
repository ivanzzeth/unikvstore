import { IStorage, LocalStorage } from ".";

export class LocalFileStorage extends LocalStorage implements IStorage {
    nodeStorage: any

    constructor(filePath: string) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const NodeLocalStorage = require("node-localstorage").LocalStorage;
        const nodeLocalStorage = new NodeLocalStorage(filePath);
        super(nodeLocalStorage)

        this.nodeStorage = nodeLocalStorage;
    }

    deleteLocalFile(): void {
        try {
            this.nodeStorage._deleteLocation();
          } catch (e: any) { /* empty */ }
    }
}