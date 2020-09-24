import { Component, OnInit } from '@angular/core';
import { Dialog } from 'src/Dialog';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  currentDialog: Dialog;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.currentDialog = this.dialogService.currentDialog;
    console.log(this.currentDialog);
  }
}
