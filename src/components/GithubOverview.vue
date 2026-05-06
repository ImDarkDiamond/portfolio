<script setup lang="ts">
import Paragraph from './ui/Paragraph.vue';
import LinksContainer from './LinksContainer.vue';
import Repo from './Repo.vue';
import { repos } from '../data/repos';
</script>

<template>
	<!-- Thank you wakatime for making this so easy <3 -->
	<figure class="overflow-auto mb-4"><embed src="https://wakatime.com/share/@ImDarkDiamond/8872c556-d7d0-4818-8218-816a0bf15a42.svg"></embed></figure>

	<LinksContainer
		:links="[
			{ title: 'Github profile', url: 'https://github.com/imdarkdiamond' },
			{ title: 'WakaTime profile', url: 'https://wakatime.com/@ImDarkDiamond' }
		]"
	/>

	<Paragraph>
		Most of my work is closed source but you can find some of my open source code here:
	</Paragraph>


	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<Repo v-for="repo in repos" :repo="repo" />
	</div>
</template>
