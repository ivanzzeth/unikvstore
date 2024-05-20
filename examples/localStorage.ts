import { MemoryStorage } from "unikvstore";

async function main() {
    const storage = new MemoryStorage();

    await storage.set("key", "value");
    console.log("get: ", await storage.get("key"));
    console.log("contains: ", await storage.contains("key"));
}

main();