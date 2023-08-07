public with sharing class soapcallouts {

@AuraEnabled(cacheable=true)
public static Double getSum(Double val1 ,Double val2 ) {
        calculatorServices.CalculatorImplPort calculator =new calculatorServices.CalculatorImplPort();
        return   calculator.doAdd(val1,val2);
}
@AuraEnabled(cacheable=true)
public static Double getSub(Double val1 ,Double val2 ) {
        calculatorServices.CalculatorImplPort calculator =new calculatorServices.CalculatorImplPort();
        return   calculator.doSubtract(val1,val2);
}
@AuraEnabled(cacheable=true)
public static Double getMul(Double val1 ,Double val2 ) {
        calculatorServices.CalculatorImplPort calculator =new calculatorServices.CalculatorImplPort();
        return   calculator.doMultiply(val1,val2);
}


    
}