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
var phones_service_1 = require('./phones.service');
var PhonesComponent = (function () {
    function PhonesComponent(service) {
        this.service = service;
    }
    PhonesComponent.prototype.ngOnInit = function () {
        this.phones = this.service.getPhoneList();
    };
    PhonesComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>Mobile Phones</h2>\n    <div class='navigator'>\n        <ul>\n            <li *ngFor=\"let phone of phones\">\n                <a [routerLink]=\"['/phones/', phone.id]\">\n                    <span class=\"phone-id\">{{phone.id}}</span>\n                    <span class=\"name\">{{phone.name}}</span>\n                    <span class=\"quantity\">{{phone.quantity}}</span>\n                </a>\n            </li>\n        </ul>\n    </div>"
        }), 
        __metadata('design:paramtypes', [phones_service_1.PhoneService])
    ], PhonesComponent);
    return PhonesComponent;
}());
exports.PhonesComponent = PhonesComponent;
//# sourceMappingURL=phones.component.js.map