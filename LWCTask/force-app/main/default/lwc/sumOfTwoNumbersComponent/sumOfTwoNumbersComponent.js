import { LightningElement,track } from 'lwc';
import add from '@salesforce/apex/Controller.add'
export default class SumOfTwoNumbersComponent extends LightningElement {
    @track number1;
    @track number2;
    @track sum;
    @track errors;  
    handleClick(){
        add({firstNumber:this.number1,secondNumber:this.number2})
        .then(result=>{
            this.sum = result;
        })
        .catch(error=>{
            this.errors = error;
        });
    }
    handleChange(event){
        if(event.target.name==='firstnumber'){
            this.number1 = event.target.value;            
        }
        else if(event.target.name==='secondnumber'){
            this.number2 = event.target.value;            
        }
    }
}