import { Layout } from "../components/Layout";
import Head from "next/dist/shared/lib/head";
import classes from "../styles/index.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import newsData from "../data/news.json";

const myLoader = ({ src, width, quality }) => {
	return `/images/news/${src}?w=${width}&q=${quality || 75}`;
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
					{[...newsData]
						.sort((a, b) => new Date(b.date) - new Date(a.date))
						.map((item, index) => (
							<div key={index} className={classes.newsBlock__flex}>
								<div className={classes.newsBlock__separator}></div>
								<div className={classes.newsBlock}>
									<div className={classes.newsBlock__row}>
										<div className={classes.newsBlock__news}>
											<div className={classes.newsBlock__title_block}>
												<div className={classes.newsBlock__title}>{item.title}</div>
												<div className={classes.newsBlock__date}>{item.date}</div>
											</div>
											<h3 className={classes.newsBlock__text}>
												{item.text.map((paragraph, i) => (
													<p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
												))}
											</h3>
										</div>
										<div className={classes.newsBlock__pic}>
											<Image
												loader={myLoader}
												src={item.image}
												alt=""
												width={343}
												height={190}
												priority
											/>
										</div>
									</div>
								</div>
								<div className={classes.newsBlock__separator}></div>
							</div>
						))}
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
