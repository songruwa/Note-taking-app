import { UserNote } from './../interface/user-note.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  notes: UserNote[] = [];
  constructor() { }

  getNotes(){
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
    }
    return this.notes;
  }

  saveNote(newNote: UserNote, noteIndex: number) {
    // console.log("note from service:", newNote);
    if(noteIndex !== -1){
        this.notes[noteIndex] = newNote;
    } else {
      this.notes.push(newNote);
    }
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}