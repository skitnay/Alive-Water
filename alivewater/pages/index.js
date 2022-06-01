import Head from 'next/head';
import { Layout } from '../components/Layout';
import classes from '../styles/index.module.scss'

export default function index() {
	return (
		<Layout>
			<Head>
				<title>Главная</title>
			</Head>
			<div className={classes.block}>
				<div className={classes.index}>
					<div className={classes.title}>Живая Вода</div>
					<div className={classes.miniTitle}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi corporis quaerat facilis eaque libero quis, placeat, reprehenderit pariatur ab maiores sed a repudiandae, reiciendis aperiam? Ducimus exercitationem architecto suscipit quisquam?
					</div>
				</div>
			</div>
		</Layout>
	)
}