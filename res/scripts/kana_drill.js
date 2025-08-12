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

function initialize() {
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
	start_button.setAttribute("onclick", "run_drill()");

	input_form.append(kana_mode_select);
	input_form.append(amount_select);
	input_form.append(start_button);
}

function run_drill() {
	let mode_selection = document.getElementById("kana_mode_select");
	let amount_selection = document.getElementById("amount_select");
	if(romaji_list.length != hiragana_list.length || 
		hiragana_list.length != katakana_list.length ||
		romaji_list.length != katakana_list.length) {

		alert("Internal Error: list sizes do not match!");
		return;

	}
	root_element.innerHTML = "";
	
	let symbol = document.createElement("div");
	symbol.innerHTML = "ア";
	symbol.id = "kana_symbol"
	let choices = document.createElement("ul");
	for(let i = 0; i < 4; i++) {
		let choice = document.createElement("li");
		choice.innerHTML = "A";
		choices.append(choice);
	}
	root_element.append(symbol);
	root_element.append(choices);
}

initialize();
