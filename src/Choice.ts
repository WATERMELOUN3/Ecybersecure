import { Dialog } from './Dialog';

export class Choice {
  text: string;
  state: boolean;
  route: Dialog;

  constructor(text: string, route: Dialog) {
    this.text = text;
    this.route = route;
  }
}
