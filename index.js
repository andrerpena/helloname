console.log('something');

// const vorpal = require('vorpal')();

// vorpal
//   .command('sayHello [name]', 'Says hello to whoever you want')
//   .action(function(args, callback) {
//     this.log(`Hello ${args.name}`);
//     callback();
//   });

// vorpal
//     .command('say [what]', 'Says what you tell it to say')
//     .action(function(args, callback) {
//         var _self = this;
//         this.prompt({
//             name: 'what',
//             type: 'rawlist',
//             choices: [
//                 { name: 'Option1', value: 'option1' },
//                 { name: 'Option2', value: 'option2' }
//             ],
//             default: '',
//             message: 'What do you want me to say?'
//         }, function(result) {
//             _self.log(result);
//          });
//     });

// vorpal
//   .delimiter('hello$')
//   .show();