public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccounts(String strName){
        String strNameLike = '%' +strName +'%';
        return [SELECT Name, AccountNumber FROM Account WHERE Name LIKE :strNameLike];
    }
}