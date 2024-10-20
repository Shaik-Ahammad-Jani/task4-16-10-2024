console.log('string methods : -')
console.log("trim method :-")
let a="      jhony   "
console.log(a)
console.log("trim() method remove the spaces at start and ending,\n",a.trim())
console.log(a.trimStart(),"trimStart methos remove the spaces at starting only")
console.log(a.trimEnd(),"trimEnd methos remove the spaces at ending only")
console.log("")
console.log("tolowercase method :")
let b="SHAIK AHAMMAD JANI"
console.log(b)
console.log("the lowercase of b is =",b.toLowerCase(),"(LowerCase method is used to convert the string charecters into lowercase letter")
console.log("")
console.log("touppercase method :")
let c="shaik ahammad jani"
console.log(c)
console.log("the uppercase of b is =",b.toUpperCase(),"(UpperCase method is used to convert the string charecters into uppercase letter")
console.log("")
console.log("chatAt method :" )
let x="Tirumala Prasad"
console.log(x)
console.log(x.charAt("4"))
console.log("x=",x.charAt("-1"),"(when we give the negative index or outof range in charAt it doesnot print anything)")
console.log("x=",x.charAt("20"),"(when we give the negative index or outof range in charAt it doesnot print anything)")
console.log("")
console.log("indexOf method :" )
let n="it_is_a_string"
console.log(n)
console.log("indexOf method prints the first occurence of string and it search from the begining of the string")
console.log(n.indexOf("t"))
console.log(n.indexOf("4"),"(when we give the number in index or outof range character in string it prints -1)")
console.log("n=",n.indexOf("-1"),"(when we give the number in index or outof range character in string it prints -1)")
console.log("n=",n.indexOf("x"),"(when we give the number in index or outof range character in string it prints -1)")
console.log("")
console.log("lastIndexOf method :" )
let q="shaik jhotny t"
console.log(q)
console.log("lastIndexOf method prints the last occurence of string and it search from ending of the string")
console.log(q.lastIndexOf("t"))
console.log(q.lastIndexOf("4"),"(when we give the number in index or outof range character in string it prints -1)")
console.log("q=",q.lastIndexOf("-1"),"(when we give the number in index or outof range character in string it prints -1)")
console.log("q=",q.lastIndexOf("x"),"(when we give the number in index or outof range character in string it prints -1)")


