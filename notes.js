const fs = require('fs');
const chalk = require('chalk');


const getNotes = function () {
    return 'Your notes';
};

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.bold('Note added successfully !!'));
    }else{
        console.log(chalk.red.bold("Duplicate titles"));
    }

};

const removeNotes = function (title) {
    const notes = loadNotes();
    // console.log(notes);
    // for (let i = 0; i < notes.length; i++) {
    //     if(notes[i].title === title){
    //         // console.log('remove note');
    //         delete notes[i];
    //     }
    //     if(notes[i] === null){
    //         delete notes[i].key;
    //     }
    // };

    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
        console.log(chalk.green.bold('Note removed successfully !!'));
    });
    if(notes.length > notesToKeep.length){
        console.log(chalk.bold.green("Notes was removed successfully"));
    }else{
        console.log(chalk.bold.red("No note found"));
    }
    saveNotes(notesToKeep);
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
};

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const removeNote = function(note){
    const dataJSON = JSON.stringify(note);
    fs.removeFileSync('notes.json', dataJSON);
};

module.exports = {
    getNotes: getNotes,
    addNotes: addNote,
    removeNotes: removeNotes,
};