import { useRef, useEffect } from 'react';
import Script from 'next/script';
import addresses from '../data/addresses.json';

export default function InteractiveMap() {
	const mapRef = useRef(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			addresses.forEach(loc => {
				if (loc.imageUrl) {
					const img = new Image();
					img.src = loc.imageUrl;
				}
			});
		}
	}, []);

	const handleLoad = () => {
		if (typeof window !== 'undefined' && window.DG && mapRef.current) {
			window.DG.then(() => {
				const map = window.DG.map(mapRef.current, {
					center: [54.88, 83.0],
					zoom: 8,
					zoomControl: true,
					fullscreenControl: false,
					key: "0addda38-8630-487b-9045-8a5cceeb3a29"
				});

				addresses.forEach(loc => {
					const popupHtml = `
					  <strong>${loc.name}</strong><br/>
					  ${loc.subtitle ? `<small>${loc.subtitle}</small><br/>` : ''}
					  ${loc.schedule ? `<em>Время работы: ${loc.schedule}</em><br/>` : ''}
					  ${loc.url ? `<a href="${loc.url}" target="_blank" rel="noopener noreferrer">Открыть в 2ГИС</a>` : ''}
					  ${loc.imageUrl ? `<img src="${loc.imageUrl}" alt="${loc.name}" style="margin-top:4px; max-width:100%; height:auto; display:block; border-radius:4px;"/><br/>` : ''}
					`;
					window.DG.marker(loc.coords).addTo(map).bindPopup(popupHtml);
				});
			});
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined' && window.DG && typeof window.DG.then === 'function') {
			handleLoad();
		}
	}, []);

	return (
		<>
			<Script
				src='https://maps.api.2gis.ru/2.0/loader.js?pkg=full'
				strategy="afterInteractive"
				onLoad={handleLoad}
			/>
			<div ref={mapRef} style={{ width: '100%', height: '500px' }} />
		</>
	);
}