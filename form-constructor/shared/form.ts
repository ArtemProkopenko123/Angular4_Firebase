export class Form {
    $key: string ;
    id: any;
    title: string;
    massageInForm: string;
    inputs = Array();
    active: boolean;
    timeStamp: number 
};

export class FormInput {
    tagName: string;
    type?: string;
    placeholder?: string;
    class?: string;
    id:string;
    name?: string;
    inputText: string;
}
