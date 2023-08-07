public with sharing class RadioGroup 
{
        @AuraEnabled(Cacheable=true)
            public static List<Contact> getContacts()
            {
            return [select id,Name,Phone,Email from Contact limit 10];
            }
    
}