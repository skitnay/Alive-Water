import { useRef } from 'react';
import Script from 'next/script';

const locations = [
	{ coords: [54.8173, 82.850778], name: 'Ленина, 54' },
	{ coords: [54.8536, 82.973971], name: 'Софийская улица, 1Б' },
	{ coords: [55.0241, 82.814854], name: 'Большая, (582/2)' },
	{ coords: [55.0378, 82.964221], name: 'Федосеева, 8' },
	{ coords: [54.9762, 83.111047], name: 'Улица Андреева, 88' },
	{ coords: [55.0486, 83.022286], name: 'Коминтерна, 78/1' },
	{ coords: [54.9679, 82.499531], name: 'Строительная, 6/1' },
	{ coords: [55.091632, 83.050038], name: 'Микрорайон Олимпийской Славы, 1' },
	{ coords: [55.083726, 83.042237], name: 'Кирова, 37' },
	{ coords: [55.083232, 82.645245], name: 'Микрорайон, 18' },
	{ coords: [55.083963, 82.647985], name: 'Микрорайон, 26' },
	{ coords: [55.08583, 82.643406], name: 'Микрорайон, 2' },
	{ coords: [55.086735, 82.639493], name: 'Микрорайон, 9' },
	{ coords: [54.967944, 82.499491], name: 'Строительная, 6/1' },
	{ coords: [55.015024, 82.469451], name: 'Сватухина, 7/1' },
	{ coords: [55.011384, 82.466272], name: 'Есенина, 1г' },
	{ coords: [55.010332, 82.465263], name: 'Есенина, 28' },
	{ coords: [54.578147, 82.233488], name: 'Кандикова, 20' },
	{ coords: [54.363925, 81.909008], name: 'Проспект Ленина, 2' },
	{ coords: [54.36439, 81.896422], name: 'Проспект Революции, 45' },
];

export default function InteractiveMap() {
	const mapRef = useRef(null);

	const handleLoad = () => {
		if (typeof window !== 'undefined' && window.DG && mapRef.current) {
			window.DG.then(() => {
				const map = window.DG.map(mapRef.current, {
					center: [54.98, 82.90],
					zoom: 10,
				});

				locations.forEach(loc => {
					window.DG.marker(loc.coords).addTo(map).bindPopup(loc.name);
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