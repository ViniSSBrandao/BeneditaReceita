import bcrypt from 'bcrypt';
import userRepository from '../../repositories/user-repositories';
import { duplicatedEmailError } from '@/errors/DuplicateEmailError';
async function createUser(email: string, password: string, image: string, name: string) {
  await validateUniqueEmailOrFail(email);
  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create(email, hashedPassword, image, name);
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

export default {
  createUser,
};
