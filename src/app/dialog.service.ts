import { Injectable } from '@angular/core';
import { Chapter } from 'src/Chapter';
import { Choice } from 'src/Choice';
import { Dialog } from 'src/Dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  currentChapter: Chapter;
  currentDialog: Dialog;

  constructor() {
    this.currentDialog = new Dialog();
    this.currentChapter = { title: "", startDialog: this.currentDialog }

    this.currentDialog.message = "Vous trouvez une clef USB sur le parking de votre entreprise. Le ramasser ?"
    this.currentDialog.choices = [ new Choice("Oui", null), new Choice("Non", null) ]
  }
}
