import Image from "next/image";
import Link from "next/link";
import classes from "../styles/index.module.scss";
import Addresses from "./Addresses";

const myLoader = ({ src, width, quality }) => {
	return `/images/${src}?w=${width}&q=${quality || 75}`;
};

export default function Map() {
	return (
		<>
			<section className={classes.map}>
				<div className={classes.title}>Наши водоматы</div>
				<div className={classes.map__content}>
					<div className={classes.map__map}>
						<Link href="https://2gis.ru/novosibirsk/branches/70000001038983235?m=83.064884%2C55.055966%2F9.68">
							<a target="_blank">
								<Image
									loader={myLoader}
									src="staff/map.jpg"
									width={1400}
									height={1146}
									alt="2gis"
									priority
								/>
							</a>
						</Link>
					</div>
					<div>
						<div className={classes.title}>Адреса</div>
						<div className={classes.map__flex}>
							<Addresses />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
