import { motion } from 'framer-motion'

export function Layout({ children }) {
	return (
		<>
			<div>
				<motion.main
					initial="hidden"
					animate="enter"
					exit="exit"
					variants={variants}
					transition={{
						duration: 0.3,
						type: 'linear',
						rotate: '50'
					}}
				>
					{children}
				</motion.main>
			</div>
		</>
	)
}

const variants = {
	hidden: { opacity: 0, x: 0, y: 100 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 300, y: 0 },
}