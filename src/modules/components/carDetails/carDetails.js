import {LightningElement, api} from 'lwc';

export default class CarDetails extends LightningElement{
    _selectedVariant={}
    @api 
    get selectedVariant(){
        return this._selectedVariant
    }
    set selectedVariant(data){
        if(data){
            let model  = data.variant.toLowerCase().replaceAll(' ','')
            let selectedImage = `/public/assets/honda/${model}/${data.imageName}.png`
            this._selectedVariant = {...data,"selectedimage":selectedImage}
        }
    }
}