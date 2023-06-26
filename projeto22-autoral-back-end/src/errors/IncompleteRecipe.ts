import { ApplicationError } from '../utils/protocols';

export function IncompleteRecipeError(): ApplicationError {
  return {
    name: 'IncompleteRecipeError',
    message: 'You must send the complete recipe data!',
  };
}
