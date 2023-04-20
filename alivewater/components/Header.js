import classes from "../styles/layout.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const myLoader = ({ src, width, quality }) => {
	return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export function Header() {
	const router = useRouter();
	return (
		<>
			<header className={classes.header__menu}>
				<div className={classes.menu__body}>
					<Link href="/">
						<div className={classes.logo}>
							<div className={classes.logo__icon}>
								<Image
									loader={myLoader}
									src="logo/logo22.webp"
									width="480"
									height="506"
									alt="logo"
									priority
								/>
								<div className={classes.logo__icon_mini}>
									<Image
										loader={myLoader}
										src="logo/kapl.webp"
										width="12"
										height="14"
										alt="logo2"
										priority
									/>
								</div>
							</div>
							<div className={classes.logo__drop}>
								<div className={classes.logo__title}>ЖИВАЯ ВОДА</div>
								<div className={classes.logo__titleMini}>
									Новосибирск
								</div>
							</div>
						</div>
					</Link>
					<ul className={classes.menu__list}>
						<li>
							<Link href="/">
								<a
									className={`${
										router.pathname == "/" ? "active" : ""
									} ${classes.menu__link}`}
								>
									Главная
								</a>
							</Link>
						</li>
						<li>
							<Link href="/analyzes">
								<a
									className={`${
										router.pathname == "/analyzes" ? "active" : ""
									} ${classes.menu__link}`}
								>
									Анализы Воды
								</a>
							</Link>
						</li>
						<li>
							<Link href="/waterpumps">
								<a
									className={`${
										router.pathname == "/waterpumps" ? "active" : ""
									} ${classes.menu__link}`}
								>
									Водоматы
								</a>
							</Link>
						</li>
						<li>
							<Link href="/contacts">
								<a
									className={`${
										router.pathname == "/contacts" ? "active" : ""
									} ${classes.menu__link}`}
								>
									Контакты
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}
