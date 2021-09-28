import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss'],
})
export class CardDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public game: Game) {}

  ngOnInit(): void {}
}
