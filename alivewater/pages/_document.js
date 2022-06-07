import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
				<link rel="shortcut icon" href="/static/favicon.ico" />
				<link rel="shortcut icon" href="/static/favicon.png" />
				<meta name="theme-color" content="#263c5c" />
				<meta charSet="UTF-8" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="google-site-verification" content="gMuzE89aJAghIlUGo0fbZ0PECVkSjj0FvKx3lDteqmM" />
				<meta name="robots" />
				<meta name="description" content="Питьевая вода высокого качества в Новосибирске!" />
				<meta name="yandex-verification" content="217e91636e71a3de" />
				<meta name='wmail-verification' content='102d9e06e62e85f7a7f2bd41e6ce0ea0' />
				<meta property="og:title" content="Живая Вода Новосибирск" />
				<meta property="og:description" content="Питьевая вода высокого качества в Новосибирске!" />
				<meta property="og:image" content="/public/logo.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}