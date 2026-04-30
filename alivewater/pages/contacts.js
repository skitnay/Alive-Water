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
						<div className={classes.contacts__social}>
							<div className={classes.contacts__vk}>
								<Link href="https://vk.com/alivewaternsk">
									<div target="_blank">
										<Image
											loader={myLoader}
											src="/icons/vk.webp"
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
									<span target="_blank">
										<Image
											loader={myLoader}
											src="/icons/od.webp"
											width={45}
											height={45}
											alt="Odnaklasniki icon"
											priority
										/>
									</span>
								</Link>
							</div>
							<div className={classes.contacts__wa}>
								<Link href="https://max.ru/u/f9LHodD0cOI3xzZJMmN0fRxOdmGf_wB9L_S3oXyug4CsV79cWlxEmKorEX8">
									<span target="_blank">
										<Image
											loader={myLoader}
											src="/icons/MAX.png"
											width={45}
											height={45}
											alt="What's App icon"
											priority
										/>
									</span>
								</Link>
							</div>
							<div className={classes.contacts__od}>
								<Link href="https://t.me/+79537641000">
									<span target="_blank">
										<Image
											loader={myLoader}
											src="/icons/Telegram.png"
											width={45}
											height={45}
											alt="What's App icon"
											priority
										/>
									</span>
								</Link>
							</div>
							<div className={classes.contacts__2gis}>
								<Link href="https://2gis.ru/novosibirsk/branches/70000001094429194?m=82.850647%2C54.817341%2F16">
									<span target="_blank">
										<Image
											loader={myLoader}
											src="/icons/2gis.webp"
											width={100}
											height={45}
											alt="2gis icon"
											priority
										/>
									</span>
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.contacts__contact}>
						<p>
							{/* <Image
								loader={myLoader}
								src=""
								width={50}
								height={50}
								alt=""
								priority
							/> */}
							<Link href="tel:+79537641000">
								<span>+7 (953) 764-10-00</span>
							</Link>
						</p>
						<p>
							{/* <Image
								loader={myLoader}
								src=""
								width={50}
								height={50}
								alt=""
								priority
							/> */}
							<Link href="mailto:zhivaya@voda54.ru">
								<span>zhivaya@voda54.ru</span>
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