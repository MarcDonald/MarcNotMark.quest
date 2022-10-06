import type { LinksFunction } from '@remix-run/cloudflare';

import styleSheet from '~/styles/homepage.css';

export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styleSheet }];
};
export default function Index() {
	return (
		<main>
			<div className={'card-wrapper'}>
				<h1>
					My name is <br />
					<strong>MARC</strong> <br />
					not Mark
				</h1>
			</div>
		</main>
	);
}
