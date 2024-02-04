import classes from "../styles/layout.module.scss";
import Image from "next/image";


export default function Modal({ isvisible, onClose }) {
	const myLoader = ({ src, width, quality }) => {
		return `/images/${src}?w=${width}&q=${quality || 75}`;
	};
	if (!isvisible) return null;

	const handleClose = (e) => {
		if (e.target.id === 'wrapper') onClose();
	}

	return (
		<>
			<div className={classes.modal} id="wrapper" onClick={handleClose}>
				<div className={classes.modal__bg} id="wrapper">
					<div className={classes.modal__img}>
						<Image
							className={classes.modal__img__pic}
							loader={myLoader}
							src="staff/image_t20210106182053_n1.jpg"
							width={880}
							height={605}
							alt="Odnaklasniki icon"
							priority
							sizes="100vw"
							style={{ width: '100%', height: 'auto' }}
						/>
					</div>
					{/* <button className={classes.modal__close} onClick={() => onClose()}>X</button> */}
				</div>
			</div>
		</>
	);
}