<script setup lang="ts">
import Header2 from './ui/Header2.vue';
import Header3 from './ui/Header3.vue';
import Paragraph from './ui/Paragraph.vue';
import LinksContainer from './LinksContainer.vue';
import Divider from './ui/Divider.vue';
import type { Experience } from '../types/experience';

defineProps<{ experience: Experience }>();
</script>

<template>
  	<div class="flex gap-8">
    	<div class="w-32 shrink-0 text-gray-300">
      		{{ experience.date }}
     	</div>
      	<div>
       		<div class="flex items-center gap-2">
       			<Header2>{{ experience.company }}</Header2>
         		<Header3 class="text-gray-500">•</Header3>
           		<Header3>{{ experience.title }}</Header3>
         	</div>

         	<LinksContainer :links="experience.links"></LinksContainer>

         	<Paragraph>
        		{{ experience.description }}
          	</Paragraph>

           	<Divider />
    	</div>
   	</div>
</template>
