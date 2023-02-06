import bcrypt from 'bcrypt'
export const hashPassword = async (psw) => {
  const hashedPassword = await bcrypt.hash(psw,10);
  return hashedPassword;
}