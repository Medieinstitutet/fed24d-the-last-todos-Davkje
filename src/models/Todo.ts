export class Todo {
  id: number;
  name: string;
  isDone: boolean;

  constructor(
    name: string,
    isDone: boolean
  ) {
    this.id = Math.floor(Math.random() * 1000000);
    this.name = name;
    this.isDone = isDone;
  }
}