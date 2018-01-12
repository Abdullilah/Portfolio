import {Component} from 'angular2/core';

@Component({
  selector: 'additional-information-comp',
  template: `
    <!-- Start the additional-information section -->
    <div class='education'>
      <h1>Additional Information</h1>
      <div class="section">
        <img src="../src/images/icons/speech.svg" alt="icon">
        <div class="text">
            <h2 class="sub-title">Conferences</h2>
            <ul>
                <li>Wolves Summit for developers (April-2016 Poland)</li>
                <li>Wolves Summit for developers (October-2016 Poland)</li>
                <li>Evaluation of Mobile System and migration to 4G (2015 Syria)</li>
            </ul>
        </div>
      </div>
      <div class="section">
        <img src="../src/images/icons/pin-award.svg" alt="icon">
        <div class="text">
            <h2 class="sub-title">Honors and awards</h2>
            <ul>
                <li>Excellence of Honor (National Union of Syrian Student)</li>
                <li>BASEL Award for academic excellence (5 times)</li>
            </ul>
        </div>
      </div>
      <div class="section">
        <img src="../src/images/icons/activities.svg" alt="icon">
        <div class="text">
            <h2 class="sub-title">Hobbies</h2>
            <ul>
                <li>Playing guitar and lute</li>
                <li>Learning languages, making new friends</li>
                <li>Swimming, basketball</li>
            </ul>
        </div>
      </div>
      
    <!-- End the additional-information section -->
    `,

})
export class AdditionalInformationComponent {
}
