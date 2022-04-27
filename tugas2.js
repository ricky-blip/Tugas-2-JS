var tipedataNumber  = 1;
var tipedataString  = "Ricky Rinaldy";
var tipedataBoolean = true;
var tipedataNull    = null;
var tipedataArray   = [1,2,3,4,5,"Ini adalah tipe data array"];

console.log(tipedataNumber);
console.log(tipedataString);
console.log(tipedataBoolean);
console.log(tipedataNull);
console.log(tipedataArray);

console.log("\n"+
    " Tipe Data Number = " + tipedataNumber, "\n",
    "Tipe Data String = " + tipedataString, "\n",
    "Tipe Data Boolean = " + tipedataBoolean, "\n",
    "Tipe Data Null = " + tipedataNull, "\n",
    "Tipe Data Array = " + tipedataArray
);

console.log("\n=============Function================")
function jalanSatu(){
    console.log("1")
}

const jalanDua = function(){
    console.log("2")
}

jalanSatu()
jalanDua()

const jalanTiga = () => {
    console.log("3")
}

jalanTiga()

console.log("\n=============Return Function================")

function apaajalah(){
    const nilai = 100;
    return nilai;
}
var angka = apaajalah();
console.log(angka);

console.log("\n=============Parameter Function================")

function data(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
data(1,2,3);

console.log("\n========Parameter Default Function===========")

function parameterDefault(x = 10){
    console.log(x);
}
parameterDefault();

console.log("\n=============Tugas 3================")


function tugas3(a){
    console.log(a);
    tambah = a + 2; 
    return tambah;
}

var nilai = tugas3(9); 
console.log(nilai);