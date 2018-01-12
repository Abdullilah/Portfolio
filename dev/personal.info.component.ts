import {Component} from 'angular2/core';

@Component({
  selector: 'personal-info-comp',
  template: `
    <!-- Start the personal info section -->
    <div class="personal-info">
      <h1>Personal Information</h1>
      <div class="section">
        <img src="../src/images/face.jpg">
        <div class="info">
          <ul>
            <li><img src="../src/images/icons/placeholder.svg" alt="icon">Ludwika Waryńskiego 10, 00-631 Warsaw</li>
            <li><img src="../src/images/icons/phone.svg" alt="icon">+48 792 683 192</li>
            <li><img src="../src/images/icons/email-envelope.svg" alt="icon">abd2dev@gmail.com</li>
            <li><a href="https://www.linkedin.com/in/abdullilah-alhaj-younes-061368111/" target="_blank"><img src="../src/images/icons/linkedin.svg" alt="icon">Abdullilah Alhaj Younes</a></li>
            <li><img src="../src/images/icons/skype.svg" alt="icon">Abdullilah Alhaj Younes</li>
            <li><a href="https://github.com/Abdullilah" target="_blank"><img src="../src/images/icons/github-logo.svg" alt="icon">https://github.com/Abdullilah</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End the personal info section -->
    `,
  directives: [],

})
export class PersonalInfoComponent {


}
