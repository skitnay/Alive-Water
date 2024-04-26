import { Layout } from "../components/Layout";
import Head from "next/dist/shared/lib/head";
import classes from "../styles/index.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
	return `/images/${src}?w=${width}&q=${quality || 75}`;
};

const icon = () => (
	<>
		<Image
			className={classes.analyzes__img}
			loader={myLoader}
			src="icons/pdf.webp"
			sizes="100vw"
			style={{ width: "100%", height: "auto" }}
			width={60}
			height={60}
			alt="pdf"
			priority
		/>
	</>
);

export default function analyzes() {
	return (
		<Layout>
			<Head>
				<title>Анализы Воды</title>
			</Head>
			<section>
				<motion.div
					className={classes.title}
					initial="hidden"
					animate="enter"
					variants={variants2}
					transition={{
						duration: 1,
						type: "spring",
						bounce: 0.4,
					}}
				>
					Анализы
				</motion.div>
				<div className={classes.advantage__miniTitle}>
					Вы можете быть уверены в качестве и безопасности воды, которую
					покупаете в наших автоматах! Результаты анализов можно изучить по
					ссылкам ниже.
				</div>
				<motion.div
					className={classes.analyzes__flex}
					initial="hidden"
					animate="enter"
					variants={variants}
					transition={{
						duration: 1.3,
						type: "spring",
						bounce: 0.5,
					}}
				>
					<div className={classes.analyzes__adress}>
						<div className={classes.analyzes__title}>
							Микрорайон Олимпийской Славы, 1
						</div>
						<div className={classes.analyzes__subtitle}>с. Каменка</div>
						<div className={classes.analyzes__icon_menu}>
							{icon()}
							<div>
								<Link
									href="/files/Olymp1.pdf"
									rel="noopener noreferrer"
									target="_blank"
								>
									Смотреть
								</Link>
							</div>
							<div>
								<Link href="/files/Olymp1.pdf" download>
									Скачать
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.analyzes__adress}>
						<div className={classes.analyzes__title}>Микрорайон, 2</div>
						<div className={classes.analyzes__subtitle}>
							с. Криводановка
						</div>
						<div className={classes.analyzes__icon_menu}>
							{icon()}
							<div>
								<Link
									href="/files/Microraion2.pdf"
									rel="noopener noreferrer"
									target="_blank"
								>
									Смотреть
								</Link>
							</div>
							<div>
								<Link href="/files/Microraion2.pdf" download>
									Скачать
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.analyzes__adress}>
						<div className={classes.analyzes__title}>Согласия, 4</div>
						<div className={classes.analyzes__subtitle}>
							пос. Октябрьский
						</div>
						<div className={classes.analyzes__icon_menu}>
							{icon()}
							<div>
								<Link
									href="/files/Soglasiya4.pdf"
									rel="noopener noreferrer"
									target="_blank"
								>
									Смотреть
								</Link>
							</div>
							<div>
								<Link href="/files/Soglasiya4.pdf" download>
									Скачать
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.analyzes__adress}>
						<div className={classes.analyzes__title}>Есенина, 28</div>
						<div className={classes.analyzes__subtitle}>
							с. Прокудское, Коченевский район
						</div>
						<div className={classes.analyzes__icon_menu}>
							{icon()}
							<div>
								<Link
									href="/files/prokudskoe.pdf"
									rel="noopener noreferrer"
									target="_blank"
								>
									Смотреть
								</Link>
							</div>
							<div>
								<Link href="/files/prokudskoe.pdf" download>
									Скачать
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.analyzes__adress}>
						<div className={classes.analyzes__title}>Большая, 582/2</div>
						<div className={classes.analyzes__subtitle}>
							г. Новосибирск
						</div>
						<div className={classes.analyzes__icon_menu}>
							{icon()}
							<div>
								<Link
									href="/files/Bolshaya.pdf"
									rel="noopener noreferrer"
									target="_blank"
								>
									Смотреть
								</Link>
							</div>
							<div>
								<Link href="/files/Bolshaya.pdf" download>
									Скачать
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.analyzes__adress}>
						<div className={classes.analyzes__title}>
							Проспект Ленина, 2
						</div>
						<div className={classes.analyzes__subtitle}>
							р. п. Ордынское
						</div>
						<div className={classes.analyzes__icon_menu}>
							{icon()}
							<div>
								<Link
									href="/files/Lenina28.pdf"
									rel="noopener noreferrer"
									target="_blank"
								>
									Смотреть
								</Link>
							</div>
							<div>
								<Link href="/files/Lenina28.pdf" download>
									Скачать
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.analyzes__adress}>
						<div className={classes.analyzes__title}>Локтинская, 14</div>
						<div className={classes.analyzes__subtitle}>
							п. Октябрьский
						</div>
						<div className={classes.analyzes__icon_menu}>
							{icon()}
							<div>
								<Link
									href="/files/Loktinskaya.pdf"
									rel="noopener noreferrer"
									target="_blank"
								>
									Смотреть
								</Link>
							</div>
							<div>
								<Link href="/files/Loktinskaya.pdf" download>
									Скачать
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.analyzes__adress}>
						<div className={classes.analyzes__title}>Cадовая, 28</div>
						<div className={classes.analyzes__subtitle}>
							с. Криводановка
						</div>
						<div className={classes.analyzes__icon_menu}>
							{icon()}
							<div>
								<Link
									href="/files/Revolucii.pdf"
									rel="noopener noreferrer"
									target="_blank"
								>
									Смотреть
								</Link>
							</div>
							<div>
								<Link href="/files/Revolucii.pdf" download>
									Скачать
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.analyzes__adress}>
						<div className={classes.analyzes__title}>Революции, 45</div>
						<div className={classes.analyzes__subtitle}>
							р.п. Ордынское
						</div>
						<div className={classes.analyzes__icon_menu}>
							{icon()}
							<div>
								<Link
									href="/files/Sadovaya28.pdf"
									rel="noopener noreferrer"
									target="_blank"
								>
									Смотреть
								</Link>
							</div>
							<div>
								<Link href="/files/Sadovaya28.pdf" download>
									Скачать
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.analyzes__adress}>
						<div className={classes.analyzes__title}>Центральная, 21</div>
						<div className={classes.analyzes__subtitle}>
							п. Барланский
						</div>
						<div className={classes.analyzes__icon_menu}>
							{icon()}
							<div>
								<Link
									href="/files/Centralnaya.pdf"
									rel="noopener noreferrer"
									target="_blank"
								>
									Смотреть
								</Link>
							</div>
							<div>
								<Link href="/files/Centralnaya.pdf" download>
									Скачать
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.analyzes__adress}>
						<div className={classes.analyzes__title}>
							ул. Софийская, 1к1
						</div>
						<div className={classes.analyzes__subtitle}>мкр. ОбьГэс</div>
						<div className={classes.analyzes__icon_menu}>
							{icon()}
							<div>
								<Link
									href="/files/sofiyskaya.pdf"
									rel="noopener noreferrer"
									target="_blank"
								>
									Смотреть
								</Link>
							</div>
							<div>
								<Link href="/files/sofiyskaya.pdf" download>
									Скачать
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.analyzes__adress}>
						<div className={classes.analyzes__title}>
							ул. Гидромонтажная, 53
						</div>
						<div className={classes.analyzes__subtitle}>мкр. ОбьГэс</div>
						<div className={classes.analyzes__icon_menu}>
							{icon()}
							<div>
								<Link
									href="/files/gidromontagnaya.pdf"
									rel="noopener noreferrer"
									target="_blank"
								>
									Смотреть
								</Link>
							</div>
							<div>
								<Link href="/files/gidromontagnaya.pdf" download>
									Скачать
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.analyzes__adress}>
						<div className={classes.analyzes__title}>ул. Новая, 17/1</div>
						<div className={classes.analyzes__subtitle}>с. Верх-Тула</div>
						<div className={classes.analyzes__icon_menu}>
							{icon()}
							<div>
								<Link
									href="/files/Centralnaya.pdf"
									rel="noopener noreferrer"
									target="_blank"
								>
									Смотреть
								</Link>
							</div>
							<div>
								<Link href="/files/Centralnaya.pdf" download>
									Скачать
								</Link>
							</div>
						</div>
					</div>
				</motion.div>
			</section>
			<section>
				<div className={classes.title}>Сертификат</div>
				<div className={classes.analyzes__adress}>
					<div className={classes.analyzes__icon_menu}>
						<Image
							className={classes.analyzes__img}
							loader={myLoader}
							src="icons/pdf.webp"
							width={60}
							height={60}
							alt="pdf"
							priority
							sizes="100vw"
							style={{ width: "100%", height: "auto" }}
						/>
						<div>
							<Link
								href="/files/sertificate.pdf"
								rel="noopener noreferrer"
								target="_blank"
							>
								Смотреть
							</Link>
						</div>
						<div>
							<Link href="/files/sertificate.pdf" download>
								Скачать
							</Link>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

const variants = {
	hidden: { opacity: 0, x: 0, y: 100 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 200, y: 0 },
};

const variants2 = {
	hidden: { opacity: 0, x: -100, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 100, y: 0 },
};
