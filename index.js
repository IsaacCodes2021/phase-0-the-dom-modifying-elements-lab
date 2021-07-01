const element = document.createElement('div'); //creates 'div' @ element

document.body.appendChild(element); // makes element 'div' a child of 'body'

const ul = document.createElement('ul'); // creates the 'ul' @ ul
for (let i = 0; i < 3; i++) {
debugger;
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
element.appendChild(ul); //makes 'ul' a child of the 'div'


// Write your code here!
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
document.body.appendChild(newHeader)
main.remove();
newHeader.innerHTML = "Isaac is the champion";

