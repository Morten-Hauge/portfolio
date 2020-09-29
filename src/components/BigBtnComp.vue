<template>

	<router-link :to="btnData.link" class="big_btn_link" :aria-label="btnData.title">
		
		<div v-scrollanimation2>
		<section class="big_btn">
				
			<section class="big_btn_text">
				
				<h2>{{btnData.title}}</h2>
				
				<p>
					{{btnData.description}}
				</p>
						
				<span class="button">{{btnData.cta}}</span>
						
			</section>
					
			<section class="big_btn_img" :style="{ backgroundImage: `url(${btnData.image})` }"></section>
				
		</section>
		</div>
	
	</router-link>

</template>

<script>

export default {
	name: "BigBtnComp",
	props: {
		btnData: {
			type: Object
		}
	}
};

</script>

<style>

/************************************************************************************** BIG BTN */
a{color: var(--dark-gray-color)}

.big_btn
{
	width: 100%;
	height: 500px;
	background: var(--light-gray-color);
	margin: 100px auto 0 auto;
	border-left: 5px solid var(--callout-color);
	color: var(--text-color);
	box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.4);
	background-image: linear-gradient(to left, transparent, transparent 50%, var(--callout-color) 50%, var(--callout-color));
	background-position: 100% 0;
	background-size: 200% 100%;
	transition: all .3s ease-in;
	border-radius: 20px;
	display: grid;
	grid-template-columns: 1fr 500px;
}

@media all and (max-width: 1200px)
{
	.big_btn
	{
		height: 400px;
		grid-template-columns: 1fr 400px;
	}	
}

@media all and (max-width: 1000px)
{
	.big_btn
	{
		height: 300px;
		grid-template-columns: 1fr 300px;
	}	
}

@media all and (max-width: 800px)
{
	.big_btn
	{
		width: 100%;
		height: auto;
		grid-template-columns: 100%;
		border-left: none;
		background-image: none;
		text-align: center;
		margin: 0 0 50px 0;
	}
}

.big_btn:hover
{
	background-position: 0 0;
	color:var(--dark-gray-color);
	text-decoration: none;
}

@media all and (max-width: 800px)
{
	.big_btn:hover
	{
		background-position: 100% 0;
		background-size: 200% 100%;
		color: var(--text-color);
	}
}

.big_btn:hover > .big_btn_text h2
{
	color: var(--dark-gray-color);
}

@media all and (max-width: 800px)
{
	.big_btn:hover > .big_btn_text h2
	{
		color: var(--callout-color);
	}
}

.big_btn_link:focus
{
	outline: none;
}

.big_btn_link:focus > div > .big_btn
{
	box-shadow: 0 0 0 5px var(--callout-color);
}

.big_btn_text
{
	padding: 50px 0 50px 50px;
	width: 100%;
}

@media all and (max-width: 1000px)
{
	.big_btn_text
	{
		padding: 30px 30px;
		margin: 0;
	}
}

@media all and (max-width: 800px)
{
	.big_btn_text
	{
		padding: 30px 10px;
		margin: 0 0 30px 0;
	}
}

.big_btn_text h2
{
	color: var(--callout-color);
	font-size: 6rem;
	letter-spacing: -2px;
	transition: all .5s ease-in;
}

@media all and (max-width: 1000px)
{
	.big_btn_text h2
	{
		font-size: 4rem;
		margin: 0 0 20px 0;
		letter-spacing: 0;
	}	
}

.big_btn_text p
{
	font-size: 25px;
	line-height: 35px;
	font-weight: 300;
	margin: 0 20px 60px 0;
}

@media all and (max-width: 1000px)
{
	.big_btn_text p
	{
		font-size: 18px;
		line-height: 25px;
		margin: 0 0 50px 0;
		padding-right: 20px;
	}
}

@media all and (max-width: 800px)
{
	.big_btn_text p
	{
		text-align: center;
		padding: 0 20px; 
		line-height: 25px;
		font-size: 20px;
	}
}

.button
{
	font-size: 25px;
	background: var(--callout-color);
	color: var(--dark-gray-color);
	border-radius: 3px;
	padding: 20px 30px;
	transition: all .5s ease-in;
}

@media all and (max-width: 1000px)
{
	.button
	{
		font-size: 14px;
	}
}

@media all and (max-width: 800px)
{
	.button
	{
		font-size: 16px;
		padding: 15px 30px;
	}
}

.big_btn:hover > .big_btn_text .button
{
	background: var(--dark-gray-color);
	color: var(--callout-color);
}

.big_btn_img
{
	width: 500px;
	height: 500px;
	background-size: 100%;
	background-position: center center;
	border-radius: 0 20px 20px 0;
}

@media all and (max-width: 1200px)
{
	.big_btn_img
	{
		width: 400px;
		height: 400px;
	}
}

@media all and (max-width: 1000px)
{
	.big_btn_img
	{
		width: 300px;
		height: 300px;
	}
}

@media all and (max-width: 800px)
{
	.big_btn_img
	{
		width: 100%;
		height: 200px;
		background-position: center center;
		border-radius: 0 0 20px 20px;
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

</style>