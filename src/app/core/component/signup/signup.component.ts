import { Component, OnInit } from '@angular/core';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  constructor (private modalService: NgbModal){}
  ngOnInit(): void {
    console.log('Conponent signup');
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
