import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/index.vue";

// I don't see myself needing more pages but I like to have the flexibility
export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Index
		}
	]
});
