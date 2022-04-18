import { IAction } from './IAction';
export class Work implements IAction{
    execute(params: any): void {
        console.log("Working");
    }
}