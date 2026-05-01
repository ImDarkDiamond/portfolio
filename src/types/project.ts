import type { LinkType } from "./link";

export interface Project {
	date: string,
	name: string,
	company?: string,
	description: string,
	links: LinkType[]
}
