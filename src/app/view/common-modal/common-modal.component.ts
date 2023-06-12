import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css']
})
export class CommonModalComponent {
  @Input() title!: string;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  saveChanges() {
    this.save.emit();
  }

  closeModal() {
    this.close.emit();
  }
}
