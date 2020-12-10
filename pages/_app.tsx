import { AppProps } from "next/app";

import "../styles/globals.scss";

import MenuBar from '../components/menu-bar/menu-bar';
import Footer from "../components/footer/footer";

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<MenuBar />
			<Component {...pageProps} />
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
