export class Task {
  public title: string;
  public dueDate: any;
  public priority: string;
  public status: string;

  constructor(title: string, dueDate: any, priority: string, status: string) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
  }
}
