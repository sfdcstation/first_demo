public with sharing class CheckBoxEx1 {
     @AuraEnabled(Cacheable = true)
    public static List<Contact> getContactRecord(){
      return [SELECT Id, Name,Phone FROM Contact  Limit 10];
    }
}