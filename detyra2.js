//Ushtrimi 1
let mosha=25;
//Ushtrimi 2
let emri='Alex';
//Ushtrimi 3
let x=10,y=20;
console.log("Ush 3 "+(x+y)); //30
//Ushtrimi 4
let total=10;
total = total+5;
console.log("Ush 4 "+total);//15
//Ushtrimi 5
mbiemri = 'Sokollari';
console.log("U5 "+mbiemri)

/** Ushtrimi 6
 * Ndryshimi midis const dhe let ne JavaScript eshte se const eshte nje fjale kyce e perdorur per te deklaruar konstantet
 * kurse let eshte nje fjale kyce qe perdoret per te deklaruar variabla te ndryshueshem. Te dy jane block
 * scoped variables.
 */
//Ushtrimi 7
let ngjyra = "blu";
ngjyra = "e kuqe";
console.log("Ush 7"+ngjyra);   //e kuqe

//Ushtrimi 8 
let qyteti="Tirana", shteti="Shqiperia", popullsia=450000;
//Ushtrimi 9
const PI = 3.14;
//Vlera e konstantes PI nuk mund te ndryshohet me vone pasi eshte deklaruar duke perdorur
//fjalen kyce const qe na parandalon ndryshimin e PI
//  Ushtrimi 10: const shkolla;
//               shkolla = "Green High";
//Error pasi konstantet duhen inicializuar qe ne momentin e deklarimit
//Ushtrimi 11
let temperatura =72; //typeof temperatura do te jete 'number'
console.log("Ush 11 "+ typeof temperatura);
//Ushtrimi 12
let eshteAktiv = true; //typeof eshteAktiv do te jete 'boolean'
console.log("Ush 12 "+ typeof eshteAktiv )
//Ushtrimi 13
console.log("Ush 13 "+typeof "Pershendetje") //'string'
//Ushtrimi 14
let numerPresje = 5.2;
//Ushtrimi 15 undefined eshte nje konstante e gjuhes qe tregon se nje variabel ose vecori e objektit ekziston por nuk eshte deklaruar ose 
//kur nje funksion nuk kthen vlere. Null eshte nje objekt qe tregon mungesen e nje vlere
//Ushtrimi 16
console.log("Ush 16 "+typeof typeof 45); //string
//Ushtrimi 17
let a = true;
//Ushtrimi 18
console.log("Ush 18 "+typeof null); //Kthen object pasi null eshte nje objekt 
//Ushtrimi 19
let rezultati = 5 +'10';//'5' do te konvertohet ne string dhe rezultati do te jete '510'
console.log("Ush 19 "+typeof rezultati);//dhe typeof rezultati do te jete nje string
/**Ushtrimi 20
 * Tipet e te dhenave ne javaScript
 * Primitive : 1. number
 *             2. string
 *             3. boolean
 *             4. null
 *             5. undefined
 * Objekte :   1. Funksionet
 *             2. Arrays
 *             3. Objekte literale etj 
 */
//Ushtrimi 21
console.log("Ush 21"+ (10 + 5*2)); //20
//U 22 Operatori %(modulus) llogarit mbetjen e pjesetimit te operandit te pare me ate te dyte
//Shembull
console.log("Ush 22 "+(10%4)); //2
//U 23 Vendosja e emrave nga x ne u  per shkak se ekziston nje  tjeter variabel me kete emer

let u=5;
u+=3
console.log("Ush 23 "+u); //8
//U 24 d dhe w ne vend te a dhe blet d=6, w=5
let d=6, w=5;
let result = (d>w)?true:false;
console.log("Ush 24 "+result)
//U 25
console.log("Ush 25 5=='5' "+(5=='5')); // U 25 true pasi operatori == kontrollon vetem vlerat e operandeve dhe jo tipet e te dhenave te tyre pra edhe ose jane njeri number tjetri string prape vlerat i kane 5
console.log("Ush 25 5==='5' "+(5==='5'))//false pasi operatori === eshte strikt dhe kontrollon pervec vlerave edhe tipet e te dhenave te operandeve te tyre

//U 26
console.log("Ush 26 "+(5<=10)); // true pasi 5 eshte me e vogel se 10

//U 27 - Error
let numri =8;
 numri = numri -1; 
 console.log("Ush 27: numri-1 "+numri);

 console.log("Ush 28: Preinkrement dhe postinkrement");
 console.log(x);
console.log(++x); //U 28 Preinkrement: ndodh rritja e vleres me 1 pastaj printohet vlera: Printohet 11
console.log(x++) //Postinkremet: ndodh printimi i vleres me pas rritja e sa me 1:Printohet 11 me pas x eshte 12
//u 29
let z=4;
z*=2;
console.log("Ush 29 "+z); //8
//U 30
console.log("Ush 30 "+(3**2))//9 pasi kemi te bejme me 3 ne fuqi te dyte
//u 31
a=6;
let b =6;
let shuma = a + b;
console.log("Ush 31 "+shuma);
//U 32
let rezultati1 = "Rezultati:" +100; // Kur mbledhim stringun me numer numri konvertohet ne string dhe ne kete rast rezultati1 do kete vleren
  console.log("Ush 32 "+rezultati1)                                //"Rezultati:100"
//U 33                                    
let fjala = "Pershendetje";
numri =3;
console.log("Ush 33 "+fjala+numri); //"Pershendetje3"

//U 34
console.log("Ush 34");
console.log(4*(3+2))//Kryehet ne fillim veprimi brenda kllapave: 3+2=5 dhe me pas shumezimi pra kemi 4*5 =20
//U 35
let totali =10;
console.log("Ush 35 "+totali/0); //Infinity pasi pjesetohet nje numer i madh me nje numer ekstremisht te vogel. Nese totali do ishte nje numer negativ outputi do ishte -Infinity
//U 36
let diferenca = numri-5; //-2
console.log("Ush 36 "+diferenca);
//U 37
console.log("Ush 37")
let stringa = "Pershendetje" + " "+"Bota";
//U 38
console.log("Ush 38");
console.log(typeof(5+"5")); //Kthen string pasi 5 nga numer konvertohet ne stringe dhe rezultati total eshte "55" datatype i te ciles eshte string
                             //Ne nje mbledhje mes nje numri dhe stringu perparesi merr gjithmone stringu
//Emertimi i variablit nga x ne v
//U 39
let v =10;
v=v+1;
console.log("Ush 39 "+"Vlera e variablit pas rritjes se tij me 1: "+v);
//U 40
console.log("Ush 40");
console.log(3*"5"); //15 Operatori * kerkon qe te dy operandet te jene numra. "5" konvertohet ne numer automatikisht (eshte e konvertueshme pasi stringa fillon me numer)
// U 41 Emertimi mno
let m =3, n=6, o=5;
m=n;
n=o;
console.log("Ush 41")
console.log(m+", "+n+", "+o)
//U 42
let cmimi=100;
cmimi-=20;
console.log("Ush 42 "+cmimi);
//U 43
let piket = "10" -3; //Operatori - kerkon qe te dy operandet te jene numra. "10" eshte e konvertueshme ne numer dhe jep 10. Ndaj rezultati eshte
                    // 10-3=7
console.log("Ush 43 " +piket);                  
// U 44 Perdorimi i + mes nje boolean dhe nje numri
let res = true+5;  //true do te konvertohet ne vleren 1 dhe res=1+5 do te jete 6
console.log("Ush 44 "+ res)
//U 45
console.log("Ush 45");
console.log(10/"2"); /// Kerkon 2 numra: 10/2 do te jete 5
console.log(typeof (10/"2"))//NaN
//U 46
let gjeresia = 4;
let gjatesia = 5;
let siperfaqja = gjeresia * gjatesia;
console.log("Ush 46 "+siperfaqja);
//u 47
let numer =5;
numer*=4;
console.log("Ush 47 "+ numer)
//U 48 Ndryshimi mes x=x+1 dhe x+=1 eshte vetem tek operatori i shkurtuar qe eshte perdorur ne rastin e dyte.Por te dyja e risin vleren e variablit x me 1
//U 49
console.log("U 49 "+(2+null))//2+0 =2
console.log(typeof(2+null)) //'number'
//U50
let moshaIme=21;
let statusi = moshaIme>18?"I rritur":"I mitur";
console.log("Ush 50 "+ statusi)
//U 51  Nga x ne t
let t="5" +3 +2; //"53"+2="532"
console.log("Ush 51 "+t);  //"532"
// U 52 c ne vend te y
let c = 10-"5"; //10-5=5
console.log("Ush 52 "+c); //5

//U 53 p ne vend te z
let p = 2+3+"7"
console.log("Ush 53 "+p); //5+"7" ="57"

//U 54  i j ne vend te a b
let i =5;
let j="5";
console.log("Ush 54 "+(i==j)); //true pasi 5 =="5" jep true duke qene se krahason vec vlerat dhe jo tipin e te dhenes

// U 55 r ne vend te a
let r = null;
console.log("Ush 55 "+(typeof r)); //'object' pasi null vete eshte nje objekt

//U 56 l ne vend te x

let l = 0.1 + 0.2;
console.log("Ush 56")
console.log(l==0.3) // false pasi ne veprimet me numrat me presje nuk merret asnjeher vlera e sakte
                     // Ndaj kur duam te punojme me numra me presje duhet ti kthejme njehere ne numra te 
                     //plote dhe me pas te bejme veprimet dhe me pas ti konvertojme serish ne numra me presje qe rezultati te jete ai qe duam a presim
//U 57
let num = "5";
console.log("Ush 57 "+num*2); //"5" konverothet ne 5 dhe rezultati i shprehjes eshte 10
//U 58
console.log("Ush 58")
console.log(typeof NaN) // Do te jape 'number'
// U 59
let g = "Hello" + null;
console.log("Ush 59 "+g); //null konvertohet ne stringe dhe rezultati eshte "Hellonull"
// U 60  q ne vend  te x
console.log("Ush 60 ")
let q =5;
console.log(q++ +  ++q); //5+ 7 =12 SI PREINKREMENT SI POSTINKREMENT BEHEN PARA MBLEDHJES

// U 61 e ne vend te a
let e = "10";
console.log("Ush 61")
console.log(-e); // -10

//U 62 ab ne vend te x
let ab = 1 + "2" + 3;
console.log("Ush 62 "+ab);  //ab="12" + 3= "123"
//U 63  ac ne vend te x

let ac;
console.log("Ush 63")
console.log(ac+5) // vlera e ac eshte undefined pasi eshte nje variabel i ri i painicializuar
                  //undefined nuk eshte e konvertueshme ne numer  dhe rezultati 
                // perfundimtar do te jete NaN

//U 64
console.log("Ush 64")
console.log(true+false) //Jep vleren 1

//U 65 Numer ne vend te num
let Numer = "10" -5 + "5";
console.log("Ush 65 "+Numer); // 10 - 5 = 5 Me pas 5 +"5" do te jape "55"

// U 66 f dhe h ne vend te a dhe b

let f = null;
let h = undefined;
console.log("Ush 66");
console.log(f == h) //true pasi null dhe undefined konsiderohen te barabarta 

//U 67
console.log("Ush 67");
console.log(typeof typeof 1); //"string"
// U 68
console.log("Ush 68 ")
console.log("5" * "4");
//5 * 4 = 20

//U 69  _x ne vend te x
let _x = 5 + true;
console.log("Ush 69 "+_x); // Jep 6

//U 70_b ne vend te x

let _b="5";
console.log("Ush 70 ")
console.log(++_b); //6

