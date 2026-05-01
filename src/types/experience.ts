import type { LinkType } from "./link";

export interface Experience {
	date: string,
	title: string,
	company: string,
	description: string,
	links: LinkType[]
}
