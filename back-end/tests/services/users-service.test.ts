import faker from '@faker-js/faker';
import bcrypt from 'bcrypt';
import { createUser as createUserSeed } from '../factories';
import { cleanDb } from '../helpers';
import { prisma } from '@/config/database';
import { init } from '@/app';
import { duplicatedEmailError } from '@/errors/DuplicateEmailError';
import userServices from '@/services/user-services';

beforeAll(async () => {
  await init();
  await cleanDb();
});

describe('createUser', () => {
  it('should throw duplicatedUserError if there is a user with given email', async () => {
    const existingUser = await createUserSeed();

    try {
      await userServices.createUser(
        existingUser.email,
        faker.internet.password(6),
        faker.image.avatar(),
        faker.name.firstName(),
      );
      fail('should throw duplicatedUserError');
    } catch (error) {
      expect(error).toEqual(duplicatedEmailError());
    }
  });

  it('should create user when given email is unique', async () => {
    const user = await userServices.createUser(
      faker.internet.email(),
      faker.internet.password(6),
      faker.image.avatar(),
      faker.name.firstName(),
    );

    const dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });
    expect(user).toEqual(
      expect.objectContaining({
        id: dbUser.id,
        email: dbUser.email,
      }),
    );
  });

  it('should hash user password', async () => {
    const rawPassword = faker.internet.password(6);
    const user = await userServices.createUser(
      faker.internet.email(),
      rawPassword,
      faker.image.avatar(),
      faker.name.firstName(),
    );

    const dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });
    expect(dbUser.password).not.toBe(rawPassword);
    expect(await bcrypt.compare(rawPassword, dbUser.password)).toBe(true);
  });
});
