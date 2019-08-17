const chalk = require('chalk');
const notes = require('./notes');
// const greeting = chalk.blue.inverse.bold('Success');
// console.log(greeting);
//
// console.log(process.argv[2])

// Process.argv
// This is boring parsing so we use nodejs package yargs

// const command = process.argv[2];
// console.log(process.argv);
// if(command === 'add'){
//     console.log('adding note');
// }else if (command === 'remove'){
//     console.log('removing note');
// }

const yargs = require('yargs');
//console.log(process.argv)
// console.log(yargs.argv) // gives output in json object format , easier

//create add coomand

// yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body);
    }
});


// remove a note
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //console.log("Title to be removed", argv['title']);
        notes.removeNotes(argv.title);
    }
});

yargs.parse();

// 6th