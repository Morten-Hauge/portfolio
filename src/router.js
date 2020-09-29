import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import { RouterViewTransition } from 'vue-router-view-transition'
import { waitForTransition } from 'vue-router-view-transition'

Vue.component('RouterViewTransition', RouterViewTransition)

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	//base: "/v2/",
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/work",
			name: "work",
			component: () =>
			import("./views/Work.vue")
		},
		{
			path: "/play",
			name: "play",
			component: () =>
			import("./views/Play.vue")
		},
		{
			path: "/about",
			name: "about",
			component: () =>
			import("./views/About.vue")
		},
		{
			path: "/mhsneakers",
			name: "mhsneakers",
			component: () =>
			import("./views/mhsneakers.vue")
		},
		{
			path: "/ifsafetyshop",
			name: "ifsafetyshop",
			component: () =>
			import("./views/ifsafetyshop.vue")
		},
		{
			path: '/404', component: () =>
			import("./views/404.vue"),
			name: '404'
		},  
		{ 
			path: '*', 
			redirect: '/404' 
		}
	],
	scrollBehavior: waitForTransition((to, from, savedPosition) => {
		if (savedPosition) {
			return savedPosition
		} else {
			//return { x: 0, y: 0 }
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
	})
});