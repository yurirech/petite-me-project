import {useSelector} from 'react-redux';

const ThemeProvider = ({ children }) => {
  const theme = useSelector(state => {
    return state.changeTheme.theme;
  })

  console.log(theme);
  
  return <div className={`${theme}-theme`}>{children}</div>;
};

export default ThemeProvider;
