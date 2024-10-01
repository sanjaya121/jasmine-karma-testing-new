import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    const counter =this.createClosure();
    this.spreadOperation();
    console.log('object :>> ', counter.increment());
    console.log("Ng On Init");
    this.printPyramid(6);
  }


  // closure example

  createClosure=()=>{
    let count =0;
    return {
      increment : ()=>{
        count ++;
        return count;
      
      },
      decrement: ()=>{
        count --;
        return count;
      }
    }
    }

    /// understanding Spread operator.
    spreadOperation=()=>{
      const arr1=[1,2,3,4,5]
      const arr2=[6,7,8,9,10];
      let combinedArray = [...arr1,{a:4,b:6}];

      console.log('Spread Operator Array :>> ', combinedArray);
    }

    /// pring pyramid

      printPyramid =(rows:any)=>{
        // for (let i = 0; i < rows; i++) {
        //     var output = '';
        //     for (let j =0; j < rows - i; j++) output += ' ';
        //     for (let k = 0; k <= i; k++) output += '* ';
        //     console.log(output);  
        // } 

       for(let i=0;i < rows;i++){
        var output ='';
        for(let j=0;j < rows-i;j++){
          output += " ";
        }
        for(let k=0;k < i;k++){
          output += ' * '
        }
        console.log(output);
       }
        
    }
   

  }

