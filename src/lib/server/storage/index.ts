import { FileStorageProvider } from "@/lib/server/storage/file-storage";
import type { StorageProvider } from "@/lib/server/storage/types";

function createStorageProvider(): StorageProvider {
  const provider = process.env.STORAGE_PROVIDER || "file";

  switch (provider) {
    case "file":
      return new FileStorageProvider();
    default:
      console.warn(`Unknown STORAGE_PROVIDER "${provider}", falling back to file.`);
      return new FileStorageProvider();
  }
}

export const storageProvider = createStorageProvider();
