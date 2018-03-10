const plugins = {};
plugins.install = function( Vue, optins){
	
	Vue.directive("focus",{
		inserted(el){
			el.focus();
			el.style.background = "red";
		}
	})
	
}

export default plugins;