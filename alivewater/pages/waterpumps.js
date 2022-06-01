import { Layout } from '../components/Layout';
import Head from 'next/dist/shared/lib/head';
import classes from '../styles/waterpump.module.scss';

export default function waterpumps() {
	return (
		<Layout>
			<Head>
				<title>Водоматы</title>
			</Head>
			<div className={classes.block}>
				<div className={classes.index}>
					<div className={classes.title}>Водоматы</div>
					<div className={classes.miniTitle}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi corporis quaerat facilis eaque libero quis, placeat, reprehenderit pariatur ab maiores sed a repudiandae, reiciendis aperiam? Ducimus exercitationem architecto suscipit quisquam?
					</div>
				</div>
			</div>
		</Layout>
	)
}