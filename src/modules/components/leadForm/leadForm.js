import { LightningElement, api  } from "lwc";

export default class LeadForm extends LightningElement{
    @api description=''
    @api
    formSubmit(){
        this.template.querySelector('input[type="submit"]').click()
    }
}