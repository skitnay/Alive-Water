import { YMInitializer } from 'react-yandex-metrika';

class MyComponent extends React.Component {
	render() {
		return (
			<div>
			// SNIP
				<YMInitializer accounts={[83357116]} />
			// SNIP
			</div>
		);
	}
});