<template>
<div id="ifsafetyshop" v-lazy-container="{ selector: 'img' }">
	
	<vue-headful title="If Safety Shop – Morten Hauge"/>
	
	<section class="wrapper wrapper-darkest">
		
		<img :data-src="images[0].url" class="hero-img-case-study" :alt="images[0].alt">

		<section class="content-case-study">

			<h1>If Safety Shop</h1>
			
			<p class="intro_text">
		
				If is the biggest insurance company in the Nordics, and If Safety Shop is their webshop for safety products.
				I was tasked with redesigning the webshop according to a new visual identity and new <a href="https://design.if.eu" target="_blank" class="link">design system</a>.

				<br><br>

				Design work by me. Development by <a href="https://newamsterdam.se" target="_blank" class="link">New Amsterdam</a>.
		
			</p>
		
			<div class="button-container">
				<a href="https://www.if-sakerhet.se" target="_blank"><span class="button">Check out live website</span></a>
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
					<img :data-src="images[4].url" :alt="images[4].alt">
					<figcaption :class="images[4].captionClass">{{images[4].caption}}</figcaption>
				</figure>

				<figure v-scrollanimation2>
					<img :data-src="images[5].url" :alt="images[5].alt">
					<figcaption :class="images[5].captionClass">{{images[5].caption}}</figcaption>
				</figure>

			</section>

		</section>
	
	</section>

	<section class="wrapper wrapper-dark">
		
		<section class="content-case-study" v-scrollanimation>

			<div class="text">

				<h2>Before and after</h2>

				<p>

					Two limiting factors were using the design system and the technical solution for the webshop.
					I'm not saying design systems always are limiting, but it does take away a bit of the creativity.

					<br><br>

					In addition to changing the colors and typography I straightned up the grid lay-out. 
					The old version of the webshop didn't really have a strict grid, and elements were placed a bit random in some places.
					The old grid also didn't leave much space for the elements to breathe. So I aimed for a stricter grid with more negative space.

					<br><br>

					Unfortunately not all of my designs were possible to implement in the framework used for the webshop. 
					I'm not a huge fan of technical solutions dictating design, especially when I know I could code the front-end myself.
					But I guess that's just the conditions you have to work with sometimes. 

				</p>

				<div class="grid2">

					<figure v-scrollanimation2>
						<img :data-src="images[6].url" :alt="images[6].alt">
						<figcaption :class="images[6].captionClass">{{images[6].caption}}</figcaption>
					</figure>

					<figure v-scrollanimation2>
						<img :data-src="images[7].url" :alt="images[7].alt">
						<figcaption :class="images[7].captionClass">{{images[7].caption}}</figcaption>
					</figure>

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
					
					<figure v-scrollanimation2>
						<img :data-src="images[11].url" :alt="images[11].alt">
						<figcaption :class="images[11].captionClass">{{images[11].caption}}</figcaption>
					</figure>

				</div>

			</div>
		
		</section>
	
	</section>	
	
	<section class="wrapper wrapper-darkest">
		
		<section class="content-case-study" v-scrollanimation>

			<h2>Conclusion</h2>
			
			<p>
				
				This project was a good way to get to know the new If visual identity and design system.
				And even though some of my suggestions and improvements didn't get implemented in the final product,
				I learned a lot about tightening up an existing grid lay-out. 

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
				{ url: require('../assets/work/ifsafetyshop/ifsafetyshop001.jpg'), alt: 'If Safety Shop index hero desktop'},
				{ url: require('../assets/work/ifsafetyshop/ifsafetyshop002.png'), alt: 'If Safety Shop index hero mobile', caption: 'Front page mobile', captionClass: 'caption-center'},
				{ url: require('../assets/work/ifsafetyshop/ifsafetyshop003.png'), alt: 'If Safety Shop category page mobile', caption: 'Category page mobile', captionClass: 'caption-center'},
				{ url: require('../assets/work/ifsafetyshop/ifsafetyshop004.png'), alt: 'If Safety Shop product page mobile', caption: 'Product details page mobile', captionClass: 'caption-center'},
				{ url: require('../assets/work/ifsafetyshop/ifsafetyshop005.jpg'), alt: 'If Safety Shop front page desktop', caption: 'Front page categories desktop', captionClass: 'caption-left'},
				{ url: require('../assets/work/ifsafetyshop/ifsafetyshop006.jpg'), alt: 'If Safety Shop product page desktop', caption: 'Product details page desktop', captionClass: 'caption-left'},
				{ url: require('../assets/work/ifsafetyshop/ifsafetyshop007.jpg'), alt: 'If Safety Shop front page old design', caption: 'Front page before', captionClass: 'caption-left'},
				{ url: require('../assets/work/ifsafetyshop/ifsafetyshop008.jpg'), alt: 'If Safety Shop front page', caption: 'Front page after', captionClass: 'caption-left'},
				{ url: require('../assets/work/ifsafetyshop/ifsafetyshop009.jpg'), alt: 'If Safety Shop category page old design', caption: 'Category page before', captionClass: 'caption-left'},
				{ url: require('../assets/work/ifsafetyshop/ifsafetyshop010.jpg'), alt: 'If Safety Shop category page', caption: 'Category page after', captionClass: 'caption-left'},
				{ url: require('../assets/work/ifsafetyshop/ifsafetyshop011.jpg'), alt: 'If Safety Shop checkout page old design', caption: 'Checkout before', captionClass: 'caption-left'},
				{ url: require('../assets/work/ifsafetyshop/ifsafetyshop012.jpg'), alt: 'If Safety Shop checkout page', caption: 'Checkout after', captionClass: 'caption-left'}
			]	
		}
	}	
}
	
</script>