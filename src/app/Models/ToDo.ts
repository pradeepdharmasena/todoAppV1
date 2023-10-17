export class Todo{
    public Title:string = "";
    public Description: string = "";
    public Priority : number = 3;
    public Status : number = NaN;
    public CreatedDate: Date = new Date(0, 0, 0);
    public DuedDate: Date = new Date(0, 0, 0);
}