import bcrypt from 'bcrypt';

export const saltPassword = (password: string) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

export const verifyPassword = (password: string, reqPassword: string) => {
  return bcrypt.compareSync(reqPassword, password);
};
