console.log('Hello World');

function Calculator(a,b)
{
    this.a = a;
    this.b = b;
}

Calculator.prototype.add = function()
{
    return this.a + this.b;
}

Calculator.prototype.subtract = function()
{
    return this.a - this.b;
}

Calculator.prototype.multiply = function()
{
    return this.a * this.b;
}

Calculator.prototype.log = function(){
    console.log("The add of" + " " + this.a + " + " + this.b + " = " + this.add());
    console.log("The subtract of" + " " + this.a + " - " + this.b + " = " + this.subtract());
    console.log("The multiply of" + " " + this.a + " * " + this.b + " = " + this.multiply());
}

var c1 = new Calculator(5,10);

c1.log();

setTimeout(function()
{
    var c2 = new Calculator(2,5);

    c2.log();
},2000);

