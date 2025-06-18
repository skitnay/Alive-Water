import { Layout } from "../components/Layout";
import Head from "next/dist/shared/lib/head";
import classes from "../styles/index.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import News from "../components/New";
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
	return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export default function About() {
	return (
		<Layout>
			<Head>
				<title>Новости</title>
			</Head>
			<section className={classes.newsSection}>
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
					Новости
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
					{/* <News /> */}
					<div className={classes.newsBlock__flex}>
						<div className={classes.newsBlock__separator}></div>
						<div className={classes.newBlock}>
							<div className={classes.newsBlock__row}>
								<div className={classes.newsBlock__news}>
									<div className={classes.newsBlock__title_block}>
										<div className={classes.newsBlock__title}>
											Новый водомат в Ордынском районе!
										</div>
										<div className={classes.newsBlock__date}>
											05/07/2024
										</div>
									</div>
									<h3 className={classes.newsBlock__text}>
										<p>
											Мы поставили новый аппарат{" "}
											в селе Верх-Ирмень по адресу: <br></br>
											<b> Кандикова, 20 </b>
										</p>
										<p>
											Водомат работает <b>круглосуточно</b>
										</p>
									</h3>
								</div>
								<div className={classes.newsBlock__pic}>
									<Image
										loader={myLoader}
										src="/news/verh-yrmen.jpg"
										alt=""
										width={343}
										height={190}
										priority
									></Image>
								</div>
							</div>
						</div>
						<div className={classes.newsBlock__separator}></div>
					</div>
					<div className={classes.newsBlock__flex}>
						<div className={classes.newsBlock__separator}></div>
						<div className={classes.newBlock}>
							<div className={classes.newsBlock__row}>
								<div className={classes.newsBlock__news}>
									<div className={classes.newsBlock__title_block}>
										<div className={classes.newsBlock__title}>
											Внимание, жители Каменки!
										</div>
										<div className={classes.newsBlock__date}>
											14/06/2024
										</div>
									</div>
									<h3 className={classes.newsBlock__text}>
										<p>
											Мы установили новый водомат{" "}
											в Каменке по адресу:
											<b> Советская, 2а </b>
										</p>
										<p>
											Аппарат работает <b>круглосуточно</b>
										</p>
									</h3>
								</div>
								<div className={classes.newsBlock__pic}>
									<Image
										loader={myLoader}
										src="/news/Sovetskaya2a.jpg"
										alt=""
										width={343}
										height={190}
									// priority
									// sizes="100vw"
									// style={{ width: '100%', height: 'auto' }}
									></Image>
								</div>
							</div>
						</div>
						<div className={classes.newsBlock__separator}></div>
					</div>
					<div className={classes.newsBlock__flex}>
						<div className={classes.newsBlock__separator}></div>
						<div className={classes.newBlock}>
							<div className={classes.newsBlock__row}>
								<div className={classes.newsBlock__news}>
									<div className={classes.newsBlock__title_block}>
										<div className={classes.newsBlock__title}>
											Отличная новость для жителей Октябрьского района!
										</div>
										<div className={classes.newsBlock__date}>
											01/05/2024
										</div>
									</div>
									<h3 className={classes.newsBlock__text}>
										<p>
											Мы установили новый водомат{" "}
											в Октябрьском районе по адресу:
											<b> ​Федосеева, 8 </b>
										</p>
										<p>
											Аппарат работает <b>круглосуточно</b>
										</p>
									</h3>
								</div>
								<div className={classes.newsBlock__pic}>
									<Image
										loader={myLoader}
										src="/news/Fedoseeva01.jpg"
										alt=""
										width={343}
										height={190}
									// priority
									// sizes="100vw"
									// style={{ width: '100%', height: 'auto' }}
									></Image>
								</div>
							</div>
						</div>
						<div className={classes.newsBlock__separator}></div>
					</div>
					<div className={classes.newsBlock__flex}>
						<div className={classes.newsBlock__separator}></div>
						<div className={classes.newBlock}>
							<div className={classes.newsBlock__row}>
								<div className={classes.newsBlock__news}>
									<div className={classes.newsBlock__title_block}>
										<div className={classes.newsBlock__title}>
											Новый аппарат в Пашино!
										</div>
										<div className={classes.newsBlock__date}>
											08/09/2023
										</div>
									</div>
									<h3 className={classes.newsBlock__text}>
										<p>
											Доброго времени суток, друзья! Мы поставили новый водомат{" "}
											в Пашино по адресу:
											<b> Пашино м-н, Солидарности, 15</b>
										</p>
										<p>
											Аппарат работает <b>круглосуточно</b>
										</p>
									</h3>
								</div>
								<div className={classes.newsBlock__pic}>
									<Image
										loader={myLoader}
										src="/news/Pashino.webp"
										alt=""
										width={343}
										height={190}
										priority
									></Image>
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
											Обогащение минералами!
										</div>
										<div className={classes.newsBlock__date}>
											07/09/2023
										</div>
									</div>
									<h3 className={classes.newsBlock__text}>
										<p>
											Теперь в нескольких наших аппаратах есть функция обогащения воды полезными минералами, такими как: <b>кальций</b>, <b>магний</b>, <b>калий</b> и <b>йод</b>.
										</p>
										<div>
											Аппараты с такой функцией есть по адресам:
											<p>c. Криводановка, Микрорайон, 2</p>
											<p>с. Каменка, мкр Олимпийской Славы, 1</p>
											<p>Пашино, Солидарности, 15</p>
											<p>с. Прокудское, ​Есенина, 1г</p>
										</div>
									</h3>
								</div>
								<div className={classes.newsBlock__pic}>
									<Image
										loader={myLoader}
										src="/news/Ka2.webp"
										alt=""
										width={343}
										height={190}
										priority
									></Image>
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
											Мы теперь на ОБьГЭС!
										</div>
										<div className={classes.newsBlock__date}>
											16/10/2022
										</div>
									</div>
									<div className={classes.newsBlock__text}>
										Новый аппарат по продаже чистой воды появился в
										микрорайоне ОбьГЭС по адресу{" "}
										<b>Гидромонтажная, 53</b>.
										<p>
											Обратите внимание, что водомат расположился
											внутри рынка на Гидромонтажке, поэтому работает
											не круглосуточно, а в режиме здания: с 9:00 до
											20:00.
										</p>
									</div>
								</div>
								<div className={classes.newsBlock__pic}>
									<Image
										loader={myLoader}
										src="/news/og.webp"
										alt=""
										width={343}
										height={190}
									></Image>
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
											Нововведение - бесконтактная оплата по QR-коду!
										</div>
										<div className={classes.newsBlock__date}>
											06/06/2022
										</div>
									</div>
									<div className={classes.newsBlock__text}>
										Теперь все наши автоматы Живой Воды могут
										принимать оплату по qr-коду. Вам не обязательно
										иметь с собой физическую карту или мучиться со
										сдачей-мелочью. А ещё, можно сразу указать всю
										сумму, на которую Вы планируете набрать воду!
										Подробнее о том, как платить по qr-коду можно
										посмотреть в разделе{" "}
										<Link href="/waterpumps">
											<div>«Водоматы»</div>
										</Link>
										.
									</div>
								</div>
								<div className={classes.newsBlock__pic}>
									<Image
										loader={myLoader}
										src="/news/qr-code.webp"
										alt=""
										width={343}
										height={190}
									></Image>
								</div>
							</div>
						</div>
						<div className={classes.newsBlock__separator}></div>
					</div>
					<div className={classes.newsBlock__flex}>
						<div id="div" className={classes.newsBlock__separator}></div>
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
										В магазинах на 7 марта 2022 года стоимость
										негазированной воды объемом 1,5 литра повысилась
										на 17 рублей. Кроме того, с декабря по март на 60
										рублей подорожали бутыли объемом 18,9 л, которые
										обычно заказывают в офис. По словам руководителей
										предприятий, сама вода не подорожала, однако
										стоимость сырья – пластика, упаковки, крышек,
										полиэтилена – за месяц подскочила на 70%. Мы
										предлагаем не платить за упаковку - покупать
										только чистую воду, а не бутылки!
									</div>
								</div>
								<div className={classes.newsBlock__pic}>
									<Image
										loader={myLoader}
										src="/news/photo_2022-06-06_18-29-40.webp"
										alt=""
										width={343}
										height={190}
									></Image>
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
										Недавно мы писали о проблеме с водой в селе
										Прокудском. Как только услышали, сразу
										оптимизировали свою работу и готовы делиться
										хорошей новостью! Теперь в Прокудском стоит наш
										аппарат по продаже чистой воды. Покупать воду из
										водомата выгоднее, удобнее и экологичнее, чем
										закупать бутилированную воду в магазине, а в таких
										условиях - это настоящее спасение. 💧 Аппарат
										находится по адресу: ул.Есенина,28
									</div>
								</div>
								<div className={classes.newsBlock__pic}>
									<Image
										loader={myLoader}
										src="/news/waterp.webp"
										alt=""
										width={343}
										height={190}
									></Image>
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
										Сегодня в новостях мы увидели, что жители села
										Прокудское мучаются от отсутствия чистой воды в
										кранах. Вода бывает, но вот что поделать с
										ярко-голубой или оранжевой жидкостью сложно
										придумать. Чтобы приготовить пищу или постирать
										белье, большинство жителей едут за водой за
										несколько километров в соседний Чик! Такого нельзя
										допускать! Постараемся помочь жителям и установить
										в селе наш водомат, а если потребуется, то и
										несколько.
									</div>
								</div>
								<div className={classes.newsBlock__pic}>
									<Image
										loader={myLoader}
										src="/news/e5541be6897f6aa20ec5420d93a7826b.webp"
										alt=""
										width={343}
										height={190}
									></Image>
								</div>
							</div>
						</div>
						<div className={classes.newsBlock__separator}></div>
					</div>
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
	hidden: { opacity: 0, x: -80, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 100, y: 0 },
};
