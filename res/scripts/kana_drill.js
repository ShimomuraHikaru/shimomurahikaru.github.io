let romaji_list = [
	"A",
	"I",
	"U",
	"E",
	"O",

	"KA",
	"KI",
	"KU",
	"KE",
	"KO",

	"SA",
	"SHI",
	"SU",
	"SE",
	"SO",

	"TA",
	"CHI",
	"TSU",
	"TE",
	"TO",

	"MA",
	"MI",
	"MU",
	"ME",
	"MO",

	"HA",
	"HI",
	"FU",
	"HE",
	"HO",

	"NA",
	"NI",
	"NU",
	"NE",
	"NO",

	"YA",
	"YU",
	"YO",

	"RA",
	"RI",
	"RU",
	"RE",
	"RO",

	"WA",
	"WO",
	"N",
];

let hiragana_list = [
	"あ",
	"い",
	"う",
	"え",
	"お",

	"か",
	"き",
	"く",
	"け",
	"こ",

	"さ",
	"し",
	"す",
	"せ",
	"そ",

	"た",
	"ち",
	"つ",
	"て",
	"と",

	"ま",
	"み",
	"む",
	"め",
	"も",

	"は",
	"ひ",
	"ふ",
	"へ",
	"ほ",

	"な",
	"に",
	"ぬ",
	"ね",
	"の",

	"や",
	"ゆ",
	"よ",

	"ら",
	"り",
	"る",
	"れ",
	"ろ",

	"わ",
	"を",
	"ん",
];

let katakana_list = [
	"ア",
	"イ",
	"ウ",
	"エ",
	"オ",

	"カ",
	"キ",
	"ク",
	"ケ",
	"コ",

	"サ",
	"シ",
	"ス",
	"セ",
	"ソ",

	"タ",
	"チ",
	"ツ",
	"テ",
	"ト",

	"マ",
	"ミ",
	"ム",
	"メ",
	"モ",

	"ハ",
	"ヒ",
	"フ",
	"ヘ",
	"ホ",

	"ナ",
	"ニ",
	"ヌ",
	"ネ",
	"ノ",

	"ヤ",
	"ユ",
	"ヨ",

	"ラ",
	"リ",
	"ル",
	"レ",
	"ロ",

	"ワ",
	"ヲ",
	"ン"
];



let root_element = document.getElementById("root");
let amount_correct = 0;
let amount_left = 0;
let amount_kana = 0;
let selection_range_start = 0;
let selection_range_end = 0;


function initialize() {

	root_element.innerHTML = "";

	amount_correct = 0;
	amount_left = 0;
	amount_kana = 0;
	selection_range_start = 0;
	selection_range_end = 0;

	let greeting_header = document.createElement("h2");
	let greeting 		= document.createElement("p");
	let input_form 		= document.createElement("form");
	greeting.innerHTML 			= "practice recognizing kana. Choose your settings and press start.";
	greeting_header.innerHTML 	= "Kana Drill";
	root_element.append(greeting_header);
	root_element.append(greeting);
	root_element.append(input_form);

	let kana_mode_select = document.createElement("select");
	kana_mode_select.id = "kana_mode_select";
	let mode_strings = ["Romaji", "Hiragana", "Katakana", "Hiragana & Katakana"];
	let i = 0;
	for(let mode_string of mode_strings) {
		let mode = document.createElement("option");
		mode.value = i;
		if(i == 1) {
			mode.selected="selected";
		}
		mode.innerHTML = mode_string;
		kana_mode_select.append(mode);
		i++;
	}

	let amount_select = document.createElement("select")
	amount_select.id = "amount_select";
	for(let i = 1; i < 11; i++)
	{
		let amount = document.createElement("option");
		amount.innerHTML = 10 * i;
		amount.value = 10 * i;
		amount_select.append(amount);
	}

	let start_button = document.createElement("button");
	start_button.type = "button";
	start_button.id = "start_button"
	start_button.innerHTML = "Start";
	start_button.setAttribute("onclick", "initialize_drill()");

	input_form.append(kana_mode_select);
	input_form.append(amount_select);
	input_form.append(start_button);
}

function initialize_drill() {
	let greeting = document.createElement("p");
	let mode_selection = document.getElementById("kana_mode_select");
	let amount_selection = document.getElementById("amount_select");
	if(romaji_list.length != hiragana_list.length || 
		hiragana_list.length != katakana_list.length ||
		romaji_list.length != katakana_list.length) {

		alert("Internal Error: list sizes do not match!");
		return;

	}

	switch(mode_selection.value) {
		case "0":
			alert("Romaji Drill: Not Implemented");
			return;
		case "1":
			selection_range_start = romaji_list.length
			selection_range_end = hiragana_list.length
			break;
		case "2":
			selection_range_start = romaji_list.length*2
			selection_range_end = katakana_list.length
			break;
		case "3":
			selection_range_start = romaji_list.length;
			selection_range_end = hiragana_list.length*2;
			break;
	}
	root_element.innerHTML = "";
	
	let attempts_indicator = document.createElement("span");
	attempts_indicator.id = "attempts_indicator";
	let attempts_correct = document.createElement("span");
	attempts_correct.id = "attempts_correct";
	let symbol = document.createElement("div");
	symbol.id = "kana_symbol"

	greeting.innerHTML = "Click on one of the choices below the character to enter your answer."

	root_element.append(greeting);
	root_element.append(attempts_indicator);
	root_element.append(attempts_correct);
	root_element.append(symbol);

	amount_kana = amount_selection.value;
	amount_left = amount_kana

	next_drill();
}

function next_drill()
{
	document.getElementById("attempts_indicator").innerHTML = "attempts left = " + amount_left;
	document.getElementById("attempts_correct").innerHTML = "correct = " + amount_correct;
	let combined_kana = romaji_list.concat(hiragana_list, katakana_list);
	// select kana
	let selection = Math.floor(Math.random()*selection_range_end)+selection_range_start;
	document.getElementById("kana_symbol").innerHTML = combined_kana[selection];
	
	let choices = document.getElementById("choices");
	if(choices != null) {
		choices.remove();
	}
	choices = document.createElement("ul");
	choices.id = "choices";
	let answer_index = Math.floor(Math.random()*4);
	choices.value = answer_index;
	for(let i = 0;i<4;i++) {
		let choice = document.createElement("li");
		choice.id = "choice" + i;
		let wrong_selection = (Math.floor(Math.random()*selection_range_end)+selection_range_start) % romaji_list.length;
		let correct_selection = selection % romaji_list.length;
		while(wrong_selection == correct_selection) {
			wrong_selection = (Math.floor(Math.random()*selection_range_end)+selection_range_start) % romaji_list.length;
		}
		choice.innerHTML = combined_kana[wrong_selection];
		if(i == answer_index) {
			choice.innerHTML = combined_kana[correct_selection];
			choice.value = true;
		}
		choices.append(choice);
		choice.addEventListener('click', check_answer.bind(choice));
	}
	root_element.append(choices);
}

function show_results()
{
	root_element.innerHTML = "";
	let message = document.createElement("h2");
	let pct = document.createElement("span");
	let reset_button = document.createElement("div");
	message.innerHTML = "Your results:";
	message.id = "end_message";
	pct.innerHTML = (amount_correct / amount_kana * 100) + "%";
	pct.id = "perc";
	reset_button.innerHTML = "Reset";
	reset_button.addEventListener("click", initialize);
	reset_button.id = "reset_button";
	root_element.append(message);
	root_element.append(pct);
	root_element.append(reset_button);
}

function check_answer(event) {
	amount_left--;
	console.log(event);
	console.log(event.target.value);
	if(event.target.value == 1) {
		amount_correct += 1;
	}
	if(amount_left <= 0) {
		show_results();
		return
	}
	next_drill();
}

initialize();
