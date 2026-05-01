<script setup lang="ts">
import Header2 from './ui/Header2.vue';
import Paragraph from './ui/Paragraph.vue';
import type { Education } from '../types/education';
import Link from './ui/Link.vue';

defineProps<{ education: Education }>();
</script>

<template>
	<div>
		<Header2>{{ education.degree }}</Header2>

		<Paragraph>
			{{ education.date }}
			<br>
			<Link v-if="education.link" :link="education.link"></Link>
    	</Paragraph>
	</div>
</template>
