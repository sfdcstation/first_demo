({
    checkValidity : function(component, event, helper) {
        var inputCmp = component.find("field");
        inputCmp.setCustomValidity(""); //reset error
    
        var value = inputCmp.get("v.value");
        alert ('++++'+value);
        var lowerRange=1;
        var higherRange=100;
        console.log('value: '+value);
            /*if(!inputCmp.checkValidity()){
            if(value){
                if (value < lowerRange) {
                    inputCmp.setCustomValidity("Select correct number range1");
                }else if (value > higherRange){
                    inputCmp.setCustomValidity("Select correct number range2"); 
                }
            }else{
                inputCmp.setCustomValidity("Invalid value");
            }
        }
        inputCmp.reportValidity();*/
    }
})