import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
 
import {Phone, PhoneService} from './phones.service';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
 
@Component({
  template: `
    <h2 *ngIf='phone'>
        <div class="small-font">Phone Details</div>
        <div class="phone-name">{{phone.name}}</div>
    </h2>
    <div class='detail' *ngIf='phone'>
        <table cellpadding="0" cellspacing="0">
          <tr>
            <th>Id</th><td>{{phone.id}}</td>
          </tr>
          <tr>
            <th>Processor</th><td>{{phone.core}}</td>
          </tr>
          <tr>
            <th>Camera</th><td>{{phone.camera}}</td>
          </tr>
          <tr>
            <th>Display</th><td>{{phone.screen}}</td>
          </tr>
          <tr>
            <th>Memory</th><td>{{phone.ram}}</td>
          </tr>
          <tr>
            <th>Quantity</th><td><input [(ngModel)]='quantity'/></td>
          </tr>
        </table>
    </div>
    <div class="action-buttons">
        <button (click)='save()' class="save">Save</button>
        <button (click)='cancel()'>Cancel</button>
    </div>`
})
 
export class PhoneDetailComponent implements OnInit, OnDestroy  {
 
 phone: Phone;
 private sub: Subscription;
 quantity: number = 0;
 
 constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PhoneService) {}
 
 ngOnInit() {
   this.sub = this.route.params.subscribe(params => {
      let id = 12;        // Extract the id from params instead
      this.phone = this.service.getPhone(id);
      if(this.phone){
        this.quantity = this.phone.quantity;
      }
    });
 }
 
 ngOnDestroy() {
   this.sub.unsubscribe();
 }
 
 gotoList() {
   this.router.navigate(['/phones']);
  }

  cancel() {
     this.quantity = this.phone.quantity;
     this.gotoList();
     }
   
  save() {
     this.phone.quantity = this.quantity;
     this.gotoList();
     }
   
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
     if(!this.phone || this.phone.quantity === this.quantity) {
        return true;
     }
     return new Promise<boolean>(resolve => {
        return resolve(window.confirm('Are you sure you want to discard the unsaved changes?'));
     });
  }
}