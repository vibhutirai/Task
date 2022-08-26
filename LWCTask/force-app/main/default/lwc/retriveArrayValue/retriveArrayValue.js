import { LightningElement,track} from 'lwc';
import Table from '@salesforce/apex/Controller.Table';
export default class RetriveArrayValue extends LightningElement {
@track arrayvalue;
@track errors;
@track value;
@track isShowTabel=false;
handleClick(){
    Table({str:this.arrayvalue})
    .then(result=>{
        this.value = result;
        this. isShowTabel=true;
    })
    .catch(error=>{
        this.errors = error;
    });
}
handleChange(event){
    if(event.target.name==='Array'){
        this.arrayvalue = event.target.value;       
    }
}
}