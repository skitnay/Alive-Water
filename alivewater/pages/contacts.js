import { Layout } from "../components/Layout";
import Head from "next/dist/shared/lib/head";
import classes from "../styles/index.module.scss";
import Image from "next/image";
import Link from "next/dist/client/link";
import { motion } from "framer-motion";
import Map from "../components/Waterpumps";

const myLoader = ({ src, width, quality }) => {
	return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export default function contacts() {
	return (
		<Layout>
			<Head>
				<title>Контакты</title>
			</Head>
			<section className={classes.about}>
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
					Контакты
				</motion.div>
				<motion.div
					className={classes.contacts__content}
					initial="hidden"
					animate="enter"
					variants={variants}
					transition={{
						duration: 1.3,
						type: "spring",
						bounce: 0.5,
					}}
				>
					<div className={classes.contacts__contact}>
						<div className={classes.contacts__title}>Мы в</div>
						<div className={classes.contacts__social}>
							<div className={classes.contacts__vk}>
								<Link href="https://vk.com/alivewaternsk">
									<div target="_blank">
										<Image
										loader={myLoader}
											src="icons/vk.webp"
											width={45}
											height={45}
											alt="Vkontakte icon"
											priority
										/>
									</div>
								</Link>
							</div>
							<div className={classes.contacts__od}>
								<Link href="https://ok.ru/profile/580408735701">
									<div target="_blank">
										<Image
											loader={myLoader}
											src="icons/od.webp"
											width={45}
											height={45}
											alt="Odnaklasniki icon"
											priority
										/>
									</div>
								</Link>
							</div>
							<div className={classes.contacts__wa}>
								<Link href="https://wa.me/79134531010">
									<div target="_blank">
										<Image
											loader={myLoader}
											src="icons/wa.webp"
											width={45}
											height={45}
											alt="What's App icon"
											priority
										/>
									</div>
								</Link>
							</div>
							<div className={classes.contacts__2gis}>
								<Link href="https://2gis.ru/novosibirsk/branches/70000001038983235?m=83.064884%2C55.055966%2F9.68">
									<div target="_blank">
										<Image
											loader={myLoader}
											src="icons/2gis.webp"
											width={100}
											height={45}
											alt="2gis icon"
											priority
										/>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.contacts__contact}>
						<div className={classes.contacts__title}>Телефон </div>
						<p>
							<Link href="tel:+79537641000">
								<div>+7 (953) 764-10-00</div>
							</Link>
						</p>
					</div>
					<div className={classes.contacts__contact}>
						<div className={classes.contacts__title}>Email </div>
						<p>
							<Link href="mailto:zhivaya@voda54.ru">
								<div>zhivaya@voda54.ru</div>
							</Link>
						</p>
					</div>
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

{
	/* <motion.section className={classes.about}
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
					<Image src="/recycle.webp" width={448} height={422} alt="" />
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
		</motion.section> */
}
