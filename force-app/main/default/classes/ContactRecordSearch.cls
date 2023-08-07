public with sharing class ContactRecordSearch {
    @AuraEnabled(cacheable=true)
      public static List<Contact> findContacts(String searchRecord)
       { 
        List<Contact> contactListRecord = new  List<Contact> ();
        system.debug('+++++'+searchRecord);
        If(searchRecord !='')
                {
          
                String key = '%' + searchRecord + '%';
                
                for(Contact c:[SELECT Id, FirstName,LastName, Title, Phone, Email FROM Contact WHERE Name LIKE :key WITH SECURITY_ENFORCED])
                {
                contactListRecord.add(c);
                }
           
        }
         return contactListRecord;
       
    }
}