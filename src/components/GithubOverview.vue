<script setup lang="ts">
import Link from './ui/Link.vue';
</script>

<template>
	<!-- Thank you wakatime for making this so easy <3 -->
	<figure><embed src="https://wakatime.com/share/@ImDarkDiamond/8872c556-d7d0-4818-8218-816a0bf15a42.svg"></embed></figure>

	<Link :link="{ title: 'Github profile', url: 'https://github.com/imdarkdiamond' }" />
</template>
