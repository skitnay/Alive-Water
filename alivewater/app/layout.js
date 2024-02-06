export const metadata = {
  title: 'Такой страницы нету',
}

export default function RootLayout({ children }) {
 return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
