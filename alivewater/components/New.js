import classes from '../styles/index.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function News() {
	return <>
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
							Теперь все наши автоматы Живой Воды могут принимать оплату по qr-коду. Вам не обязательно иметь с собой физическую карту или мучиться со сдачей-мелочью.
							А ещё, можно сразу указать всю сумму, на которую Вы планируете набрать воду! Подробнее о том, как платить по qr-коду можно посмотреть в разделе <Link href="/waterpumps"><a>«Водоматы»</a></Link>.
						</div>
					</div>
					<div className={classes.newsBlock__pic}>
						<Image src='/qr-code.jpg' alt='' placeholder='blur' blurDataURL priority='true' lazyBoundary='400px' width={343} height={190}></Image>
					</div>
				</div>
			</div>
			<div className={classes.newsBlock__separator}></div>
		</div>
	</>
}


