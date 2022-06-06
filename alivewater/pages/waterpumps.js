import { Layout } from '../components/Layout';
import Head from 'next/dist/shared/lib/head';
import classes from '../styles/index.module.scss';
import { motion } from 'framer-motion';
import ExportedImage from "next-image-export-optimizer";

export default function waterpumps() {
	return (
		<Layout>
			<Head>
				<title>Водоматы</title>
			</Head>
			<section className={classes.cleaner}>
				<motion.div className={classes.title}
					initial="hidden"
					animate="enter"
					exit="exit"
					variants={variants2}
					transition={{
						duration: 0.3,
						type: 'linear'
					}}>
					Многоступенчатая очистка
				</motion.div>
				<motion.div className={classes.cleaner__flex}
					animate="enter"
					exit="exit"
					variants={variants}
					transition={{
						duration: 0.8,
						type: 'linear'
					}}>
					<div className={classes.cleaner__text}>
						В наших автоматах используется самая современная многоступенчатая система очистки. Аналогичные используется при производстве бутилированной воды. С разницей лишь в объемах. Фактически, каждый водомат «Живая вода» является мини-заводом по производству питьевой воды первой категории.
					</div>
					<div className={classes.cleaner__video}>
						<div>
							<video style={{ width: '500px', height: '281px' }} controls poster='/logo3.png'>
								<source src="/IMG_4961.mov" />
							</video>
						</div>
					</div>
				</motion.div>
				<div className={classes.cleaner__degree}>
					<div className={classes.cleaner__degree_flex}>
						<div>
							<ExportedImage src='/First.svg' width={95} height={88} />
						</div>
						<div>
							<ExportedImage src='/Second.svg' width={84} height={109} />
						</div>
						<div>
							<ExportedImage src='/Third.svg' width={106} height={109} />
						</div>
						<div>
							<ExportedImage src='/Four.svg' width={84} height={89} />
						</div>
						<div>
							<ExportedImage src='/Five.svg' width={113} height={91} />
						</div>
					</div>
					<div className={classes.cleaner__degree_flex}>
						<div>
							<ExportedImage src='/Six.svg' width={85} height={93} />
						</div>
						<div>
							<ExportedImage src='/Seven.svg' width={84} height={91} />
						</div>
						<div>
							<ExportedImage src='/Eight.svg' width={100} height={112} />
						</div>
						<div>
							<ExportedImage src='/Nine.svg' width={120} height={103} />
						</div>
						<div>
							<ExportedImage src='/Ten.svg' width={88} height={98} />
						</div>
					</div>
				</div>
			</section>
			<section className={classes.waterpumps}>
				<div className={classes.title}>
					Водоматы
				</div>
				<div className={classes.waterpumps__content}>
					<div className={classes.waterpumps__flex}>
						<div className={classes.waterpumps__pic}>
							<ExportedImage src="/500.png" width={449} height={319} />
						</div>
						<div className={classes.waterpumps__text}>
							«Живая вода» – это надёжные автоматы питьевой воды, которые могут устанавливаться как на улице, так и в помещении.

							<p>Система очистки аппарата задерживает минеральные и органические примеси, вирусы, бактерии, железо, тяжелые металлы, соли жесткости и пр., в том числе и ржавчину из труб, по которым вода течет в ваши квартиры.</p>
						</div>
					</div>
					<div className={classes.waterpumps__flex}>
						<div className={classes.waterpumps__text}>
							<p>Вода в аппарате обогащается специальным минерализатором до низкого уровня минерализации.</p>

							Низкий уровень минералов в воде ежедневного потребления приносит пользу здоровью, поскольку не увеличивает угрозу сердечно-сосудистых заболеваний (кальцификация сосудов), заболеваний пищеварительной, выделительной системы (камни в почках, желчном пузыре) и т.п.
						</div>
						<div className={classes.waterpumps__pic}>
							<ExportedImage src='/400.png' width={350} height={350} />
						</div>
					</div>
				</div>
			</section>
			<section className={classes.howtouse}>
				<div className={classes.title}>
					Как купить воду через QR-КОД
				</div>
				<div className={classes.howtouse__content}>
					<div className={classes.howtouse__flex}>
						<div className={classes.howtouse__video}>
							<div>
								<video style={{ width: '300px', height: '533px' }} controls muted poster='/logo3.png'>
									<source src="/IMG_4730.MP4" />
								</video>
							</div>
						</div>
						<div >
							<ol className={classes.howtouse__list}>
								<li>Поставьте ёмкость в камеру розлива</li>
								<li>Для оплаты, наведите камеру на QR-код смартфоном</li>
								<li>Укажите сумму покупки и нажмите «Продолжить»</li>
								<li>Выберете СБП и нажмите «Продолжить»</li>
								<li>Откроется приложение банка. Нажмите «Оплатить»</li>
								<li>Нажмите на кнопку «Старт» на аппарате</li>
								<li>Дождитесь загрузки баланса на водомат</li>
								<li>Снова нажмите кнопку «Старт» для подачи воды</li>
							</ol>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
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