public with sharing class LWCContact {
  @AuraEnabled(cacheable=true)
  public static list<contact> getContactList()
    {
      return[select Id,Name,Phone,Email from Contact limit 10];
    }
}