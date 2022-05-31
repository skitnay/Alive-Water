import '../styles/layout.module.scss';
import classes from '../styles/layout.module.scss';
import Image from 'next/image';
import logo2 from '../img/Icon/logo2.png';
import Link from 'next/link';

export function Layout({ children }) {
	return (
		<>
			<div className={classes.header__menu}>
				<div className={classes.menu__body}>
					<div className={classes.logo}>
						<div className={classes.logo__icon}>
							<Image src={logo2} alt="logo" />
						</div>
						<div className={classes.logo__drop}>
							<div className={classes.logo__title}>ЖИВАЯ ВОДА</div>
							<div className={classes.logo__titleMini}>Новосибирск</div>
						</div>
					</div>
					<ul className={classes.menu__list}>
						<li><Link href="/" ><a className={classes.menu__link}>Главная</a></Link></li>
						<li><Link href="/news"><a className={classes.menu__link}>Новости</a></Link></li>
						<li><Link href="/waterpumps"><a className={classes.menu__link}>Водоматы</a></Link></li>
						<li><Link href="/contacts"><a className={classes.menu__link}>Контакты</a></Link></li>
					</ul>
				</div>
			</div >
			<main>
				{children}
			</main>
			<footer>
				<div className={classes.header__menu}>
					<div className={classes.menu__body}>
						<div className={classes.logo}>
							<div className={classes.logo__icon}>
								<Image src={logo2} alt="logo" /></div>
							<div className={classes.logo__drop}>
								<div className={classes.logo__title}>ЖИВАЯ ВОДА</div>
								<div className={classes.logo__titleMini}>Новосибирск</div>
							</div>
						</div>
						<ul className={classes.menu__list}>
							<li><Link href="/" ><a className={classes.menu__link}>Главная</a></Link></li>
							<li><Link href="/news"><a className={classes.menu__link}>Новости</a></Link></li>
							<li><Link href="/waterpumps"><a className={classes.menu__link}>Водоматы</a></Link></li>
							<li><Link href="/contacts"><a className={classes.menu__link}>Контакты</a></Link></li>
						</ul>
					</div>
				</div >
			</footer>
		</>
	)
}