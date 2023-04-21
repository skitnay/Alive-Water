import "../styles/style.scss";
import "keen-slider/keen-slider.min.css";
import { AnimatePresence } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Analytics } from '@vercel/analytics/react';
// import localFont from 'next/font/local'

// const myFont = localFont({ src: './my-font.woff2' })



export default function MyApp({ Component, pageProps, router }) {
	const url = `${router.route}`;

	return (
		<>
			<Header />
			<AnimatePresence
				exitBeforeEnter
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<Component {...pageProps} canonical={url} key={url} />
				<Analytics />
			</AnimatePresence>
			<Footer />
		</>
	);
}
