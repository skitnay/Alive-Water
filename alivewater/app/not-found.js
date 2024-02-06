import Link from 'next/link'
import classes from "../styles/layout.module.scss";
import "../styles/style.scss";


export default function NotFound() {
	return (
		<div className={classes.notFound}>
			<p className={classes.notFound__text}>Такой страницы нет на нашем сайте</p>
			<Link href="/" className={classes.notFound__link}>Вернуться на начальную страницу</Link>
		</div>
	)
}