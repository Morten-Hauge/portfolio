<template>

<div id="about">
	
	<vue-headful title="About – Morten Hauge"/>
	
	<section class="content">
		
		<section class="about_intro_grid">

			<h1>Designer.<br>K-POP fan.<br>Coder.</h1>
	
				<p class="intro_text">
			
					I’m a Norwegian digital designer and front-end developer. My layers panel are as 
					neat and tidy as my sock drawer – Marie Kondo would be proud. 
					When I'm not creating things for screens I like to draw and paint on paper, canvas and sneakers while listening to K-POP and Hip Hop.
		
				</p>

			<section class="profile_card">
		
				<div class="profile_card_cover"></div>
		
				<div class="profile_image">
					<img src="../assets/about/profilbilde.png" />
				</div>
		
				<div class="profile_card_text">
			
					<span>Morten Hauge</span>
		
					<p>
						Oslo, Norway <br>
						<a  href="mailto:post@morten-hauge.com">post@morten-hauge.com</a> <br>
						<a href="http://www.linkedin.com/in/mortenhauge" target="_blank">LinkedIn</a>
					</p>
			
				</div>
		
			</section>
		
		</section>
		
	</section>
	
</div>

</template>

<script>

export default
{
		
}
	
</script>

<style>

.profile_card
{
	width: 450px;
	height: auto;
	margin: 0;
	padding: 0 0 40px 0;
	background: var(--light-gray-color);
	border-radius: 20px;
	position: absolute;
	right: 0;
	top: 0;
	box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.4);
}

@media all and (max-width: 1200px)
{
	.profile_card
	{
		width: 320px;
	}
}

@media all and (max-width: 830px)
{
	.profile_card
	{
		position: static;
		width: 100%;
		margin: 0 auto;
		padding: 0 0 30px 0;
	}
}

.profile_card_cover
{
	width: 100%;
	height: 225px;
	background: url('../assets/about/profile_card_cover.jpg');
	background-size: cover;
	background-position: center center;
	border-radius: 20px 20px 0 0;
}

@media all and (max-width: 1200px)
{
	.profile_card_cover
	{
		height: 150px;
	}
}

.profile_image
{
	width: 150px;
	height: 150px;
	margin: -75px 30px 0 auto;
	padding: 0;
}

@media all and (max-width: 1200px)
{
	.profile_image
	{
		width: 100px;
		height: 100px;
		margin: -50px 30px 0 auto;
	}
}

.profile_image img
{
	width: 100%;
	height: auto;
}

.profile_card_text
{
	margin: 0 0 0 40px;
	color: var(--text-color);
	font-weight: 300;
}

@media all and (max-width: 830px)
{
	.profile_card_text
	{
		margin: 0 0 0 30px;
	}
}

.profile_card_text span
{
	font-size: 30px;
	margin: 0 0 20px 0;
	display: inline-block;
}

@media all and (max-width: 1200px)
{
	.profile_card_text span
	{
		font-size: 25px;
		margin: 0 0 10px 0;
	}
}

.profile_card_text p
{
	font-size: 25px;
	line-height: 35px;
}

.profile_card_text p a, .profile_card_text p a:visited
{
	color: var(--text-color);
	text-decoration: underline;
cursor: pointer;
}

.profile_card_text p a:focus
{
	outline: 1px solid var(--callout-color);
}

.profile_card_text p a:hover
{
	color: var(--callout-color);
}

@media all and (max-width: 1200px)
{
	.profile_card_text p
	{
		font-size: 20px;
		line-height: 30px;
	}
}

</style>