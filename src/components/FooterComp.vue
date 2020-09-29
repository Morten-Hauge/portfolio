<template>

	<footer>
	<section class="footer_inner">
		
		<section class="footer_links">

			<h3>Get in touch</h3>

			<p>
			
				<a href="mailto:post@morten-hauge.com">E-mail</a> <br>
				<a href="https://www.linkedin.com/in/mortenhauge/" target="_blank">LinkedIn</a>
			
			</p>	
		
		</section>
	
		<router-link to="/" class="logo-link-footer">
			<img src="../assets/morten_logo.png" />
		</router-link>
	
	</section>
	</footer>

</template>

<script>

export default {
	name: "FooterComp"
};

</script>

<style>

footer
{
	background: var(--light-gray-color);
	margin-top: auto;
}

@media all and (max-width: 800px)
{
	footer
	{
		padding-bottom: 50px;
	}
}

.footer_inner
{
	width: 90%;
	max-width: var(--max-width);
	height: auto;
	background: var(--light-gray-color);
	margin: 0 auto;
	padding: 100px 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
}

@media all and (max-width: 800px)
{
	.footer_inner
	{
		width: 80%;
		grid-template-columns: 1fr 80px;
		padding: 50px 0;
	}
}

footer h3
{
	color: var(--text-color);
	font-size: 2rem;
	line-height: 2rem;
	font-weight: 400;
	margin: 0 0 20px 0;
}

@media all and (max-width: 800px)
{
	footer h3
	{
		font-size: 1.5rem;
		margin: 0 0 10px 0;
	}
}

footer p a
{
	color: var(--callout-color);
	font-size: 1.5rem;
	line-height: 2.5rem;
	text-decoration: none;
	font-weight: 300;
	transition: all .2s ease;
}

@media all and (max-width: 800px)
{
	footer p a
	{
		font-size: 1rem;
	}
}

footer p a:hover
{
	color: var(--text-color);
	text-decoration: underline !important;
}

footer p a:focus
{
	outline: 2px solid var(--callout-color);
}

footer a 
{
	justify-self: end;
}

footer img
{
	width: 150px;
	height: auto;
	justify-self: end;
}

@media all and (max-width: 800px)
{
	footer img
	{
		width: 80px;
	}
}

.logo-link-footer:focus
{
	outline: 1px solid var(--callout-color);
}

</style>