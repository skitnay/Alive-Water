import classes from "../styles/index.module.scss";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
	return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export default function News() {
	return (
		<>
			<div className={classes.newBlock__flex}>
				{/* <div className={classes.newsBlock__separator}></div> */}
				<div className={classes.newBlock}>
					<div className={classes.newsBlock__row}>
						<div className={classes.newsBlock__news}>
							<div className={classes.newsBlock__title_block}>
								<div className={classes.newsBlock__title}>
									Новый аппарат в Пашино!
								</div>
								<div className={classes.newsBlock__date}>
									08/09/2023
								</div>
							</div>
							<h3 className={classes.newsBlock__text}>
								<p>
									Доброго времени суток, друзья! Мы поставили новый водомат{" "}
									в Пашино по адресу:
									<b> Пашино м-н, Солидарности, 15</b>
								</p>
								<p>
									Аппарат работает <b>круглосуточно</b>
								</p>
							</h3>
						</div>
						<div className={classes.newsBlock__pic}>
							<Image
								loader={myLoader}
								src="news/Pashino.webp"
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
									Обогащение минералами!
								</div>
								<div className={classes.newsBlock__date}>
									07/09/2023
								</div>
							</div>
							<h3 className={classes.newsBlock__text}>
								<p>
									Теперь в нескольких наших аппаратах есть функция обогащения воды полезными минералами, такими как: <b>кальций</b>, <b>магний</b>, <b>калий</b> и <b>йод</b>.
								</p>
								<div>
									Аппараты с такой функцией есть по адресам:
									<p>c. Криводановка, Микрорайон, 2</p>
									<p>с. Каменка, мкр Олимпийской Славы, 1</p>
									<p>Пашино, Солидарности, 15</p>
									<p>с. Прокудское, ​Есенина, 1г</p>
								</div>
							</h3>
						</div>
						<div className={classes.newsBlock__pic}>
							<Image
								loader={myLoader}
								src="news/Ka2.webp"
								alt=""
								width={343}
								height={190}
								priority
							></Image>
						</div>
					</div>
				</div>
				{/* <div className={classes.newsBlock__separator}></div> */}
			</div>
		</>
	);
}
