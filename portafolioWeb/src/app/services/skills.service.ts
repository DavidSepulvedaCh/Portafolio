import { Injectable } from "@angular/core";
import { Skill } from "../models/skills";

@Injectable()
export class SkillService {
    public skills: Array<Skill>;
    constructor() {
        this.skills = [
            new Skill('HTML5', '100', 'Lenguaje'),
            new Skill('CSS3-alt', '100', 'Lenguaje'),
            new Skill('JS', '80', 'Lenguaje'),
            new Skill('Java', '80', 'Lenguaje'),
            new Skill('SQL', '80', 'Lenguaje'),
            new Skill('PHP', '80', 'Lenguaje'),
            new Skill('Angular', '100', 'Framework'),
            new Skill('Bootstrap', '100', 'Framework'),
            new Skill('React', '50', 'Framework')
        ];
    }

    getSkills(): Array<Skill> {
        return this.skills;
    }
}