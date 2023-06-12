import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.scss']
})
export class VehicleTypeComponent {
  isModalOpen = false;
  constructor(private modalService: NgbModal) { }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-title' }).result.then(
      (result) => {
        // Modal closed
        console.log(`Modal closed with result: ${result}`);
      },
      (reason) => {
        // Modal dismissed
        console.log(`Modal dismissed with reason: ${reason}`);
      }
    );
  }

  user: any = {
    name: '',
    email: ''
  };

  saveUser() {
    // Logic to save the user
  }

  closeModal() {
    // Logic to close the modal
  }
}
