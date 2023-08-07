public with sharing class promiseExample1 {
    @AuraEnabled
    public static string methodFirst() {
       return 'Message from methodFirst';
    }

    @AuraEnabled
    public static string methodSecond() {
        return 'Message from methodSecond';
    }

    @AuraEnabled
    public static string methodThird() {
        return 'Message from methodThird';
    }
}