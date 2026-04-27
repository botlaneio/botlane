import { mkdir, appendFile } from "node:fs/promises";
import { join } from "node:path";
import type { PersistableRecord, StorageProvider } from "@/lib/server/storage/types";

const dataRoot = join(process.cwd(), ".data");

async function ensureDataDir() {
  await mkdir(dataRoot, { recursive: true });
}

async function appendJsonLine(fileName: string, payload: PersistableRecord) {
  await ensureDataDir();
  const filePath = join(dataRoot, fileName);
  const line = `${JSON.stringify(payload)}\n`;
  await appendFile(filePath, line, { encoding: "utf-8" });
}

export class FileStorageProvider implements StorageProvider {
  async saveLead(payload: PersistableRecord) {
    await appendJsonLine("leads.jsonl", payload);
  }

  async saveEvent(payload: PersistableRecord) {
    await appendJsonLine("events.jsonl", payload);
  }
}
