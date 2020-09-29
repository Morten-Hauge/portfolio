<template>

<section class="content front_page_content">
		
		<BigBtnComp v-for="btn in btnData" :btnData="btn" :key="btn.title" />		

	</section>

</template>

<script>

import BigBtnComp from '../components/BigBtnComp';

export default {

	components: 
	{
		BigBtnComp
	},
	data() {
		return{
			 btnData:[
			 	{ 	
			 		title: 'Work',
			 		link: '/work', 
			 		description: 'User interface design and front-end development.',
			 		cta: 'Check out my work',
			 		image: require('../assets/work.jpg') 
			 	},
			 	{ 	
			 		title: 'Play',
			 		link: '/play', 
			 		description: 'Design experiments, snippets, photography and drawing.',
			 		cta: 'Check out my playground',
			 		image: require('../assets/play.jpg') 
				}
			 ]
		}
	}
};

</script>

<style>


	
</style>