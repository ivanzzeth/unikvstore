import { DropboxStorage, IStorage } from "unikvstore";

async function main() {
    const accessToken = process.env.DROPBOX_ACCESS_TOKEN;
    console.log("dropbox accessToken: ", accessToken);
    const storage: IStorage = new DropboxStorage(accessToken);

    await storage.set("key", "value");
    console.log("get: ", await storage.get("key"));
    console.log("contains: ", await storage.contains("key"));

    await storage.clear();

    console.log("contains after clearing: ", await storage.contains("key"));
}

main();