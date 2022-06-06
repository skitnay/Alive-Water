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
			<motion.div
				className={classes.title}
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants2}
				transition={{
					duration: 0.5,
					type: 'linear'
				}}
			>
				О нас
			</motion.div>
			<motion.div
				className={classes.about__content}
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants}
				transition={{
					duration: 0.8,
					type: 'linear'
				}}
			>
				<div className={classes.about__pic}>
					<ExportedImage src="/recycle.png" width={448} height={422} alt="" />
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
			</motion.div>
		</section>
		<section className={classes.map}>
			<div className={classes.title}>
				Наши водоматы
			</div>
			<div className={classes.map__content}>
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
				<div className={classes.map__map}>
					<Link href="https://2gis.ru/novosibirsk/branches/70000001038983235?m=83.064884%2C55.055966%2F9.68"><a target="_blank"><ExportedImage src='/map.png' width={1400} height={1146} /></a></Link>
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