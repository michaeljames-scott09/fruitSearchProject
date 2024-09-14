const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

let displayFruit = []

// Load Suggestions

function loadList (array) {
	const suggestBox = document.querySelector(".suggestions ul")
	
	for (const a of array) {
		let li = document.createElement("li")
		li.innerText = a
		suggestBox.appendChild(li)
	}
}

function search(str) {
	let results = [];
	// TODO
	for ( const f of fruit) {
		if (f.includes(str)) {
			results.push(f)
		}
	}
	return results;
}

function searchHandler(e) {
	// TODO
}

function showSuggestions(results, inputVal) {

	// TODO
	if (input.value) {
		displayFruit = search(inputVal)
	}
	else {
		displayFruit = fruit
	}
	loadList(displayFruit)
	
}

function useSuggestion(e) {
	// TODO
}

// Testing Functions
showSuggestions()

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);