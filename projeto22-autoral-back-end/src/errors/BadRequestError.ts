import { ApplicationError } from '../utils/protocols';

export function badRequestError(description?: string): ApplicationError {
  return {
    name: 'BadRequestError',
    message: description || 'Bad Request Error!',
  };
}
