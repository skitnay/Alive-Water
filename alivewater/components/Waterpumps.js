import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../styles/index.module.scss";
import Addresses from "./Addresses";
import dynamic from 'next/dynamic'

const myLoader = ({ src, width, quality }) => {
	return `/images/${src}?w=${width}&q=${quality || 75}`;
};

const InteractiveMap = dynamic(() => import('../components/InteractiveMap'), { ssr: false });

export default function Map() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<section className={classes.map}>
				<div className={classes.title}>Наши водоматы</div>
				<div className={classes.map__content}>
					<div className={classes.map__map}>
						<InteractiveMap />
					</div>
					<div>
						<div className={classes.map__titleFlex}>
							<div className={classes.title}>Адреса</div>
							<button onClick={() => setIsOpen(!isOpen)} className={classes.map__button}>
								{isOpen ? "Скрыть" : "Показать"}
							</button>
						</div>
						{isOpen && (
							<div className={classes.map__flex}>
								<Addresses />
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
}
