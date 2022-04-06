<template>

<a :href="cardSmallData.link" target="_blank" class="card-link" :aria-label="cardSmallData.title">

	<section class="card_small">

		<img v-bind:src="`${cardSmallData.image}`" class="card_img" /> 
					
		<span class="heading">{{cardSmallData.title}}</span>
					
		<p>
			{{cardSmallData.description}}
		</p>
					
		<span class="card_small_button">{{cardSmallData.cta}}</span>
		
	</section>

</a>

</template>

<script>

export default {
	name: "CardSmallComp",
	props: {
		cardSmallData: {
			type: Object
		}
	}
};

</script>

<style>

.card-link:focus
{
	outline: none;
}

.card-link:focus > .card
{
	box-shadow: 0 0 0 5px var(--callout-color);
}

.card_small
{
	width: 100%;
	height: 100%;
	background: var(--light-gray-color);
	border-radius: 10px;
	box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.4);
	cursor: pointer;
	overflow: hidden;
	transition: all .3s ease;

	display: grid;
	grid-template-rows: max-content max-content 1fr max-content;
}

.card_small:hover
{
	transform: translateY(-10px);
}

.card_small:hover > .card_small_button
{
	background: var(--dark-gray-color);
	color: var(--callout-color);
	box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.4);
}

/* .card:hover > .card_img
{
	transform: scale(1.05);
	opacity: 0.7;
} */

@media all and (max-width: 800px)
{
	.card_small
	{
		text-align:center;
	}
}

.card_img
{
	width: 100%;
	border-radius: 10px 10px 0 0;
	transition: all .3s ease;
}


.card_small span.heading
{
	color: var(--text-color);
	font-size: 2rem;
	font-weight: 600;
	line-height: 3rem;
	margin: 15px 30px 15px 30px;
}

@media all and (max-width: 1112px)
{
	.card_small span.heading
	{
		font-size: 2rem;
		line-height: 2.5rem;
		margin: 30px 20px 15px 30px;
	}
}

@media all and (max-width: 800px)
{
	.card_small span.heading
	{
		font-size: 2rem;
		line-height: 2.5rem;
		margin: 50px 20px 20px 20px;
	}
}

.card_small p
{
	color: var(--text-color);
	font-size: 1.3rem;
	line-height: 2rem;
	font-weight: 300;
	margin: 0 30px 30px 30px;
}

@media all and (max-width: 1112px)
{
	.card_small p
	{
		font-size: 1.3rem;
		line-height: 2rem;
		margin: 0 30px 30px 30px;
	}
}

@media all and (max-width: 800px)
{
	.card_small p
	{
		font-size: 1.3rem;
		line-height: 1.8rem;
		margin: 0 40px 50px 40px;
	}
}

.card_small_button
{
	font-size: 20px;
	background: var(--callout-color);
	color: var(--dark-gray-color);
	border-radius: 5px;
	padding: 15px 25px;
	transition: all .3s ease-in;
	margin: 0 0 30px 30px;
	justify-self: left;
}

@media all and (max-width: 1112px)
{
	.card_small_button
	{
		font-size: 1rem;
		margin: 0 0 30px 30px;
	}
}

@media all and (max-width: 800px)
{
	.card_small_button
	{
		font-size: 14px;
		padding: 15px 20px;
		margin: 0 auto 50px auto;
	}
}

</style>