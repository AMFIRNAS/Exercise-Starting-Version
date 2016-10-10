import {Injectable} from '@angular/core';

export class Phone {
  constructor(
      public id: number, 
      public name: string, 
      public core: string, 
      public camera: string,
      public screen: string,
      public ram: string,
      public quantity: number) { }
}

@Injectable()
export class PhoneService {

  private phones: Array<Phone>;

  constructor(){
      this.phones = [
            new Phone(11, 'HTC Desire 825', '1.6GHz  quad-core', '13 MPx','5.5 inch', '2GB', 0),
            new Phone(12, 'Samsung Galaxy S7 Edge', '1.6GHz   octa-core', '12 MPx','5.5 inch', '4GB', 0),
            new Phone(13, 'Sony Xperia Z5', 'octa-core', '23 MPx','4.6 inch', '2GB', 0),
            new Phone(14, 'Sony Xperia Z3+', '1.5GHz   octa-core', '20.7 MPx','5.2 inch', '3GB', 0),
            new Phone(15, 'Apple iPhone 6s', '1.84 GHz Dual-core', '12 MPx','4.7 inch', '3GB', 0)];
  }

  public getPhoneList() : Array<Phone> { 
      return this.phones; 
  }

  public getPhone(id: number | string) : Phone {
     return this.phones.find(phone => phone.id === +id); 
  }
}