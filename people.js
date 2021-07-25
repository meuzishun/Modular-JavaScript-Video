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

    _render();

    function _render() {
        ul.textContent = '';
        people.forEach(person => {
            var entry = createHTML(person);
            ul.appendChild(entry);
        });
        events.emit('peopleChanged', people.length);
    }

    function addPerson(value) {
        var name = (typeof value === 'string') ? value : input.value;
        people.push(name);
        _render();
        input.value = '';
    }

    function deletePerson(event) {
        var index;
        if (typeof event === 'number') {
            index = event;
        } else if (event.target.tagName === 'I') {
            var text = event.target.parentElement.firstChild.textContent;
            index = people.indexOf(text);
        }
    
        people.splice(index, 1);
        _render();
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    };

})();
