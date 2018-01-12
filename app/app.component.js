System.register(['angular2/core', "angular2/router", "./personal.info.component", "./technical.skills.component", "./work.experience.component", "./education.component", "./personal.skills.component", "./additional.information.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, personal_info_component_1, technical_skills_component_1, work_experience_component_1, education_component_1, personal_skills_component_1, additional_information_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (personal_info_component_1_1) {
                personal_info_component_1 = personal_info_component_1_1;
            },
            function (technical_skills_component_1_1) {
                technical_skills_component_1 = technical_skills_component_1_1;
            },
            function (work_experience_component_1_1) {
                work_experience_component_1 = work_experience_component_1_1;
            },
            function (education_component_1_1) {
                education_component_1 = education_component_1_1;
            },
            function (personal_skills_component_1_1) {
                personal_skills_component_1 = personal_skills_component_1_1;
            },
            function (additional_information_component_1_1) {
                additional_information_component_1 = additional_information_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.selectedItem = 'first-bar';
                };
                AppComponent.prototype.barClicked = function (bar) {
                    this.selectedItem = bar;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <!-- Start the background of the page -->\n    <div class='page-body'>\n      <div class='main-window'>\n        <!-- Start the nav bar on the left -->\n        <nav class=\"nav\">\n          <div class='nav-body'>\n            <h2>Abdullilah <br>Alhaj Younes</h2>\n            <ul class='nav-list'>\n              <li [class.active]=\"selectedItem ==='first-bar'\" (click)=\"barClicked('first-bar')\">\n                <a [routerLink]=\"['PersonalInformation']\"><img src=\"../src/images/icons/boss.svg\" alt=\"icon\">Personal Information</a>\n              </li>\n              <li [class.active]=\"selectedItem ==='second-bar'\" (click)=\"barClicked('second-bar')\">\n                <a [routerLink]=\"['TechnicalSkills']\"><img src=\"../src/images/icons/tools-and-utensils.svg\" alt=\"icon\">Technical skills</a>\n              </li>\n              <li [class.active]=\"selectedItem ==='third-bar'\" (click)=\"barClicked('third-bar')\">\n                <a [routerLink]=\"['WorkExperience']\"><img src=\"../src/images/icons/working.svg\" alt=\"icon\">Work Experience</a>\n              </li>\n              <li [class.active]=\"selectedItem ==='fourth-bar'\" (click)=\"barClicked('fourth-bar')\">\n                <a [routerLink]=\"['Education']\"><img src=\"../src/images/icons/school.svg\" alt=\"icon\">Education</a>\n              </li>\n              <li [class.active]=\"selectedItem ==='fifth-bar'\" (click)=\"barClicked('fifth-bar')\">\n                <a [routerLink]=\"['PersonalSkills']\"><img src=\"../src/images/icons/skills.svg\" alt=\"icon\">Personal Skills</a>\n              </li>\n              <li [class.active]=\"selectedItem ==='sixth-bar'\" (click)=\"barClicked('sixth-bar')\">\n                <a [routerLink]=\"['AdditionalInformation']\"><img src=\"../src/images/icons/plus.svg\" alt=\"icon\">Additional Information</a>\n              </li>\n            </ul>\n          </div>\n        </nav>\n        <!-- End the nav bar on the left -->\n        <!-- Start the main section on the right -->\n        <section class=\"main-section\">\n          <router-outlet></router-outlet>\n        </section>\n        <!-- End the main section on the right -->\n      </div>\n    </div>\n    <!-- End the background of the page -->\n\n    \n    ",
                        directives: [personal_info_component_1.PersonalInfoComponent, technical_skills_component_1.TechnicalSkillsComponent, work_experience_component_1.WorkExperienceComponent, education_component_1.EducationComponent, personal_skills_component_1.PersonalSkillsComponent, additional_information_component_1.AdditionalInformationComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/personalinfo', name: 'PersonalInformation', component: personal_info_component_1.PersonalInfoComponent, useAsDefault: true },
                        { path: '/technicalskills', name: 'TechnicalSkills', component: technical_skills_component_1.TechnicalSkillsComponent },
                        { path: '/workexperience', name: 'WorkExperience', component: work_experience_component_1.WorkExperienceComponent },
                        { path: '/education', name: 'Education', component: education_component_1.EducationComponent },
                        { path: '/personalskills', name: 'PersonalSkills', component: personal_skills_component_1.PersonalSkillsComponent },
                        { path: '/additionalinformation', name: 'AdditionalInformation', component: additional_information_component_1.AdditionalInformationComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrRUE7Z0JBQUE7Z0JBU0EsQ0FBQztnQkFQQywrQkFBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO2dCQUNsQyxDQUFDO2dCQUVELGlDQUFVLEdBQVYsVUFBVyxHQUFXO29CQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztnQkFDMUIsQ0FBQztnQkFoRUg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGd1RUF5Q1A7d0JBQ0gsVUFBVSxFQUFFLENBQUMsK0NBQXFCLEVBQUUscURBQXdCLEVBQUUsbURBQXVCLEVBQUUsd0NBQWtCLEVBQUUsbURBQXVCLEVBQUUsaUVBQThCLEVBQUUsMEJBQWlCLENBQUM7cUJBQ3ZMLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDWCxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUMxRyxFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLHFEQUF3QixFQUFDO3dCQUN4RixFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLG1EQUF1QixFQUFDO3dCQUNyRixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUM7d0JBQ3RFLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsbURBQXVCLEVBQUM7d0JBQ3JGLEVBQUMsSUFBSSxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUVBQThCLEVBQUM7cUJBQzNHLENBQUM7O2dDQUFBO2dCQVdGLG1CQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCx1Q0FTQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge1BlcnNvbmFsSW5mb0NvbXBvbmVudH0gZnJvbSBcIi4vcGVyc29uYWwuaW5mby5jb21wb25lbnRcIjtcbmltcG9ydCB7VGVjaG5pY2FsU2tpbGxzQ29tcG9uZW50fSBmcm9tIFwiLi90ZWNobmljYWwuc2tpbGxzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXb3JrRXhwZXJpZW5jZUNvbXBvbmVudH0gZnJvbSBcIi4vd29yay5leHBlcmllbmNlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFZHVjYXRpb25Db21wb25lbnR9IGZyb20gXCIuL2VkdWNhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UGVyc29uYWxTa2lsbHNDb21wb25lbnR9IGZyb20gXCIuL3BlcnNvbmFsLnNraWxscy5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRkaXRpb25hbEluZm9ybWF0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9hZGRpdGlvbmFsLmluZm9ybWF0aW9uLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWFwcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLSBTdGFydCB0aGUgYmFja2dyb3VuZCBvZiB0aGUgcGFnZSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdwYWdlLWJvZHknPlxuICAgICAgPGRpdiBjbGFzcz0nbWFpbi13aW5kb3cnPlxuICAgICAgICA8IS0tIFN0YXJ0IHRoZSBuYXYgYmFyIG9uIHRoZSBsZWZ0IC0tPlxuICAgICAgICA8bmF2IGNsYXNzPVwibmF2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nbmF2LWJvZHknPlxuICAgICAgICAgICAgPGgyPkFiZHVsbGlsYWggPGJyPkFsaGFqIFlvdW5lczwvaDI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdi1saXN0Jz5cbiAgICAgICAgICAgICAgPGxpIFtjbGFzcy5hY3RpdmVdPVwic2VsZWN0ZWRJdGVtID09PSdmaXJzdC1iYXInXCIgKGNsaWNrKT1cImJhckNsaWNrZWQoJ2ZpcnN0LWJhcicpXCI+XG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydQZXJzb25hbEluZm9ybWF0aW9uJ11cIj48aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvaWNvbnMvYm9zcy5zdmdcIiBhbHQ9XCJpY29uXCI+UGVyc29uYWwgSW5mb3JtYXRpb248L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkSXRlbSA9PT0nc2Vjb25kLWJhcidcIiAoY2xpY2spPVwiYmFyQ2xpY2tlZCgnc2Vjb25kLWJhcicpXCI+XG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydUZWNobmljYWxTa2lsbHMnXVwiPjxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9pY29ucy90b29scy1hbmQtdXRlbnNpbHMuc3ZnXCIgYWx0PVwiaWNvblwiPlRlY2huaWNhbCBza2lsbHM8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkSXRlbSA9PT0ndGhpcmQtYmFyJ1wiIChjbGljayk9XCJiYXJDbGlja2VkKCd0aGlyZC1iYXInKVwiPlxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnV29ya0V4cGVyaWVuY2UnXVwiPjxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9pY29ucy93b3JraW5nLnN2Z1wiIGFsdD1cImljb25cIj5Xb3JrIEV4cGVyaWVuY2U8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkSXRlbSA9PT0nZm91cnRoLWJhcidcIiAoY2xpY2spPVwiYmFyQ2xpY2tlZCgnZm91cnRoLWJhcicpXCI+XG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydFZHVjYXRpb24nXVwiPjxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9pY29ucy9zY2hvb2wuc3ZnXCIgYWx0PVwiaWNvblwiPkVkdWNhdGlvbjwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIFtjbGFzcy5hY3RpdmVdPVwic2VsZWN0ZWRJdGVtID09PSdmaWZ0aC1iYXInXCIgKGNsaWNrKT1cImJhckNsaWNrZWQoJ2ZpZnRoLWJhcicpXCI+XG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydQZXJzb25hbFNraWxscyddXCI+PGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2ljb25zL3NraWxscy5zdmdcIiBhbHQ9XCJpY29uXCI+UGVyc29uYWwgU2tpbGxzPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgW2NsYXNzLmFjdGl2ZV09XCJzZWxlY3RlZEl0ZW0gPT09J3NpeHRoLWJhcidcIiAoY2xpY2spPVwiYmFyQ2xpY2tlZCgnc2l4dGgtYmFyJylcIj5cbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ0FkZGl0aW9uYWxJbmZvcm1hdGlvbiddXCI+PGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2ljb25zL3BsdXMuc3ZnXCIgYWx0PVwiaWNvblwiPkFkZGl0aW9uYWwgSW5mb3JtYXRpb248L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPCEtLSBFbmQgdGhlIG5hdiBiYXIgb24gdGhlIGxlZnQgLS0+XG4gICAgICAgIDwhLS0gU3RhcnQgdGhlIG1haW4gc2VjdGlvbiBvbiB0aGUgcmlnaHQgLS0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpbi1zZWN0aW9uXCI+XG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwhLS0gRW5kIHRoZSBtYWluIHNlY3Rpb24gb24gdGhlIHJpZ2h0IC0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSBFbmQgdGhlIGJhY2tncm91bmQgb2YgdGhlIHBhZ2UgLS0+XG5cbiAgICBcbiAgICBgLFxuICBkaXJlY3RpdmVzOiBbUGVyc29uYWxJbmZvQ29tcG9uZW50LCBUZWNobmljYWxTa2lsbHNDb21wb25lbnQsIFdvcmtFeHBlcmllbmNlQ29tcG9uZW50LCBFZHVjYXRpb25Db21wb25lbnQsIFBlcnNvbmFsU2tpbGxzQ29tcG9uZW50LCBBZGRpdGlvbmFsSW5mb3JtYXRpb25Db21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAge3BhdGg6ICcvcGVyc29uYWxpbmZvJywgbmFtZTogJ1BlcnNvbmFsSW5mb3JtYXRpb24nLCBjb21wb25lbnQ6IFBlcnNvbmFsSW5mb0NvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcbiAge3BhdGg6ICcvdGVjaG5pY2Fsc2tpbGxzJywgbmFtZTogJ1RlY2huaWNhbFNraWxscycsIGNvbXBvbmVudDogVGVjaG5pY2FsU2tpbGxzQ29tcG9uZW50fSxcbiAge3BhdGg6ICcvd29ya2V4cGVyaWVuY2UnLCBuYW1lOiAnV29ya0V4cGVyaWVuY2UnLCBjb21wb25lbnQ6IFdvcmtFeHBlcmllbmNlQ29tcG9uZW50fSxcbiAge3BhdGg6ICcvZWR1Y2F0aW9uJywgbmFtZTogJ0VkdWNhdGlvbicsIGNvbXBvbmVudDogRWR1Y2F0aW9uQ29tcG9uZW50fSxcbiAge3BhdGg6ICcvcGVyc29uYWxza2lsbHMnLCBuYW1lOiAnUGVyc29uYWxTa2lsbHMnLCBjb21wb25lbnQ6IFBlcnNvbmFsU2tpbGxzQ29tcG9uZW50fSxcbiAge3BhdGg6ICcvYWRkaXRpb25hbGluZm9ybWF0aW9uJywgbmFtZTogJ0FkZGl0aW9uYWxJbmZvcm1hdGlvbicsIGNvbXBvbmVudDogQWRkaXRpb25hbEluZm9ybWF0aW9uQ29tcG9uZW50fVxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgc2VsZWN0ZWRJdGVtOiBzdHJpbmc7XG4gIG5nT25Jbml0KCk6IGFueSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSAnZmlyc3QtYmFyJztcbiAgfVxuXG4gIGJhckNsaWNrZWQoYmFyOiBzdHJpbmcpe1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gYmFyO1xuICB9XG59XG4iXX0=
