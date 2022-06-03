import { Layout } from '../components/Layout';
import Head from 'next/dist/shared/lib/head';
import classes from '../styles/index.module.scss';

export default function waterpumps() {
	return (
		<Layout>
			<Head>
				<title>Водоматы</title>
			</Head>
			<section className={classes.firstSection}>
				<div className={classes.firstSection__block}>
					<div className={classes.firstSection__index}>
						<div cclassName={classes.firstSection__title}>Водоматы</div>
						<div className={classes.firstSection__miniTitle}>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi corporis quaerat facilis eaque libero quis, placeat, reprehenderit pariatur ab maiores sed a repudiandae, reiciendis aperiam? Ducimus exercitationem architecto suscipit quisquam?
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}