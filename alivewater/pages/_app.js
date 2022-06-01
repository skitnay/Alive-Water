import '../styles/style.scss';
import { AnimatePresence } from 'framer-motion'


export default function MyApp({ Component, pageProps, router }) {
	const url = `${router.route}`
	return (
		<AnimatePresence
			exitBeforeEnter
			initial={false}
			onExitComplete={() => window.scrollTo(0, 0)}>
			<Component {...pageProps} canonical={url} key={url} />
		</AnimatePresence>

	)
}