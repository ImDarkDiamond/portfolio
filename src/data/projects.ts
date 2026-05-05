import type { Project } from "../types/project";

export const projects: Project[] = [
  	{
    	date: '2018 - present',
     	name: 'Arcane',
      	company: 'Privy.gg LLC',
       	description: 'Designed, developed, and scaled a Discord bot to 2.85M+ servers. Full rewrite in Rust delivered ~60% infrastructure cost reduction and major performance gains. Built backend services (Node.js/Rust), Vue frontend, MongoDB data layer, Linux deployments, and real-time features.',
        links: [
			{
				title: 'arcane.bot',
				url: 'https://arcane.bot'
			},
			{
				title: 'Github',
				url: 'https://github.com/privy-gg'
			}
        ]
   	},
    {
    	date: '2021 - present',
     	name: 'Captcha.bot',
      	company: 'Privy.gg LLC',
       	description: 'Acquired, rebranded, and scaled from 75K to 500K+ Discord servers. Delivered 90% cost reduction via full rewrite. Implemented new CAPTCHA flows, backend APIs (Node.js/Rust), Vue dashboards, Postgresql, and optimized Linux-based deployments while achieving profitability in year one.',
        links: [
			{
				title: 'captcha.bot',
				url: 'https://captcha.bot'
			},
			{
				title: 'Github',
				url: 'https://github.com/privy-gg'
			}
        ]
    }
];
