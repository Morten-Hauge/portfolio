<template>

<header>
		
	<!-- <router-link to="/" onclick="this.blur();" class="logo-link"><span class="header_title">Morten Hauge</span></router-link> -->
		<router-link to="/" onclick="this.blur();" class="logo-link"><img src="../assets/morten_logo.png" class="logo-header"></router-link>
		
		<nav>
		
			<ul class="menu">
				
				<li><router-link to="/work" onclick="this.blur();" data-text="Work">Work</router-link></li>
				<li><router-link to="/play" onclick="this.blur();" data-text="Play">Play</router-link></li>
				<li><router-link to="/about" onclick="this.blur();" data-text="About">About</router-link></li>
				
			</ul>
		
		</nav>

	</header>

</template>

<script>

export default {
	name: "HeaderComp"
};
</script>

<style>

/************************************************************************************** HEADER */

header
{
	width: 100%;
	background: var(--light-gray-color);
	padding: 30px 0 30px 0;
	display: grid;
	grid-template-columns: auto 1fr;
}

@media all and (max-width: 800px)
{
	header
	{
		text-align: center;
		padding: 20px 0 20px 0;
		grid-template-columns: none;
	}
}

/* .header_title
{
	color: var(--text-color);
	font-weight: 300;
	text-transform: uppercase;
	font-size: 30px;
	line-height: 30px;
	margin: 0;
	transition: ease all .2s;
	cursor: pointer;
	align-self: center;
}

@media all and (max-width: 800px)
{
	.header_title
	{
		margin: 0;
		font-size: 1.5rem;
		line-height: 1.5rem;
	}
}

.header_title:hover
{
	color: var(--callout-color);
} */

.logo-link
{
	margin: 0 0 0 30px;
}

.logo-header
{
	height: 60px;
	align-self: center;
}

@media all and (max-width: 800px)
{
	.logo-link
	{
		margin: 0;
	}
}

.logo-link:focus
{
	outline: 1px solid var(--callout-color);
	background: var(--dark-gray-color);
	/* outline: none */
}

/* .logo-link:focus > .header_title
{
	color: var(--callout-color);
	background: var(--dark-gray-color);
} */

/************************************************************************************** MENU */

nav
{
	margin-left: auto;
	align-self: center;
}

@media all and (max-width: 800px)
{
	nav
	{
		position: fixed !important;
		bottom: 0 !important;
		top: auto !important;
		width: 100%;
		text-align: center;
		z-index: 9999 !important;
	}
}

.menu
{
	margin: 0 10px 0 0;	
}

.menu li
{
	display: inline;
}
	
.menu li a
{
	color: var(--callout-color);
	padding: 18px 20px 15px 20px;
	font-size: 20px;
	font-weight: 300;
	line-height: 30px;
	text-transform: uppercase;
	cursor: pointer !important;
	text-decoration: none;
	transition: ease all .5s;
	margin: 0 0 0 20px;
	border-radius: 5px;
}

/* .menu li a::after
{
	content: attr(data-text);
	content: attr(data-text) / "";
	height: 0;
	left: 0;
	visibility: hidden;
	overflow: hidden;
	user-select: none;
	pointer-events: none;
	font-weight: 600;
} */

.menu li a:hover, .menu li a:focus
{
	background: var(--dark-gray-color);
	cursor: pointer;	
	outline: none;
}

.menu li a:active
{
	outline: none;
}

.menu li .router-link-active
{
	font-weight: 600;
}

@media all and (max-width: 800px)
{
	.menu
	{
		width: 100%;
		padding: 20px 0;
		margin: 0;
		border: 1px solid var(--dark-gray-color);
		font-size: 0.1px;
		background: var(--light-gray-color);

	}
	
	.menu li 
	{
		display: inline-block;
		margin: 0;
	}
	
	.menu li a
	{
		font-size: 1rem;
		line-height: 1rem;
		padding: 20px 15px 20px 15px;
		margin: 0;
	}
	
	.menu li a:hover
	{	
		background: none;
	}
}

	
</style>