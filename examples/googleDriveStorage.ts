import { GoogleDriveStorage, IStorage } from "unikvstore";

async function main() {
    const accessToken = process.env.GOOGLE_DRIVE_ACCESS_TOKEN;
    console.log("google drive accessToken: ", accessToken);
    const storage: IStorage = new GoogleDriveStorage(accessToken);

    await storage.set("key", "value");
    console.log("get: ", await storage.get("key"));
    console.log("contains: ", await storage.contains("key"));

    await storage.clear();

    console.log("contains after clearing: ", await storage.contains("key"));
}

main();