import type {
  User,
  Lead,
  Project,
  Event as DbEvent,
  AuditLog,
  Role,
  LeadStatus,
  ProjectStatus,
} from "@prisma/client";

/**
 * Public-safe User shape (passwordHash stripped).
 * Always return this from data fetchers - never the raw User row.
 */
export type UserDTO = Omit<User, "passwordHash">;

export type LeadDTO = Lead;
export type ProjectDTO = Project;
export type EventDTO = DbEvent;
export type AuditLogDTO = AuditLog;

export type { Role, LeadStatus, ProjectStatus };

export const toUserDTO = (user: User): UserDTO => {
  const { passwordHash, ...rest } = user;
  void passwordHash;
  return rest;
};
