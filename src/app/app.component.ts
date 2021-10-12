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
  MCMRFlag:number=0;
  MCMR:string;
  MRFlag:string;
  MinusM:any;
  Bracket:number=0;
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
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' ||PrevKey=='(' || PrevKey==')'|| PrevKey=='divivdedByone' )  {
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
    if (this.input.toString().lastIndexOf("ms") > pos) pos=this.input.lastIndexOf("ms")
    if (this.input.toString().lastIndexOf("m+") > pos) pos=this.input.lastIndexOf("m+")
    if (this.input.toString().lastIndexOf("m-") > pos) pos=this.input.lastIndexOf("m-")
    if (this.input.toString().lastIndexOf("mr") > pos) pos=this.input.lastIndexOf("mr")
    if (this.input.toString().lastIndexOf("mc") > pos) pos=this.input.lastIndexOf("mc")
    if (this.input.toString().lastIndexOf("sqrt") > pos) pos=this.input.lastIndexOf("sqrt")
    if (this.input.toString().lastIndexOf("divivdedByone") > pos) pos=this.input.lastIndexOf("divivdedByone")
    if (this.input.toString().lastIndexOf("getfactorial") > pos) pos=this.input.lastIndexOf("getfactorial")
    if (this.input.toString().lastIndexOf("getPII") > pos) pos=this.input.lastIndexOf("getPII")
    if (this.input.toString().lastIndexOf("powerbyTen") > pos) pos=this.input.lastIndexOf("powerbyTen")
    if (this.input.toString().lastIndexOf("log") > pos) pos=this.input.lastIndexOf("log")
    if (this.input.toString().lastIndexOf("lnlog") > pos) pos=this.input.lastIndexOf("lnlog")
    if (this.input.toString().lastIndexOf("abs") > pos) pos=this.input.lastIndexOf("abs")
    if (this.input.toString().lastIndexOf("floor") > pos) pos=this.input.lastIndexOf("floor")
    if (this.input.toString().lastIndexOf("ceil") > pos) pos=this.input.lastIndexOf("ceil")
    if (this.input.toString().lastIndexOf("rand") > pos) pos=this.input.lastIndexOf("rand")
    if (this.input.toString().lastIndexOf("dms") > pos) pos=this.input.lastIndexOf("dms")
    if (this.input.toString().lastIndexOf("+-") > pos) pos=this.input.lastIndexOf("+-")
    if (this.input.toString().lastIndexOf("powerx3") > pos) pos=this.input.lastIndexOf("powerx3")
    if (this.input.toString().lastIndexOf("powerx*y") > pos) pos=this.input.lastIndexOf("powerx*y")
    if(this.input.toString().lastIndexOf("(") > pos)
    {
       pos=this.input.lastIndexOf("(")
       console.log('Last Index '+this.input.substr(pos+1))
    }
    if (this.input.toString().lastIndexOf(")") > pos) pos=this.input.lastIndexOf(")")
    {
      pos=this.input.lastIndexOf(")")
      console.log('Last Index '+this.input.substr(pos+1))
   }

    console.log('Last Index '+this.input.substr(pos+1))
    return this.input.substr(pos+1)
  }
  pressOperator(op: string) {

    console.log(this.input,'op12345')
    let opt:number=parseInt(this.input);

    //   this.Bracket=1;
    //   if(this.input!='0')
    //   {
    //     this.input='';
    //     let bindbracket='('+opt;
    //     op=bindbracket;
    //   }
    // }
    // else if(op===')')
    // {
    //   this.Bracket=1;
    //   if(this.input!='0')
    //   {
    //   }
    //   else
    //   {
    //     op='';
    //   }
    // }

    //Do not allow operators more than once
    const lastKey = this.input[this.input.length - 1];
    console.log(lastKey,'lastKey');
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '(' || lastKey === ')' ||lastKey ==='mc' ||lastKey ==='ms' ||lastKey ==='m-' ||lastKey ==='m+' ||lastKey ==='mr' || lastKey === 'sqrt' ||
     lastKey==='squareRoot' || lastKey==='divivdedByone' ||lastKey==='getfactorial' || lastKey==='getPII' ||
     lastKey==='powerbyTen' || lastKey==='log' || lastKey==='lnlog' || lastKey==='abs' || lastKey==='floor' || lastKey==='ceil' || lastKey==='rand'
     ||lastKey==='dms'||lastKey==='+-' || lastKey==='powerx3' ||lastKey==='powerx*y')  {
      return;
    }

     else if(op === 'ms')
     {
       this.input='';
     }
     else if(op === 'm-')
     {
      this.MCMRFlag=1;
      this.MCMR='M';
      this.MRFlag='-m';
     }
  //  create memory plus and minus and calculate MR
     else if(op === 'm+')
     {
      this.MCMRFlag=1;
      this.MCMR='M';
      this.MRFlag='+m';
     }
     else if(op === 'mr')
     {
       if(this.MRFlag=='-m')
       {
         this.MinusM=-Math.abs(opt);
        this.input=this.MinusM.toString();
        this.result=this.MinusM.toString();
       }
       else if(this.MRFlag=='+m' && this.MinusM<0)
       {
          let plusM=-Math.pow(opt, 2);
          this.input=plusM.toString();
          this.result=plusM.toString();
       }
       else{
         this.result='0';
       }
     }
     else if(op === 'mc')
     {
      this.MCMRFlag=0;
      this.MCMR='';
     }
    //Using math power function
    else if(op === 'sqrt')
    {
      let ops=Math.pow(opt, 2);
      this.input=ops.toString();
      this.calcAnswer();
    }
    else if(op==='powerx3')
    {
      let ops=Math.pow(opt, 3);
      this.input=ops.toString();
      this.calcAnswer();
    }
    else if(op==='powerx*y')
    {
      let ops=Math.pow(opt, opt);
      this.input=ops.toString();
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
    //Using math functions
    else if(op=='abs')
    {
      let absvalue=parseInt(this.input);
      console.log(absvalue,'absvalue');
      let ops=Math.abs(absvalue).toString();
      this.input=ops;
      this.calcAnswer();
    }
    else if(op==='floor')
    {
      let ops=Math.floor(opt);
      this.input=ops.toString();
      this.calcAnswer();
    }
    //The ceil() method rounds a number UPWARDS to the nearest integer, and returns the result.
    else if(op==='ceil')
    {
      let ops=Math.ceil(opt);
      this.input=ops.toString();
      this.calcAnswer();
    }
    //Using Random method its return random number
    else if(op==='rand')
    {
      let ops=Math.random();
      this.input=ops.toString();
      this.calcAnswer();
    }
     //dms method using decimal degree to degree minute and second
    else if(op=== 'dms')
    {
      let ops=this.deg_to_dms(opt);
      this.input=ops.toString();
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
    //this methods returns numeric value bet - and 1
    else if(op==='sin')
    {
      let ops=Math.sin(opt);
      this.input=ops.toString();
      this.calcAnswer();
    }
    //this methods returns numeric value bet - and 1
    else if(op==='cos')
    {
      let ops=Math.cos(opt);
      this.input=ops.toString();
      this.calcAnswer();
    }
    //this methods returns numeric value bet - and 1
    else if(op==='tan')
    {
      let ops=Math.tan(opt);
      this.input=ops.toString();
      this.calcAnswer();
    }
    // else if(op==='(' || op===')')
    // {
    //   this.input = this.input + op;
    // }
    //Using this method number change postive and negavite
    else if(op==='+-')
    {
      if(opt>0)
      {
        var neg=(-opt);
        this.input=neg.toString();
      }
      else {
        var pos=Math.abs(opt);
        this.input=(+pos).toString();
      }
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
      this.MCMRFlag=0;
    }
  }
  allClear() {
    this.result = '';
    this.input = '0';
    this.MCMRFlag=0;
  }
  calcAnswer() {
    let formula = this.input;
     console.log(formula,'formula1111')
    let lastKey = formula[formula.length - 1];
    if (lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
    lastKey = formula[formula.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.' )
    {
      formula=formula.substr(0,formula.length - 1);
    }
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
  //Using this method convert my decimal degree
   deg_to_dms (deg) {
    var d = Math.floor (deg);
    var minfloat = (deg-d)*60;
    var m = Math.floor(minfloat);
    var secfloat = (minfloat-m)*60;
    var s = Math.round(secfloat);
    // After rounding, the seconds might become 60. These two
    // if-tests are not necessary if no rounding is done.
    if (s==60) {
      m++;
      s=0;
    }
    if (m==60) {
      d++;
      m=0;
    }
    return ("" + d + ":" + m + ":" + s);
 }
}
