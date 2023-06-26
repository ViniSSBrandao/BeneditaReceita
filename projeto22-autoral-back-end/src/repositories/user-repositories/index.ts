import { prisma } from '../../config/database';
import { Prisma } from '@prisma/client';

async function findUser(id: number) {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
}

async function findByEmail(email: string, select?: Prisma.UserSelect) {
  const params: Prisma.UserFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.user.findUnique(params);
}

async function create(email: string, password: string, image: string, name: string) {
  return prisma.user.create({
    data: {
      password,
      image,
      name,
      email,
    },
  });
}

const userRepository = {
  findByEmail,
  create,
  findUser,
};

export default userRepository;
