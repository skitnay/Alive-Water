import React from 'react';
import classes from "../styles/index.module.scss";

const addresses = [
	{
		title: 'Большая, (582/2)',
		subtitle: 'Ленинский район, Новосибирск',
	},
	{
		title: 'Микрорайон Олимпийской Славы, 1',
		subtitle: 'с. Каменка',
	},
	{
		title: 'Микрорайон, 2',
		subtitle: 'с. Криводановка',
	},
	{
		title: 'Согласия, 4',
		subtitle: 'пос. Октябрьский, Мошковский район',
	},
	{
		title: 'Есенина, 28',
		subtitle: 'с. Прокудское, Коченевский район',
	},
	{
		title: 'Октябрьская, 7 к1',
		subtitle: 'пос. Октябрьский, Мошковский район',
	},
	{
		title: 'Локтинская, 14',
		subtitle: 'пос. Октябрьский, Мошковский район',
	},
	{
		title: 'Центральная, 21',
		subtitle: 'пос. Барлакский, Мошковский район',
	},
	{
		title: 'Проспект Ленина, 2',
		subtitle: 'рп. Ордынское, Ордынский район',
	},
	{
		title: 'Садовая, 28',
		subtitle: 'с. Криводановка',
	},
	{
		title: 'Проспект Революции, 45',
		subtitle: 'рп. Ордынское, Ордынский район',
	},
	{
		title: 'Гидромонтажная, 53',
		subtitle: 'г. Новосибирск, Микрорайон ОбьГЭС',
	},
	{
		title: 'Софийская, 1к1',
		subtitle: 'г. Новосибирск, Микрорайон ОбьГЭС',
	},
	{
		title: 'Андреева, 88',
		subtitle: 'г. Новосибирск, с. Новолуговое',
	},
	{
		title: '​Кирова, 37',
		subtitle: 'г. Новосибирск, пос. Восход',
	},
];

export default function Addresses() {
	return (
		<>
			{addresses.map((address, index) => (
				<div className={classes.map__adress} key={index}>
					<div className={classes.map__title}>{address.title}</div>
					<div className={classes.map__subtitle}>{address.subtitle}</div>
				</div>
			))}
		</>
	);
}
