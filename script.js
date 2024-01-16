let textarea = document.getElementById("text-area");
let feed = document.getElementById("notes-area");
let color = document.getElementById("pickColor");
let savebtn = document.getElementById("savebtn1");

savebtn.addEventListener("click", (e) => {
    let textInput = document.getElementById("note-input");
    let text = textInput.value.trim();
    let selectedColor = color.value;

    if (text !== '') {
        if (selectedColor.toLowerCase() === '#000000' || selectedColor.toLowerCase() === 'black') {
            alert('Please choose a color other than black.');
            return;
        }

        const note = document.createElement('div');
        note.classList.add('your-notes');
        note.style.backgroundColor = selectedColor;

        const notep = document.createElement('p');
        const removebtn = document.createElement('button');
        removebtn.classList.add('removebtn');

        notep.innerText = text;
        removebtn.innerText = 'Remove';

        removebtn.addEventListener('click', () => {
            feed.removeChild(note);
        });

        note.appendChild(notep);
        note.appendChild(removebtn);
        feed.appendChild(note);

        textInput.value = '';
    } else {
        alert('Please enter valid text before saving.');
    }
});
