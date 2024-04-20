function fontChangeFamily(selectedFont) {
    var descriptionIds = ["description1", "description2", "description3", "description4", "description5", "description6"];

    for (var i = 0; i < descriptionIds.length; i++) {
        var description = document.getElementById(descriptionIds[i]); // Get the element with the specific description id
        if (description) {
            var paragraphs = description.getElementsByTagName('p'); // Get all <p> elements within the description
            var headings = description.getElementsByTagName('h3'); // Get all <h3> elements within the description

            description.style.fontFamily = selectedFont; // Set the font family for the description element

            for (var j = 0; j < paragraphs.length; j++) {
                paragraphs[j].style.fontFamily = selectedFont; // Set the font family for each paragraph
            }

            for (var k = 0; k < headings.length; k++) {
                headings[k].style.fontFamily = selectedFont; // Set the font family for each heading
            }
        }
    }
}

//To change the background colour of the HTML page
function backgroundchange(bgColor) {
	document.body.style.backgroundColor = bgColor.value;
}

//To generate random colours
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

//To change background colour with random colours
function randomChange(){
	document.body.style.backgroundColor = getRandomColor();
}

function display(thumbnail){

    if (thumbnail.id == "img1"){						
		document.getElementById("description").innerHTML = document.getElementById("description1").innerHTML;		
	}else if(thumbnail.id == "img2"){
	document.getElementById("description").innerHTML = document.getElementById("description2").innerHTML;
	}else if(thumbnail.id == "img3"){
		document.getElementById("description").innerHTML = document.getElementById("description3").innerHTML;
	}else if(thumbnail.id == "img4"){
		document.getElementById("description").innerHTML = document.getElementById("description4").innerHTML;
	}else if(thumbnail.id == "img5"){
		document.getElementById("description").innerHTML = document.getElementById("description5").innerHTML;
	}else if(thumbnail.id == "img6"){
		document.getElementById("description").innerHTML = document.getElementById("description6").innerHTML;
	}else {
		document.getElementById("description").innerHTML = "";
    }
    thumbnail.parentElement.style.display = "block";
}

