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
						<Link href="https://2gis.ru/novosibirsk/branches/70000001094429194?m=82.850647%2C54.817341%2F16">
							<div target="_blank">
								<Image
									loader={myLoader}
									src="staff/map.jpg"
									alt="2gis"
									priority
									width={0}
									height={0}
									sizes="100vw"
									style={{ width: '100%', height: 'auto' }}
								/>
							</div>
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
