import classes from "../styles/index.module.scss";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
	return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export default function News() {
	return (
		<>
			<div className={classes.newBlock__flex}>
				<div className={classes.newBlock}>
					<div className={classes.newsBlock__row}>
						<div className={classes.newsBlock__news}>
							<div className={classes.newsBlock__title_block}>
								<div className={classes.newsBlock__title}>
									Новый водомат в Ордынском районе!
								</div>
								<div className={classes.newsBlock__date}>
									05/07/2024
								</div>
							</div>
							<h3 className={classes.newsBlock__text}>
								<p>
									Мы поставили новый аппарат{" "}
									в селе Верх-Ирмень по адресу: <br></br>
									<b> Кандикова, 20 </b>
								</p>
								<p>
									Водомат работает <b>круглосуточно</b>
								</p>
							</h3>
						</div>
						<div className={classes.newsBlock__pic}>
							<Image
								loader={myLoader}
								src="news/verh-yrmen.jpg"
								alt=""
								width={343}
								height={190}
								priority
							></Image>
						</div>
					</div>
				</div>
				<div className={classes.newBlock__separator}></div>
				{/* <div className={classes.newsBlock__separator}></div> */}
				<div className={classes.newBlock}>
					<div className={classes.newsBlock__row}>
						<div className={classes.newsBlock__news}>
							<div className={classes.newsBlock__title_block}>
								<div className={classes.newsBlock__title}>
									Внимание, жители Каменки!
								</div>
								<div className={classes.newsBlock__date}>
									14/06/2024
								</div>
							</div>
							<h3 className={classes.newsBlock__text}>
								<p>
									Мы установили новый водомат{" "}
									в Каменке по адресу:
									<b> Советская, 2а </b>
								</p>
								<p>
									Аппарат работает <b>круглосуточно</b>
								</p>
							</h3>
						</div>
						<div className={classes.newsBlock__pic}>
							<Image
								loader={myLoader}
								src="news/Sovetskaya2a.jpg"
								alt=""
								width={343}
								height={190}
								priority
							></Image>
						</div>
					</div>
				</div>
				{/* <div className={classes.newsBlock__separator}></div> */}

				{/* <div className={classes.newsBlock__separator}></div> */}
			</div>
		</>
	);
}
