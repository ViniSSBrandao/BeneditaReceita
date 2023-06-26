import faker from '@faker-js/faker';
import Joi from 'joi';

describe('createUserSchema', () => {
  const generateValidInput = () => ({
    email: faker.internet.email(),
    password: faker.internet.password(6),
    name: faker.name.firstName(),
    image: faker.image.avatar(),
  });

  describe('when email is not valid', () => {
    it('should return error if email is not present', () => {
      const input = generateValidInput();
      delete input.email;

      const { error } = createUserSchema.validate(input);

      expect(error).toBeDefined();
    });

    it('should return error if email does not follow valid email format', () => {
      const input = generateValidInput();
      input.email = faker.lorem.word();

      const { error } = createUserSchema.validate(input);

      expect(error).toBeDefined();
    });
  });

  describe('when password is not valid', () => {
    it('should return error if password is not present', () => {
      const input = generateValidInput();
      delete input.password;

      const { error } = createUserSchema.validate(input);

      expect(error).toBeDefined();
    });

    it('should return no error if input is valid', () => {
      const input = generateValidInput();

      const { error } = createUserSchema.validate(input);

      expect(error).toBeUndefined();
    });
  });
});

const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  image: Joi.string().uri().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
});
