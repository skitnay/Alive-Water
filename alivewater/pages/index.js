import Head from 'next/head';
import { Header } from '../components/Header';

export default function index() {
	return (
		<Header>
			<Head>
				<title>Главная</title>
			</Head>
			<h1>index</h1>
		</Header>
	)
}