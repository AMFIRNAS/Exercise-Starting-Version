"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Phone = (function () {
    function Phone(id, name, core, camera, screen, ram, quantity) {
        this.id = id;
        this.name = name;
        this.core = core;
        this.camera = camera;
        this.screen = screen;
        this.ram = ram;
        this.quantity = quantity;
    }
    return Phone;
}());
exports.Phone = Phone;
var PhoneService = (function () {
    function PhoneService() {
        this.phones = [
            new Phone(11, 'HTC Desire 825', '1.6GHz  quad-core', '13 MPx', '5.5 inch', '2GB', 0),
            new Phone(12, 'Samsung Galaxy S7 Edge', '1.6GHz   octa-core', '12 MPx', '5.5 inch', '4GB', 0),
            new Phone(13, 'Sony Xperia Z5', 'octa-core', '23 MPx', '4.6 inch', '2GB', 0),
            new Phone(14, 'Sony Xperia Z3+', '1.5GHz   octa-core', '20.7 MPx', '5.2 inch', '3GB', 0),
            new Phone(15, 'Apple iPhone 6s', '1.84 GHz Dual-core', '12 MPx', '4.7 inch', '3GB', 0)];
    }
    PhoneService.prototype.getPhoneList = function () {
        return this.phones;
    };
    PhoneService.prototype.getPhone = function (id) {
        return this.phones.find(function (phone) { return phone.id === +id; });
    };
    PhoneService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PhoneService);
    return PhoneService;
}());
exports.PhoneService = PhoneService;
//# sourceMappingURL=phones.service.js.map