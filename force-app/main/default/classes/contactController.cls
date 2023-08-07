public with sharing class contactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        system.debug('methodled...');
        return [SELECT Id, Name, Title, Phone, Email 
                FROM Contact limit 10];
}
}