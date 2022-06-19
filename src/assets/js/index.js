import { gsap } from 'gsap';

// import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
// gsap.registerPlugin(ScrollToPlugin);

global.gsap = gsap;

gsap.defaults({
	overwrite: 'auto',
});

class ProjectApp {
	constructor() {
		this.env = require('./utils/env').default;
		this.utils = require('./utils/utils').default;
		this.classes = {
			Signal: require('./classes/Signal').default,
		};
		this.components = {
			header: require('../../components/header/header').default,
			basketProduct: require('../../components/basket-product/basket-product').default,
		};
		this.helpers = {};
		this.modules = {};
		document.addEventListener('DOMContentLoaded', () => {
			document.documentElement.classList.remove('_loading');
		});
		document.addEventListener('click', this.components.header.headerBurgerClick);
		document.addEventListener('click', this.components.basketProduct.basketProductRemove);
		document.addEventListener('click', this.components.basketProduct.basketProductCountChange);
	}
}

global.ProjectApp = new ProjectApp();

if (module.hot) {
	module.hot.accept();
}
