<script setup lang="ts">
import type { Skill } from '../types/skill';
import Pill from './ui/Pill.vue';

defineProps<{ skill: Skill }>();
</script>

<template>
	<Pill class="select-none hover:scale-105 transition ease-in-out">
		{{ skill }}
	</Pill>
</template>
