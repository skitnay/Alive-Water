import { Roboto } from "next/font/google";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const metadata = {
	title: "Живая Вода Новосибирск",
	description: "Питьевая вода высокого качества в Новосибирске!",
	openGraph: {
		title: "Живая Вода Новосибирск",
		description: "Питьевая вода высокого качества в Новосибирске!",
		images: ["/images/staff/site-prev.jpg"],
	},
	icons: {
		icon: ["/images/mobile/favicon.ico", "/images/mobile/favicon.png"],
		apple: [
			"/images/mobile/Apple-touch.png",
			{ url: "/images/mobile/Apple-touch-retina.png", sizes: "180x180" },
			{ url: "/images/mobile/Apple-touch-ipad.png", sizes: "152x152" },
			{
				url: "/images/mobile/Apple-touch-ipad-retina.png",
				sizes: "167x167",
			},
		],
	},
	metadataBase: new URL("https://voda54.ru"),
};

export const viewport = {
	themeColor: "#263c5c",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
