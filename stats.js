var stats = (function() {
    var people = 0;

    //cache DOM
    var stats = document.querySelector('#statsModule');

    var createHTML = function(value) {
        stats.textContent = '';

        var header = document.createElement('h2');
        header.textContent = 'Stats';

        var count = document.createElement('strong');
        count.textContent = 'people: ' + value;

        stats.appendChild(header);
        stats.appendChild(count);
    };

    events.on('peopleChanged', setPeople);
    _render();

    function _render() {
        createHTML(people);
    }

    function setPeople(newPeople) {
        people = newPeople;
        _render();
    }
    
})();