<script setup lang="ts">
import LinksContainer from './LinksContainer.vue';
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
</template>
