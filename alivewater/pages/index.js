import Head from 'next/head';
import { Layout } from '../components/Layout';
import classes from '../styles/index.module.scss'
import { motion } from 'framer-motion';
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';

export default function index() {
	return (
		<Layout>
			<Head>
				<title>Главная</title>
			</Head>
			<section className={classes.firstSection}>
				<div className={classes.firstSection__block}>
					<div className={classes.firstSection__index}>
						<motion.div
							className={classes.firstSection__title}
							initial="hidden"
							animate="enter"
							exit="exit"
							variants={variants2}
							transition={{
								duration: 0.7,
								type: 'linear',
								rotate: '50'
							}}
						>Живая Вода</motion.div>
						<motion.div
							className={classes.firstSection__miniTitle}
							initial="hidden"
							animate="enter"
							exit="exit"
							variants={variants}
							transition={{
								duration: 0.7,
								type: 'linear',
								rotate: '50'
							}}
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi corporis quaerat facilis eaque libero quis, placeat, reprehenderit pariatur ab maiores sed a repudiandae, reiciendis aperiam? Ducimus exercitationem architecto suscipit quisquam?
						</motion.div>
					</div>
				</div>
			</section>
			<motion.section
				className={classes.newsSection}
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants}
				transition={{
					duration: 0.7,
					type: 'linear',
					rotate: '50'
				}}
			>
				<div className={classes.title}>
					Новости
				</div>
				<div className={classes.newsBlock__flex}>
					<div className={classes.newsBlock__separator}></div>
					<div className={classes.newsBlock}>
						<div className={classes.newsBlock__row}>
							<div className={classes.newsBlock__news}>
								<div className={classes.newsBlock__title}>
									Заголовок
								</div>
								<div className={classes.newsBlock__text}>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quos ipsum minima excepturi enim nam eveniet porro magni dolorem libero, officia, quaerat cumque suscipit praesentium architecto minus maiores fuga et?
								</div>
							</div>
							<div className={classes.newsBlock__pic}>
								{/* <ExportedImage stc='' alt=''></ExportedImage> */}
							</div>
						</div>
					</div>
					<div className={classes.newsBlock__separator}></div>
				</div>				<div className={classes.newsSection__button_2}>
					<Link href="/news">
						<div className={classes.newsSection__button}>
							Ещё
						</div>
					</Link>
				</div>
			</motion.section>
			<section className={classes.faq__content}>
				<div className={`${classes.faq__title} ${classes.title}`}>
					Часто задаваемые вопросы
				</div>
				<div data-spollers="992,max" className={classes.faq__cards}>
					<div className={classes.faq__qa}>
						<div className={classes.qa__title}>
							Для чего можно использовать воду из аппаратов?
						</div>
						<div className={classes.qa__text}>
							<ol>
								<li>Утолить жажду: воду можно не кипятить!</li>
								<li>Для готовки и приготовления напитков.</li>
								<li>Для аквариумов.</li>
								<li>Для косметического применения.</li>
								<li>Для питья животным.</li>
								<li>
									Для бытовой техники: чайников, кофемашин,
									увлажнителей и утюгов.
								</li>
							</ol>
						</div>
					</div>
					<div className={classes.faq__qa}>
						<div className={classes.qa__title}>
							Есть ли у нас сертификаты на оборудование и воду?</div>
						<div className={classes.qa__text}>
							Да, система фильтров соответствует международным стандартам качества.
							<br></br>
							Кроме того, мы постоянно проводим анализ воды для каждого водомата отдельно.
							<br></br>
							Сертификаты вы можете изучить по <a href="#sertificate" className={classes._popupLink}>ссылке</a>.
						</div>
					</div>
					<div className={classes.faq__qa}>
						<div className={classes.qa__title}>
							Как часто происходит замена фильтров?
						</div>
						<div className={classes.qa__text}>
							Фильтрующие элементы в автомате заменяются согласно определенного регламента.
							<br />
							Частота замены напрямую зависит от объема производимой питьевой воды и качества водопроводной
							воды в вашем районе.
						</div>
					</div>
					<div className={classes.faq__qa}>
						<div className={classes.qa__title}>
							Возможно ли поставить водомат в моем районе?
						</div>
						<div className={classes.qa__text}>
							Да, автоматы подключаются к общему водопроводу и могут быть установлены в любом районе, в
							пешей доступности от Вашего дома.
						</div>
					</div>
					<div className={classes.faq__qa}>
						<div className={classes.qa__title}>
							Как фильтры влияют на вкус воды?
						</div>
						<div className={classes.qa__text}>
							Постфильтры, которые стоят после обратноосмотической мембраны, обеспечивают идеальные
							вкусовые свойства питьевой воды Живая Вода.
							<br />
							А биокерамический картридж восстанавливает структуру воды, улучшает ее
							окислительно-восстановительный потенциал.
						</div>
					</div>
					<div className={classes.faq__qa}>
						<div className={classes.qa__title}>
							Как правильно пользоваться водоматом?
						</div>
						<div className={classes.qa__text}>
							<ol>
								<li>Откройте двери выдачи воды и поставьте емкость.</li>
								<li>Опустите монеты или купюры. В некоторых автоматах имееется безналичный расчет - можно
									использовать карту.</li>
								<li>Нажмите кнопку “Озон”. В течение 10 секунд будет происходить автоматическая
									стерилизация озоном.</li>
								<li>Для получения питьевой воды нажмите кнопку “Старт”</li>
								<li>Получите чистую питьевую воду.</li>
								<li>Во избежании перелива используйте кнопку “Стоп”.
								</li>
							</ol>
						</div>
					</div>
				</div>
			</section >
		</Layout >
	)
}

const variants = {
	hidden: { opacity: 0, x: 0, y: 100 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 200, y: 0 },
}

const variants2 = {
	hidden: { opacity: 0, x: -100, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 100, y: 0 },
}