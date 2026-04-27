export type PersistableRecordValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, unknown>
  | Array<unknown>;

export type PersistableRecord = Record<string, PersistableRecordValue>;

export interface StorageProvider {
  saveLead(payload: PersistableRecord): Promise<void>;
  saveEvent(payload: PersistableRecord): Promise<void>;
}
