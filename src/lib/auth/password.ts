import bcrypt from "bcrypt";

const PASSWORD_COST_FACTOR = 12;

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, PASSWORD_COST_FACTOR);
};

export const verifyPassword = async (
  password: string,
  passwordHash: string,
): Promise<boolean> => {
  return bcrypt.compare(password, passwordHash);
};
