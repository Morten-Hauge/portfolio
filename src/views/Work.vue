<template>

<div id="work">
	
	<vue-headful title="Work – Morten Hauge"/>
	
	<section class="content">
	
		<h1>Work</h1>
	
		<p class="intro_text">
		
			UI design and front-end development.
		
		</p>
		
		<section class="card_grid">
		
			<CardComp v-for="card in cardData" :cardData="card" :key="card.title" />

		</section>
		
	</section>
	
</div>
</template>

<script>

import CardComp from '../components/CardComp.vue';

export default
{
	components: 
	{
		CardComp
	},
	data() {
		return{
			cardData:[	 
				{ 	
					title: 'MH Sneakers',
					link: '/mhsneakers', 
					description: 'Portfolio for my custom sneakers',
					cta: 'See case study',
					image: require('../assets/work/mhsneakers.jpg') 
				},
				{ 	
					title: 'If Safety Shop',
					link: '/ifsafetyshop', 
					description: 'Redesign of If Safety Shop',
					cta: 'See case study',
					image: require('../assets/work/safetyshop.jpg') 
				}
		
			]				
		}
	}	
}
	
</script>

<style>

.card_grid
{
	width: 100%;
	min-height: 650px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 100px;
	grid-auto-rows: 1fr;
}

@media all and (max-width: 800px)
{
	.card_grid
	{
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
	}
}
	
</style>