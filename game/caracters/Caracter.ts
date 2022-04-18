import { ICaracter } from "./ICaracter";

export class Caracter implements ICaracter {
    public name: string;
    public strength: number;
    public gold: number;
    public experience: number;
    public level: number;
    public job: string;

    constructor(name: string, strength: number, gold: number, experience: number, level: number, job: string) {
        this.name = name;
        this.strength = strength;
        this.gold = gold;
        this.experience = experience;
        this.level = level;
        this.job = job;
    }
}