//CHAPTER 1

// alert("Hello World")

// alert("Error! Please enter a valid password")

// alert("Welcome to JS land... \n Happy Coding")

// alert("Welcome to JS Land....")
// alert("Happy Coding")

// alert("Hello I can run JS through my browser's developer console")


//CHAPTER 2

// var username

// var username = "Syed Rayyan Ali";

// var message = "Hello World";
// alert(message)

// var name="John Doe";
// var age ="15";
// var course = "Certified Moblile Application Development";

// alert(name)
// alert(age+" years old")
// alert(course)

// var email="abc123@gmail.com";
// alert("My email address is "+email)

// var book = "A Smarter way to learn JavaScript";
// alert("I am trying to learn from the book "+book)

// document.write("Yeah I can write HTML content through JavaScript")

// var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(design)

// var abc = "pizza";
// alert("pizza \n pizz \n piz \n pi \n p")

//CHAPTER 3

// var age = 15;
// alert("I am "+age+" years old")

// var times = 14;
// alert("You have visited this site "+times+" number of times")

// var birthYear = 1999;
// document.write("My birth year is "+birthYear+" <br> Data type of my declared variable is number")

// var visitorName="Rayyan";
// var productTitle="T-Shirt";
// var quantity=14;
// document.write(visitorName+" ordered "+ quantity + " " + productTitle + " on ABC Store")

// CHAPTER 4
// var abc;
// var ijk;
// var xyz;

// var $name //legal
// var _age //legal
// var phoneNumber //legal
// var abc123 //legal
// var check //legal

// var 2number; //illegal
// var /name; //illegal
// var >test; //illegal
// var alert; //illegal
// var my name; //illegal

// document.write("<h1>Rule for naming JS Variables</h1> <br>")
// document.write("Variable names can only contain $, number,and _ : For Example $name, abc123. <br>")
// document.write("Variables must begin with a letter, $ or_. For example $name, _name or name <br>")
// document.write("Variable names are case sensitive <br>")
// document.write("Variable names should not be JS Keywords <br>")

//CHAPTER 5
// var a = 3;
// var b = 5;
// var c = a + b;
// document.write("Sum of 3 and 5 is "+c+"<br>")

// var a = 8;
// var b = 5;
// var c = a - b;
// document.write("Sub of 8 and 5 is "+c+"<br>")

// var a = 3;
// var b = 5;
// var c = a * b;
// document.write("Multiply of 3 and 5 is "+c+"<br>")

// var a = 3;
// var b = 5;
// var c = a % b;
// document.write("Modulus of 3 and 5 is "+c+"<br>")

// var value;
// document.write("Value after declaration is "+value+"<br>")
// var value1 = 5;
// document.write("Initial Value: "+value1+"<br>")
// value1=++value1
// document.write("Value after Increment: "+value1+"<br>")
// value2=value1+7;
// document.write("Value after addition is : "+ value2+"<br>")
// value2=--value2;
// document.write("Value after decrement is :"+value2+"<br>")
// value3=value2 % 3;
// document.write("The remainder is :"+value3)

// var ticket = 5;
// var price = 600;
// var cost = ticket * price;
// document.write("Total cost of buying 5 tickets is "+ cost)

// for (var i = 1; i<=10; i++){
//     document.write("5 "+"* "+i+"= "+5*i + "<br>")
// }

// var celsius = 40;
// var farenheit = (celsius * 9 / 5) + 32
// document.write("40c is "+farenheit+" F")

// var farenheit = 70;
// var celsius = (farenheit - 32) * 5 / 9
// document.write("70F is "+celsius+" c")

// var item1 = 650;
// var item2 = 100;
// var quanItem1 = 3;
// var quanItem2 = 7;
// var shippingCharges = 100;
// var total = (650 * 3)+(100 * 7)+100;
// document.write("Total Price is : "+ total)

// var obtainedMarks = 780;
// var totalMarks = 1100;
// var percentage = (obtainedMarks / totalMarks) * 100;
// document.write("Total Marks : "+totalMarks+"<br>")
// document.write("Obtained Marks : "+obtainedMarks+"<br>")
// document.write("Percentage : "+percentage)

// var currency = (10*104.80)+(25*28)
// document.write("<h1>CURRENCY IN PKR</h1>")
// document.write("Total Currency : "+currency)

// var arith = 5 + 5 * 10 / 2;
// document.write(arith)

// var curYear = 2020;
// var birthYear = 1999;
// var age = curYear - birthYear;
// document.write("<h1>AGE CALCULATOR</h1>"+"<br>")
// document.write("CURRENT YEAR: "+curYear+"<br>")
// document.write("BIRTH YEAR: "+birthYear+"<br>")
// document.write("AGE: "+age)

// var radius = 20;
// var circumference = 2 * 3.14 * radius;
// var area = 3.14 * (20 * 20)
// document.write("Radius: "+radius + "<br>")
// document.write("Circumference: "+circumference+"<br>")
// document.write("Area: "+area+"<br>")

// var favSnack = "Lays";
// var age = 21;
// var maxAge = 60;
// var estimatedAmount = 2;
// var totalSnack = (maxAge-age)*estimatedAmount;
// document.write("<h1>LIFETIME SUPPLY CALCULATOR</h1>")
// document.write("You will need "+totalSnack+" Lays to ripe you untill the age of 60")

//CHAPTER 6-9
// var a = 10;
// document.write("The value of a is "+a+"<br>")
// ++a
// document.write("The value of ++a is "+a+"<br>")
// document.write("Now the value of a is "+a+"<br><br><br><br>")
// document.write("The value of a++ is "+a+"<br>")
// a++
// document.write("Now the value of a is "+a+"<br><br><br><br>")

// --a
// document.write("The value of ++a is "+a+"<br>")
// document.write("Now the value of a is "+a+"<br><br><br><br>")
// document.write("The value of a++ is "+a+"<br>")
// a--
// document.write("Now the value of a is "+a+"<br><br><br><br>")

// var a=2;
// var b=1;
// var result=--a - --b + ++b + b--
// document.write("a is : "+a+"<br>") 
// document.write("b is : "+b+"<br>") 
// document.write("result is : "+result)

// var name = prompt("What's your name?")
// alert("Welcome "+name)


// var table  = prompt("Enter the number:");
// for (var i = 1; i <= 10; i++) {
// document.write(table + " * " + i + " = " + table * i+"<br>");
// }
// if(table==""){
//     for(var j=1; j<=10; j++){
//     document.write(5 + " * " + j + " = " + 5 * j+"<br>");
// }
// }


// var sub1 = prompt("Enter first subject")
// var sub2 = prompt("Enter second subject")
// var sub3 = prompt("Enter third subject")
// var mark1 = parseInt(prompt("Enter your marks"))
// var mark2 = parseInt(prompt("Enter your marks"))
// var mark3 = parseInt(prompt("Enter your marks"))
// var total1 = parseInt(prompt("Enter Total Marks"))
// var total2 = parseInt(prompt("Enter Total Marks"))
// var total3 = parseInt(prompt("Enter Total Marks"))
// var percentage1 = (mark1 / total1) * 100
// var percentage2 = (mark2 / total2) * 100
// var percentage3 = (mark3 / total3) * 100
// var total = (total1 + total2 + total3);
// var totalObtainedMarks = (mark1 + mark2 + mark3);
// var totalPercent = parseInt((totalObtainedMarks / total) * 100)
// document.write("<table><tr><th>Subjects </th><th>Total Marks </th><th>Obtained Marks </th><th>Percentage </th></tr><tr><td>" + sub1 + "</td><td>" + total1 + "</td><td>" + mark1 + "</td><td>" + percentage1 + " %" + "</td></tr><tr><td>" + sub2 + "</td><td>" + total2 + "</td><td>" + mark2 + "</td><td>" + percentage2 + " %" + "</td></tr><tr><td>" + sub3 + "</td><td>" + total3 + "</td><td>" + mark3 + "</td><td>" + percentage3 + " %" + "</td></tr><tr><th></th><th>" + total + "</th><th>" + totalObtainedMarks + "</th><th>" + totalPercent +" %"+ "</th></tr></table>")

//CHAPTER 9-11

// var city = prompt("Enter City Name")
// if(city==="karachi"){
//     alert("Welcome to the city of lights")
// }

// var gender = prompt("Enter your gender")
// if(gender==="male"){
//     alert("Good Morning Sir!")
// }
// else{
//     alert("Good Morning Ma'am")
// }

// var color=prompt("Enter a traffic signal color")
// if(color==="red"){
//     alert("Stop!")
// }
// else if(color==="yellow"){
//     alert("Ready to move")
// }
// else if(color==="green"){
//     alert("Move now")
// }
// else{
//     alert("this is not traffic signal color")
// }


// var fuel = prompt("Enter your fuel")
// if(fuel<=0.25){
//     alert("Please refill the fuel in your car")
// }
// else{
//     alert("You are good to go")
// }

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true"); //working
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true"); //not working
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true"); //true
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true"); //true
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// var mark1 = parseInt(prompt("Enter your marks"))
// var mark2 = parseInt(prompt("Enter your marks"))
// var mark3 = parseInt(prompt("Enter your marks"))
// var obtainedMarks = mark1+mark2+mark3;
// var totalMarks=300;
// var percentage = (obtainedMarks/totalMarks)*100;
// if(percentage>=80){
//     document.write("Total Marks: "+ totalMarks+"<br>")
//     document.write("Marks Obtained: "+obtainedMarks+"<br>")
//     document.write("Percentage: "+percentage+"<br>")
//     document.write("Grade : "+ "A-One"+"<br>")
//     document.write("Remarks : "+"Excellet")
// }
// else if(percentage>=70){
//     document.write("Total Marks: "+ totalMarks+"<br>")
//     document.write("Marks Obtained: "+obtainedMarks+"<br>")
//     document.write("Percentage: "+percentage+"<br>")
//     document.write("Grade : "+ "A"+"<br>")
//     document.write("Remarks : "+"Good")

// }
// else if(percentage>=60){
//     document.write("Total Marks: "+ totalMarks+"<br>")
//     document.write("Marks Obtained: "+obtainedMarks+"<br>")
//     document.write("Percentage: "+percentage+"<br>")
//     document.write("Grade : "+ "B"+"<br>")
//     document.write("Remarks : "+"You need to improve")

// }
// else if(percentage<60){
//     document.write("Total Marks: "+ totalMarks+"<br>")
//     document.write("Marks Obtained: "+obtainedMarks+"<br>")
//     document.write("Percentage: "+percentage+"<br>")
//     document.write("Grade : "+ "Fail"+"<br>")
//     document.write("Remarks : "+"Sorry")

// }

// var secretNumber = 10;
// var guessNumber = prompt("Enter your guess")
// if(secretNumber==guessNumber){
//     alert("Bingooo!")
// }
// else if(guessNumber+=1){
//     alert("OOH Close Enough")
// }


// var num = prompt("Enter a number")
// if(num%3==0){
//     alert("This number is divisible by 3")
// }
// else{
//     alert("This number is not divisible by 3")
// }

// var number = prompt("Enter a number")
// if (number % 2 == 0){
//     alert("Number is even")
// }
// else{
//     alert("Number is odd")
// }

// var temperature = prompt("Enter temperature")
// if (temperature>=40){
//     alert("Too hot")
// }
// else if (temperature>=30){
//     alert("The weather is normal")
// }
// else if (temperature>=20){
//     alert("The weather is Cool")
// }
// else{
//     alert("OMG! IT'S FREEZING OUTSIDE")
// }

// var val1 = parseInt(prompt("Enter first value"))
// var val2 = parseInt(prompt("Enter second value"))
// var op = prompt("Enter operator")

// if(op=="+"){
//     val3 = val1+val2;
//     alert(val3)
// }
// else if(op=="-"){
//     val3 = val1-val2;
//     alert(val3)
// }
// else if(op=="*"){
//     val3 = val1*val2;
//     alert(val3)
// }
// else if(op=="/"){
//     val3 = val2/val1;
//     alert(val3)
// }

//CHAPTER 12-13

// var input=prompt("Enter a number or a character")
// if(input>='A' && input<='Z'){
//     alert("This is uppercase")
// }
// else if(input>='a' && input<='z'){
//     alert("This is lowercase")
// }
// else{
//     alert("This is not a character")
// }

// var num1=prompt("Enter value 1")
// var num2=prompt("Enter value 2")
// if (num1<num2){
//     alert(num2)
// }
// else if(num1>num2){
//     alert(num1)
// }
// else {
//     alert("both are equal")
// }

// var num = prompt("Enter a number")
// if (num>=1){
//     alert("number is poistive")
// }
// else if(num<0){
//     alert("number is negative")
// }
// else {
//     alert("number is zero")
// }

// var cha = prompt("Enter a character");
// var vowels = ['a','e','i','o','u']
// for (var i = 0; i<vowels.length; i++){
//     if(cha===vowels[i]){
//         alert(true);
//         break;
//     }
//     else{
//         alert(false);
//         break;
//     }
// }

// var password ="rayyan123";

// var input = prompt("Enter your password");
// if (input==""){
//     alert("Please enter your password")
// }
// else if(input==password){
//     alert("Correct password")
// }
// else{
//     alert("Incorrect password")
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting)
// }
// else{
// greeting = "Good evening";
// alert(greeting)
// }

// var time = prompt("Enter time in 24 hours format")
// if(time=="1"){
//     alert("1:00==1am")
// }
// else if(time=='2'){
//     alert("2:00==2am")
// }
// else if(time=='3'){
//     alert("3:00==3am")
// }
// else if(time=='4'){
//     alert("4:00==4am")
// }
// else if(time=='5'){
//     alert("5:00==5am")
// }
// else if(time=='6'){
//     alert("6:00==6am")
// }
// else if(time=='7'){
//     alert("7:00==7am")
// }
// else if(time=='8'){
//     alert("8:00==8am")
// }
// else if(time=='9'){
//     alert("9:00==9am")
// }
// else if(time=='10'){
//     alert("10:00==10am")
// }
// else if(time=='11'){
//     alert("11:00==11am")
// }
// else if(time=='12'){
//     alert("12:00==12pm")
// }
// else if(time=='13'){
//     alert("13:00==1pm")
// }
// else if(time=='14'){
//     alert("14:00==2pm")
// }
// else if(time=='15'){
//     alert("15:00==3pm")
// }
// else if(time=='16'){
//     alert("16:00==4pm")
// }
// else if(time=='17'){
//     alert("17:00==5pm")
// }
// else if(time=='18'){
//     alert("18:00==6pm")
// }
// else if(time=='19'){
//     alert("19:00==7pm")
// }
// else if(time=='20'){
//     alert("20:00==8pm")
// }
// else if(time=='21'){
//     alert("21:00==9pm")
// }
// else if(time=='22'){
//     alert("22:00==10pm")
// }
// else if(time=='23'){
//     alert("23:00==11pm")
// }
// else if(time=='24'){
//     alert("24:00==12midnight")
// }

//CHAPTER 14-16
// var arr = []
// var std = ['rayyan','ali','wahab','arham']
// var num = [1,2,3,4,5]
// var bool = [true,false]
// var mixed = ['rayyan',true,123]

// var courses = ['SSC','HSC','BSC','MSC','BS','BCOM','M.PHIL','PHD']
// for (var i = 0; i<courses.length; i++){
//     document.write(courses[i]+"<br>")
// }

// var names=['John','David','Steve']
// var scores = [320,230,480]
// var total = 500;
// var percentage1 = (320/500)*100 
// var percentage2 = (230/500)*100 
// var percentage3 = (480/500)*100 
// document.write("Score of John is "+scores[0]+" and percentage is "+percentage1+"<br>")
// document.write("Score of David is "+scores[1]+" and percentage is "+percentage2+"<br>")
// document.write("Score of Steve is "+scores[2]+" and percentage is "+percentage3+"<br>")

// var color=['blue','red','green','yellow','black']
// for (var i =0; i<color.length; i++){
//     document.write(color[i],"<br>")
// }

// var color=['blue','red','green','yellow','black']
// var add = prompt("Which color would you want to add?")
// color.unshift(add)
// for (var i =0; i<color.length; i++){
//          document.write(color[i],"<br>")
//      }

// var color = ['blue', 'red', 'green', 'yellow', 'black']
// var add = prompt("Which color would you want to add?")
// color.push(add)
// for (var i = 0; i < color.length; i++) {
//     document.write(color[i], "<br>")
// }

// var color = ['blue', 'red', 'green', 'yellow', 'black']
// var add = prompt("Which color would you want to add?")
// var add1 = prompt("Which color would you want to add?")
// color.unshift(add,add1)
// for (var i = 0; i < color.length; i++) {
//     document.write(color[i], "<br>")
// }

// var color = ['blue', 'red', 'green', 'yellow', 'black']
// color.shift();
// for (var i = 0; i < color.length; i++) {
//          document.write(color[i], "<br>")
//      }

// var color = ['blue', 'red', 'green', 'yellow', 'black']
// var add = prompt("Which color would you want to add?")
// var ind = prompt("At which index you want to add your color?")
// color.splice(3,ind,add);
// for (var i = 0; i < color.length; i++) {
//          document.write(color[i], "<br>")
//      }

// var color = ['blue', 'red', 'green', 'yellow', 'black']
// var del = prompt("At which index you want to delete color?")
// var num =prompt("How many colors do you want to delete?")
// color.splice(del,num)
// for (var i = 0; i < color.length; i++) {
//          document.write(color[i], "<br>")
//      }

// var scores = [320,440,280,120]
// document.write("Before Sort "+scores+"<br>")
// scores.sort()
// for(var i=0; i<scores.length; i++){
//     document.write(scores[i]+",")
// }

// var cities = ['karachi','islamabad','quetta','lahore','murree']
// var selectedCities=cities.slice(0,3)
// for(var i=0; i<selectedCities.length; i++){
//     document.write(selectedCities[i],",")
// }

// var arr = ["This","is","my","cat"];
// document.write(arr,"<br>")
// var newArr=arr.join('')
// for(var i = 0; i<newArr.length; i++){
//     document.write(newArr[i],"")
// }

// var name=['rayyan','wahab','arham','hamza','ali']
// for (var i=0; i<name.length; i++){
//     document.write(name[i])
// }

// var arr=['rayyan','wahab','arham','hamza','ali']
// var newArr = arr.reverse()
// document.write(newArr)    

// var store = ['Apple','Sony','Motrolla','Nokia','Haier']
//     document.write("<select><option>"+store[0]+"</option><option>"+store[1]+"</option><option>"+store[2]+"</option><option>"+store[3]+"</option><option>"+store[4]+"</option></select>")

//CHAPTER 17-20
// var multiarray = [[],[],[]]
//  var multiarray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
//  document.write(multiarray)

// for (var i =0; i<=10; i++){
//     document.write(i,"<br>")
// }

// var input = prompt("Table number")
// var tableLength=prompt("Enter length")
// document.write("Table of "+input+"<br>"+" And length is "+tableLength+"<br>")
// for (var i=1; i<tableLength; i++){
//         document.write(input+"*"+i+"="+input*i+"<br>")
// }

// var fruits = ['apple','mango','orange','banana','watermelon']
// for (var i = 0; i<fruits.length; i++){
//     document.write(fruits[i]+"<br>")
// }

// document.write("COUNTING : ")
// for (var i=1; i<=10; i++){
//     document.write(i+" ")
// }

// document.write("<br> Reverse : ")
// for (var i=10; i>0; i--){
//     document.write(i+" ")
// }

// document.write("<br> EVEN : ")
// for (var i=0; i<=20; i=i+2){
//     document.write(i+" ")
// }

// document.write("<br> ODD : ")
// for (var i=1; i<=20; i=i+2){
//     document.write(i+" ")
// }
// document.write("<br> SERIES : ")
// for (var i=2; i<=20; i=i+2){
//     document.write(i+"K ")
// }

// var items = ["cake","chips","biscuit",'wonton','passtery','cookies']
// var check=prompt("Welcome to ABC bakery, What do you want to order?")
// for (var i = 0; i<=items.length; i++){
//     if(check==items[i]){
//         alert(items[i]+" is availabe at our bakery")
//         break;
//     }
//     else{
//         alert("your required item is not availabe")
//         break;
//     }
// }

// var num = [24, 53, 78, 91, 12]
// var max=Math.max(...num)
// alert("Maximum Number: "+max)

// var num = [24, 53, 78, 91, 12]
// var max=Math.min(...num)
// alert("Minimum Number: "+max)

// for (var i=5; i<=100; i=i+5){
//          document.write(i+" ")
//      }