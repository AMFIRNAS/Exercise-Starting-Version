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
var router_1 = require('@angular/router');
var phones_service_1 = require('./phones.service');
var PhoneDetailComponent = (function () {
    function PhoneDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.quantity = 0;
    }
    PhoneDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = 12; // Extract the id from params instead
            _this.phone = _this.service.getPhone(id);
            if (_this.phone) {
                _this.quantity = _this.phone.quantity;
            }
        });
    };
    PhoneDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PhoneDetailComponent.prototype.gotoList = function () {
        this.router.navigate(['/phones']);
    };
    PhoneDetailComponent.prototype.cancel = function () {
        this.quantity = this.phone.quantity;
        this.gotoList();
    };
    PhoneDetailComponent.prototype.save = function () {
        this.phone.quantity = this.quantity;
        this.gotoList();
    };
    PhoneDetailComponent.prototype.canDeactivate = function () {
        if (!this.phone || this.phone.quantity === this.quantity) {
            return true;
        }
        return new Promise(function (resolve) {
            return resolve(window.confirm('Are you sure you want to discard the unsaved changes?'));
        });
    };
    PhoneDetailComponent = __decorate([
        core_1.Component({
            template: "\n    <h2 *ngIf='phone'>\n        <div class=\"small-font\">Phone Details</div>\n        <div class=\"phone-name\">{{phone.name}}</div>\n    </h2>\n    <div class='detail' *ngIf='phone'>\n        <table cellpadding=\"0\" cellspacing=\"0\">\n          <tr>\n            <th>Id</th><td>{{phone.id}}</td>\n          </tr>\n          <tr>\n            <th>Processor</th><td>{{phone.core}}</td>\n          </tr>\n          <tr>\n            <th>Camera</th><td>{{phone.camera}}</td>\n          </tr>\n          <tr>\n            <th>Display</th><td>{{phone.screen}}</td>\n          </tr>\n          <tr>\n            <th>Memory</th><td>{{phone.ram}}</td>\n          </tr>\n          <tr>\n            <th>Quantity</th><td><input [(ngModel)]='quantity'/></td>\n          </tr>\n        </table>\n    </div>\n    <div class=\"action-buttons\">\n        <button (click)='save()' class=\"save\">Save</button>\n        <button (click)='cancel()'>Cancel</button>\n    </div>"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, phones_service_1.PhoneService])
    ], PhoneDetailComponent);
    return PhoneDetailComponent;
}());
exports.PhoneDetailComponent = PhoneDetailComponent;
//# sourceMappingURL=phone-detail.component.js.map