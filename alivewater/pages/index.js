import Head from 'next/head';
import { Layout } from '../components/Layout';

export default function index() {
	return (
		<Layout>
			<Head>
				<title>Главная</title>
			</Head>
			<h1>index</h1>
		</Layout>
	)
}