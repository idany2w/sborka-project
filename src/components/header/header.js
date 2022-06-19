export default {
	headerBurgerClick(e) {
		let btn = e.target.closest('.header__burger');
		if (!btn) return false;
		alert('Header burger click will be here');
		return true;
	},
};
