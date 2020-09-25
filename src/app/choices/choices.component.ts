import { Component, OnInit } from '@angular/core';
import { Choice } from 'src/Choice';
import { Dialog } from 'src/Dialog';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss'],
})
export class ChoicesComponent implements OnInit {
  currentDialog: Dialog;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.currentDialog = this.dialogService.currentDialog;
  }

  choiceClicked(choice: Choice): void {
    this.currentDialog = this.dialogService.selectChoice(choice);
  }
}
