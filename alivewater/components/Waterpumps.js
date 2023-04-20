import Image from "next/image";
import Link from "next/link";
import classes from "../styles/index.module.scss";

const myLoader = ({ src, width, quality }) => {
	return `/images/${src}?w=${width}&q=${quality || 75}`;
};

const adresses = [
	{
		title: "Большая, (582/2)",
		subtitle: "Ленинский район, Новосибирск"
	},
	{
		title: "Большая, (582/2)",
		subtitle: "Ленинский район, Новосибирск"
	},
	{
		title: "Большая, (582/2)",
		subtitle: "Ленинский район, Новосибирск"
	},
]


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
								<div className={classes.map__adress}>
									<div className={classes.map__title}>
										Большая, (582/2)
									</div>
									<div className={classes.map__subtitle}>
										Ленинский район, Новосибирск
									</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>
										Микрорайон Олимпийской Славы, 1
									</div>
									<div className={classes.map__subtitle}>с. Каменка</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>Микрорайон, 2</div>
									<div className={classes.map__subtitle}>
										с. Криводановка
									</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>Согласия, 4</div>
									<div className={classes.map__subtitle}>
										пос. Октябрьский, Мошковский район
									</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>Есенина, 28</div>
									<div className={classes.map__subtitle}>
										с. Прокудское, Коченевский район
									</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>
										Октябрьская, 7 к1
									</div>
									<div className={classes.map__subtitle}>
										пос. Октябрьский, Мошковский район
									</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>Локтинская, 14</div>
									<div className={classes.map__subtitle}>
										пос. Октябрьский, Мошковский район
									</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>
										Центральная, 21
									</div>
									<div className={classes.map__subtitle}>
										пос. Барлакский, Мошковский район
									</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>
										Проспект Ленина, 2
									</div>
									<div className={classes.map__subtitle}>
										рп. Ордынское, Ордынский район
									</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>Садовая, 28</div>
									<div className={classes.map__subtitle}>
										с. Криводановка
									</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>
										Проспект Революции, 45
									</div>
									<div className={classes.map__subtitle}>
										рп. Ордынское, Ордынский район
									</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>
										Гидромонтажная, 53
									</div>
									<div className={classes.map__subtitle}>
										г. Новосибирск, Микрорайон ОбьГЭС
									</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>Софийская, 1к1</div>
									<div className={classes.map__subtitle}>
										г. Новосибирск, Микрорайон ОбьГЭС
									</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>Андреева, 88</div>
									<div className={classes.map__subtitle}>
										г. Новосибирск, с. Новолуговое
									</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>​Кирова, 37</div>
									<div className={classes.map__subtitle}>
										{" "}
										г. Новосибирск, пос. Восход
									</div>
								</div>
								<div className={classes.map__adress}>
									<div className={classes.map__title}>{adresses.title}</div>
									<div className={classes.map__subtitle}>
										{" "}
									</div>
								</div>
							</div>
						</div>
					</div>
			</section>
		</>
	);
}
