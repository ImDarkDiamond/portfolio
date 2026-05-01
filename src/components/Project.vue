<script setup lang="ts">
import Header2 from './ui/Header2.vue';
import Paragraph from './ui/Paragraph.vue';
import LinksContainer from './LinksContainer.vue';
import Divider from './ui/Divider.vue';
import type { Project } from '../types/project';

defineProps<{ project: Project }>();
</script>

<template>
  	<div class="flex gap-8">
    	<div class="w-32 shrink-0 text-gray-300">
      		{{ project.date }}
     	</div>
      	<div>
       		<Header2>{{ project.name }}</Header2>

         	<LinksContainer :links="project.links"></LinksContainer>

         	<Paragraph>
        		{{ project.description }}
          	</Paragraph>

           	<Divider />
    	</div>
   	</div>
</template>
