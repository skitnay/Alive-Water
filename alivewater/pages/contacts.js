import { Header } from '../components/Header';
import Head from 'next/dist/shared/lib/head';

export default function contacts() {
	return <Header>
		<Head>
			<title>Контакты</title>
		</Head>
		<h1>contacts</h1>
	</Header>
}