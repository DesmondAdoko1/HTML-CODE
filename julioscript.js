//function expression to select elements//
const selectElement = (s) => document.querySelector (s);
//open the menu on click//
selectElement(s:'.open').addEventListener('click', () => {
    selectElement (s:'.nav-list').classlist.add('active');
});

//close the menu on click//
selectElement(s:'.close').addEventListener('click', () => {
    selectElement (s:'.nav-list').classlist.remove(tokens: 'active');
});