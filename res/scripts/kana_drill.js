let root_element = document.getElementById("root");

function initialize() {
	let greeting_header = document.createElement("h2");
	let greeting 		= document.createElement("p");
	let input_form 		= document.createElement("form");
	greeting.innerHTML 			= "practice recognizing kana. Choose your settings and press start.";
	greeting_header.innerHTML 	= "Kana Drill";
	root_element.append(greeting_header);
	root_element.append(greeting);
	root_element.append(input_form);

	input_form.innerHTML =
		"<select>\
			<option>Romaji</option>\
			<option>Hiragana</option>\
			<option>Katakana</option>\
			<option>Hiragana & Katakana</option>\
		</select>\
		\
		<select>\
			<option>10</option>\
			<option>20</option>\
			<option>30</option>\
			<option>40</option>\
			<option>50</option>\
			<option>60</option>\
			<option>70</option>\
			<option>80</option>\
			<option>90</option>\
			<option>100</option>\
		</select>\
		\
		<button type='button' onclick=\"alert('WIP')\">Start</button>";
}

initialize();
