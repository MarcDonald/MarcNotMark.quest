import type { LinksFunction } from '@remix-run/cloudflare';
import { GitHub } from 'react-feather';

import styleSheet from '~/styles/homepage.css';

export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styleSheet }];
};

export default function Index() {
	return (
		<div className={'page-wrapper'}>
			<header className={'name-header'}>
				<h1 id={'short-header'}>It's Marc</h1>
				<h1 id={'long-header'}>The Name's Marc</h1>
				<h2>Not Mark!</h2>
			</header>
			<main className={'other-marcs'}>
				<a href={'https://en.wikipedia.org/wiki/Marc_Okrand'}>
					Ever enjoy a glass of chech'tluth while polishing your bat'leth?
				</a>
				<a href={'https://en.wikipedia.org/wiki/Marc_Gr%C3%A9goire'}>
					Do you like not having your food stick to your pot as you're cooking?
				</a>
				<a href={'https://id.iit.edu/people/dr-marc-r-hannah'}>
					Are you nostalgic for the graphics of games from the 90s?
				</a>
				<h3>All of these were brought to you by a Marc!</h3>
			</main>
			<footer>
				<div>{/*Spacer*/}</div>
				<div className={'footer-credits-wrapper'}>
					<p className={'footer-primary'}>
						Created by <a href={'https://marcdonald.com'}>Marc Donald</a>
					</p>
					<p className={'footer-secondary'}>(not Mark Donald)</p>
				</div>
				<div className={'footer-code-wrapper'}>
					<a href={'https://github.com/MarcDonald/MarcNotMark.quest'}>
						<GitHub />
					</a>
				</div>
			</footer>
		</div>
	);
}
