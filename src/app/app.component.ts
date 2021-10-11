import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-app';
  input:string ='0';
  result:string = '';
   pressNum(num: string) {
    console.log(num);
    console.log(this.input,'qedqwed')
    if(this.input=='0' && num!='0')
    {
      this.input='';
    }
    //Do Not Allow . more than once
    if (num==".") {
      if (this.input !="" ) {
        const lastNum=this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }
    //Do Not Allow 0 at beginning.
    if (num=="0") {
      if (this.input=="" ) {
        return;
      }
      const PrevKey = this.input[this.input.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' ||PrevKey=='(' || PrevKey==')' || PrevKey=='divivdedByone' )  {
          return;
      }
    }

    this.input = this.input + num
    this.calcAnswer();
  }
  getLastOperand() {
    let pos:number;
    console.log(this.input)
    pos=this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos) pos=this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > pos) pos=this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > pos) pos=this.input.lastIndexOf("/")
    if (this.input.toString().lastIndexOf("(") > pos) pos=this.input.lastIndexOf("(")
    if (this.input.toString().lastIndexOf(")") > pos) pos=this.input.lastIndexOf(")")
    if (this.input.toString().lastIndexOf("sqrt") > pos) pos=this.input.lastIndexOf("sqrt")
    if (this.input.toString().lastIndexOf("divivdedByone") > pos) pos=this.input.lastIndexOf("divivdedByone")
    if (this.input.toString().lastIndexOf("getfactorial") > pos) pos=this.input.lastIndexOf("getfactorial")
    if (this.input.toString().lastIndexOf("getPII") > pos) pos=this.input.lastIndexOf("getPII")
    if (this.input.toString().lastIndexOf("powerbyTen") > pos) pos=this.input.lastIndexOf("powerbyTen")
    if (this.input.toString().lastIndexOf("log") > pos) pos=this.input.lastIndexOf("log")
    if (this.input.toString().lastIndexOf("lnlog") > pos) pos=this.input.lastIndexOf("lnlog")
    console.log('Last '+this.input.substr(pos+1))
    return this.input.substr(pos+1)
  }
  pressOperator(op: string) {
    // if(op=='(' || op==')')
    // {
    //   this.input='';
    // }
    let opt=parseInt(this.input);
    //Do not allow operators more than once
    const lastKey = this.input[this.input.length - 1];
    console.log(lastKey,'lastKey');
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '(' || lastKey === ')' || lastKey === 'sqrt' ||
     lastKey==='squareRoot' || lastKey==='divivdedByone' ||lastKey==='getfactorial' || lastKey=='getPII' ||
     lastKey=='powerbyTen' || lastKey=='log' || lastKey=='lnlog')  {
      return;
    }
    //powerbyTen
    else if(op === 'sqrt')
    {
      console.log(opt,'opstttt')
      let ops=Math.sqrt(opt);
      this.input=ops.toString();
      console.log(ops,'ops')
     // this.input = this.input + ops;
      this.calcAnswer();
    }
    else if(op === 'squareRoot')
    {
      let ops=Math.sqrt(opt);
      this.input=ops.toString();
      this.calcAnswer();
    }
    else if(op=='divivdedByone')
    {
      if(opt==0 ||this.input=='0')
      {
        this.input='Cannot divide by zero';
      }
      let ops=1/opt;
      this.input=ops.toString();
      this.calcAnswer();
    }
    else if(op=='abs')
    {
      let absvalue=parseInt(this.input);
      let ops=Math.abs(absvalue).toString();
      this.input=ops;
      this.calcAnswer();
    }
    else if(op === 'getfactorial')
    {
      let ops=this.getFactorial(opt);
      this.input=ops.toString();
      this.calcAnswer();
    }
    else if(op === 'getPII')
    {
      let ops=Math.PI;
      this.input=ops.toString();
      this.calcAnswer();
    }
    else if(op=== 'powerbyTen')
    {
      let ops=Math.pow(10, opt);
      this.input=ops.toString();
      this.calcAnswer();
    }
    else if(op==='log')
    {
      let ops=Math.log10(opt);
      this.input=ops.toString();
      this.calcAnswer();
    }
    else if(op==='lnlog')
    {
      let ops=Math.log(opt);
      this.input=ops.toString();
      this.calcAnswer();
    }
    else
    {
      this.input = this.input + op
      this.calcAnswer();
    }

  }
  clear() {
    if (this.input !="" ) {
      console.log(this.input,'this.input.');
      console.log(this.input.length,'this.input.length');
      this.input=this.input.substr(0, this.input.length-1)
    }
  }
  allClear() {
    this.result = '';
    this.input = '0';
  }
  calcAnswer() {
    let formula = this.input;
     console.log(formula,'formula');
    let lastKey = formula[formula.length - 1];

    if (lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }

    lastKey = formula[formula.length - 1];

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.' || lastKey === '(' || lastKey === ')')
    {
      formula=formula.substr(0,formula.length - 1);
    }

    console.log("Formula " +formula);
    this.result = eval(formula);
  }

  getAnswer() {
    this.calcAnswer();
    this.input = this.result;
    if (this.input=="0") this.input="";
  }
  //get factorial number
  getFactorial(value)
  {
    let f=1;
    for(var i = 2; i <= value; i++)
    {
      f = f*i;
    }
    return f;
  }
}
