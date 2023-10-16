/* import {Component, Inject} from '@angular/core';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true,
  imports: [DialogModule] ,
})
export class ModalComponent {

  constructor(public dialog: Dialog) {}
  openDialog() {
    this.dialog.open(), {
      minWidth: '300px',
      data: {
        animal: 'panda',
      },
    });
  }

}
 */
