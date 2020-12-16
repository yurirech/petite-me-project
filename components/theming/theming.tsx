import {useSelector} from 'react-redux';
// import { changeTheme } from '../../reducers/admin-panel';
const ThemeProvider = ({ children }) => {
  const theme = useSelector((state: any) => {
    return state.changeTheme.theme;
  })

  return <div className={`${theme}-theme`}>{children}</div>;
};

export default ThemeProvider;
