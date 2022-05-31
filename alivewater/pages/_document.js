import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
				<link rel="icon" href="../img/Icon/favicon.ico" type="image/x-icon" />
				<link rel="icon" href="../img/Icon/favicon.png" type="image/png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}