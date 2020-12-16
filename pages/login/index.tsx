import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import styles from "./index.module.scss";
import uStyles from "../../styles/utils.module.scss";

import Input from "../../components/input/input";
import Button from "../../components/button/button";


const Login = () => {
	const router = useRouter();
	
	const [isLogin, setIsLogin] = useState(true);
	const [isRegistered, setIsRegistered] = useState(false);

	useEffect(() => {
		if (router.query.name === "register") {
			setIsLogin(false);
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isLogin) {
			return alert("USER LOGGED IN");
		}

		setIsRegistered(true);
		return alert("User registered");
	};

	return (
		<>
			<div className={styles.login}>
				<span className={styles.divider}></span>
				<div className={uStyles.container}>
					<div className={styles.flexContainer}>
						<div className={styles.leftBlock}>
							<div className={styles.imageWrapper}>
								<Image
									src="/img/login.jpg"
									layout="fill"
									objectFit="cover"
									objectPosition='0 67%'
								></Image>
							</div>
						</div>
						<div className={styles.rightBlock}>
							<header className={styles.loginHeader}>
								<p
									className={isLogin ? styles.isActive : null}
									onClick={() => {
										setIsLogin(true);
										setIsRegistered(false);
									}}
								>
									Login
								</p>
								<p
									className={!isLogin ? styles.isActive : null}
									onClick={() => setIsLogin(false)}
								>
									Register
								</p>
							</header>
							<form onSubmit={handleSubmit}>
								{isLogin ? (
									<>
										<Input type="text" placeholder="Email" />
										<Input type="password" placeholder="Password" />
										<div className={styles.furtherActions}>
											<Link href="/">
												<a>
													<small>Forgot password?</small>
												</a>
											</Link>
											<div className={styles.rememberMe}>
												<Input
													type="checkbox"
													label="Remember me"
													id="Remember me"
												/>
											</div>
										</div>
									</>
								) : (
									<div className={styles.register}>
										{!isRegistered ? (
											<>
												<h3>Still Not Registered?</h3>
												<p>
													Register now to start shopping, we just need you
													e-mail to begin with!
												</p>
												<Input type="text" placeholder="Email *" />
											</>
										) : (
											<>
												<h3>Well Done!</h3>
												<p>
													You’re ready to shop with us. Don’t forget to change
													your password by clicking here: <br />
													<Link href="/">
														<a>Change password</a>
													</Link>
													<br /> <br /> or
												</p>
											</>
										)}
									</div>
								)}

								{!isRegistered ? (
									<Button
										title={isLogin ? "Login" : "Register"}
										type="submit"
									/>
								) : (
									<Link href="/" passHref>
										<a>
											<Button title="Start Shopping Now!" />
										</a>
									</Link>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
