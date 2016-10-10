import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
 
import {Phone, PhoneService} from './phones.service';
 
@Component({
  template:`
    <h2>Mobile Phones</h2>
    <div class='navigator'>
        <ul>
            <li *ngFor="let phone of phones">
                <a [routerLink]="['/phones/', phone.id]">
                    <span class="phone-id">{{phone.id}}</span>
                    <span class="name">{{phone.name}}</span>
                    <span class="quantity">{{phone.quantity}}</span>
                </a>
            </li>
        </ul>
    </div>`
 })
 
 
export class PhonesComponent implements OnInit {
 
 phones: Array<Phone>;
 
 constructor(private service: PhoneService) {}
 
 ngOnInit() {
    this.phones = this.service.getPhoneList();
 }
}