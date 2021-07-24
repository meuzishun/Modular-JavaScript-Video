var people = (function() {
    var people = ['Will', 'Steve'];

    function createHTML(text) {
        var item = document.createElement('li');

        var name = document.createElement('span');
        name.textContent = text;

        var delBtn = document.createElement('i');
        delBtn.classList.add('del');
        delBtn.textContent = 'X';

        item.appendChild(name);
        item.appendChild(delBtn);

        return item;
    }

    //cache DOM
    var el = document.querySelector('#peopleModule');
    var button = el.querySelector('button');
    var input = el.querySelector('input');
    var ul = el.querySelector('ul');

    //bind events
    button.addEventListener('click', addPerson);
    ul.addEventListener('click', deletePerson);

    render();

    function render() {
        ul.textContent = '';
        people.forEach(person => {
            var entry = createHTML(person);
            ul.appendChild(entry);
        });
    }

    function addPerson(value) {
        var name = (typeof value === 'string') ? value : input.value;
        people.push(name);
        render();
        input.value = '';
    }

    function deletePerson(event) {
        if (event.target.tagName === 'I') {
            var text = event.target.parentElement.firstChild.textContent;
            var index = people.indexOf(text);

            people.splice(index, 1);
            render();
        }
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    };

})();
