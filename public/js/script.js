const viewAll = document.querySelector('.view_all');
const books = document.querySelector('.books');

viewAll.addEventListener('click', function(){
    books.classList.add('clicked')
})
