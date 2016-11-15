import { Component } from '@angular/core';

@Component ({
    selector: 'notes-container',
    styles: [`
    .notes {
  padding-top: 50px;
}
.creator {
  margin-bottom: 40px; 
}
    `],
    template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
            *ngFor = "let note of notes; let i = index"
            (checked) = "onNoteChecked (i)"
          >
          </note-card>
        </div>
      </div>
    </div>
    `
})

export class Notes {
    notes = [{
    title: 'Pupinku!',
    value: 'Bądź grzeczna. :)', 
    color: 'yellow'
  },
  {
    title: 'Pupuś!',
    value: 'Przytul misia.', 
    color: 'red'
  },
  {
    title: 'Żonusiu!',
    value: 'Zjedz coś smacznego.', 
    color: 'lightblue'
  },]

  onNoteChecked (i: number) {
    this.notes.splice (i, 1);
  }
}