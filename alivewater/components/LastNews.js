import React from "react";
import classes from "../styles/index.module.scss";
import Image from "next/image";
import newsData from "../data/news.json";

const myLoader = ({ src, width, quality }) => {
	return `images/news/${src}?w=${width}&q=${quality || 75}`;
};

export default function News() {
	return (
		<div className={classes.newBlock__flex}>
			{[...newsData]
				.sort((a, b) => new Date(b.date) - new Date(a.date))
				.slice(0, 2)
				.map((item, index) => (
					<React.Fragment key={index}>
						<div className={classes.newBlock}>
							<div className={classes.newsBlock__row}>
								<div className={classes.newsBlock__news}>
									<div className={classes.newsBlock__title_block}>
										<div className={classes.newsBlock__title}>
											{item.title}
										</div>
										<div className={classes.newsBlock__date}>
											{item.date}
										</div>
									</div>
									<h3 className={classes.newsBlock__text}>
										{item.text.map((paragraph, idx) => (
											<p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
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
						{index === 0 && <div className={classes.newBlock__separator}></div>}
					</React.Fragment>
				))}
		</div>
	);
}
