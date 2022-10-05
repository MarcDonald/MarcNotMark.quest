import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

import {
	BreakpointHelper,
	links as BreakpointHelperLinks,
} from '~/components/BreakpointHelper';
import desktopVariables from '~/styles/app/devices/variables-desktop.css';
import laptopVariables from '~/styles/app/devices/variables-laptop.css';
import phoneVariables from '~/styles/app/devices/variables-phone.css';
import tabletVariables from '~/styles/app/devices/variables-tablet.css';
import globalStylesUrl from '~/styles/app/global.css';
import styleResetUrl from '~/styles/app/reset.css';
import darkVariables from '~/styles/app/themes/variables-dark.css';
import lightVariables from '~/styles/app/themes/variables-light.css';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'My name is Marc not Mark',
	viewport: 'width=device-width,initial-scale=1',
});

const deviceLinks = () => [
	{
		rel: 'stylesheet',
		href: desktopVariables,
	},
	{
		rel: 'stylesheet',
		href: laptopVariables,
		media: '(max-width: 93.75rem)',
	},
	{
		rel: 'stylesheet',
		href: tabletVariables,
		media: '(max-width: 68.75rem)',
	},
	{
		rel: 'stylesheet',
		href: phoneVariables,
		media: '(max-width: 34.375rem)',
	},
];

const themeLinks = () => [
	{
		rel: 'stylesheet',
		href: lightVariables,
		media: '(prefers-color-scheme: light)',
	},
	{
		rel: 'stylesheet',
		href: darkVariables,
		media: '(prefers-color-scheme: dark)',
	},
];

export const links: LinksFunction = () => {
	return [
		{ rel: 'stylesheet', href: styleResetUrl },
		{ rel: 'stylesheet', href: globalStylesUrl },
		...themeLinks(),
		...deviceLinks(),
		...BreakpointHelperLinks(),
	];
};

export default function App() {
	// noinspection HtmlRequiredTitleElement
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<BreakpointHelper />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
