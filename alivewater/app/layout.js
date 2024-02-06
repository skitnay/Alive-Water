export const metadata = {
  title: 'Такой страницы нету'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
        <link rel="shortcut icon" href="/public/images/mobile/favicon.ico" />
        <link rel="shortcut icon" href="/public/images/mobile/favicon.png" />
        <link rel="apple-touch-icon" href="/public/images/mobile/Apple-touch.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/public/images/mobile//Apple-touch-retina.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/public/images/mobile//Apple-touch-ipad.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/public/images/mobile//Apple-touch-ipad-retina.png" />
        <meta name="theme-color" content="#263c5c" />
        <meta charSet="UTF-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="Питьевая вода высокого качества в Новосибирске!" />
        <meta property="og:title" content="Живая Вода Новосибирск" />
        <meta property="og:description" content="Питьевая вода высокого качества в Новосибирске!" />
        <meta property="og:image" content="/public/images/staff/site-prev.jpg" />
        <link rel="image_src" href="/public/images/staff/site-prev.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
