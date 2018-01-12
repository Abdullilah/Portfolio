import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {PersonalInfoComponent} from "./personal.info.component";
import {TechnicalSkillsComponent} from "./technical.skills.component";
import {WorkExperienceComponent} from "./work.experience.component";
import {EducationComponent} from "./education.component";
import {PersonalSkillsComponent} from "./personal.skills.component";
import {AdditionalInformationComponent} from "./additional.information.component";


@Component({
  selector: 'my-app',
  template: `
    <!-- Start the background of the page -->
    <div class='page-body'>
      <div class='main-window'>
        <!-- Start the nav bar on the left -->
        <nav class="nav">
          <div class='nav-body'>
            <h2>Abdullilah <br>Alhaj Younes</h2>
            <ul class='nav-list'>
              <li [class.active]="selectedItem ==='first-bar'" (click)="barClicked('first-bar')">
                <a [routerLink]="['PersonalInformation']"><img src="../src/images/icons/boss.svg" alt="icon">Personal Information</a>
              </li>
              <li [class.active]="selectedItem ==='second-bar'" (click)="barClicked('second-bar')">
                <a [routerLink]="['TechnicalSkills']"><img src="../src/images/icons/tools-and-utensils.svg" alt="icon">Technical skills</a>
              </li>
              <li [class.active]="selectedItem ==='third-bar'" (click)="barClicked('third-bar')">
                <a [routerLink]="['WorkExperience']"><img src="../src/images/icons/working.svg" alt="icon">Work Experience</a>
              </li>
              <li [class.active]="selectedItem ==='fourth-bar'" (click)="barClicked('fourth-bar')">
                <a [routerLink]="['Education']"><img src="../src/images/icons/school.svg" alt="icon">Education</a>
              </li>
              <li [class.active]="selectedItem ==='fifth-bar'" (click)="barClicked('fifth-bar')">
                <a [routerLink]="['PersonalSkills']"><img src="../src/images/icons/skills.svg" alt="icon">Personal Skills</a>
              </li>
              <li [class.active]="selectedItem ==='sixth-bar'" (click)="barClicked('sixth-bar')">
                <a [routerLink]="['AdditionalInformation']"><img src="../src/images/icons/plus.svg" alt="icon">Additional Information</a>
              </li>
            </ul>
          </div>
        </nav>
        <!-- End the nav bar on the left -->
        <!-- Start the main section on the right -->
        <section class="main-section">
          <router-outlet></router-outlet>
        </section>
        <!-- End the main section on the right -->
      </div>
    </div>
    <!-- End the background of the page -->

    
    `,
  directives: [PersonalInfoComponent, TechnicalSkillsComponent, WorkExperienceComponent, EducationComponent, PersonalSkillsComponent, AdditionalInformationComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/personalinfo', name: 'PersonalInformation', component: PersonalInfoComponent, useAsDefault: true},
  {path: '/technicalskills', name: 'TechnicalSkills', component: TechnicalSkillsComponent},
  {path: '/workexperience', name: 'WorkExperience', component: WorkExperienceComponent},
  {path: '/education', name: 'Education', component: EducationComponent},
  {path: '/personalskills', name: 'PersonalSkills', component: PersonalSkillsComponent},
  {path: '/additionalinformation', name: 'AdditionalInformation', component: AdditionalInformationComponent}
])

export class AppComponent implements OnInit{
  selectedItem: string;
  ngOnInit(): any {
    this.selectedItem = 'first-bar';
  }

  barClicked(bar: string){
    this.selectedItem = bar;
  }
}
