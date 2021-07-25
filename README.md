# Modular JavaScript Video

The code here creates a simple application that takes a name (or any text) as an input and adds that name to the display below.  Once a name is displayed, it also has a close/delete button to remove itself.  Above, a count is displaying the number of names.

There are two important concepts going on behind the scenes however:

1) The people.js file uses a pattern called "Revealing Modular Pattern".  This pattern uses functional scope to hide most aspects of a module and only expose aspects that other parts of the code should interact with. (It is worth pointing out that with the current structure of the code, no other part/module is actually using these exposes aspects.  This is just for demonstration.)

2) The pubsub.js file is a event-emitting-hub of sorts.  The people module is only responsible for taking the input text and adding that text to the table below.  The stats module is only responsible for updating the count with the number of people currently in the people module (and consequently included in the table below).  Rather than the people module directly calling a method of the stats module, the people module just emits an event using the pubsub module.  Then any other module can just listen to the pubsub for events.  Here there is only one other module (stats) so it may seem overly complex.  But if this application were to grow in complexity, such a structure could become quite helpful and perhaps necessary.  Additionally, if the stats module were to disappear completely, the people module would not be affected at all.