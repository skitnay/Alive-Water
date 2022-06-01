import classes from '../styles/layout.module.scss';
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import { motion } from 'framer-motion'
import { useRouter } from 'next/router';


export function Layout({ children }) {
	const router = useRouter();
	return (
		<>
			<header className={classes.header__menu}>
				<div className={classes.menu__body}>
					<Link href="/">
						<div className={classes.logo}>
							<div className={classes.logo__icon}>
								<ExportedImage src='logo.png' width='480' height='506' alt="logo" />
							</div>
							<div className={classes.logo__drop}>
								<div className={classes.logo__title}>ЖИВАЯ ВОДА</div>
								<div className={classes.logo__titleMini}>Новосибирск</div>
							</div>
						</div>
					</Link>
					<ul className={classes.menu__list}>
						<li><Link href="/" ><a className={`${router.pathname == "/" ? "active" : ""} ${classes.menu__link}`}>Главная</a></Link></li>
						<li><Link href="/news"><a className={`${router.pathname == "/news" ? "active" : ""} ${classes.menu__link}`}>Новости</a></Link></li>
						<li><Link href="/waterpumps"><a className={`${router.pathname == "/waterpumps" ? "active" : ""} ${classes.menu__link}`}>Водоматы</a></Link></li>
						<li><Link href="/contacts"><a className={`${router.pathname == "/contacts" ? "active" : ""} ${classes.menu__link}`}>Контакты</a></Link></li>
					</ul>
				</div>
			</header >
			<motion.main
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants}
				transition={{
					duration: 0.4,
					type: 'linear'
				}}
			>
				{children}
			</motion.main>
			<motion.footer className={classes.footer__menu}>
				<div className={classes.footer__menu__row}>
					<div className={classes.fSection}>
						<Link href="/">
							<div className={classes.fSection__logo}>
								<div className={classes.fSection__icon}>
									<ExportedImage src='logo2.png' width='480' height='506' alt="logo" />
								</div>
								<div className={classes.fSection__drop}>
									<div className={classes.fSection__title}>ЖИВАЯ ВОДА</div>
									<div className={classes.fSection__miniTitle}>Новосибирск</div>
								</div>
							</div>
						</Link>
						<div className={classes.fSection__inn}>ИНН:123123131313211</div>
						<div className={classes.fSection__inn}>ИНН:123123131313211</div>
					</div>
					<div className={classes.sSection}>
						<div className={classes.sSection__row}>
							<div className={classes.sSection__link__row}>
								<div className={classes.sSection__link}><Link href="/"><a>Главная</a></Link></div>
								<div className={classes.sSection__link}><Link href="/news"><a>Новости</a></Link></div>
								<div className={classes.sSection__link}><Link href="/waterpumps"><a>Водоматы</a></Link></div>
							</div>
							<div className={classes.sSection__link__row}>
								<div className={classes.sSection__link}><Link href="/waterpumps"><a>Сертификаты</a></Link></div>
								<div className={classes.sSection__link}><Link href="/contacts"><a>Контакты</a></Link></div>
								<div className={classes.sSection__link__hide}></div>
							</div>
						</div>
					</div>
					<div className={classes.tSection}>
						<div className={classes.tSection__contacts}>
							<div className={classes.tSection__contact}>
								<Link href='#'><ExportedImage src="/vkontakte1.png" width={30} height={30} alt='vk' /></Link>
							</div>
							<div className={classes.tSection__contact}>
								<Link href='#'><ExportedImage src="/odnoklassniki1.png" width={30} height={30} alt='od' /></Link>
							</div>
							<div className={classes.tSection__contact}>
								<Link href="#"><ExportedImage src="/whatsapp1.png" width={30} height={30} alt='wa' /></Link>
							</div>
						</div>
						<div className={classes.tSection__email}>
							Email: alivewater54@gmail.com
						</div>
						<div className={classes.tSection__phone}>
							Телефон: +7-913-453-10-10
						</div>
					</div>
				</div>
			</motion.footer>
		</>
	)
}

const variants = {
	hidden: { opacity: 0, x: 0, y: 200 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 300, y: 0 },
}