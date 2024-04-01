// const addBtn = document.querySelector('.add');
// const saveBtn = document.querySelector('.save');
// const cancelBtn = document.querySelector('.cancel');
// const deleteBtns = document.getElementsByClassName('delete-note');
// const deleteAllBtns = document.querySelector('.delete-all');

// const noteArea = document.querySelector('.note-area');
// const notePannel = document.querySelector('.note-pannel');
// const category = document.querySelector('#category');
// const textArea = document.querySelector('#text');
// const error = document.querySelector('.error');

// let selectedValue;

// let cardID = 0;

// const openPanel = () => {
// 	notePannel.style.display = 'flex';
// };

// const closePanel = () => {
// 	notePannel.style.display = 'none';
// 	error.style.visibility = 'hidden';
// 	textArea.value = '';
// 	category.selectedIndex = 0;
// };

// const addNote = () => {
// 	if (
// 		textArea.value !== '' &&
// 		category.options[category.selectedIndex].value !== '0'
// 	) {
// 		createNote();
// 		error.style.visibility = 'hidden';
// 	} else {
// 		error.style.visibility = 'visible';
// 	}
// };

// const createNote = () => {
// 	const newNote = document.createElement('div');
// 	newNote.classList.add('note');
// 	newNote.setAttribute('id', cardID);

// 	newNote.innerHTML = `
//     <div class="note-header">
//         <h3 class="note-title">${selectedValue}</h3>

//         <button class="delete-note" onclick = "deleteNote(${cardID})">
//             <i class="fas fa-times icon"></i>
//         </button>
//     </div>

//     <div class="note-body">
//        ${textArea.value}
//     </div>`;

// 	noteArea.appendChild(newNote);
// 	cardID++;
// 	textArea.value = '';
// 	category.selectedIndex = '0';
// 	notePannel.style.display = 'none';
// 	checkColor(newNote);
// };

// const selectValue = () => {
// 	selectedValue = category.options[category.selectedIndex].text;
// 	selectValue();
// };

// const checkColor = (note) => {
// 	switch (selectedValue) {
// 		case 'Zakupy':
// 			note.style.backgroundColor = 'rgb(72,255,0)';
// 			break;

// 		case 'Praca':
// 			note.style.backgroundColor = 'rgb(255,243,0)';
// 			break;

// 		case 'Inne':
// 			note.style.backgroundColor = 'rgb(0,170,255)';
// 			break;
// 	}
// };

// const deleteNote = (id) => {
// 	const noteToDelete = document.getElementById(id);
// 	noteArea.removeChild(noteToDelete);
// };

// const deleteAllNotes = () => {
// 	noteArea.textContent = '';
// };

// addBtn.addEventListener('click', openPanel);
// cancelBtn.addEventListener('click', closePanel);
// saveBtn.addEventListener('click', addNote);
// deleteAllBtns.addEventListener('click', deleteAllNotes);

// -----------------------MY-----COD------------------------------------------------

// -----------------------SELECTORS-------------------------------------------
const addBtn = document.querySelector('.add');
const deleteAllBtns = document.querySelector('.delete-all');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');

const category = document.querySelector('#category');
const textArea = document.querySelector('#text');
const notePannel = document.querySelector('.note-pannel');
const noteArea = document.querySelector('.note-area');
const error = document.querySelector('.error');

// --------------------FUNCTIONS--------------------------------------------------

const openPanel1 = () => {
	notePannel.style.display = 'flex';
};

const addNote1 = () => {
	if (
		textArea.value !== '' &&
		category.options[category.selectedIndex].value !== '0'
	) {
		createNote1();
		closePanel1();
	} else {
		error.style.visibility = 'visible';
	}
};

const createNote1 = () => {
	const noteTitle = category.options[category.selectedIndex].text; // Pobieramy nazwę kategorii
	const noteText = textArea.value;

	const noteDiv = document.createElement('div');
	noteDiv.classList.add('note');

	const noteHeader = document.createElement('div');
	noteHeader.classList.add('note-header');

	const titleElement = document.createElement('h3');
	titleElement.classList.add('note-title');
	titleElement.textContent = noteTitle; // Ustawiamy nazwę kategorii jako tytuł notatki

	const deleteButton = document.createElement('button');
	deleteButton.classList.add('delete-note');
	deleteButton.innerHTML = '<i class="fas fa-times icon"></i>';

	const noteBody = document.createElement('div');
	noteBody.classList.add('note-body');
	noteBody.textContent = noteText;

	deleteButton.addEventListener('click', () => {
		noteArea.removeChild(noteDiv);
	});

	noteHeader.appendChild(titleElement);
	noteHeader.appendChild(deleteButton);

	noteDiv.appendChild(noteHeader);
	noteDiv.appendChild(noteBody);

	noteArea.appendChild(noteDiv);
	checkColor(noteDiv, noteTitle); // Przekazujemy nazwę kategorii do funkcji checkColor
};

const checkColor = (note, category) => {
	switch (category) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72,255,0)';
			break;

		case 'Praca':
			note.style.backgroundColor = 'rgb(255,243,0)';
			break;

		case 'Inne':
			note.style.backgroundColor = 'rgb(0,170,255)';
			break;
		default:
			note.style.backgroundColor = 'white'; // Ustawienie domyślnego koloru tła
			break;
	}
};

const closePanel1 = () => {
	notePannel.style.display = 'none';
	category.selectedIndex = 0;
	textArea.value = '';
	error.style.visibility;
};

// Usuwanie wszystkich notatek
const deleteAllNotes = () => {
	while (noteArea.firstChild) {
		noteArea.removeChild(noteArea.firstChild);
	}
};

// Funkcja wyszukująca notatki na podstawie frazy
const searchNotes = () => {
	const searchQuery = document.querySelector('#search').value.toLowerCase(); // Pobieramy wpisaną frazę i przekształcamy ją na małe litery

	const notes = document.querySelectorAll('.note-title'); // Pobieramy wszystkie tytuły notatek

	notes.forEach((note) => {
		const title = note.textContent.toLowerCase(); // Pobieramy tytuł notatki i przekształcamy go na małe litery

		// Sprawdzamy, czy tytuł notatki zawiera frazę wyszukiwania
		if (title.includes(searchQuery)) {
			note.parentElement.parentElement.style.display = 'block'; // Wyświetlamy notatkę, jeśli tytuł pasuje do wyszukiwanej frazy
		} else {
			note.parentElement.parentElement.style.display = 'none'; // Ukrywamy notatkę, jeśli tytuł nie pasuje do wyszukiwanej frazy
		}
	});
};

// -------------------------LISTENERS-------------------------------------------
addBtn.addEventListener('click', openPanel1);
cancelBtn.addEventListener('click', closePanel1);
saveBtn.addEventListener('click', addNote1);
deleteAllBtns.addEventListener('click', deleteAllNotes);
document.querySelector('#search').addEventListener('input', searchNotes);
