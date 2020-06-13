function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

var guess = "";
var g = [];
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#new");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var message = document.querySelector(".message");
var main = document.querySelector(".main");

var html = "<div class='row'>";

function createBlocks(number){
	for(var i = 0; i < number; i++){
		
		html += "<a href='#' class='block'></a>";

		if(i === 2){
			html += "</div><div class='row'>"
		}
		
		

	}

	html += "</div>";

	return html;
	console.log(html);

}
	

main.innerHTML = createBlocks(6);
var blocks = document.querySelectorAll(".block");
console.log(blocks);

function generate(){

    newGame.innerHTML = "<a href='#' id='new' class='btn'>NEW COLORS</a>";
    message.innerHTML = "click to guess";

	for(var i = 0; i < blocks.length; i++){

		g[i] = "rgb(" + randomInt(0,255) + ", " + randomInt(0,255) + ", " + randomInt(0,255) + ")";
		blocks[i].style.backgroundColor = g[i];
	}

	h1.innerHTML = g[randomInt(0,5)]; //random colour for user to guess NEEDS RANDOMISER FUNCTION

}

generate();

for(var i = 0; i < blocks.length; i++){
	blocks[i].addEventListener("click", function(){
		var c = h1.innerHTML;
		var gs = this.style.backgroundColor;
		console.log(c);
		console.log(this.style.backgroundColor);

		if(gs == c){
			for(var i = 0; i < blocks.length; i++){
				blocks[i].style.backgroundColor = c;
			}
			newGame.innerHTML = "<a href='#' id='new'>PLAY AGAIN?</a>";
			message.innerHTML = "YOU WON!";

		}
		else{
			this.style.backgroundColor = "#232323";
		}
	})
}



newGame.addEventListener("click", function(){
	generate();

	// for(var i = 0; i < blocks.length; i++){
	// 	blocks[i].style.display = "initial";
	// }
})


hard.addEventListener("click", function(){
	main.innerHTML = "";
	generate();

})

easy.addEventListener("click", function(){
		main.innerHTML = "";
    	main.innerHTML += createBlocks(3);
    	b = document.querySelectorAll(".block");
    	for(var i = 0; i < 3; i++){

			g[i] = "";
			
		}

    	for(var i = 0; i < 3; i++){

			g[i] = "rgb(" + randomInt(0,255) + ", " + randomInt(0,255) + ", " + randomInt(0,255) + ")";
			b[i].style.backgroundColor = g[i];
		}

	h1.innerHTML = g[randomInt(0,2)];
        // generate();

     for(var i = 0; i < b.length; i++){
	b[i].addEventListener("click", function(){
		var c = h1.innerHTML;
		var gs = this.style.backgroundColor;
		console.log(c);
		console.log(this.style.backgroundColor);

	if(gs == c){
			for(var i = 0; i < 3; i++){
				b[i].style.backgroundColor = c;
			}
			newGame.innerHTML = "<a href='#' id='new'>PLAY AGAIN?</a>";
			message.innerHTML = "YOU FUCCKIN WONNNN!";

		}
	else{
			this.style.backgroundColor = "#232323";
		}
	})
}


})
