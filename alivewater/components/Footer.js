import classes from '../styles/layout.module.scss';
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';

export function Footer() {
	return <>
		<footer className={classes.footer__menu}>
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
					<div className={classes.fSection__inn}>ИНН: <p>123123131313211</p></div>
					<div className={classes.fSection__inn}>ИНН: <p>123123131313211</p></div>
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
							<Link href='https://vk.com/alivewaternsk'><a target='_blank'><ExportedImage src="/vkontakte1.png" width={40} height={40} alt='vk' /></a></Link>
						</div>
						<div className={classes.tSection__contact}>
							<Link href='https://ok.ru/profile/580408735701'><a target='_blank'><ExportedImage src="/odnoklassniki1.png" width={40} height={40} alt='od' /></a></Link>
						</div>
						<div className={classes.tSection__contact}>
							<Link href='https://wa.me/79134531010'><a target='_blank'><ExportedImage src="/whatsapp1.png" width={40} height={40} alt='wa' /></a></Link>
						</div>
					</div>
					<div className={classes.tSection__email}>
						Email: <Link href='mailto:novosibirsk@alivewater54.ru'><a>novosibirsk@alivewater54.ru</a></Link>
					</div>
					<div className={classes.tSection__phone}>
						Телефон: <Link href='tel:+79134531010"'><a>+7-913-453-10-10</a></Link>
					</div>
				</div>
			</div>
		</footer>
	</>
}