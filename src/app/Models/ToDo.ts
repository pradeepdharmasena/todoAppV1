export class Todo{
    public Id : number = 0
    public Tittle:string = "";
    public Description: string = "";
    public Priority : number = 3;
    public Status : number = NaN;
    public CreatedDate: Date = new Date(0, 0, 0);
    public DuedDate: Date = new Date(0, 0, 0);
    public Multimedias: any = null;
  
}