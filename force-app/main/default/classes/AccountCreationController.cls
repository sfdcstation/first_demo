public with sharing class AccountCreationController {
    @AuraEnabled
    public static Id createAccountRecord(Map<String, Object> accountData) {
        Account newAccount = new Account();
        newAccount.Name = (String) accountData.get('Name');
        newAccount.Type = (String) accountData.get('Type');
        newAccount.Phone = (String) accountData.get('Phone');
        try{
        insert  as user newAccount;
        }catch(DmlException e) {
            System.debug('The following exception has occurred: ' +e.getMessage());
            String errorMsg ='You dont have'+ e.getMessage();
            throw new AuraHandledException(errorMsg);
            
        }

        return newAccount.Id;
    }
}