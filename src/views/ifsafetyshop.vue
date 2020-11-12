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
	width: 85%;
	max-width: var(--max-width);
	height: auto;
	margin: 0 auto;
	padding: 0;
	position: relative;
	color: var(--text-color);
}

.content-case-study a.link
{
	color: var(--text-color);
	text-decoration: underline !important;
	transition: all ease .3s;
}

.content-case-study a.link:hover
{
	color: var(--callout-color);
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

figcaption{
	font-size: 1.1rem;
	margin-top: .8rem;
}

.caption-left{
	text-align: left;
	transform: translateX(3px);
}

.caption-center{
	text-align: center;
	transform: translateX(0);
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

.image-column img
{
	margin: 0 0 50px 0;
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