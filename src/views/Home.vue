<template>

<div id="home">

	<vue-headful title="Morten Hauge – Digital Designer"/>
		
	<HeroComp />
		
	<section class="content front_page_content">
		
		<BigBtnComp v-for="btn in btnData" :btnData="btn" :key="btn.title" />		

	</section>

	<!-- <BigBtnGridComp /> -->
	
</div>
</template>

<script>

import HeroComp from '../components/HeroComp.vue';
import BigBtnComp from '../components/BigBtnComp.vue';
// import BigBtnGridComp from '../components/BigBtnGridComp.vue';

export default
{
	components: 
	{
		HeroComp,
		BigBtnComp,
		// BigBtnGridComp
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
}
	
</script>

<style>

.front_page_content
{
	max-width: 1300px;
}

@media all and (max-width: 800px)
{
	.front_page_content
	{
		padding-top: 60px;
		padding-bottom: 20px;
	}
}

</style>