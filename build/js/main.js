const itemCard = document.getElementById('card-item');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        let people = data;
        console.log(people);
        return people.map(person => {
            itemCard.innerHTML += `<div class="card">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">${person.name}</h5>
                <p class="card-text">${person.email}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>`;
        });
    });
