<script setup lang="ts">
import Experience from '../components/Experience.vue';
import Project from '../components/Project.vue';
import Header from '../components/ui/Header.vue';
import Header3 from '../components/ui/Header3.vue';
import Paragraph from '../components/ui/Paragraph.vue';
import Divider from '../components/ui/Divider.vue';
import SocialLinks from '../components/SocialLinks.vue';
import Education from '../components/Education.vue';
import Skill from '../components/Skill.vue';

import { experiences } from '../data/experiences';
import { education } from '../data/education';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
</script>

<template>
	<div class="mt-24 flex flex-wrap md:flex-nowrap gap-8">
 		<div class="w-48 shrink-0 text-gray-300">
   			<img class="rounded-full" src="/avatar.webp" alt="Tesla Model S Plaid / Headshot"></img>
  		</div>
    	<div>
   			<Header>
      			Jayden Andrews
      		</Header>

       		<Paragraph>
         		Software developer in Utah
         	</Paragraph>

            <Paragraph>
          		Software developer & Founder of Privy.gg. Self taught since age 13, I specialize in building fast and scalable software using Rust, TypeScript, and Vue.js.
            </Paragraph>

            <SocialLinks/>
     	</div>
	</div>

	<Divider />

	<Header3>
		Tech Stack
	</Header3>

	<div class="flex flex-wrap gap-x-2 gap-y-4">
		<Skill v-for="skill in skills" :skill="skill"></Skill>
	</div>

	<Divider />

	<Header3>
		Work Experience
	</Header3>

	<Experience v-for="experience in experiences" :experience="experience"></Experience>

	<Header3>
		Projects
	</Header3>

	<Project v-for="project in projects" :project="project"></Project>

	<Header3>
		Education
	</Header3>

	<div class="flex gap-16">
		<Education v-for="e in education" :education="e"></Education>
	</div>
</template>
