import '../styles/header.module.scss';
import classes from '../styles/header.module.scss';

export function Header() {
	return (
		<>
			<header>
				<div className={classes.header}>
					<div>
						<div>
							<div>
								<div>ЖИВАЯ ВОДА</div>
								<div>Новосибирск</div>
							</div>
						</div>
						<nav>
							<ul>
								<li className={classes.lli}>список</li>
								<li>список</li>
								<li>список</li>
								<li>список</li>
							</ul>
						</nav>
					</div>

				</div>
			</header>
		</>
	)
}