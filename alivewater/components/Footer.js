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
										width={0}
										height={0}
										alt="logo"
										priority
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
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
						<div
							className={classes.fSection__inn_flex}
							onClick={() => setShowModal()}
						>
							<div className={classes.fSection__inn}>
								ИП <p>Полякова В. В.</p>
							</div>
							<div className={classes.fSection__inn}>
								ИНН: <p>543005844122</p>
							</div>
						</div>
					</div>
					<div className={classes.sSection}>
						<div className={classes.sSection__row}>
							<div className={classes.sSection__link__row}>
								<div className={classes.sSection__link}>
									<Link href="/">
										<div>Главная</div>
									</Link>
								</div>
								<div className={classes.sSection__link}>
									<Link href="/news">
										<div>Новости</div>
									</Link>
								</div>
								<div className={classes.sSection__link}>
									<Link href="/waterpumps">
										<div>Водоматы</div>
									</Link>
								</div>
							</div>
							<div className={classes.sSection__link__row}>
								<div className={classes.sSection__link}>
									<Link href="/analyzes">
										<div>Анализы</div>
									</Link>
								</div>
								<div className={classes.sSection__link}>
									<Link href="/contacts">
										<div>Контакты</div>
									</Link>
								</div>
								<div className={classes.sSection__link__hide}></div>
							</div>
						</div>
					</div>
					<div className={classes.tSection}>
						<div className={classes.tSection__contacts}>
							<div className={classes.tSection__contact}>
								<Link
									href="https://vk.com/alivewaternsk"
									target="_blank"
								>
									<div>
										<Image
											loader={myLoader}
											src="/icons/vkWhite.webp"
											width={0}
											height={0}
											alt="vk"
											priority
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
										/>
									</div>
								</Link>
							</div>
							<div className={classes.tSection__contact}>
								<Link
									href="https://ok.ru/profile/580408735701"
									target="_blank"
								>
									<div>
										<Image
											loader={myLoader}
											src="icons/odWhite.webp"
											width={0}
											height={0}
											alt="od"
											priority
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
										/>
									</div>
								</Link>
							</div>
							<div className={classes.tSection__contact}>
								<Link href="https://wa.me/79134531010" target="_blank">
									<div>
										<Image
											loader={myLoader}
											src="icons/waWhite.webp"
											width={0}
											height={0}
											alt="wa"
											priority
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
										/>
									</div>
								</Link>
							</div>
						</div>
						<div className={classes.tSection__email}>
							Email:{" "}
							<Link href="mailto:zhivaya@voda54.ru.ru">
								<i>zhivaya@voda54.ru</i>
							</Link>
						</div>
						<div className={classes.tSection__phone}>
							Телефон:{" "}
							<Link href="tel:+79537641000">
								<i>+7 (953) 764-10-00</i>
							</Link>
						</div>
						<div
							className={classes.fSection__inn_flex}
							onClick={() => setShowModal()}
						>
							<div className={classes.fSection__inn_hide}>
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
