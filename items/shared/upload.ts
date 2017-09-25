export class Upload {
  
    $key: string;
    file:File;
    name:string;
    url:string;
    size: number;
    items: string;
    progress:number;
    timeStamp: number = new Date().getTime()
  
    constructor(file:File) {
      this.file = file;
    }
  }