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
								duration: 0.5,
								type: 'linear',
							}}
						>Живая Вода</motion.div>
						<motion.div
							className={classes.firstSection__miniTitle}
							initial="hidden"
							animate="enter"
							exit="exit"
							variants={variants}
							transition={{
								duration: 0.5,
								type: 'linear',
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
					duration: 0.5,
					type: 'linear',
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
							<p>Кроме того, мы постоянно проводим анализ воды для каждого водомата отдельно.</p>
							Сертификаты вы можете изучить по ссылке
						</div>
					</div>
					<div className={classes.faq__qa}>
						<div className={classes.qa__title}>
							Как часто происходит замена фильтров?
						</div>
						<div className={classes.qa__text}>
							Фильтрующие элементы в автомате заменяются согласно определенного регламента.
							<p>
								Частота замены напрямую зависит от объема производимой питьевой воды и качества водопроводной
								воды в вашем районе.
							</p>
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
							<p>
								А биокерамический картридж восстанавливает структуру воды, улучшает ее
								окислительно-восстановительный потенциал.
							</p>
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
			<section className={classes.advantage__content}>
				<div className={classes.title}>
					Наши преимущества
				</div>
				<div className={classes.advantage__miniTitle}>
					Самая чистая и полезная вода, которую можно использовать для любых нужд.
				</div>
				<div className={classes.advantage__flex}>
					<div className={classes.advantage__column}>
						<div className={classes.advantage__card}>
							<div className={classes.advantage__text}>
								<div className={classes.advantage__card_title}>
									Вода высшей питьевой категории
								</div>
								<div className={classes.advantage__card_text}>
									Мы используем самые современные промышленные системы очистки воды, позволяющие получать
									воду премиум класса, обогащенную необходимым количеством солей и минералов.
								</div>
							</div>
							<div className={classes.advantage__card_pic}>
								<ExportedImage src='/badge.png' width={103} height={100} />
							</div>
						</div>
						<div className={classes.advantage__card}>
							<div className={classes.advantage__text}>
								<div className={classes.advantage__card_title}>
									Вода в 5 раз дешевле
								</div>
								<div className={classes.advantage__card_text}>
									Покупать воду в розлив значительно дешевле чем в пластиковых бутылках.
									Зачем снова и снова платить за пластиковые бутылки? Ведь стоимость тары может составлять до 80% от общей стоимости.
								</div>
							</div>
							<div className={classes.advantage__card_pic}>
								<ExportedImage src='/ruble.png' width={103} height={100} />
							</div>
						</div>
					</div>
					<div className={classes.advantage__column}>
						<div className={classes.advantage__card}>
							<div className={classes.advantage__text}>
								<div className={classes.advantage__card_title}>
									Забота об окружающей среде
								</div>
								<div className={classes.advantage__card_text}>
									Каждую минуту в мире производятся 1 миллион одноразовых пластиковых бутылок.
									Отказавшись от покупки воды в пластиковой таре, вы поможете бороться с загрязнением окружающей среды.
								</div>
							</div>
							<div className={classes.advantage__card_pic}>
								<ExportedImage src='/forest.png' width={103} height={100} />
							</div>
						</div>
						<div className={classes.advantage__card}>
							<div className={classes.advantage__text}>
								<div className={classes.advantage__card_title}>
									Аппараты питьевой воды - это удобно
								</div>
								<div className={classes.advantage__card_text}>
									Больше нет необходимости стоять в очереди в
									супермаркете для того чтобы купить воды или
									несколько дней ждать доставки в офис или домой.
									Водоматы удобно расположены, а налить воду в них очень легко и быстро.
								</div>
							</div>
							<div className={classes.advantage__card_pic}>
								<ExportedImage src='/clock.png' width={100} height={100} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={classes.price}>
				<div className={classes.title}>
					Стоимость
				</div>
				<div className={classes.price__subtitle}>
					Чистая питьевая вода - товар первой необходимости.
					Пейте больше воды, готовьте вкусные блюда. Возьмите воду с собой!
				</div>
				<div className={classes.price__content}>
					<div className={classes.price__flex}>
						<div className={classes.price__flex_pic}>
							<ExportedImage src='/bottle.png' width={208} height={208} />
						</div>
						<div className={classes.price__flex_title}>
							1 ЛИТР - <p>3 РУБЛЯ</p>
						</div>
						<div className={classes.price__flex_subtitle}>
							На тренеровку или прогулку
						</div>
					</div>
					<div className={classes.price__flex}>
						<div className={classes.price__flex_pic}>
							<ExportedImage src='/bottle2.png' width={208} height={208} />
						</div>
						<div className={classes.price__flex_title}>
							5 ЛИТРОВ - <p>15 РУБЛЕЙ</p>
						</div>
						<div className={classes.price__flex_subtitle}>
							В дорогу или на пикник
						</div>
					</div>
					<div className={classes.price__flex}>
						<div className={classes.price__flex_pic}>
							<ExportedImage src='/bottle3.png' width={208} height={208} />
						</div>
						<div className={classes.price__flex_title}>
							19 ЛИТРОВ - <p>57 РУБЛЕЙ</p>
						</div>
						<div className={classes.price__flex_subtitle}>
							Домой или в офис
						</div>
					</div>
				</div>
			</section>
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