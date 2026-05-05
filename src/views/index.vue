<script setup lang="ts">
import Header from '../components/ui/Header.vue';
import Header3 from '../components/ui/Header3.vue';
import Paragraph from '../components/ui/Paragraph.vue';
import Divider from '../components/ui/Divider.vue';
import Pill from '../components/ui/Pill.vue';
import Link from '../components/ui/Link.vue';

import Experience from '../components/Experience.vue';
import Project from '../components/Project.vue';
import SocialLinks from '../components/SocialLinks.vue';
import Education from '../components/Education.vue';
import Skill from '../components/Skill.vue';
import GithubOverview from '../components/GithubOverview.vue';

import { experiences } from '../data/experiences';
import { education } from '../data/education';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
</script>

<template>
	<div class="mt-6 md:mt-12 flex flex-wrap md:flex-nowrap gap-8">
 		<div class="w-48 shrink-0 text-gray-300">
   			<img class="rounded-full" src="/avatar.webp" alt="Tesla Model S Plaid / Headshot"></img>
  		</div>
    	<div>
   			<div class="flex items-center gap-2">
      			<Header>
      				Jayden Andrews
       			</Header>
          		<Pill class="mb-3 hidden md:block">
            		Open to work!
            	</Pill>
      		</div>

      		<Pill class="mb-3 block md:hidden">
        		Open to work!
        	</Pill>

       		<Paragraph>
         		Software developer in Utah
         	</Paragraph>

            <Paragraph>
          		Software developer & Founder of Privy.gg. Self taught since age 13, I specialize in building fast and scalable software using Rust, TypeScript, and Vue.js.
            </Paragraph>

            <SocialLinks class="mb-4" />

           	<Link :link="{ title: 'jayden@jaydenandrews.dev', url: 'mailto:jayden@jaydenandrews.dev' }" />
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

	<div class="flex flex-wrap gap-x-16">
		<Education v-for="e in education" :education="e"></Education>
	</div>

 	<Divider></Divider>

 	<Header3>
  		Github Activity
	</Header3>

    <GithubOverview />
</template>
