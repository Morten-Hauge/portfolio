<template>
<div id="MHSneakers" v-lazy-container="{ selector: 'img' }">
	
	<vue-headful title="MH Sneakers – Morten Hauge"/>
	
	<section class="wrapper wrapper-darkest">
		
		<img :data-src="images[15].url" class="hero-img-case-study" :alt="images[15].alt">

		<section class="content-case-study">
			
			<!-- <img :data-src="images[15].url" class="img-full" :alt="images[15].alt"> -->

			<h1>MH Sneakers</h1>
			
			<p class="intro_text">
		
				MH Sneakers is where I showcase my custom sneakers. Over on Instagram I post all kinds of art I make, but I wanted a designated space for displaying my
				custom sneakers. I also wanted to use this project to learn more about Vue.js.

				<br><br>

				All design work and front-end development is done by me.
		
			</p>
		
			<div class="button-container">
				<a href="https://morten-hauge.com/sneakers/#/" target="_blank"><span class="button">Check out live website</span></a>
				<a href="https://github.com/Morten-Hauge/mhsneakers" target="_blank"><span class="button">Check out code on GitHub</span></a>
			</div>

			<section class="grid3">

				<img :data-src="images[1].url" :alt="images[1].alt" v-scrollanimation2>
				<img :data-src="images[2].url" :alt="images[2].alt" v-scrollanimation2>
				<img :data-src="images[3].url" :alt="images[3].alt" v-scrollanimation2>

			</section>

			<section class="grid2">

				<img :data-src="images[11].url" :alt="images[11].alt" v-scrollanimation2>
				<img :data-src="images[12].url" :alt="images[12].alt" v-scrollanimation2>
				<img :data-src="images[13].url" :alt="images[13].alt" v-scrollanimation2>
				<img :data-src="images[14].url" :alt="images[14].alt" v-scrollanimation2>

			</section>

		</section>
	
	</section>

	<section class="wrapper wrapper-dark">
		
		<section class="content-case-study" v-scrollanimation>

			<div class="text">

				<h2 class="learned">Dynamic components and dynamic routing</h2>

				<p>
				
					At the time of making this website I had made 8 custom pairs of sneakers, and the lay-out for the pages for each pair would be pretty similar. 
					I wanted to look into how I could make these pages dynamic, so I wouldn't have to write markup and create components for each pair.

				</p>

				<div class="grid2">

					<p>
					
						To achieve this I learned how to do Dynamic Match Routing in Vue using <code>$route.params</code>.
						The data and content for each pair of sneakers are stored in a JSON file.
						The route link path slugs are the same as the value of the name <code>id</code> in the JSON objects.
						To get the data for the correct sneaker I returned the data for the object where <code>id</code> and <code>$route.params</code> were a match. 
						This may seem pretty straight forward, but I was really happy when I figured out how to pull this of.
					

					</p>
				
					<iframe v-scrollanimation2 height="400" style="width: 100%;" scrolling="no" title="Sneaker data" src="https://codepen.io/morten-hauge/embed/yLOpXrN?height=265&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
					See the Pen <a href='https://codepen.io/morten-hauge/pen/yLOpXrN'>Sneaker data</a> by Morten Hauge
					(<a href='https://codepen.io/morten-hauge'>@morten-hauge</a>) on <a href='https://codepen.io'>CodePen</a>.
					</iframe>

				</div>
		
			</div>
		
		</section>
	
	</section>	
	
	<section class="wrapper wrapper-darkest">
		
		<section class="content-case-study" v-scrollanimation>

			<h2 class="learned">Different image grids for different sneakers</h2>

			<p>
				
				The detail pages for each pair of sneakers all have the same types of content – hero image, text section and image grid.
				But the image grids will vary in the way the images are cropped and how many images there is. Therefore I needed to figure out a way to
				implement these differences with my dynamic components.

			</p>

			<div class="grid2">
				
				<img :data-src="images[4].url" :alt="images[4].alt" v-scrollanimation2>

				<img :data-src="images[5].url" :alt="images[5].alt" v-scrollanimation2>

				<p>
					
					First I did all the layout work in Adobe XD, so I knew how many columns each image would span.
					
					<br><br>
					
					To get this variation of grid layouts I came up with a little trick using CSS grid and <code>grid-column: span</code>.
					The container is set to <code>display: grid;</code> and <code>grid-template-columns: repeat(3, 1fr);</code>.
					
					<br><br>
					
					Then I created the classes <code>.span1</code> <code>.span2</code> and <code>.span3</code> with different <code>grid-column: span;</code> values.
					In the JSON object for each sneaker I have an array containing filename, span class and alt text for each image.
					
					<br><br>

					The last step is to apply these classes to each image in my <code>v-for</code> loop using <code>v-bind:class="image[1]"</code>
					to reference the span class stored in the JSON object.

					<br><br>

					I'm sure there are many other ways to go about this, but I like this little solution I came up with.

				</p>
				
				<img :data-src="images[7].url" :alt="images[7].alt" v-scrollanimation2>

			</div>

		</section>
	
	</section>

	<section class="wrapper wrapper-dark">
		
		<section class="content-case-study" v-scrollanimation>

			<h2>Thoughts on the design process</h2>

			<div class="grid2">

				<p>
				
					I wanted to keep the design clean and minimal, and let the photos of the sneakers shine.
					But one element I had a hard time designing was the hero element for the front page.
					My initial thought was that I had to show one of my sneakers, and I played around with a bunch of different designs.
					But I wasn't really happy with how any of them turned out. 
					
					<br><br>
					
					So I decided to move around all the furniture in my apartment
					to get a nice backdrop for a photoshoot. It ended up being a bit more personal welcomming to my website,
					and I even got a nice photo for the "About" page. 

				</p>
			
				<img :data-src="images[8].url" :alt="images[8].alt" v-scrollanimation2>

				<img :data-src="images[9].url" :alt="images[9].alt" v-scrollanimation2>

				<img :data-src="images[10].url" :alt="images[10].alt" v-scrollanimation2>

			</div>

		</section>
	
	</section>
	
	<section class="wrapper wrapper-darkest">
		
		<section class="content-case-study" v-scrollanimation>

			<h2>Conclusion</h2>
			
			<p>
				
				This project was a great learning experience. I learnt some new tricks in CSS, and got a good amount of practise using Vue.
				Mastering the concepts I've described above gives me confidence to keep pushing and learn more about the awesomeness of Vue.

				<br><br>

				I'm also very happy about having a place on the internet displaying my custom sneakers.

			</p>

		</section>
	
	</section>
	
</div>
</template>

<script>


export default
{
	components: 
	{
		
	},
	data() {
		return{
			images:
			[
				{ url: require('../assets/work/mhsneakers_001.jpg'), alt: 'MH Sneakers index hero desktop'},
				{ url: require('../assets/work/mhsneakers_002.png'), alt: 'MH Sneakers index hero mobile'},
				{ url: require('../assets/work/mhsneakers_003.png'), alt: 'MH Sneakers sneakers links'},
				{ url: require('../assets/work/mhsneakers_004.png'), alt: 'MH Sneakers sneaker detail page'},
				{ url: require('../assets/work/mhsneakers_005.jpg'), alt: 'MH Sneakers Sweet image grid'},
				{ url: require('../assets/work/mhsneakers_006.jpg'), alt: 'MH Sneakers Lukas image grid'},
				{ url: require('../assets/work/mhsneakers_007.jpg'), alt: 'MH Sneakers Vans image grid'},
				{ url: require('../assets/work/mhsneakers_008.jpg'), alt: 'MH Sneakers all sneaker pages layout Adobe XD'},
				{ url: require('../assets/work/mhsneakers_009.jpg'), alt: 'MH Sneakers trashed hero designs Adobe XD'},
				{ url: require('../assets/work/mhsneakers_010.png'), alt: 'MH Sneakers index hero desktop'},
				{ url: require('../assets/work/mhsneakers_011.png'), alt: 'MH Sneakers about hero desktop'},
				{ url: require('../assets/work/mhsneakers_012.jpg'), alt: 'MH Sneakers Lukas hero desktop'},
				{ url: require('../assets/work/mhsneakers_013.jpg'), alt: 'MH Sneakers Vans intro grid desktop'},
				{ url: require('../assets/work/mhsneakers_014.jpg'), alt: 'MH Sneakers Changsha footer desktop'},
				{ url: require('../assets/work/mhsneakers_015.jpg'), alt: 'MH Sneakers Changsha footer desktop'},
				{ url: require('../assets/work/mhsneakers_016.jpg'), alt: 'MH Sneakers index hero desktop'}
			]	
		}
	}	
}
	
</script>

<style scoped>

.wrapper
{
	width: 100%;
	height: auto;
	padding: 200px 0;
	overflow: hidden;
}

@media all and (max-width: 800px)
{
	.wrapper
	{
		padding: 100px 0;
	}
}

.wrapper:first-child
{
	padding-top: 0;
}

.wrapper-darkest
{
	background: var(--dark-gray-color);
}

.wrapper-dark
{
	background: var(--gray-color);
}

.hero-img-case-study
{
	width: 100%;
	height: auto;
}

.content-case-study
{
	width: 90%;
	max-width: var(--max-width);
	height: auto;
	margin: 0 auto;
	padding: 0;
	position: relative;
	color: var(--text-color);
}

.content-case-study .img-full
{
	width: 100%;
	height: auto;
	margin: 100px 0 0 0;
}

@media all and (max-width: 800px)
{
	.content-case-study .img-full
	{
		margin: 50px 0 0 0;
	}
}

.button-container
{
	margin-top: -50px;
}

@media all and (max-width: 800px)
{
	.button-container
	{
		margin-top: 0;
	}
}
.button
{
	font-size: 1.2rem;
	color: var(--callout-color);
	background: none;
	border: 1px solid var(--callout-color);
	border-radius: 5px;
	padding: 15px 25px;
	transition: all .3s ease-in-out;
	margin: 0 50px 0 0;
	cursor: pointer;
}

.button:hover
{
	background: var(--callout-color);
	color: var(--dark-gray-color);
	box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.4);
}

@media all and (max-width: 800px)
{
	.button
	{
		display: block;
		text-align: center;
		margin: 0 0 40px 0;
	}
}

.grid2
{
	margin: 100px 0 0 0;
	display: grid;
	grid-template-columns: repeat(2,1fr);
	grid-gap: 100px;
}

.grid3
{
	margin: 100px 0 0 0;
	display: grid;
	grid-template-columns: repeat(3,1fr);
	grid-gap: 100px;
}

.grid2 img, .grid3 img
{
	width: 100%;
}

@media all and (max-width: 800px)
{
	.grid2, .grid3
	{
		grid-template-columns: 1fr;
		grid-gap: 50px;
		margin: 50px 0 0 0;
	}
}

.text
{
	color: var(--text-color);
}

.content-case-study h2
{
	width: 50%;
	font-size: 6rem;
	line-height: 6rem;
	margin: 0 0 100px 0;
	position: relative;
}

.content-case-study h2.learned::before
{
	content:'Something new I learned';
	position: absolute;
	top: -30px;
	padding: 5px 10px;
	font-size: 1rem;
	line-height: 1rem;
	font-weight: 400;
	background: var(--secondary-color);
	color: var(--dark-gray-color);
}

@media all and (max-width: 800px)
{
	.content-case-study h2.learned::before
	{
		font-size: 0.8rem;
	}
}

@media all and (max-width: 800px)
{
	.content-case-study h2
	{
		font-size: 2.3rem;
		line-height: 2.8rem;
		width: 100%;
		margin: 0 0 50px 0;
	}
	.content-case-study h2.learned
	{
		margin: 30px 0 50px 0;
	}
}

.content-case-study p
{
	font-size: 1.5rem;
	line-height: 2.3rem;
	font-weight: 300;
	max-width: 80ch;
}

@media all and (max-width: 800px)
{
	.content-case-study p
	{
		font-size: 1.3rem;
		line-height: 2rem;
	}
}

code
{
	background: var(--light-gray-color);
	padding: 5px 10px;
	margin: 0 5px;
}

/* ANIMATION */

.before-enter
{
	opacity: 0;
	transform: translateX(100px);
	transition: all 1s ease-out;
	transition-delay: .2s;
}

.enter
{
	opacity: 1;
	transform: translateY(0px);
}

@media all and (max-width: 800px)
{
	.before-enter
	{
		transform: translateY(50px);
	}
	.enter
	{
		transform: translateY(0);
	}
}

.before-enter2
{
	opacity: 0;
	transform: translateY(100px);
	transition: all 1s ease-out;
	transition-delay: .2s;
}

.enter2
{
	opacity: 1;
	transform: translateY(0);
}

</style>