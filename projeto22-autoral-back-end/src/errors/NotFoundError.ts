import { ApplicationError } from '../utils/protocols';

export function notFoundError(description?: string): ApplicationError {
  return {
    name: `NotFoundError`,
    message: `${description} Not Found!`,
  };
}
