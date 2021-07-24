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
        // this.$el = $('#peopleModule');
        this.el = document.querySelector('#peopleModule');
        // this.$button = this.$el.find('button');
        this.button = this.el.querySelector('button');
        // this.$input = this.$el.find('input');
        this.input = this.el.querySelector('input');
        // this.$ul = this.$el.find('ul');
        this.ul = this.el.querySelector('ul');
        // this.template = this.$el.find('#people-template').html();
        // this.createHTML = function(text) {
        //     var item = document.createElement('li');

        //     var name = document.createElement('span');
        //     name.textContent = text;

        //     var delBtn = document.createElement('i');
        //     delBtn.classList.add('del');
        //     delBtn.textContent = 'X';

        //     item.appendChild(name);
        //     item.appendChild(delBtn);

        //     return item;
        // };
    },
    bindEvents: function() {
        // this.$button.on('click', this.addPerson.bind(this));
        this.button.addEventListener('click', this.addPerson.bind(this));
        // this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
        this.ul.addEventListener('click', this.deletePerson.bind(this));
    },
    render: function() {
    //    var data = {
    //        people: this.people,
    //    };
    //    this.$ul.html(Mustache.render(this.template, data));
    //    var items = this.ul.children;
       this.ul.textContent = '';
       this.people.forEach(person => {
           var entry = this.createHTML(person);
           this.ul.appendChild(entry);
       });
    },
    addPerson: function(value) {
        // this.people.push(this.$input.val());
        console.dir(value);
        this.people.push(value || this.input.value);
        this.render();
        // this.$input.val('');
        this.input.value = '';
    },
    deletePerson: function(event) {
        if (event.target.tagName === 'I') {
            // var $remove = $(event.target).closest('li');
            var text = event.target.parentElement.firstChild.textContent;
            // var i = this.$ul.find('li').index($remove);
            var index = this.people.indexOf(text);

            // this.people.splice(i, 1);
            this.people.splice(index, 1);
            this.render();
        }
    }

};

people.init();
