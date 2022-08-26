import { LightningElement,track } from 'lwc';
import fetchvalue from '@salesforce/apex/Controller.fetchvalue';
export default class FetchValueFromKey extends LightningElement {
    @track key;
    @track value;
    @track errors;  
    handleClick(){
        fetchvalue({key:this.key})
        .then(result=>{
            this.value = result;
        })
        .catch(error=>{
            this.errors = error;
        });
    }
    handleChange(event){
        if(event.target.name==='key'){
            this.key = event.target.value;            
        }
    }
}