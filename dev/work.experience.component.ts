import {Component} from 'angular2/core';

@Component({
  selector: 'work-experience-comp',
  template: `
    <!-- Start the technical-skills section -->
    <div class='work-experience'>
      <h1>Work Experience</h1>
      <div class="section">
        <img src="../src/images/icons/oracle.jpg" alt="icon">
        <div class="text">
            <h2>Front-End developer</h2>
            <span class="date">10-2017 / 01-2018</span>
            <h3 class='company'>Oracle Maxymiser</h3>
            <p>HTML5, CSS3, JavaScript, jQuery, Angular, React</p>
        </div>
      </div>
      <div class="section">
        <img src="../src/images/icons/online-shop.svg" alt="icon">
        <div class="text">
            <h2>Front-End developer</h2>
            <span class="date">03-2016 / 10-2017</span>
            <h3 class='company'>Freelancer</h3>
            <p>HTML5, CSS3, JavaScript, jQuery, Bootstrap, Angular, React, PHP, SQL</p>
        </div>
      </div>
      <div class="section">
        <img src="../src/images/icons/classroom.svg" alt="icon">
        <div class="text">
            <h2>Teacher Front-end Developing</h2>
            <span class="date">03-2017 / 06-2017</span>
            <h3 class='company'>Libyan school, Warsaw-Poland</h3>
            <p>HTML5, CSS3, JavaScript</p>
        </div>
      </div>
      <div class="section">
        <img src="../src/images/icons/Albaath-logo.png" alt="icon">
        <div class="text">
            <h2>Teaching Associate Professional</h2>
            <span class="date">09-2014 / 10-2015</span>
            <h3 class='company'>Al-Baath University, Homs-Syria</h3>
            <p>JavaScript, Matlab, C++, Supervising graduation projects</p>
        </div>
      </div>
      <div class="section">
        <img src="../src/images/icons/pharmacy.svg" alt="icon">
        <div class="text">
            <h2>First Aid Volunteer</h2>
            <span class="date">01-2014 / 10-2015</span>
            <h3 class='company'>Syrian Arab Red Crescent (SARC)</h3>
            <p>First Aid Volunteer and Telecommunication Maintains Team</p>
        </div>
      </div>
    <!-- End the work-experience section -->
    `,

})
export class WorkExperienceComponent {
}
