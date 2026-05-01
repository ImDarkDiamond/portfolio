<script setup lang="ts">
import type { LinkType } from '../../types/link';

defineProps<{ link: LinkType }>();
</script>

<template>
	<div class="flex items-center gap-1">
		<a :href="link.url" target="_blank" class="text-gray-50 hover:text-gray-300 underline underline-offset-8" >{{ link.title }}</a>

		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4 text-white">
			<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
		</svg>
	</div>
</template>
