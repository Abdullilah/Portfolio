// import {Component} from 'angular2/core';
// import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
// import {HomeComponent} from "./home.component";
// import {ServicesComponent} from "./services.component";
// import {AboutComponent} from "./about.component";
// import {ContactComponent} from "./contact.component";
//
// @Component({
//   selector: 'header-comp',
//   template: `
//         <nav class="nav">
//           <img src="../src/images/Logo.png">
//           <ul>
//             <li><a [routerLink]="['HomePage']">Home</a></li>
//             <li><a [routerLink]="['ServicesPage']">Services</a></li>
//             <li><a [routerLink]="['AboutPage']">About</a></li>
//             <li><a [routerLink]="['ContactPage']">Contact</a></li>
//           </ul>
//         </nav>
//
//         <section>
//           <router-outlet></router-outlet>
//         </section>
//     `,
//   directives: [HomeComponent, ServicesComponent, AboutComponent, ContactComponent, ROUTER_DIRECTIVES],
// })
//
// @RouteConfig([
//   {path: '/home', name: 'HomePage', component: HomeComponent, useAsDefault: true},
//   {path: '/services', name: 'ServicesPage', component: ServicesComponent},
//   {path: '/about', name: 'AboutPage', component: AboutComponent},
//   {path: '/contact', name: 'ContactPage', component: ContactComponent}
// ])
//
// export class HeaderComponent {
//
// }

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDLGtFQUFrRTtBQUNsRSxrREFBa0Q7QUFDbEQsMERBQTBEO0FBQzFELG9EQUFvRDtBQUNwRCx3REFBd0Q7QUFDeEQsRUFBRTtBQUNGLGVBQWU7QUFDZiw2QkFBNkI7QUFDN0IsZ0JBQWdCO0FBQ2hCLDRCQUE0QjtBQUM1QiwrQ0FBK0M7QUFDL0MsaUJBQWlCO0FBQ2pCLCtEQUErRDtBQUMvRCx1RUFBdUU7QUFDdkUsaUVBQWlFO0FBQ2pFLHFFQUFxRTtBQUNyRSxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLEVBQUU7QUFDRixvQkFBb0I7QUFDcEIsNENBQTRDO0FBQzVDLHFCQUFxQjtBQUNyQixTQUFTO0FBQ1QseUdBQXlHO0FBQ3pHLEtBQUs7QUFDTCxFQUFFO0FBQ0YsaUJBQWlCO0FBQ2pCLHFGQUFxRjtBQUNyRiw2RUFBNkU7QUFDN0Usb0VBQW9FO0FBQ3BFLHlFQUF5RTtBQUN6RSxLQUFLO0FBQ0wsRUFBRTtBQUNGLGlDQUFpQztBQUNqQyxFQUFFO0FBQ0YsSUFBSSIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuLy8gaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcbi8vIGltcG9ydCB7U2VydmljZXNDb21wb25lbnR9IGZyb20gXCIuL3NlcnZpY2VzLmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSBcIi4vYWJvdXQuY29tcG9uZW50XCI7XG4vLyBpbXBvcnQge0NvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3QuY29tcG9uZW50XCI7XG4vL1xuLy8gQENvbXBvbmVudCh7XG4vLyAgIHNlbGVjdG9yOiAnaGVhZGVyLWNvbXAnLFxuLy8gICB0ZW1wbGF0ZTogYFxuLy8gICAgICAgICA8bmF2IGNsYXNzPVwibmF2XCI+XG4vLyAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL0xvZ28ucG5nXCI+XG4vLyAgICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnSG9tZVBhZ2UnXVwiPkhvbWU8L2E+PC9saT5cbi8vICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ1NlcnZpY2VzUGFnZSddXCI+U2VydmljZXM8L2E+PC9saT5cbi8vICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0Fib3V0UGFnZSddXCI+QWJvdXQ8L2E+PC9saT5cbi8vICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0NvbnRhY3RQYWdlJ11cIj5Db250YWN0PC9hPjwvbGk+XG4vLyAgICAgICAgICAgPC91bD5cbi8vICAgICAgICAgPC9uYXY+XG4vL1xuLy8gICAgICAgICA8c2VjdGlvbj5cbi8vICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4vLyAgICAgICAgIDwvc2VjdGlvbj5cbi8vICAgICBgLFxuLy8gICBkaXJlY3RpdmVzOiBbSG9tZUNvbXBvbmVudCwgU2VydmljZXNDb21wb25lbnQsIEFib3V0Q29tcG9uZW50LCBDb250YWN0Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU10sXG4vLyB9KVxuLy9cbi8vIEBSb3V0ZUNvbmZpZyhbXG4vLyAgIHtwYXRoOiAnL2hvbWUnLCBuYW1lOiAnSG9tZVBhZ2UnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4vLyAgIHtwYXRoOiAnL3NlcnZpY2VzJywgbmFtZTogJ1NlcnZpY2VzUGFnZScsIGNvbXBvbmVudDogU2VydmljZXNDb21wb25lbnR9LFxuLy8gICB7cGF0aDogJy9hYm91dCcsIG5hbWU6ICdBYm91dFBhZ2UnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50fSxcbi8vICAge3BhdGg6ICcvY29udGFjdCcsIG5hbWU6ICdDb250YWN0UGFnZScsIGNvbXBvbmVudDogQ29udGFjdENvbXBvbmVudH1cbi8vIF0pXG4vL1xuLy8gZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG4vL1xuLy8gfVxuIl19
