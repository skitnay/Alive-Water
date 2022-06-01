import Head from 'next/head';
import { Layout } from '../components/Layout';
import classes from '../styles/index.module.scss'
import { motion } from 'framer-motion';

export default function index() {
	return (
		<Layout>
			<Head>
				<title>Главная</title>
			</Head>
			<div className={classes.block}>
				<div className={classes.index}>
					<motion.div
						className={classes.title}
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
						className={classes.miniTitle}
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
		</Layout>
	)
}

const variants = {
	hidden: { opacity: 0, x: 0, y: 100 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 200, y: 0 },
}

const variants2 = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 100, y: 0 },
}