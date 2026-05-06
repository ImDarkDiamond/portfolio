<script setup lang="ts">
import Header3 from './ui/Header3.vue';
import Paragraph from './ui/Paragraph.vue';
import Link from './ui/Link.vue'
import Box from './ui/Box.vue';
import Pill from './ui/Pill.vue';
import type { Repo } from '../types/repo';

defineProps<{ repo: Repo }>();
</script>

<template>
	<Box>
		<div class="flex flex-wrap items-center gap-2">
			<Header3>{{ repo.title }}</Header3>
            <Pill class="mb-4">{{ repo.status }}</Pill>
        </div>


		<Paragraph class="text-sm">
			{{ repo.description }}
		</Paragraph>

		<Link :link="{ title: 'Github repo', url: repo.url }" />
	</Box>
</template>
