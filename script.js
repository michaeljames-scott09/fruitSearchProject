const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Load Suggestions

function loadList (array) {
	let suggestBox = document.querySelector(".suggestions")
	const newBox = document.createElement("ul")
	for (const a of array) {
		let li = document.createElement("li")
		li.innerHTML = a
		newBox.appendChild(li)
	}
	suggestBox.replaceChildren(newBox)
}

function search(str) {
	let results = [];

	for ( const f of fruit) {
		if (f.toLowerCase().includes(str.toLowerCase())) {
			results.push(f)
		}
	}
	return results;
}

function searchHandler() {

	showSuggestions(input.value)
}

function showSuggestions(inputVal) {
	let results = []
	
	if (input) {
		results = search(inputVal)
	}
	else {
		results = fruit
	}
	loadList(results)
	
}

function useSuggestion(e) {
	// TODO
	input.value = e.innerText
}

// Loading

loadList(fruit)

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);