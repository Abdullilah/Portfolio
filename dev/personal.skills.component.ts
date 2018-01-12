import {Component} from 'angular2/core';

@Component({
  selector: 'personal-skills-comp',
  template: `
    <!-- Start the personal-skills section -->
    <div class='education'>
      <h1>Personal Skills</h1>
      <div class="section">
        <img src="../src/images/icons/translate.svg" alt="icon">
        <div class="text">
            <h2 class="sub-title">Languages Skills</h2>
            <ul>
                <li><strong>Arabic:</strong> Mother tongue</li>
                <li><strong>English:</strong> Fluent</li>
                <li><strong>Polish:</strong> Intermediate</li>
            </ul>
        </div>
      </div>
      <div class="section">
        <img src="../src/images/icons/settings1.svg" alt="icon">
        <div class="text">
            <h2 class="sub-title">Communication and Personal Skills</h2>
            <ul>
                <li>Ambitious and hard worker, talent and flexible with different situations</li>
                <li>Work as a part of team, easily making good working relationships</li>
                <li>Work under challenging time constrains</li>
                <li>Adaptable and quick to learn new skills</li>
                <li>Self-motivated, initiative, energetic</li>
            </ul>
        </div>
      </div>
      <div class="section">
        <img src="../src/images/icons/network.svg" alt="icon">
        <div class="text">
            <h2 class="sub-title">Managerial Skills</h2>
            <ul>
                <li>Leadership (by responsible for team of 4 people)</li>
                <li>Good organizational skills as supervisor students’ exams</li>
                <li>Good team-leading skills gained as volunteer coach</li>
            </ul>
        </div>
      </div>
      
    <!-- End the personal-skills section -->
    `,

})
export class PersonalSkillsComponent {
}
