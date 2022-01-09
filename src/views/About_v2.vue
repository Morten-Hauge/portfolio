<template>

<div id="about">
	
	<vue-headful title="About – Morten Hauge"/>
	
	<section class="content-about">
		
		

		<!-- HI MY NAME IS -->

			<section class="section1">
				<h1>Hi! My name is..</h1>
				<img src="../assets/about/arrow.png" class="arrow" alt="">
			</section>

		<!-- GRAFFITI -->
	
			<section class="section2">

				<section class="graffiti">
        
					<img src="../assets/about/fill.png" class="fill piece" alt="fill">
					<img src="../assets/about/red.png" class="red piece" alt="red">
        
				</section>

			</section>

		<!-- NORWEGIAN DIGITAL DESIGNER AND DEVELOPER -->

			<section class="section3 text-section">

				<!-- <p class="norwegian-test">
					I’m a Norwegian 🇳🇴 digital designer and front-end developer.
				</p> -->

				<p class="norwegian-test">
					I’m a Norwegian digital designer and front-end developer.
				</p>

			</section>

		<!-- DIGITAL DESIGNER & FRONT-END DEVELOPER -->

			<section class="section4">
				
			</section>

		<!-- LAYER PANELS -->
			
			<section class="section5 text-section">

				<p class="about-text">
					My layers panels are as neat and tidy as my sock drawer – Marie Kondo would be proud.
				</p>

			</section>

		<!-- SOCK DRAWER -->

			<section class="section6">



			</section>
		
		<!-- HOBBIES -->

			<section class="section7 text-section">

				<p class="about-text">
					When I’m not creating things for screens I like to draw and paint on paper, canvas and sneakers.
				</p>

			</section>

		<!-- DESK PHOTO -->

			<section class="section8">

				<section class="desk-photo">

					<img src="../assets/about/foreground.png" class="thing foreground" alt="desk foreground">
					<img src="../assets/about/morten.png" class="thing morten" alt="morten">

				</section>

			</section>

		<!-- WHILE LISTENING TO -->
		
			<section class="section9 text-section">
				
				<p class="about-text">
					..while listening to K-POP and Hip Hop.
				</p>

			</section>

		<!-- SPOTIFY PLAYLISTS -->

			<section class="spotify-playlists">

				<section class="spotify-container">
					<a href="https://open.spotify.com/playlist/5QbwROPynpPyjYdkSFClVL?si=wg7G6gzRRl-WyHCoLvj5FA&nd=1" target="_blank">
						<img src="../assets/about/kpop-bangers.png" class="cover-image" alt="K-POP Spotify playlist cover" />
						<img src="../assets/about/cd.png" class="cd-image" />
					</a>
				</section>

				<section class="spotify-container">
					<a href="https://open.spotify.com/playlist/56moIHjAik2ABptSc975mC?si=w5V2GTTcSlGwkmLDK5c1_g&nd=1" target="_blank">
						<img src="../assets/about/rap-10-tallet-cover.png" class="cover-image" alt="Rap 10-tallet Spotify playlist cover" />
						<img src="../assets/about/cd.png" class="cd-image" />
					</a>
				</section>

			</section>

	</section>
	
</div>

</template>

<script>

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default
{
	mounted: function() {
		this.graffitiAnimation();
		this.deskAnimation();
		this.textAnimation2();
	},
	methods: {
		graffitiAnimation() {
			gsap.from(".red", {
                scrollTrigger: {
                    trigger: ".graffiti",
					start: "center center",
					end: "bottom top",
					scrub: true,
					pin: true

				},
				y: innerHeight * 1.5,
				autoAlpha: 0
            });
		},
		deskAnimation() {
			gsap.from(".morten", {
                scrollTrigger: {
                    trigger: ".section8",
					start: "+=300 center",
					end: "bottom bottom",
					// scrub: true,
					// pin: true,
					//markers: true
				},
				x: -innerWidth, 
				autoAlpha: 0
            });
		}
	}
}
	
</script>

<style>

/* SECTION 1 HI MY NAME IS */

.section1{
	width: 100%;
	height: calc(100vh - 124px);
	display: grid;
	justify-items: center;
	position: relative;
	/* outline: 1px solid blue */
}

.section1 h1{
	width: 100%;
	text-align: center;
	/* outline: 1px solid red; */
	/* margin: auto; */
	margin: 10rem 0 0 0;
	font-size: 6rem;
}

.section1 h1::after
{
	content: '';
	position: absolute;
	display: block;
	width: 0;
	height: 0;
}

.arrow{
	position: absolute;
	bottom: 4rem;
	justify-self: center;
	width: 7rem;
	animation-name: arrow-animation;
	animation-duration: 2s;
	animation-iteration-count: infinite;
}

@keyframes arrow-animation {
  0%   {opacity: 1; bottom: 4rem;}
  50%  {opacity: .1; bottom: 6rem;}
  100% {opacity: 1; bottom: 4rem;}
}

/* SECTION 2 GRAFFITI */

.section2{
	height: 100vh;
	text-align: center;
}

.graffiti {
  position: relative;
}

.piece{
    width: 50%;
}

.piece:not(.red) {
  position: absolute;
  z-index: 100;
}

.fill {
  position: relative;
}

/* SECTION 3 NORWEGIAN */

.section3{
	height: 100vh;
	display: grid;
}

p.norwegian-test{
	font-family: 'neuzeit-grotesk', sans-serif;
	color: var(--text-color);
	font-weight: 700;
	font-size: 10rem;
	line-height: 10rem;
	letter-spacing: -2px;
	margin: auto;
	text-align: left;
	max-width: 90%;
	position: relative;

}

p.norwegian{
	margin: auto;
	color: var(--text-color);
	font-size: 4.5rem;
	max-width: 60rem;
	line-height: 5rem;
	font-weight: 300;
	text-align: center;
}

.section5 p, .section7 p, .section9 p{
	margin: auto;
	color: var(--text-color);
	font-size: 4.5rem;
	max-width: 60rem;
	line-height: 5rem;
	font-weight: 300;
	text-align: center;
}

/* SECTION 4 DIGITAL DESIGNER & FRONT-END DEVELOPER */

.section4{
	width: 100%;
	height: 100vh;
	background: #ccc
}

/* LAYERS PANELS */

.section5{
	width: 100%;
	height: 100vh;
	display: grid;
}

/* SOCK DRAWER */

.section6{
	width: 100%;
	height: 100vh;
	background: #ccc
}

/* HOBBIES */

.section7{
	width: 100%;
	height: 100vh;
	display: grid;
}

/* DESK PHOTO */

.section8 {
	height: 100vh;
	/* padding-bottom: 500px; */
	/* display: grid; */
	position: relative;
}

.desk-photo {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* margin-top: auto; */
}

.thing{
    width: 100%;
}

.thing:not(.morten) {
  position: absolute;
  z-index: 100;
}

.foreground {
  position: relative;
}

/* LISTENING */

.section9{
	width: 100%;
	height: 100vh;
	display: grid;
}

/* SPOTIFY PLAYLISTS */

.spotify-playlists{
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 8rem;
	overflow: hidden;
	padding: 0 0 200px 0;
}

@media all and (max-width: 800px)
{
	.spotify-playlists{
		grid-template-columns: 1fr;
		grid-gap: 4rem;
	}

	.spotify-container:nth-child(1), .spotify-container:nth-child(2){
	justify-self: center !important;
}



}

.spotify-container
{
    position: relative;
    z-index: 1;
}

.spotify-container:nth-child(1){
	justify-self: end;
}

.spotify-container:nth-child(2){
	justify-self: start;
}

.cover-image
{
    width: 517px;
    height: 517px;
}

@media all and (max-width: 1300px)
{
    .cover-image
    {
        width: 258px;
        height: 258px;
    }
}

@media all and (max-width: 350px)
{
    .cover-image
    {
        width: 220px;
        height: 220px;
    }
}

.cd-image
{
    z-index: -1 !important;
    top: 15px;
    left: 15px;
    position: absolute;
    transition: all .5s ease;
    transform: rotate(-90deg);
}

@media all and (max-width: 1300px)
{
    .cd-image
    {
        width: 240px;
        height: 240px;
        top: 9px;
        left: 10px;
    }
}

@media all and (max-width: 500px)
{
    .cd-image
    {
        display: none;
    }
}

.spotify-container:hover .cd-image
{
    left: 230px;
    transform: rotate(0deg);
}

@media all and (max-width: 1300px)
{
    .spotify-container:hover .cd-image
    {
        left: 110px;
        transform: rotate(0deg);
    }
}

@media all and (max-width: 500px)
{
    .spotify-container:hover .cd-image
    {
        left: 15px;
        transform: rotate(-90deg);
    }
}

</style>