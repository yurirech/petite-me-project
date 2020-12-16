import { CHANGE_THEME } from '../constants/admin-panel';

export const changeTheme = (newTheme: string) => ({
  type: CHANGE_THEME,
  payload: newTheme
});