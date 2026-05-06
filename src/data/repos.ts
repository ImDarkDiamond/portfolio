import type { Repo } from "../types/repo";

export const repos: Repo[] = [
	{
		title: 'portfolio',
		description: 'My personal portfolio website built with Vue.js, TypeScript, and TailwindCSS.',
		url: 'https://github.com/imdarkdiamond/portfolio',
		status: 'Active'
	},
	{
  		title: 'redis-sharder',
    	description: 'Scalable sharding solution for Discord bots using the Eris library. Distributes thousands of shards (websockets) across multiple processes for improved performance and horizontal scaling.',
		url: 'https://github.com/privy-gg/redis-sharder',
		status: 'Archived'
	},
];
