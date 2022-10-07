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
	links as breakpointHelperLinks,
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
	title: "It's Marc, not Mark!",
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

function faviconLinks() {
	return [
		{
			rel: 'apple-touch-icon-precomposed',
			sizes: '57x57',
			href: '/favicons/default/apple-touch-icon-57x57.png',
		},
		{
			rel: 'apple-touch-icon-precomposed',
			sizes: '114x114',
			href: '/favicons/default/apple-touch-icon-114x114.png',
		},
		{
			rel: 'apple-touch-icon-precomposed',
			sizes: '72x72',
			href: '/favicons/default/apple-touch-icon-72x72.png',
		},
		{
			rel: 'apple-touch-icon-precomposed',
			sizes: '144x144',
			href: '/favicons/default/apple-touch-icon-144x144.png',
		},
		{
			rel: 'apple-touch-icon-precomposed',
			sizes: '60x60',
			href: '/favicons/default/apple-touch-icon-60x60.png',
		},
		{
			rel: 'apple-touch-icon-precomposed',
			sizes: '120x120',
			href: '/favicons/default/apple-touch-icon-120x120.png',
		},
		{
			rel: 'apple-touch-icon-precomposed',
			sizes: '76x76',
			href: '/favicons/default/apple-touch-icon-76x76.png',
		},
		{
			rel: 'apple-touch-icon-precomposed',
			sizes: '152x152',
			href: '/favicons/default/apple-touch-icon-152x152.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicons/default/favicon-196x196.png',
			sizes: '196x196',
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicons/default/favicon-96x96.png',
			sizes: '96x96',
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicons/default/favicon-32x32.png',
			sizes: '32x32',
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicons/default/favicon-16x16.png',
			sizes: '16x16',
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicons/default/favicon-128.png',
			sizes: '128x128',
		},
	];
}

export const links: LinksFunction = () => {
	return [
		{ rel: 'stylesheet', href: styleResetUrl },
		{ rel: 'stylesheet', href: globalStylesUrl },
		...themeLinks(),
		...deviceLinks(),
		...breakpointHelperLinks(),
		...faviconLinks(),
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
