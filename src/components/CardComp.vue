<template>

<router-link :to="cardData.link" class="card-link" :aria-label="cardData.title">

	<section class="card">

		<img v-bind:src="`${cardData.image}`" class="card_img" /> 
					
		<h2>{{cardData.title}}</h2>
					
		<p>
			{{cardData.description}}
		</p>
					
		<span class="card_button">{{cardData.cta}}</span>
		
	</section>

</router-link>

</template>

<script>

export default {
	name: "CardComp",
	props: {
		cardData: {
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

.card
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

.card:hover
{
	transform: translateY(-10px);
}

.card:hover > .card_button
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
	.card
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


.card h2
{
	color: var(--text-color);
	font-size: 3rem;
	font-weight: 600;
	line-height: 3rem;
	margin: 50px 50px 15px 50px;
}

@media all and (max-width: 1112px)
{
	.card h2
	{
		font-size: 2.5rem;
		line-height: 2.5rem;
		margin: 30px 20px 15px 30px;
	}
}

@media all and (max-width: 800px)
{
	.card h2
	{
		font-size: 2rem;
		line-height: 2.5rem;
		margin: 50px 20px 20px 20px;
	}
}

.card p
{
	color: var(--text-color);
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 300;
	margin: 0 50px 50px 50px;
}

@media all and (max-width: 1112px)
{
	.card p
	{
		font-size: 1.3rem;
		line-height: 1.5rem;
		margin: 0 0 40px 30px;
	}
}

@media all and (max-width: 800px)
{
	.card p
	{
		font-size: 1.3rem;
		line-height: 1.8rem;
		margin: 0 20px 50px 20px;
	}
}

.card_button
{
	font-size: 20px;
	background: var(--callout-color);
	color: var(--dark-gray-color);
	border-radius: 5px;
	padding: 15px 25px;
	transition: all .3s ease-in;
	margin: 0 0 50px 50px;
	justify-self: left;
}

@media all and (max-width: 1112px)
{
	.card_button
	{
		font-size: 1rem;
		margin: 0 0 30px 30px;
	}
}

@media all and (max-width: 800px)
{
	.card_button
	{
		font-size: 14px;
		padding: 15px 20px;
		margin: 0 auto 50px auto;
	}
}

</style>