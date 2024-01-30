import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height='';
    weight='';
    bmiValue='';
    result='';
    inputHandler(event){
        const {name, value}=event.target;
        if(name==="height"){
            this.height=value;
        }
        if(name==="weight"){
            this.weight=value;
        }
    }
    submitHandler(event){
        event.preventDefault();   
        this.calculate();
    }
    calculate(){
        let bmi=(this.weight/(this.height*this.height))*703;
        this.bmiValue=bmi.toFixed(2);
        console.log('BMI '+ this.bmiValue);
        if(this.bmiValue<18.5)
        this.result="Underweight";
        else if(this.bmiValue<25 && this.bmiValue>=18.5)
        this.result="Healthy";
        else if(this.bmiValue>=25 && this.bmiValue<30)
        this.result="Overweight";
        else
        this.result="Obese";
    console.log(this.result);
    }
    recalculate(){
        this.height='';
        this.weight='';
        this.bmiValue='';
        this.result='';
    }
}