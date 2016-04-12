import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Chats } from '../chats.js';
import './main.html';

Template.nycda_chat.helpers({
    chats: function() {
        return Chats.find({}, { sort: { time: -1}});
    }
})

Template.nycda_chat.events({
  'keydown input#text' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      var name = 'Anonymous';
      var message = $('#text')

      if (message.value != '') {
      	console.log(Meteor.user().emails[0].address);
        Chats.insert({
          name: name,
          message: message.value,
          time: Date.now(),
        });

        $('#text').val('');
        message.value = '';
      }
    }
  }
});

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
