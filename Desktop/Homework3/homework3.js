//First
const func=function(a,b,c) {
	return a*b/c; 
}
const Bit=func(21,22,11);
console.log(Bit);


//Second
const greeting=function()
{
	return "barev world";
}
console.log(greeting());


//Third
const func2=function(x,y) 
{
	x=(x+y)/2*10;
	console.log(x);
}
func2(5,15);


//Fourth
const fullName=function(f,l)
{
	return (f+" "+l);
}
console.log(fullName("Suren","Habetyan"));



//Fifth
const longestString=function(str1,str2,str3){
	if (str1.length < str2.length) {
		str1 = str2; 
	} 
	if (str1.length < str3 ) {
		str1 = str3;
	}

	return str1;
}
longestString("abcdefgh","liafliasbfilabflia","abfaasb");
console.log(longestString("abcdefgh","liafliasbfilabflia","abfaasb"));



//Sixth
const variables=function(h,p) {
	if ( h === p ) {
console.log('0');
}
 	else if ( h > p ) {
 console.log('1');
 }
 	else 
 		console.log('-1');
 };




 //Seventh
 const firstTruethy=function(num1,num2,num3) {
 	if (num1)
 		return(num1);
 	if (num2)
 		return(num2);
 	else (num3)
 		return(num3);
 }
 const firstTruethy1=firstTruethy(5,0,10);
 console.log(firstTruethy1);