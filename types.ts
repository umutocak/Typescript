
let a: number = 5;
let b: string = 'b';
let c: boolean = false;
let d: any;
let e: number[] = [21312,12312,11,11,23241];
let f: Array<number> = [213,2312,3213];
let g: any[] = [1,12,'hello',true];
let h: [string,number,boolean] = ['stringText',2323,true]; //It is name tuple

const CreditPayment = 0;
const transferPayment = 1;
const eftPayment = 2;

enum Payment {Credit=0, transfer=1,payDoor=2, eft=3};
let Credit = Payment.Credit; // 0
let transfer = Payment.transfer; // 1
let payDoor = Payment.payDoor; // 2
let eft = Payment.eft; // 3