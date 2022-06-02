import classes from '../styles/layout.module.scss';
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
	const router = useRouter();
	return (
		<>
			<header className={classes.header__menu}>
				<div className={classes.menu__body}>
					<Link href="/">
						<div className={classes.logo}>
							<div className={classes.logo__icon}>
								{/* <ExportedImage src='logo.png' width='480' height='506' alt="logo" /> */}
								<ExportedImage src='logo22.png' width='480' height='506' alt="logo" />

								<div className={classes.logo__icon_mini}>
									<ExportedImage src='kapl.png' width='12' height='14' alt="logo2" />
								</div>
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
		</>
	)
}