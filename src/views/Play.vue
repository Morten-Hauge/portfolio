<template>

<div id="play">
	
	<vue-headful title="Playground – Morten Hauge"/>
	
	<section class="content">
	
		<h1>Playground</h1>
	
		<p class="intro_text">
		
			A collection of drawings, photography, design snippets, custom sneakers and other  
			things I've made over the years.
		
		</p>
	
		<section class="photo_grid" id="play_grid" v-lazy-container="{ selector: 'img' }" >

			<a class="image" data-fancybox="gallery" v-bind:href="img.url" v-for="img in images" v-bind:key="img.url" v-bind:class="img.columnClass">
				<img class="item" v-bind:class="img.columnClass" v-bind:data-src="img.url" v-bind:alt="img.alt" :key="img.url" />	
			</a>

		</section>
		
	</section>
	
</div>

</template>

<style>

/******************************************* PHOTO GRID */

.photo_grid
{
	width: 100%;
	height: auto;
	margin: 0 auto;
	text-align: center;
	
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 50px;
	align-items: center;
}

.image:focus
{
	outline: none;
}

.image:focus > .item
{
	outline: 5px solid var(--callout-color);
}

.item
{	
	margin: 0 0 50px;
	width: 100%;
	height: auto;
	transition: all ease .3s;
}

.span1
{
	grid-column: span 1;
}

.span2
{
	grid-column: span 2;
}

.span3
{
	grid-column: span 3;
}

@media all and (max-width: 800px)
{
	.photo_grid
	{
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
	
	.item
	{
		margin: 0 0 20px;
	}
	
	.span1, .span2, .span3
	{
		grid-column: span 2;
	}
}

.photo_grid img
{
	width: 100%;
	height: auto;
}

</style>

<script>

	require('@fancyapps/fancybox/dist/jquery.fancybox.js');
	require('@fancyapps/fancybox/dist/jquery.fancybox.min.css');

	export default
	{
		data(){
			return {
				
				images: [
					{ url: require('../assets/play/morten007.jpg'), alt: 'Morten graffiti drawing', columnClass: 'span1' },
					{ url: require('../assets/play/hv004.jpg'), alt: 'Linda Vidala on stage', columnClass: 'span1' },
					{ url: require('../assets/play/superstar001.jpg'), alt: 'Superstar custom sneakers', columnClass: 'span1' },
					{ url: require('../assets/play/gronland001.jpg'), alt: 'Feet upside down', columnClass: 'span1' },
					{ url: require('../assets/play/maanen002.jpg'), alt: 'Skatergirl', columnClass: 'span2' },
					{ url: require('../assets/play/beats-cover.jpg'), alt: 'Spotify playlust beats', columnClass: 'span1' },
					{ url: require('../assets/play/k-pop_bangers-cover.jpg'), alt: 'Spotify playlist K-POP bangers', columnClass: 'span1' },
					{ url: require('../assets/play/rap-10-tallet-cover.jpg'), alt: 'Spotify playlist Rap 10-tallet', columnClass: 'span1' },
					{ url: require('../assets/play/sweet.jpg'), alt: 'Sweet custom sneakers', columnClass: 'span2' },
					{ url: require('../assets/play/solbriller.jpg'), alt: 'Custom Ray-Ban case', columnClass: 'span1' },
					{ url: require('../assets/play/hong_xing_001.jpg'), alt: 'Hong Xing custo sneakers', columnClass: 'span1' },
					{ url: require('../assets/play/sf002.jpg'), alt: 'Glass of beer AT&T Park', columnClass: 'span1' },
					{ url: require('../assets/play/suverent.jpg'), alt: 'Suverent Supreme logo', columnClass: 'span1' },
					{ url: require('../assets/play/morten004.jpg'), alt: 'Morten graffiti drawing', columnClass: 'span1' },
					{ url: require('../assets/play/operaen001.jpg'), alt: 'Oslo Opera House rooftop', columnClass: 'span1' },
					{ url: require('../assets/play/ye_sneakers.jpg'), alt: 'Ye Changsha custom sneakers', columnClass: 'span1' },
					{ url: require('../assets/play/impact-of-the-ash-cloud.jpg'), alt: 'TIME magazine school assignment', columnClass: 'span1' },
					{ url: require('../assets/play/fredrikstad.jpg'), alt: 'Fredrikstad graffiti canvas', columnClass: 'span2' },
					{ url: require('../assets/play/maanen001.jpg'), alt: 'Martin Massiv on stage', columnClass: 'span1' },
					{ url: require('../assets/play/hv002.jpg'), alt: 'Sebastian Zalo on stage', columnClass: 'span2' },
					{ url: require('../assets/play/plankebyen.jpg'), alt: 'Plankebyen custom skateboard deck', columnClass: 'span2' },					
					{ url: require('../assets/play/morten005.jpg'), alt: 'Morten graffiti painting', columnClass: 'span1' }
				]
			}
		}
	}
	
</script>
