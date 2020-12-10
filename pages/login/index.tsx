import Link from "next/link";
import cx from "classnames";

import styles from "./index.module.scss";
import uStyles from "../../styles/utils.module.scss";

import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { useState } from "react";

const Login = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<>
			<div className={styles.login}>
				<span className={styles.divider}></span>

				<div className={uStyles.container}>
					<header className={styles.loginHeader}>
						<p
							className={cx({ [styles.isActive]: isLogin })}
							onClick={() => setIsLogin(true)}
						>
							Login
						</p>
						<p
							className={cx({ [styles.isActive]: !isLogin })}
							onClick={() => setIsLogin(false)}
						>
							Register
						</p>
						{console.log("isLogin: ", isLogin)}
					</header>

					<form>
						<Input type="text" placeholder="Email" />
						<Input type="password" placeholder="Password" />
						<Link href="#">
							<a>
								<small>Forgot password?</small>
							</a>
						</Link>
						<div className={styles.rememberMe}>
							<Input type="checkbox" id="remember-me" value="remember-me" />
							<label htmlFor="remember-me">remember me</label>
						</div>
						<Button title="Login" type="submit" backgroundColor='dark' />
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
