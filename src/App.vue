<template>
	<div id="app">
	
		<vue-headful title="Morten Hauge"/>
	
		<HeaderComp />

		<router-view-transition transition="fade" mode="out-in" />

		<FooterComp />
  
  </div>
</template>

<script>
	
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';

export default
{
	components: 
	{
		HeaderComp,
		FooterComp
	}
		
}
	
</script>

<style>
*
{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

*, *:before, *:after
{
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

a, a:visited
{
	text-decoration: none !important;
}

:root
{
	--callout-color: #FFD942;
	--secondary-color: #27A89A;
	--dark-gray-color: #1B1B1B;
	--gray-color: #222222;
	--light-gray-color: #2C2C2C;
	--text-color: #FFF;
	--max-width: 1800px;
}

.fade-enter, .fade-leave-to
{
	opacity: 0;
	transform: translateY(2em);
}

.fade-enter-active, .fade-leave-active
{
	transition: all ease .5s;
}

/* :root
{
	--callout-color: #4FC39F; 
	--dark-gray-color: #1B1B1B;
	--light-gray-color: #2C2C2C;
	--text-color: #FFF;
} */



/* :root
{
	--callout-color: #FFD942; 
	--dark-gray-color: #161622;
	--light-gray-color: #1B1B2B;
	--text-color: #FFF;
} */



/* :root
{
	--callout-color: #1381B9; 
	--dark-gray-color: #FFF;
	--light-gray-color: #15394B;
	--text-color: #000;
} */


/************************************************************************************** BODY */

body
{
	background: var(--dark-gray-color);
	font-family: 'neuzeit-grotesk', sans-serif;
	font-weight: 400;
	font-style: normal;
}

#app
{
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

/************************************************************************************** CONTENT WRAPPER */

.content
{
	width: 85%;
	max-width: var(--max-width);
	height: auto;
	margin: 0 auto;
	padding: 0 0 200px 0;
	position: relative;
}

h1
{
	font-family: 'neuzeit-grotesk', sans-serif;
	color: var(--text-color);
	font-weight: 700;
	font-size: 7rem;
	line-height: 7.5rem;
	letter-spacing: -2px;
	margin: 100px 0 0 0;
	text-align: left;
	max-width: 90%;
	position: relative;
	transform: translateX(-5px);
}

@media all and (max-width: 830px)
{
	h1{
		max-width: 100%;
	}
}

h1::after
{
	content: '';
	position: absolute;
	display: block;
	width: 100px;
	height: 5px;
	bottom: -10px;
	left: 0;
	background: var(--callout-color);
	transform: translateX(5px);
}

@media all and (max-width: 830px)
{
	h1::after{
		width: 50px;
		height: 3px;
		transform: translateX(0);
	}
}

@media all and (max-width: 1000px)
{
	h1
	{
		font-size: 3rem;
		line-height: 3.3rem;
		letter-spacing: 0;
		margin: 50px 0 0 0;
	}
}

.intro_text
{
	color: var(--text-color);
	margin: 100px 0 100px 0;
	font-size: 2rem;
	width: 50%;
	line-height: 3rem;
	font-weight: 300;
}

@media all and (max-width: 1000px)
{
	.intro_text
	{
		font-size: 1.5rem;
		line-height: 2rem;
		margin: 50px 0 50px 0;
	}
}

@media all and (max-width: 830px)
{
	.intro_text
	{
		width: 100%;
	}
}

.fade-enter, .fade-leave-to
{
	opacity: 0;
	transform: translateY(2em);
}

.fade-enter-active, .fade-leave-active
{
	transition: all ease .5s;
}

/************************************************************************************** CASE STUDIES */

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
.button-container .button
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

.button-container .button:hover
{
	background: var(--callout-color);
	color: var(--dark-gray-color);
	box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.4);
}

@media all and (max-width: 800px)
{
	.button-container .button
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
	width: 60%;
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
