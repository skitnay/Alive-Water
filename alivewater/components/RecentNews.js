import Image from "next/image";
import classes from "../styles/index.module.scss";

const myLoader = ({ src, width, quality }) => {
  return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export default function RecentNews({ news }) {
  return (
    <>
      {news.map((item, index) => (
        <div key={index} className={classes.newsBlock__flex}>
          <div className={classes.newsBlock__separator}></div>
          <div className={classes.newsBlock}>
            <div className={classes.newsBlock__row}>
              <div className={classes.newsBlock__news}>
                <div className={classes.newsBlock__title_block}>
                  <div className={classes.newsBlock__title}>{item.title}</div>
                  <div className={classes.newsBlock__date}>{item.date}</div>
                </div>
                <h3 className={classes.newsBlock__text}>
                  {item.text.map((paragraph, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                </h3>
              </div>
              <div className={classes.newsBlock__pic}>
                <Image
                  loader={myLoader}
                  src={`/news/${item.image}`}
                  alt=""
                  width={343}
                  height={190}
                  priority
                />
              </div>
            </div>
          </div>
          <div className={classes.newsBlock__separator}></div>
        </div>
      ))}
    </>
  );
}