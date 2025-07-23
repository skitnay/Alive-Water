import classes from "../styles/index.module.scss";
import addresses from '../data/addresses.json';

export default function Addresses() {
	return (
		<>
			{[...addresses]
				.sort((a, b) => a.subtitle.localeCompare(b.subtitle))
				.map((address, index) => (
					<a href={address.url} target="_blank">
						<div className={classes.map__adress} key={index}>
							<div className={classes.map__title}>{address.name}</div>
							<div className={classes.map__subtitle}>{address.subtitle}</div>
						</div>
					</a>
				))}
		</>
	);
}
