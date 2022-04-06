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

				<figure v-scrollanimation2>
					<img :data-src="images[1].url" :alt="images[1].alt">
					<figcaption :class="images[1].captionClass">{{images[1].caption}}</figcaption>
				</figure>
				
				<figure v-scrollanimation2>
					<img :data-src="images[2].url" :alt="images[2].alt">
					<figcaption :class="images[2].captionClass">{{images[2].caption}}</figcaption>
				</figure>

				<figure v-scrollanimation2>
					<img :data-src="images[3].url" :alt="images[3].alt">
					<figcaption :class="images[3].captionClass">{{images[3].caption}}</figcaption>
				</figure>

			</section>

			<section class="grid2">

				<figure v-scrollanimation2>
					<img :data-src="images[11].url" :alt="images[11].alt">
					<figcaption :class="images[11].captionClass">{{images[11].caption}}</figcaption>
				</figure>

				<figure v-scrollanimation2>
					<img :data-src="images[12].url" :alt="images[12].alt">
					<figcaption :class="images[12].captionClass">{{images[12].caption}}</figcaption>
				</figure>

				<figure v-scrollanimation2>
					<img :data-src="images[13].url" :alt="images[13].alt">
					<figcaption :class="images[13].captionClass">{{images[13].caption}}</figcaption>
				</figure>

				<figure v-scrollanimation2>
					<img :data-src="images[14].url" :alt="images[14].alt">
					<figcaption :class="images[14].captionClass">{{images[14].caption}}</figcaption>
				</figure>

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

					<figure v-scrollanimation2 >
						<iframe height="400" style="width: 100%;" scrolling="no" title="Sneaker data" src="https://codepen.io/morten-hauge/embed/yLOpXrN?height=265&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
							See the Pen <a href='https://codepen.io/morten-hauge/pen/yLOpXrN'>Sneaker data</a> by Morten Hauge
							(<a href='https://codepen.io/morten-hauge'>@morten-hauge</a>) on <a href='https://codepen.io'>CodePen</a>.
						</iframe>
						<figcaption class="caption-left">Sneakers data stored in JSON</figcaption>
					</figure>

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
				
				<figure v-scrollanimation2>
					<img :data-src="images[4].url" :alt="images[4].alt">
					<figcaption :class="images[4].captionClass">{{images[4].caption}}</figcaption>
				</figure>

				<figure v-scrollanimation2>
					<img :data-src="images[5].url" :alt="images[5].alt">
					<figcaption :class="images[5].captionClass">{{images[5].caption}}</figcaption>
				</figure>

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
				
				<figure v-scrollanimation2>
					<img :data-src="images[7].url" :alt="images[7].alt">
					<figcaption :class="images[7].captionClass">{{images[7].caption}}</figcaption>
				</figure>

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

				<figure v-scrollanimation2>
					<img :data-src="images[8].url" :alt="images[8].alt">
					<figcaption :class="images[8].captionClass">{{images[8].caption}}</figcaption>
				</figure>

				<figure v-scrollanimation2>
					<img :data-src="images[9].url" :alt="images[9].alt">
					<figcaption :class="images[9].captionClass">{{images[9].caption}}</figcaption>
				</figure>

				<figure v-scrollanimation2>
					<img :data-src="images[10].url" :alt="images[10].alt">
					<figcaption :class="images[10].captionClass">{{images[10].caption}}</figcaption>
				</figure>

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
				{ url: require('../assets/work/mhsneakers/mhsneakers_001.jpg'), alt: 'MH Sneakers index hero desktop'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_002.png'), alt: 'MH Sneakers index hero mobile', caption: 'Front page hero mobile', captionClass: 'caption-left'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_003.png'), alt: 'MH Sneakers sneakers links', caption: 'Front page sneakers mobile', captionClass: 'caption-left'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_004.png'), alt: 'MH Sneakers sneaker detail page', caption: 'Sneaker details page mobile', captionClass: 'caption-left'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_005.jpg'), alt: 'MH Sneakers Sweet image grid', caption: '1 / 1 / 1 / 3 split grid', captionClass: 'caption-left'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_006.jpg'), alt: 'MH Sneakers Lukas image grid', caption: '1 / 2 / 2 / 1 split grid', captionClass: 'caption-left'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_007.jpg'), alt: 'MH Sneakers Vans image grid'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_008.jpg'), alt: 'MH Sneakers all sneaker pages layout Adobe XD', caption: 'Different grids for different sneakers', captionClass: 'caption-left'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_009.jpg'), alt: 'MH Sneakers trashed hero designs Adobe XD', caption: 'Hero design exploration', captionClass: 'caption-left'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_010.png'), alt: 'MH Sneakers index hero desktop', caption: 'Front page final hero', captionClass: 'caption-center'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_011.png'), alt: 'MH Sneakers about hero desktop', caption: 'About page final hero', captionClass: 'caption-center'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_012.jpg'), alt: 'MH Sneakers Lukas hero desktop', caption: 'Front page sneakers desktop', captionClass: 'caption-left'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_013.jpg'), alt: 'MH Sneakers Vans intro grid desktop', caption: 'Sneaker details page hero desktop', captionClass: 'caption-left'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_014.jpg'), alt: 'MH Sneakers Changsha footer desktop', caption: 'Sneaker details page information and image grid desktop', captionClass: 'caption-left'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_015.jpg'), alt: 'MH Sneakers Changsha footer desktop', caption: 'Sneaker details page footer desktop', captionClass: 'caption-left'},
				{ url: require('../assets/work/mhsneakers/mhsneakers_016.jpg'), alt: 'MH Sneakers index hero desktop'}
			]	
		}
	}	
}
	
</script>