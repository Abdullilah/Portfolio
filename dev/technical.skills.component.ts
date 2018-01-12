import {Component} from 'angular2/core';

@Component({
  selector: 'technical-skills-comp',
  template: `
    <!-- Start the technical-skills section -->
    <div class='technical-skills'>
      <h1>Technical Skills</h1>
      <div class="section">
        <img src="../src/images/icons/html5.svg" alt="icon">
        <div class="text">HTML5, CSS3, Sass, JavaScript, jQuery, Angular2, ReactJS, Karma, Jasmine, Typescript, ES6, Ajax, JSON, Bootstrap3, P5.js</div>
      </div>
      <div class="section">
        <img src="../src/images/icons/server.svg" alt="icon">
        <div class="text">PHP5, MySQL5, WordPress, JavaSE, C, C++, C#, Matlab</div>
      </div>
      <div class="section">
        <img src="../src/images/icons/settings.svg" alt="icon">
        <div class="text">Git, DRY code, RWD, OS Windows, OS Linux</div>
      </div>
      <div class="section">
        <img src="../src/images/icons/algorithm.svg" alt="icon">
        <div class="text"><strong>Basics of:</strong> ReduxJS, CoffeeScript, HAML, Node.js, MongoDB, Monk, Mongoose, Grunt, REST API, Angular4, webpack</div>
      </div>
      <div class="section">
        <img src="../src/images/icons/communication-tower.svg" alt="icon">
        <div class="text">MIMO, GSM, LTE 4G, Circuits Simulation</div>
      </div>
    </div>
    <!-- End the technical-skills section -->
    `,

})
export class TechnicalSkillsComponent {
}
