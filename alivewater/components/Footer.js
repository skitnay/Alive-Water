import classes from "../styles/layout.module.scss";
import Link from "next/link";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
	return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export function Footer({ setShowModal }) {
	return (
		<>
			<footer className={classes.footer__menu}>
				<div className={classes.footer__menu__row}>
					<div className={classes.fSection}>
						<Link href="/">
							<div className={classes.fSection__logo}>
								<div className={classes.fSection__icon}>
									<Image
										loader={myLoader}
										src="logo/logoWhite.webp"
										width="480"
										height="506"
										alt="logo"
										priority
									/>
								</div>
								<div className={classes.fSection__drop}>
									<div className={classes.fSection__title}>
										ЖИВАЯ ВОДА
									</div>
									<div className={classes.fSection__miniTitle}>
										Новосибирск
									</div>
								</div>
							</div>
						</Link>
						<div className={classes.fSection__inn_flex} onClick={() => setShowModal()}>
							<div className={classes.fSection__inn} >
								ИП <p>Полякова В. В.</p>
							</div>
							<div className={classes.fSection__inn} >
								ИНН: <p>543005844122</p>
							</div>
						</div>
					</div>
					<div className={classes.sSection}>
						<div className={classes.sSection__row}>
							<div className={classes.sSection__link__row}>
								<div className={classes.sSection__link}>
									<Link href="/">
										<a>Главная</a>
									</Link>
								</div>
								<div className={classes.sSection__link}>
									<Link href="/news">
										<a>Новости</a>
									</Link>
								</div>
								<div className={classes.sSection__link}>
									<Link href="/waterpumps">
										<a>Водоматы</a>
									</Link>
								</div>
							</div>
							<div className={classes.sSection__link__row}>
								<div className={classes.sSection__link}>
									<Link href="/analyzes">
										<a>Анализы</a>
									</Link>
								</div>
								<div className={classes.sSection__link}>
									<Link href="/contacts">
										<a>Контакты</a>
									</Link>
								</div>
								<div className={classes.sSection__link__hide}></div>
							</div>
						</div>
					</div>
					<div className={classes.tSection}>
						<div className={classes.tSection__contacts}>
							<div className={classes.tSection__contact}>
								<Link href="https://vk.com/alivewaternsk">
									<a target="_blank">
										<Image
											loader={myLoader}
											src="/icons/vkWhite.webp"
											width={40}
											height={40}
											alt="vk"
											priority
										/>
									</a>
								</Link>
							</div>
							<div className={classes.tSection__contact}>
								<Link href="https://ok.ru/profile/580408735701">
									<a target="_blank">
										<Image
											loader={myLoader}
											src="icons/odWhite.webp"
											width={40}
											height={40}
											alt="od"
											priority
										/>
									</a>
								</Link>
							</div>
							<div className={classes.tSection__contact}>
								<Link href="https://wa.me/79134531010">
									<a target="_blank">
										<Image
											loader={myLoader}
											src="icons/waWhite.webp"
											width={40}
											height={40}
											alt="wa"
											priority
										/>
									</a>
								</Link>
							</div>
						</div>
						<div className={classes.tSection__email}>
							Email:{" "}
							<Link href="mailto:zhivaya@voda54.ru.ru">
								<a>zhivaya@voda54.ru</a>
							</Link>
						</div>
						<div className={classes.tSection__phone}>
							Телефон:{" "}
							<Link href="tel:+79537641000">
								<a>+7 (953) 764-10-00</a>
							</Link>
						</div>
						<div className={classes.fSection__inn_flex} onClick={() => setShowModal()}>
							<div className={classes.fSection__inn_hide} >
								ИП <p>Полякова В. В.</p>
							</div>
							<div className={classes.fSection__inn_hide}>
								ИНН: <p>543005844122</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
