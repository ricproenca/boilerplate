import { isValidSession } from '../spotify/Auth';

export const isLoggedIn = () => isValidSession();
