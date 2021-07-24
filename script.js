var people = {
    people: ['Will', 'Steve'],
    createHTML: function(text) {
        var item = document.createElement('li');

        var name = document.createElement('span');
        name.textContent = text;

        var delBtn = document.createElement('i');
        delBtn.classList.add('del');
        delBtn.textContent = 'X';

        item.appendChild(name);
        item.appendChild(delBtn);

        return item;
    },
    init: function() {
        this.cacheDom();
        this.bindEvents();
        this.render();
    },
    cacheDom: function() {
        this.el = document.querySelector('#peopleModule');
        this.button = this.el.querySelector('button');
        this.input = this.el.querySelector('input');
        this.ul = this.el.querySelector('ul');
    },
    bindEvents: function() {
        this.button.addEventListener('click', this.addPerson.bind(this));
        this.ul.addEventListener('click', this.deletePerson.bind(this));
    },
    render: function() {
       this.ul.textContent = '';
       this.people.forEach(person => {
           var entry = this.createHTML(person);
           this.ul.appendChild(entry);
       });
    },
    addPerson: function(value) {
        console.dir(value);
        this.people.push(value || this.input.value);
        this.render();
        this.input.value = '';
    },
    deletePerson: function(event) {
        if (event.target.tagName === 'I') {
            var text = event.target.parentElement.firstChild.textContent;
            var index = this.people.indexOf(text);

            this.people.splice(index, 1);
            this.render();
        }
    }

};

people.init();
