import { Layout } from '../components/Layout';
import Head from 'next/dist/shared/lib/head';
import classes from '../styles/index.module.scss';
import { motion } from 'framer-motion';
import ExportedImage from "next-image-export-optimizer";
import News from '../components/New';


export default function About() {
	return <Layout>
		<Head>
			<title>Новости</title>
		</Head>
		<section className={classes.newsSection}>
			<motion.div
				className={classes.title}
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants2}
				transition={{
					duration: 0.5,
					type: 'linear'
				}}>
				Новости
			</motion.div>
			<motion.div
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants}
				transition={{
					duration: 0.8,
					type: 'linear'
				}}>
				<News />
				<div className={classes.newsBlock__flex}>
					<div className={classes.newsBlock__separator}></div>
					<div className={classes.newsBlock}>
						<div className={classes.newsBlock__row}>
							<div className={classes.newsBlock__news}>
								<div className={classes.newsBlock__title_block}>
									<div className={classes.newsBlock__title}>
										Подорожание бутилированной воды в магазинах
									</div>
									<div className={classes.newsBlock__date}>
										20/03/2022
									</div>
								</div>
								<div className={classes.newsBlock__text}>
									В магазинах на 7 марта 2022 года стоимость негазированной воды объемом 1,5 литра повысилась на 17 рублей. Кроме того, с декабря по март на 60 рублей подорожали бутыли объемом 18,9 л, которые обычно заказывают в офис. По словам руководителей предприятий, сама вода не подорожала, однако стоимость сырья – пластика, упаковки, крышек, полиэтилена – за месяц подскочила на 70%.

									Мы предлагаем не платить за упаковку - покупать только чистую воду, а не бутылки!
								</div>
							</div>
							<div className={classes.newsBlock__pic}>
								<ExportedImage src='/photo_2022-06-06_18-29-40.jpg' alt='' width={343} height={190}></ExportedImage>
							</div>
						</div>
					</div>
					<div className={classes.newsBlock__separator}></div>
				</div>
				<div className={classes.newsBlock__flex}>
					<div className={classes.newsBlock__separator}></div>
					<div className={classes.newsBlock}>
						<div className={classes.newsBlock__row}>
							<div className={classes.newsBlock__news}>
								<div className={classes.newsBlock__title_block}>
									<div className={classes.newsBlock__title}>
										Новый водомат в селе Прокудское.
									</div>
									<div className={classes.newsBlock__date}>
										18/02/2022
									</div>
								</div>
								<div className={classes.newsBlock__text}>
									Недавно мы писали о проблеме с водой в селе Прокудском. Как только услышали, сразу оптимизировали свою работу и готовы делиться хорошей новостью! Теперь в Прокудском стоит наш аппарат по продаже чистой воды. Покупать воду из водомата выгоднее, удобнее и экологичнее, чем закупать бутилированную воду в магазине, а в таких условиях - это настоящее спасение. 💧

									Аппарат находится по адресу: ул.Есенина,28
								</div>
							</div>
							<div className={classes.newsBlock__pic}>
								<ExportedImage src='/waterp.jpg' alt='' width={343} height={190}></ExportedImage>
							</div>
						</div>
					</div>
					<div className={classes.newsBlock__separator}></div>
				</div>
				<div className={classes.newsBlock__flex}>
					<div className={classes.newsBlock__separator}></div>
					<div className={classes.newsBlock}>
						<div className={classes.newsBlock__row}>
							<div className={classes.newsBlock__news}>
								<div className={classes.newsBlock__title_block}>
									<div className={classes.newsBlock__title}>
										Вода из под крана, которой даже руки не помыть!
									</div>
									<div className={classes.newsBlock__date}>
										25/01/2022
									</div>
								</div>
								<div className={classes.newsBlock__text}>
									Сегодня в новостях мы увидели, что жители села Прокудское мучаются от отсутствия чистой воды в кранах. Вода бывает, но вот что поделать с ярко-голубой или оранжевой жидкостью сложно придумать. Чтобы приготовить пищу или постирать белье, большинство жителей едут за водой за несколько километров в соседний Чик! Такого нельзя допускать! Постараемся помочь жителям и установить в селе наш водомат, а если потребуется, то и несколько.
								</div>
							</div>
							<div className={classes.newsBlock__pic}>
								<ExportedImage src='/e5541be6897f6aa20ec5420d93a7826b.jpg' alt='' width={343} height={190}></ExportedImage>
							</div>
						</div>
					</div>
					<div className={classes.newsBlock__separator}></div>
				</div>
			</motion.div>
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