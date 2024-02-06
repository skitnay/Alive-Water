import Link from 'next/link'
import classes from "../styles/layout.module.scss";
import "../styles/style.scss";
import Image from 'next/image';
import icon from "/public/images/mobile/Apple-touch-ipad-retina.png"

// const myLoader = ({ src, width, quality }) => {
// 	return `/images/${src}?w=${width}&q=${quality || 75}`;
// };

export default function NotFound() {
	return (
		<div className={classes.notFound}>
			<Image
				// loader
				src={icon}
				alt=""
				width={167}
				height={167}
			// priority
			/>
			<div>
				<p className={classes.notFound__title}>Упс...</p>
				<p className={classes.notFound__text}>Такой страницы нет на нашем сайте</p>
				<Link href="/" className={classes.notFound__link}>Вернуться на начальную страницу</Link>
			</div>
		</div>
	)
}