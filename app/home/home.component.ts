import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home',
  template: `
            <div class="home-big-text">
              <div class="thin">Welcome <br/>to the session</div>
              <div class="bold">
                <span class="color-light-blue">Smarter <br/>Navigation <br/>with</span>
                <span class="color-red">Angular2</span> <br/>Component <br/>Router
              </div>
            </div>
            <div class="title-text">
                <div class="icon-copyright">
                    <img src="../images/icon-copyright.png" alt=""/>
                </div>
                <span class="white">Colombo</span> <span>AngularJS</span>
                <br/>Meet up 2016
            </div>
            `
})

export class HomeComponent {
}