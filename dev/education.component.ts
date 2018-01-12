import {Component} from 'angular2/core';

@Component({
  selector: 'education-comp',
  template: `
    <!-- Start the technical-skills section -->
    <div class='education'>
      <h1>Education</h1>
      <div class="section">
        <img src="../src/images/icons/mortarboard.svg" alt="icon">
        <div class="text">
            <h2>Master degree, Computer Science</h2>
            <span class="date">10-2015 / 09-2017</span>
            <h3 class='company'>Warsaw University of Technology (WUT)</h3>
            <p>Artificial Intelligent / Rank 94.4%</p>
        </div>
      </div>
      <div class="section">
        <img src="../src/images/icons/notebook.svg" alt="icon">
        <div class="text">
            <h2>Telecommunication Engineering</h2>
            <span class="date">10-2009 / 07-2014</span>
            <h3 class='company'>Al-Baath University, Homs-Syria</h3>
            <p>Major of the class with rank 88.92% <br>Graduation project: “Fading in Telecommunication Channels” with rank 94%</p>
        </div>
      </div>
      
    <!-- End the work-experience section -->
    `,

})
export class EducationComponent {
}
