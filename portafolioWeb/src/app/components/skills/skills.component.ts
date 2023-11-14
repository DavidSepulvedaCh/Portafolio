import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skills.service';


@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  providers: [SkillService]
})
export class SkillsComponent {
  title: string = "Habilidades";
  description: string = "Cuento con conocimientos en las siguientes tecnologías para el desarrollo Front-End";
  public skills: Array<Skill> | undefined;
  constructor(
    private _SkillService: SkillService
  ) { }
  ngOnInit(): void {
    this.skills = this._SkillService.getSkills();
  }
}
