import { Component, OnInit } from '@angular/core';
import { CharacterMood } from '../CharacterMood';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  currentMood: CharacterMood = CharacterMood.Running;

  constructor(private dialogService: DialogService) {
    dialogService.DialogChanged.subscribe((dialog) => this.currentMood = dialog.mood);
  }

  ngOnInit(): void {
    console.log(this.currentMood);
  }
}
