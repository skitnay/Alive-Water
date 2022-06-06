import { Layout } from '../components/Layout';
import Head from 'next/dist/shared/lib/head';
import classes from '../styles/index.module.scss';
import { motion } from 'framer-motion';


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
					type: 'linear',
					rotate: '50'
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
					type: 'linear',
					rotate: '50'
				}}>
				<div className={classes.newsBlock__flex}>
					<div className={classes.newsBlock__separator}></div>
					<div className={classes.newsBlock}>
						<div className={classes.newsBlock__row}>
							<div className={classes.newsBlock__news}>
								<div className={classes.newsBlock__title_block}>
									<div className={classes.newsBlock__title}>
										Заголовок
									</div>
									<div className={classes.newsBlock__date}>
										00/00/0000
									</div>
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
				</div>
				<div className={classes.newsBlock__flex}>
					<div className={classes.newsBlock__separator}></div>
					<div className={classes.newsBlock}>
						<div className={classes.newsBlock__row}>
							<div className={classes.newsBlock__news}>
								<div className={classes.newsBlock__title_block}>
									<div className={classes.newsBlock__title}>
										Заголовок
									</div>
									<div className={classes.newsBlock__date}>
										00/00/0000
									</div>
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
				</div>
				<div className={classes.newsBlock__flex}>
					<div className={classes.newsBlock__separator}></div>
					<div className={classes.newsBlock}>
						<div className={classes.newsBlock__row}>
							<div className={classes.newsBlock__news}>
								<div className={classes.newsBlock__title_block}>
									<div className={classes.newsBlock__title}>
										Заголовок
									</div>
									<div className={classes.newsBlock__date}>
										00/00/0000
									</div>
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
				</div>
				<div className={classes.newsBlock__flex}>
					<div className={classes.newsBlock__separator}></div>
					<div className={classes.newsBlock}>
						<div className={classes.newsBlock__row}>
							<div className={classes.newsBlock__news}>
								<div className={classes.newsBlock__title_block}>
									<div className={classes.newsBlock__title}>
										Заголовок
									</div>
									<div className={classes.newsBlock__date}>
										00/00/0000
									</div>
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
				</div>
				<div className={classes.newsBlock__flex}>
					<div className={classes.newsBlock__separator}></div>
					<div className={classes.newsBlock}>
						<div className={classes.newsBlock__row}>
							<div className={classes.newsBlock__news}>
								<div className={classes.newsBlock__title_block}>
									<div className={classes.newsBlock__title}>
										Заголовок
									</div>
									<div className={classes.newsBlock__date}>
										00/00/0000
									</div>
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