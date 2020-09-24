import { Choice } from './Choice';

export class Dialog {
  title: string;
  message: string;

  choices: Choice[];

  getNextDialog(id: number): Dialog {
    if (this.choices.length == 1)
      return this.choices[0].route;
    else
      return this.choices[id].route;
  }
}
