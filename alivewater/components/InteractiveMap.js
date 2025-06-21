import { useRef } from 'react';
import Script from 'next/script';

const locations = [
	{ coords: [54.8173, 82.850778], name: 'Ленина, 54', description: 'с. Ленинское,', schedule: '24/7', imageUrl: 'https://i0.photo.2gis.com/photo-gallery/d1bbbc7e-a16c-4f66-8830-7a4e0cc55266.jpg', url: 'https://go.2gis.com/lCd2k' },
	{ coords: [54.8536, 82.973971], name: 'Софийская улица, 1Б', description: 'ОбьГЭС м-н, Советский район', schedule: '24/7', imageUrl: 'https://i7.photo.2gis.com/images/branch/0/30258560148266727_f3ce.jpg', url: 'https://go.2gis.com/xscMl' },
	{ coords: [55.0241, 82.814854], name: 'Большая, (582/2)', description: 'Ленинский район', schedule: '24/7', imageUrl: 'https://i1.photo.2gis.com/images/branch/0/30258560057914920_00fe.jpg', url: 'https://go.2gis.com/Gby51' },
	{ coords: [55.0378, 82.964221], name: 'Федосеева, 8', description: 'Золотая Нива м-н, Октябрьский район', schedule: '24/7', imageUrl: 'https://i6.photo.2gis.com/photo-gallery/c328a7ef-44d7-4ed1-8323-d6e39b0b0860.jpg', url: 'https://go.2gis.com/dR9bG' },
	{ coords: [55.099852, 83.04994], name: '​Советская, 2а', description: 'с. Каменка', schedule: '24/7', imageUrl: 'https://i1.photo.2gis.com/photo-gallery/a5854bd0-6f34-4d1f-9f13-763ecfb32d07.jpg', url: 'https://go.2gis.com/7AMfx' },
	{ coords: [55.088337, 82.651032], name: '​Садовая, 28', description: 'с. Криводановка', schedule: '24/7', imageUrl: 'https://i0.photo.2gis.com/images/branch/0/30258560079963062_43f0.jpg', url: 'https://go.2gis.com/7fbPP' },
	{ coords: [54.9762, 83.111047], name: 'Улица Андреева, 88', description: 'с. Новолуговое', schedule: 'с 08:00 до 22:00', imageUrl: 'https://i8.photo.2gis.com/images/branch/0/30258560098005162_50dc.jpg', url: 'https://go.2gis.com/SLnsL' },
	{ coords: [55.0486, 83.022286], name: 'Коминтерна, 78/1', description: 'Дзержинский район', schedule: '24/7', imageUrl: 'https://i1.photo.2gis.com/photo-gallery/20ba4c10-d078-405f-a192-8209065e0ddc.jpg', url: 'https://go.2gis.com/1vCMT' },
	{ coords: [54.9679, 82.499531], name: 'Строительная, 6/1', description: 'с. Чистополье, Коченевский район', schedule: '24/7', imageUrl: 'https://i0.photo.2gis.com/photo-gallery/949d30f3-9053-41b7-96f8-89dbc7fbf85e.jpg', url: 'https://go.2gis.com/vCF0P' },
	{ coords: [55.091632, 83.050038], name: 'Микрорайон Олимпийской Славы, 1', description: 'с. Каменка', schedule: 'с 08:00 до 23:00', imageUrl: 'https://i5.photo.2gis.com/images/branch/0/30258560105710477_cd0a.jpg', url: 'https://go.2gis.com/1iHle' },
	{ coords: [55.083726, 83.042237], name: 'Кирова, 37', description: 'пос. Восход', schedule: '24/7', imageUrl: 'https://i2.photo.2gis.com/images/branch/0/30258560099109344_9d74.jpg', url: 'https://go.2gis.com/q80Qx' },
	{ coords: [55.083232, 82.645245], name: 'Микрорайон, 18', description: 'с. Криводановка', schedule: '24/7', imageUrl: 'https://i9.photo.2gis.com/images/branch/0/30258560106922624_36c8.jpg', url: 'https://go.2gis.com/rbSkI' },
	{ coords: [55.083963, 82.647985], name: 'Микрорайон, 26', description: 'с. Криводановка', schedule: '24/7', imageUrl: 'https://i3.photo.2gis.com/images/branch/0/30258560106923658_400b.jpg', url: 'https://go.2gis.com/M3w5g' },
	{ coords: [55.08583, 82.643406], name: 'Микрорайон, 2', description: 'с. Криводановка', schedule: '24/7', imageUrl: 'https://i4.photo.2gis.com/images/branch/0/30258560106130705_3aee.jpg', url: 'https://go.2gis.com/zGu3E' },
	{ coords: [55.086735, 82.639493], name: 'Микрорайон, 9', description: 'с. Криводановка', schedule: '24/7', imageUrl: 'https://i7.photo.2gis.com/images/branch/0/30258560107090396_dce9.jpg', url: 'https://go.2gis.com/OhpnO' },
	{ coords: [55.015024, 82.469451], name: 'Сватухина, 7/1', description: 'с. Прокудское, Коченевский район', schedule: '24/7', imageUrl: 'https://i9.photo.2gis.com/photo-gallery/bdcced5f-0a02-4b72-ab70-b542a45c4a2a.jpg', url: 'https://go.2gis.com/mv59A' },
	{ coords: [55.011384, 82.466272], name: 'Есенина, 1г', description: 'с. Прокудское, Коченевский район', schedule: '24/7', imageUrl: 'https://i6.photo.2gis.com/images/branch/0/30258560128824903_d3ed.jpg', url: "https://go.2gis.com/LacwC" },
	{ coords: [55.010332, 82.465263], name: 'Есенина, 28', description: 'с. Прокудское, Коченевский район', schedule: '24/7', imageUrl: 'https://i8.photo.2gis.com/images/branch/0/30258560069930557_8c6d.jpg', url: 'https://go.2gis.com/CIe3P' },
	{ coords: [54.578147, 82.233488], name: 'Кандикова, 20', description: 'с. Верх-Ирмень, Ордынский район', schedule: '24/7', imageUrl: 'https://i3.photo.2gis.com/photo-gallery/35992a0f-b741-430a-ba60-a940ac8a39c0.jpg', url: 'https://go.2gis.com/cbut4' },
	{ coords: [54.363925, 81.909008], name: 'Проспект Ленина, 2', description: 'рп. Ордынское, Ордынский район', schedule: 'с 08:00 до 22:00', imageUrl: 'https://i3.photo.2gis.com/images/branch/0/30258560048268318_90ef.jpg', url: 'https://go.2gis.com/nfVP3' },
	{ coords: [54.36439, 81.896422], name: 'Проспект Революции, 45', description: 'рп. Ордынское, Ордынский район', schedule: '24/7', imageUrl: 'https://i6.photo.2gis.com/images/branch/0/30258560085664171_25ca.jpg', url: 'https://go.2gis.com/MgZYC' },
	{ coords: [55.163112, 82.982874], name: '​Улица Солидарности, 15', description: 'Пашино м-н, Калининский район', schedule: '24/7', imageUrl: 'https://i8.photo.2gis.com/images/branch/0/30258560109245918_f92a.jpg', url: 'https://go.2gis.com/7iNns' },
	{ coords: [55.189173, 83.141794], name: '​Локтинская улица, 14', description: 'пос. Октябрьский, Мошковский район', schedule: 'с 08:00 до 23:00', imageUrl: 'https://i9.photo.2gis.com/images/branch/0/30258560069991351_2d90.jpg', url: 'https://go.2gis.com/OFpHr' },
	{ coords: [55.191077, 83.14093], name: '​Улица Согласия, 4', description: 'Светлый жилой комплекс, пос. Октябрьский, Мошковский район', schedule: 'с 08:00 до 23:00', imageUrl: 'https://i9.photo.2gis.com/images/branch/0/30258560065157009_87dd.jpg', url: 'https://go.2gis.com/HvLvt' },
	{ coords: [55.196241, 83.146154], name: '​Французский квартал, 29', description: 'Светлый жилой комплекс, пос. Октябрьский, Мошковский район', schedule: 'с 08:00 до 23:00', imageUrl: 'https://i0.photo.2gis.com/photo-gallery/41db0e9c-dc17-447e-8650-b9196d02a77a.jpg', url: 'https://go.2gis.com/y0UeO' },
	{ coords: [55.199213, 83.142914], name: '​Лучезарная, 17', description: 'Светлый жилой комплекс, пос. Октябрьский, Мошковский район', schedule: 'с 09:00 до 21:00', imageUrl: 'https://i9.photo.2gis.com/photo-gallery/d56953af-2a45-4c2b-8ba2-72a65155197f.jpg', url: 'https://go.2gis.com/BaBjH' },
	{ coords: [55.169385, 83.239387], name: '​Центральная, 21', description: 'пос. Барлакский, Мошковский район', schedule: '24/7', imageUrl: 'https://i8.photo.2gis.com/images/branch/0/30258560075963992_7491.jpg', url: 'https://go.2gis.com/FKFBy' },
];

export default function InteractiveMap() {
	const mapRef = useRef(null);

	const handleLoad = () => {
		if (typeof window !== 'undefined' && window.DG && mapRef.current) {
			window.DG.then(() => {
				const map = window.DG.map(mapRef.current, {
					center: [54.88, 83.0],
					zoom: 8,
					zoomControl: true,
					fullscreenControl: false,
				});

				locations.forEach(loc => {
					const popupHtml = `
					  <strong>${loc.name}</strong><br/>
					  ${loc.description ? `<small>${loc.description}</small><br/>` : ''}
					  ${loc.schedule ? `<em>Время работы: ${loc.schedule}</em><br/>` : ''}
					  ${loc.imageUrl ? `<img src="${loc.imageUrl}" alt="${loc.name}" width="100" style="margin-top:4px"/><br/>` : ''}
					  ${loc.url ? `<a href="${loc.url}" target="_blank" rel="noopener noreferrer">Открыть в 2ГИС</a>` : ''}
					`;
					window.DG.marker(loc.coords).addTo(map).bindPopup(popupHtml);
				});
			});
		}
	};

	return (
		<>
			<Script
				src="https://maps.api.2gis.ru/2.0/loader.js?pkg=full"
				strategy="afterInteractive"
				onLoad={handleLoad}
			/>
			<div ref={mapRef} style={{ width: '100%', height: '500px' }} />
		</>
	);
}