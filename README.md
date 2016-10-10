#Prerequisites

Nodejs and npm

Install Nodejs and npm if you don’t have it installed already. 
Download the latest version of Nodejs using https://nodejs.org/en/. 
Run the installer to install Nodejs and npm to your computer.

Visual Studio Code

Recommended Code Editor for the practical exercise is Visual Studio Code. 
Download it for free from https://code.visualstudio.com/Download. 
But you can use any other Code Editor you prefer if you are not planning to use Visual Studio Code.


#Setting up the project

Download the exercise source code from Github. 

Get a command prompt in the project folder and run command “npm install”. 
This will install all the external libraries required including angular 2 modules. 
You need to have the internet connection when you run “npm install”.

Once you have successfully downloaded the external modules you can see there are two new folders created in your project folder called “node_modules” and “typings”. 
Note - If the “typings” folder doesn't show up after running npm install, you'll need to install it manually with the command “npm run typings install”

#Running the application

Get a command prompt in the project folder and run command “npm start” to start the application. 
This will compile your code and deploy the application using lite-server. 
Cool part here is that it will watch for file changes, so when you do a code change it will automatically refresh. 
You don’t need to do anything manually. 
Just edit code, save it and you will see your changes in the application.


#Practical Exercises

##Exercise 1

* Add a <router-outlet> to App component template.
  [app.component.html]
  
    ```
    <div class="main">
       <!-- Dynamic content goes here -->
       <router-outlet></router-outlet>
    </div>
	```

	
* Import Home and Phones components into app.routing.ts.
  [app.routing.ts]
  
    ```
    import { HomeComponent } from './home/home.component';
    import { PhonesComponent } from './phones/phones.component';
	```

	
* Add Routes to appRoutes array.
  [app.routing.ts]
  
    ```
    const appRoutes: Routes = [
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'phones',
          component: PhonesComponent 
        },
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        }
    ];
	```

	
* Add two routerLink elements to App component template
  [app.component.html]
  
    ```
    <!-- Links for Components-->
    <a routerLink='/home' routerLinkActive="active">Home</a>
    <a routerLink='/phones' routerLinkActive="active">Phones</a>
	```
	

##Exercise 2

* Import PhoneDetail component into app.routing.ts
  [app.routing.ts]
  
    ```
    import { PhoneDetailComponent } from './phones/phone-detail.component';
    ```

	
* Add Route for PhoneDetail component (with route parameter) into appRoutes.
  [app.routing.ts]
  
    ```
    {
        path: 'phones/:id',
        component: PhoneDetailComponent
    }
	```

	
* Create routerLinks to navigate to the PhoneDetails of each mobile phone listed in Phones component.
  [phones/phones.component.ts]
  
    ```
    <ul>
       <li *ngFor="let phone of phones">
          <a [routerLink]="['/phones/', phone.id]">{{phone.id}} : {{phone.name}}    [{{phone.quantity}}]</a>
       </li>
    </ul>
	```
	

##Exercise 3

* Import AuthGuard to app.routing.ts
  [app.routing.ts]

    ```
    import { AuthGuard } from './auth-guard.service';
	```
	

* Add AuthGuard into appRoutingProviders array.
  [app.routing.ts]
  
    ```
    export const appRoutingProviders: any[] = [AuthGuard]
    ```
  

* For each Route that should use AuthGuard, include AuthGuard for the property called “canActivate” in Route.
  [app.routing.ts]
  
    ```
    {
         path: 'phones',
         component: PhonesComponent,
         canActivate: [AuthGuard]
    },
    {
        path: 'phones/:id',
        component: PhoneDetailComponent,
        canActivate: [AuthGuard]
    } 
	```
	

##Exercise 4

* Import CanDeactivateGuard to app.routing.ts
  [app.routing.ts]
    
	```
    import { CanDeactivateGuard } from './can-deactivate-guard.service';
	```
	

* Add CanDeactivateGuard into appRoutingProviders array.
  [app.routing.ts]
    
	```
	export const appRoutingProviders: any[] = [AuthGuard, CanDeactivateGuard];
	```

* For each Route that should use CanDeactivateGuard, include CanDeactivateGuard for the property called “canDeactivate” in Route.
  [app.routing.ts]
  
    ```
    {
        path: 'phones/:id',
        component: PhoneDetailComponent,
        canActivate: [AuthGuard],
        canDeactivate: [CanDeactivateGuard]
    }
    ```	





 

