export class Item {
    $key: string ;
    title: string;
    $body: string;
    active: boolean = false;
    timeStamp: number = new Date().getTime()
}
