var gramm_in_ml = 1; //Грамм в милилитре
	
	new Vue({
		el: '#app',
		data: { 
	      base_strong: 100,  
	      base_vg: 0,		   
	      message: 'Hi world',
	      base_pg: 100,
	      drops_ml: 22,
	      target_scope: 30,
	      target_strong: 3,
	      target_vg: 70,
	      target_pg: 30, 
		  aroma_name_add: '',
	      aroma_manufacture_add: '',
		  aroma_percent_add: '',
		  aroma_pg_add: 100,
		  aromas: [ //массив с аромами в рецепте
		    
		],
		  //переменные для результата рецепта
			
		  
		  recipe_all_perc: 100,
		  all_aromas_percent: 0,
		  	
		},
		methods: {
		  add_aroma: function(){
		    this.aromas.push({
				name: this.aroma_name_add,
				manufacture: this.aroma_manufacture_add,
				percent: this.aroma_percent_add,
				pg: this.aroma_pg_add,
				ml: this.target_scope*this.aroma_percent_add/100,
				drops: this.target_scope*this.aroma_percent_add/100*this.drops_ml,
				gramm: this.target_scope*this.aroma_percent_add/100*gramm_in_ml,
				
			});
			this.aroma_name_add = '';
			this.aroma_manufacture_add = '';
			this.aroma_percent_add = '';
			
			
		  },
		  get_recipe: function(){
			alert('SHOW RECIPE');  
		  }
		},
		computed:{
		  
		  recipe_all_ml: function() { return this.target_scope; },
		  recipe_all_drops: function() {return this.target_scope*this.drops_ml; },
		  recipe_all_gr: function() {return this.target_scope*gramm_in_ml; },
		 
		  recipe_all_aromas_percent: function() {
			  var a_per = 0;
			for ( var i = 0; i < this.aromas.length; i++){
				a_per = a_per + this.aromas[i].percent;
			}
			return a_per;
		  },
		  recipe_base_perc: function() {
			  var n = this.recipe_base_ml/this.recipe_all_ml*100;
			  n = Math.round(n*100)/100;
			  return n;
			  },
		  recipe_base_ml: function() {
			  var n = this.target_strong*this.target_scope/this.base_strong;
			  n = Math.round(n*100)/100;
			  return n; 
			  },
		  recipe_base_drops: function(){return Math.round(this.recipe_base_ml*this.drops_ml);},
		  recipe_base_gr: function() {return this.recipe_base_ml*gramm_in_ml;},
		  
		  recipe_vg_perc: function() {return this.target_vg;},
		  recipe_vg_ml: function() {return this.target_scope*this.target_vg/100;},
		  recipe_vg_drops: function() {return Math.round(this.recipe_vg_ml*this.drops_ml);},
		  recipe_vg_gr: function() {return this.recipe_vg_ml*gramm_in_ml;},
		  
		  recipe_pg_perc: function() {return 100-this.recipe_base_perc-this.recipe_vg_perc-this.recipe_all_aromas_percent;},
		  recipe_pg_ml: function() {return this.target_scope*this.recipe_pg_perc/100;},
		  recipe_pg_drops: function() {return this.recipe_pg_ml*this.drops_ml;},
		  recipe_pg_gr: function() {return this.recipe_pg_ml*gramm_in_ml;},
		  
		  
		  
		  
		},
	})
console.log(aromas[0]);
	