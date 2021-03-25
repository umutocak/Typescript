var a = 5;
var b = 'b';
var c = false;
var d;
var e = [21312, 12312, 11, 11, 23241];
var f = [213, 2312, 3213];
var g = [1, 12, 'hello', true];
var h = ['stringText', 2323, true]; //It is name tuple
var CreditPayment = 0;
var transferPayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["Credit"] = 0] = "Credit";
    Payment[Payment["transfer"] = 1] = "transfer";
    Payment[Payment["payDoor"] = 2] = "payDoor";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;
var Credit = Payment.Credit; // 0
var transfer = Payment.transfer; // 1
var payDoor = Payment.payDoor; // 2
var eft = Payment.eft; // 3
