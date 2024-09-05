import { Layout } from "../components/Layout";
import Head from "next/dist/shared/lib/head";
import classes from "../styles/index.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Map from "../components/Waterpumps";

const myLoader = ({ src, width, quality }) => {
	return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export default function waterpumps() {
	return (
		<Layout>
			<Head>
				<title>Водоматы</title>
			</Head>
			<section className={classes.howtouse}>
				<motion.div
					className={classes.title}
					initial="hidden"
					animate="enter"
					variants={variants2}
					transition={{
						duration: 1,
						type: "spring",
						bounce: 0.4,
					}}
				>
					Как купить воду в водомате Живая Вода (оплата банковской картой)
				</motion.div>
				<motion.div
					initial="hidden"
					animate="enter"
					variants={variants}
					transition={{
						duration: 1.3,
						type: "spring",
						bounce: 0.5,
					}}
				>
					<div className={classes.howtouse__content}>
						<div className={classes.howtouse__flex}>
							<div>
								<ol className={classes.howtouse__list}>
									<li>Поставьте ёмкость в камеру розлива</li>
									<li>Выберите количество литров</li>
									<li>Приложите банковскую карту к терминалу</li>
									<li>Нажмите кнопку «ОЗОН»</li>
									<li>Нажмите кнопку «Старт»</li>
								</ol>
							</div>
							<div className={classes.howtouse__video1}>
								<div>
									<video
										style={{ width: "400px", height: "280px" }}
										controls
										muted
										poster="/images/logo/logo3.webp"
									>
										<source src="/video/IMG_2093.MOV" />
									</video>
								</div>
							</div>
						</div>
					</div>
					<section className={classes.howtouse}>
						<div className={classes.title}>
							Как купить воду через QR-КОД
						</div>
						<div className={classes.howtouse__content}>
							<div className={classes.howtouse__flex}>
								<div className={classes.howtouse__video}>
									<div>
										<video
											style={{ width: "300px", height: "400px" }}
											controls
											muted
											poster="./images/logo/logo3.webp"
										>
											<source src="/video/IMG_4730.MP4" />
										</video>
									</div>
								</div>
								<div>
									<ol className={classes.howtouse__list}>
										<li>Поставьте ёмкость в камеру розлива</li>
										<li>
											Для оплаты, наведите камеру на QR-код
											смартфоном
										</li>
										<li>
											Укажите сумму покупки и нажмите «Продолжить»
										</li>
										<li>Выберете СБП и нажмите «Продолжить»</li>
										<li>
											Откроется приложение банка. Нажмите «Оплатить»
										</li>
										<li>Нажмите на кнопку «Старт» на аппарате</li>
										<li>Дождитесь загрузки баланса на водомат</li>
										<li>
											Снова нажмите кнопку «Старт» для подачи воды
										</li>
									</ol>
								</div>
							</div>
						</div>
					</section>
					<section className={classes.waterpumps}>
						<div className={classes.title}>Водоматы</div>
						<div className={classes.waterpumps__content}>
							<div className={classes.waterpumps__flex}>
								<div className={classes.waterpumps__pic}>
									<Image
										className={classes.waterpumps__pic__img1}
										loader={myLoader}
										src="/staff/500.webp"
										width="449"
										height="370"
										alt=""
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
									/>
								</div>
								<div className={classes.waterpumps__text}>
									«Живая вода» – это надёжные автоматы питьевой воды,
									которые могут устанавливаться как на улице, так и в
									помещении.
									<p>
										Система очистки аппарата задерживает минеральные и
										органические примеси, вирусы, бактерии, железо,
										тяжелые металлы, соли жесткости и пр., в том числе
										и ржавчину из труб, по которым вода течет в ваши
										квартиры.
									</p>
								</div>
							</div>
							<div className={classes.waterpumps__flex}>
								<div className={classes.waterpumps__text}>
									<p>
										Вода в аппарате обогащается специальным
										минерализатором до низкого уровня минерализации.
									</p>
									Низкий уровень минералов в воде ежедневного
									потребления приносит пользу здоровью, поскольку не
									увеличивает угрозу сердечно-сосудистых заболеваний
									(кальцификация сосудов), заболеваний пищеварительной,
									выделительной системы (камни в почках, желчном
									пузыре) и т.п.
								</div>
								<div className={classes.waterpumps__pic}>
									<Image
										className={classes.waterpumps__pic__img2}
										loader={myLoader}
										src="staff/400.webp"
										width={0}
										height={0}
										alt=""
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
									/>
								</div>
							</div>
						</div>
					</section>
					<section className={classes.cleaner}>
						<div className={classes.title}>Многоступенчатая очистка</div>
						<div className={classes.cleaner__flex}>
							<div className={classes.cleaner__text}>
								В наших автоматах используется самая современная
								многоступенчатая система очистки. Аналогичные
								используется при производстве бутилированной воды. С
								разницей лишь в объемах. Фактически, каждый водомат
								«Живая вода» является мини-заводом по производству
								питьевой воды первой категории.
							</div>
							<div className={classes.cleaner__video}>
								<div>
									<video
										style={{ width: "500px", height: "281px" }}
										controls
										poster="/images/logo/logo3.webp"
									>
										<source src="/video/IMG_4961.mov" />
									</video>
								</div>
							</div>
						</div>
						<div className={classes.cleaner__degree}>
							<div className={classes.cleaner__degree_flex}>
								<div>
									<Image
										loader={myLoader}
										src="staff/First.svg"
										width={95}
										height={88}
										alt=""
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
									/>
								</div>
								<div>
									<Image
										loader={myLoader}
										src="staff/Second.svg"
										width={84}
										height={109}
										alt=""
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
									/>
								</div>
								<div>
									<Image
										loader={myLoader}
										src="staff/Third.svg"
										width={106}
										height={109}
										alt=""
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
									/>
								</div>
								<div>
									<Image
										loader={myLoader}
										src="staff/Four.svg"
										width={84}
										height={89}
										alt=""
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
									/>
								</div>
								<div>
									<Image
										loader={myLoader}
										src="staff/Five.svg"
										width={113}
										height={91}
										// alt="100vw"
										// style={{ width: "100%", height: "auto" }}
									/>
								</div>
							</div>
							<div className={classes.cleaner__degree_flex}>
								<div>
									<Image
										loader={myLoader}
										src="staff/Six.svg"
										width={85}
										height={93}
										alt=""
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
									/>
								</div>
								<div>
									<Image
										loader={myLoader}
										src="staff/Seven.svg"
										width={84}
										height={91}
										alt=""
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
									/>
								</div>
								<div>
									<Image
										loader={myLoader}
										src="staff/Eight.svg"
										width={100}
										height={112}
										alt=""
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
									/>
								</div>
								<div>
									<Image
										loader={myLoader}
										src="staff/Nine.svg"
										width={120}
										height={103}
										alt=""
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
									/>
								</div>
								<div>
									<Image
										loader={myLoader}
										src="staff/Ten.svg"
										width={88}
										height={98}
										alt=""
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
									/>
								</div>
							</div>
						</div>
					</section>
					{/* <section className={classes.cleaner}>
						<div className={classes.title}>
							Обогащение минералами (Mg, Ca, K + Йод)
						</div>
					</section> */}
					<Map />
				</motion.div>
			</section>
		</Layout>
	);
}

const variants = {
	hidden: { opacity: 0, x: 0, y: 100 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 200, y: 0 },
};

const variants2 = {
	hidden: { opacity: 0, x: -50, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 100, y: 0 },
};
