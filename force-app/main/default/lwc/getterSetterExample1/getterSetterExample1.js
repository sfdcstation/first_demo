import { LightningElement } from 'lwc';

export default class GetterSetterExample1 extends LightningElement {

    numbertoconvert;
    convertedValue;
    selectedOption;

    get options() {
        return [
            { label: '--None--', value: '' },
            { label: 'Second', value: '1000' },
            { label: 'Minute', value: '60000' },
            { label: 'Hour', value: '3.6e+6' },
            { label: 'Day', value: '8.64e+7' }
        ];
    }

    set convert(val) {
        this.convertedValue = val;
    }

    handleChange(event) {
        this.numbertoconvert = event.detail.value;
    }

    handleSelect(event) {
        this.selectedOption = event.detail.value;
    }

    handleClick() {
        this.convert = (this.selectedOption && this.numbertoconvert ? this.numbertoconvert * this.selectedOption : '');
    }

}