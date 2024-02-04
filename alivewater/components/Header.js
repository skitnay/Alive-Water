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
									alt="logo"
									priority
									width={0}
									height={0}
									sizes="100vw"
									style={{ width: '100%', height: 'auto' }}
								/>
								<div className={classes.logo__icon_mini}>
									<Image
										loader={myLoader}
										src="logo/kapl.webp"
										alt="logo2"
										priority
										width={12}
										height={14}
										sizes="100vw"
										style={{ width: '100%', height: 'auto' }}
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
								<div
									className={`${
										router.pathname == "/" ? "active" : ""
									} ${classes.menu__link}`}
								>
									Главная
								</div>
							</Link>
						</li>
						<li>
							<Link href="/analyzes">
								<div
									className={`${
										router.pathname == "/analyzes" ? "active" : ""
									} ${classes.menu__link}`}
								>
									Анализы Воды
								</div>
							</Link>
						</li>
						<li>
							<Link href="/waterpumps">
								<div
									className={`${
										router.pathname == "/waterpumps" ? "active" : ""
									} ${classes.menu__link}`}
								>
									Водоматы
								</div>
							</Link>
						</li>
						<li>
							<Link href="/contacts">
								<div
									className={`${
										router.pathname == "/contacts" ? "active" : ""
									} ${classes.menu__link}`}
								>
									Контакты
								</div>
							</Link>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}
