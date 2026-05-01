import type { Project } from "../types/project";

export const projects: Project[] = [
	{
		date: '2018 - present',
		name: 'Arcane',
		company: 'Privy.gg LLC',
		description: 'Launched and scaled from 0 to over 2.85 million Discord communities, establishing Arcane as one of the largest Discord bots. Recently rewrote the entire service from the ground up in Rust to reduce operating costs by ~60%. Increased sales by over 30% in 2025.',
		links: [
			{
				title: 'arcane.bot',
				url: 'https://arcane.bot'
			},
			{
				title: 'Github',
				url: 'https://github.com/privy-gg'
			},
		]
	},
	{
		date: '2021 - present',
		name: 'Captcha.bot',
		company: 'Privy.gg LLC',
		description: 'Acquired and rebranded a competing service into Captcha.bot in 2021. Scaled it from 75K Discord communities to over 500K while turning it profitable within one year. Led full project execution including rebranding, development, and new CAPTCHA flows in partnership with external providers. Rewritten code cut operating costs by 90%. Improved overall functionality and user experience.',
		links: [
			{
				title: 'captcha.bot',
				url: 'https://captcha.bot'
			},
			{
				title: 'Github',
				url: 'https://github.com/privy-gg'
			},
		]
	},
];
