import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='ru'>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
				<link rel="preconnect" href="https://maps.api.2gis.ru" />
				<link rel="shortcut icon" href="images/mobile/favicon.ico" />
				<link rel="shortcut icon" href="images/mobile/favicon.png" />
				<link rel="apple-touch-icon" href="images/mobile/Apple-touch.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="images/mobile/Apple-touch-retina.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="images/mobile/Apple-touch-ipad.png" />
				<link rel="apple-touch-icon" sizes="167x167" href="images/mobile/Apple-touch-ipad-retina.png" />
				<meta name="theme-color" content="#263c5c" />
				<meta charSet="UTF-8" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="google-site-verification" content="1bG5J6h09kTshNHfwS4ru245e062oHvOW5NaNZW8gNk" />
				<meta property="og:title" content="Живая Вода Новосибирск" />
				<meta property="og:type" content="website" />
				<meta property="og:description" content="Питьевая вода высокого качества в Новосибирске!" />
				<meta property="og:image" content="images/staff/site-prev.jpg" />
				<meta name="robots" />
				<meta name="description" content="Питьевая вода высокого качества в Новосибирске!" />
				<meta name='wmail-verification' content='102d9e06e62e85f7a7f2bd41e6ce0ea0' />
				<link rel="image_src" href="images/staff/site-prev.jpg" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html >
	)
}