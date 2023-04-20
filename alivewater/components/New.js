import classes from "../styles/index.module.scss";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
	return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export default function News() {
	return (
		<>
			<div className={classes.newsBlock__flex}>
				<div className={classes.newsBlock__separator}></div>
				<div className={classes.newsBlock}>
					<div className={classes.newsBlock__row}>
						<div className={classes.newsBlock__news}>
							<div className={classes.newsBlock__title_block}>
								<div className={classes.newsBlock__title}>
									Новый аппарат в Новолуговое!
								</div>
								<div className={classes.newsBlock__date}>
									25/01/2023
								</div>
							</div>
							<div className={classes.newsBlock__text}>
								<p>
									Добрый день, друзья! Мы поставили водамат{" "}
									<b>Живая вода</b> в одном из наших любимых мест
									Новосибирской области:
								</p>
								<b>с. Новолуговое, ул. Андреева 88</b>
								<p>
									Набрать воду можно по графику работы магазина (с 8:00
									дно 22:00).
								</p>
							</div>
						</div>
						<div className={classes.newsBlock__pic}>
							<Image
								loader={myLoader}
								src="news/nl.webp"
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
		</>
	);
}
