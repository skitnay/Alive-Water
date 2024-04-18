import "../styles/style.scss";
import "keen-slider/keen-slider.min.css";
import { AnimatePresence } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Analytics } from '@vercel/analytics/react';
import Modal from "../components/Modal";
import { useState } from "react";

export default function MyApp({ Component, pageProps, router }) {
	const url = `${router.route}`;
	const [showModal, setShowModal] = useState(false)

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
			<Modal isvisible={showModal} onClose={() => setShowModal(false)} />
			<Footer setShowModal={() => setShowModal(true)} />
		</>
	);
}
