<script setup lang="ts">
import type { LinkType } from '../types/link';
import Link from './ui/Link.vue';

defineProps<{ links: LinkType[] }>();
</script>

<template>
	<div class="flex gap-3 mb-4">
		<Link v-for="link in links" :link="link" />
	</div>
</template>
