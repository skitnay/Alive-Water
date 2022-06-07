import { Layout } from '../components/Layout';
import Head from 'next/dist/shared/lib/head';
import classes from '../styles/index.module.scss';
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/dist/client/link';
import { motion } from 'framer-motion';

export default function contacts() {
	return <Layout>
		<Head>
			<title>Контакты</title>
		</Head>
		<section className={classes.about}>
			<motion.div className={classes.title}
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants2}
				transition={{
					duration: 0.5,
					type: 'linear'
				}}>
				Контакты
			</motion.div>
			<motion.div className={classes.contacts__content}
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants}
				transition={{
					duration: 0.8,
					type: 'linear'
				}}>
				<div className={classes.contacts__contact}>
					<div className={classes.contacts__title}>Мы в</div>
					<div className={classes.contacts__social}>
						<div className={classes.contacts__vk}>
							<Link href="https://vk.com/alivewaternsk"><a target="_blank"><ExportedImage src='/vk.png' width={45} height={45} alt='' /></a></Link>
						</div>
						<div className={classes.contacts__od}>
							<Link href="https://ok.ru/profile/580408735701"><a target="_blank"><ExportedImage src='/od.png' width={45} height={45} alt='' /></a></Link>
						</div>
						<div className={classes.contacts__wa}>
							<Link href="https://wa.me/79134531010"><a target="_blank"><ExportedImage src='/wa.png' width={45} height={45} alt='' /></a></Link>
						</div>
						<div className={classes.contacts__2gis}>
							<Link href="https://2gis.ru/novosibirsk/branches/70000001038983235?m=83.064884%2C55.055966%2F9.68"><a target="_blank"><ExportedImage src='/2gis.png' width={100} height={45} alt='' /></a></Link>
						</div>
					</div>
				</div>
				<div className={classes.contacts__contact}>
					<div className={classes.contacts__title}>
						Телефон </div><p><Link href="tel:+7-913-453-10-10"><a>
							+7-913-453-10-10</a></Link></p>
				</div>
				<div className={classes.contacts__contact}>
					<div className={classes.contacts__title}>
						Email </div><p><Link href="mailto:novosibirsk@alivewater54.ru"><a>novosibirsk@alivewater54.ru</a></Link></p>
				</div>
			</motion.div>
		</section>
		{/* <motion.section className={classes.about}
			initial="hidden"
			animate="enter"
			exit="exit"
			variants={variants}
			transition={{
				duration: 0.8,
				type: 'linear'
			}}
		>
			<div className={classes.title}>
				О нас
			</div>
			<div className={classes.about__content}>
				<div className={classes.about__pic}>
					<ExportedExportedImage src="/recycle.png" width={448} height={422} alt="" />
				</div>
				<div className={classes.about__text}>
					<p>
						Как известно, вода — источник всего живого.
						А организм человека на 70% состоит из воды — она обязательное вещество для нас, ее недостаток
						может привести к обезвоживанию и отекам.
					</p>
					<p>
						Мы продаем чистую воду на розлив для того, чтобы сделать каждого более здоровым и бороться с
						загрязнением пластиком
						окружающей среды. Ведь каждую пластиковую бутылку можно наполнить водой множество раз.
					</p>
					<p>Так зачем снова и снова покупать пластик?</p>
					<span>Покупай воду,
						а не бутылки!</span>
				</div>
			</div>
		</motion.section> */}
		<section className={classes.map}>
			<div className={classes.title}>
				Наши водоматы
			</div>
			<div className={classes.map__content}>
				<div className={classes.map__map}>
					<Link href="https://2gis.ru/novosibirsk/branches/70000001038983235?m=83.064884%2C55.055966%2F9.68"><a target="_blank"><ExportedImage src='/map.png' width={1400} height={1146} /></a></Link>
				</div>
				<div>
					<div className={classes.title}>
						Адреса
					</div>
					<div className={classes.map__flex}>
						<div className={classes.map__adress}>
							<div className={classes.map__title}>
								Большая, (582/2)
							</div>
							<div className={classes.map__subtitle}>
								Ленинский район, Новосибирск
							</div>
						</div>
						<div className={classes.map__adress}>
							<div className={classes.map__title}>
								Микрорайон Олимпийской Славы, 1
							</div>
							<div className={classes.map__subtitle}>
								с. Каменка
							</div>
						</div>
						<div className={classes.map__adress}>
							<div className={classes.map__title}>
								Микрорайон, 2
							</div>
							<div className={classes.map__subtitle}>
								с. Криводановка
							</div>
						</div>
						<div className={classes.map__adress}>
							<div className={classes.map__title}>
								Согласия, 4
							</div>
							<div className={classes.map__subtitle}>
								пос. Октябрьский, Мошковский район
							</div>
						</div>
						<div className={classes.map__adress}>
							<div className={classes.map__title}>
								Есенина, 28
							</div>
							<div className={classes.map__subtitle}>
								с. Прокудское, Коченевский район
							</div>
						</div>
						<div className={classes.map__adress}>
							<div className={classes.map__title}>
								Октябрьская, 7 к1
							</div>
							<div className={classes.map__subtitle}>
								пос. Октябрьский, Мошковский район
							</div>
						</div>
						<div className={classes.map__adress}>
							<div className={classes.map__title}>
								Локтинская, 14
							</div>
							<div className={classes.map__subtitle}>
								пос. Октябрьский, Мошковский район
							</div>
						</div>
						<div className={classes.map__adress}>
							<div className={classes.map__title}>
								Центральная, 21
							</div>
							<div className={classes.map__subtitle}>
								пос. Барлакский, Мошковский район
							</div>
						</div>
						<div className={classes.map__adress}>
							<div className={classes.map__title}>
								Проспект Ленина, 2
							</div>
							<div className={classes.map__subtitle}>
								рп. Ордынское, Ордынский район
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
}

const variants = {
	hidden: { opacity: 0, x: 0, y: 100 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 200, y: 0 },
}

const variants2 = {
	hidden: { opacity: 0, x: -50, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 100, y: 0 },
}