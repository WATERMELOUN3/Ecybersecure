import { EventEmitter, Injectable } from '@angular/core';
import { Chapter } from 'src/Chapter';
import { Choice } from 'src/Choice';
import { Dialog } from 'src/Dialog';
import { CharacterMood } from './CharacterMood';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  currentChapter: Chapter;
  currentDialog: Dialog;

  public DialogChanged: EventEmitter<Dialog> = new EventEmitter<Dialog>();

  constructor() {
    this.currentDialog = new Dialog();
    this.currentChapter = {
      title: 'Chapitre 1',
      startDialog: this.currentDialog,
    };

    // Dialog (4)
    // Jeter la clef - dial 2
    const dial4 = new Dialog();
    dial4.message =
      "Tout en gardant espoir qu'aucun de vos estimés collègues ne cherche sa clef USB vous la jetez";
    dial4.choices = [
      new Choice('Quitter', null),
      new Choice('Chapitre suivant', null),
    ];
    dial4.mood = CharacterMood.Hello;

    // Dialog (8)
    // Non - dial 6
    const dial8 = new Dialog();
    dial8.message = '';
    dial8.choices = [
      new Choice('Jeter la clef USB', dial4),
      new Choice('Mettre la clef USB dans un placard', null),
    ];
    dial8.mood = CharacterMood.Think;

    // Dialog (7)
    // Oui - dial 6
    const dial7 = new Dialog();
    dial7.message =
      'Vous prenez alors la décision de brancher la clef USB sur un ordinateur';
    dial7.choices = [
      new Choice(
        'Brancher la clef USB sur votre ordinateur professionnel',
        null
      ),
      new Choice('Brancher la clef USB sur votre ordinateur personnel', null),
    ];
    dial7.mood = CharacterMood.Think;

    // Dialog (6)
    // Apporter la clef USB - dial 2
    const dial6 = new Dialog();
    dial6.message =
      "Après les interminables bouchon du périphérique, une fois arrivé chez vous, vous vous demandez ce qu'il y a sur cette clef USB.Lire la clef USB ?";
    dial6.choices = [new Choice('Oui', dial7), new Choice('Non', dial8)];
    dial6.mood = CharacterMood.Think;

    // Dialog (5)
    // L'accueil prend en charge - dial 2
    const dial5 = new Dialog();
    dial5.message =
      "L'accueil va prendre en charge la clef USB, en espèrant qu'aucune erreur soit commise";
    dial5.choices = [
      new Choice('Quitter', null),
      new Choice('Chapitre suivant', null),
    ];
    dial5.mood = CharacterMood.Hello;

    // Dialog (2)
    // Oui - dial 1
    const dial2 = new Dialog();
    dial2.message =
      'Après avoir ramassé la clef vous vous demandez quoi en faire';
    dial2.choices = [
      new Choice("L'accueil prend en charge la clef USB", dial5),
      new Choice('Apporter la clef USB chez vous', dial6),
      new Choice('Jeter la clef USB', dial4),
    ];
    dial2.mood = CharacterMood.Think;

    // Dialog (3)
    // Non dial 1
    const dial3 = new Dialog();
    dial3.message =
      'Ce choix va laisser la possibilité à un autre de vos collègues de trouver la clef USB en sortant.';
    dial3.choices = [
      new Choice('Quitter', null),
      new Choice('Chapitre suivant', null),
    ];
    dial3.mood = CharacterMood.Hello;

    // Start dialog (1)
    this.currentDialog.message =
      'Vous trouvez une clef USB sur le parking de votre entreprise. Le ramasser ?';
    this.currentDialog.choices = [
      new Choice('Oui', dial2),
      new Choice('Non', dial3),
    ];
    this.currentDialog.mood = CharacterMood.Running;
  }

  selectChoice(choice: Choice): Dialog {
    this.currentDialog = choice.route;
    this.DialogChanged.emit(choice.route);
    return choice.route;
  }
}
