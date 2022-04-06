<template>

<div id="work">
	
	<vue-headful title="Work – Morten Hauge"/>
	
	<section class="content content_work">
	
		<h1>Work</h1>
	
		<p class="intro_text">
		
			UI design and front-end development.
		
		</p>
		
		<section class="card_grid">
		
			<CardComp v-for="card in cardData" :cardData="card" :key="card.title" />

		</section>

	</section>
	
	<section class="content_small">
		
		<hr>

		<h2>Smaller projects</h2>

		<section class="card_grid_small">
			<CardSmallComp v-for="card in cardSmallData" :cardSmallData="card" :key="card.title" />
		</section>

	</section>

</div>
</template>

<script>

import CardComp from '../components/CardComp.vue';
import CardSmallComp from '../components/CardSmallComp.vue';

export default
{
	components: 
	{
		CardComp,
		CardSmallComp
	},
	data() {
		return{
			cardData:[	 
				{ 	
					title: 'MH Sneakers',
					link: '/mhsneakers', 
					description: 'Portfolio for my custom sneakers',
					cta: 'See case study',
					image: require('../assets/work/mhsneakers/mhsneakers.jpg') 
				},
				{ 	
					title: 'If Safety Shop',
					link: '/ifsafetyshop', 
					description: 'Redesign of If Safety Shop',
					cta: 'See case study',
					image: require('../assets/work/ifsafetyshop/safetyshop.jpg') 
				}
		
			],
			cardSmallData:[
				{ 	
					title: 'AirFryCalc',
					link: 'https://morten-hauge.com/airfryer', 
					description: 'To convert oven cooking instructions to air fryer instructions I made myself this litte calculator.',
					cta: 'Open in new tab',
					image: require('../assets/work/smallerprojects/airfrycalc.jpg') 
				},
				{ 	
					title: 'Day length',
					link: 'https://morten-hauge.com/dagslengde', 
					description: "I don't like the dark winter months, so I found an API and made this to cheer myself up.",
					cta: 'Open in new tab',
					image: require('../assets/work/smallerprojects/dagslengde.jpg') 
				},
				{ 	
					title: 'LifeCounter',
					link: 'https://morten-hauge.com/lifecounter/', 
					description: 'If I forget my fancy 20 sided dice when playing Magic The Gathering I can pull up this little tool.',
					cta: 'Open in new tab',
					image: require('../assets/work/smallerprojects/lifecounter.jpg') 
				}
			]				
		}
	}	
}
	
</script>

<style>

.content_work{
	padding: 0 0 100px 0;
}

.card_grid
{
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 60px;
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

.content_small
{
	width: 85%;
	max-width: var(--max-width);
	height: auto;
	margin: 0 auto;
	padding: 0 0 200px 0;
	position: relative;
}

.card_grid_small
{
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 60px;
	grid-auto-rows: 1fr;
}

@media all and (max-width: 1100px)
{
	.card_grid_small
	{
		grid-template-columns: 1fr 1fr;
		grid-auto-rows: auto;
	}
}

@media all and (max-width: 800px)
{
	.card_grid_small
	{
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
	}
}

.content_small hr{
	margin: 0 0 100px 0;
	border: 1px solid #505050;
	/* border: 1px solid var(--text-color); */
	box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.4);
}

@media all and (max-width: 800px){
	.content_small hr{
		margin: 0 0 80px 0;
	}
}

.content_small h2{
	color: var(--text-color);
	font-size: 3rem;
	margin: 0 0 80px 0;
}

@media all and (max-width: 1100px)
{
	.content_small h2{
		color: var(--text-color);
		font-size: 2.5rem;
		margin: 0 0 50px 0;
	}
}

</style>