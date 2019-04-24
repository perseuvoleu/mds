$(function () {

var anim_id;
var container =$('#container'),
 	line =$('#line'),
	line_1 =$('#line-1'),
	line_2=$('#line-2'),
	line_3 =$('#line-3'),
	car =$('#car'),
	car_1 =$('#car-1'),
	car_2 =$('#car-2'),
	car_3=$('#car-3'),
	restart_div =$('#restart-div'),
	restart_btn =$('#restart'),
	score =$('#score');

	var container_left = parseInt(container.css('left')),
		container_width = parseInt(container.css('width')),
		container_height= parseInt(container.css('height')),
		car_width = parseInt(car.css('width')),
		car_height= parseInt(car.css('height'));


	var game_over = false,
	score_counter = 1 ,
	car_speed= 2 , 
	line_speed=5;


	$(window).on('keydown', function(e){
		var key= e.which; // tasta pe care o apas

		if (game_over == false ){
			if ( key == 37){
				

				if (parseInt(car.css('right')) <(container_width -
					car_width -540))
				{
					car.animate({
						left:"-=20px"
					},30);
				}
			}
				else if ( key == 39)
				{
					if (parseInt(car.css('left'))<(container_width-car_width-20))
					{
						car.animate({
							left:"+=20px"
						},30);

						
					}
				}
				else if (key == 40)
					{
					if (parseInt(car.css('top'))<(container_width- car_width-20))
					{
						car.animate({
							bottom:"-=20px"
						},30);

					}
					
				}else if (key == 38)
				{
					
					if (parseInt(car.css('bottom'))<(container_width- car_width-20))
					{
						car.animate({
							bottom:"+=20px"
						},40);

						
					
				}
			}
				 else
				{
					if(key == 13){
						window.location.reload(true);
					}
				}
			
		}
	});
	var anim_id = requestAnimationFrame(repeat);
	function repeat(){
		if(game_over == false ){
			score_counter ++;
			if (score_counter %20 == 0)
				{score.text(parseInt(score.text())+1)
				}
			if(score_counter % 300 ==0)
			{
				car_speed++;
				line_speed++;
			} 
			if(collapsion(car,car_1) || collapsion(car,car_2) 
				|| collapsion(car,car_3))
			{
				stop_game();
				console.log(game_over);
			}
			 car_down(car_1);
			 car_down(car_2);
			 car_down(car_3);


			line_down(line_1);
			line_down(line_2);
			line_down(line_3);

			anim_id = requestAnimationFrame(repeat);

		}
	}

	function car_down(car){
		var current_top = parseInt(car.css('top'));
		if(current_top >(container_height+ 50) ){
			current_top = -10;
			var car_left = Math.floor(Math.random() * (container_width- car_width));
			car.css('left',car_left);
		}
		car.css('top',current_top+car_speed);
	}
	function line_down(line)
	{
		var l_current_top = parseInt(line.css('top'));
		if(l_current_top > (container_height +150)) {

			l_current_top = -300;

		}
		line.css('top',l_current_top+line_speed);
	}

	function stop_game()
	{
		game_over = true;
		cancelAnimationFrame(anim_id);
		restart_div.slideDown();
		restart_btn.focus();
	}
	restart_div.click(function(){
		window.location.reload(true)
	});


	function collapsion(elem1, elem2){
		var x1= elem1.offset().left,
			y1= elem1.offset().top,
			x2= elem2.offset().left,
			y2= elem2.offset().top,
			h1= $(elem1).outerHeight(),
			w1= $(elem1).outerWidth(),
			h2= $(elem2).outerHeight(),
			w2= $(elem2).outerWidth(),
			b1 = y1+h1,
			r1 = x1+ w1,
			b2 = y2+h2,
			r2= x2+ w2;
			if(b1<y2 || y1>b2 || r1<x2 || x1>r2)
			{
				return false;
			};
			return true;

	}
	repeat();
 
} );