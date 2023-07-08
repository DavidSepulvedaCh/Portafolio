import { Component, OnInit } from '@angular/core';
import { SkillService } from '../services/skills.service';
import { Skill } from '../models/skills';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [SkillService]
})
export class AboutComponent implements OnInit {
  public skills: Array<Skill> | undefined;
  constructor(
    private _SkillService: SkillService
  ) { }
  ngOnInit(): void {
    this.skills = this._SkillService.getSkills();
  }



}
