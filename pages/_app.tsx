import { AppProps } from "next/app";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { changeTheme } from "../reducers/admin-panel";

import "../styles/globals.scss";
import 'swiper/swiper.scss';

import MenuBar from "../components/menu-bar/menu-bar";
import Footer from "../components/footer/footer";
import ThemeProvider from "../components/theming/theming";

const logger = createLogger();
const rootReducer = combineReducers({ changeTheme });
const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, logger)
);

function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<MenuBar />
				<Component {...pageProps} />
				<footer>
					<Footer />
				</footer>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
