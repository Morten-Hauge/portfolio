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

</style>
