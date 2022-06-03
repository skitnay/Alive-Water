import '../styles/style.scss';
import { AnimatePresence } from 'framer-motion'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


export default function MyApp({ Component, pageProps, router }) {
	const url = `${router.route}`
	return (
		<>
			<Header />
			<AnimatePresence
				exitBeforeEnter
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}>
				<Component {...pageProps} canonical={url} key={url} />
			</AnimatePresence>
			<Footer />
		</>

	)
}

