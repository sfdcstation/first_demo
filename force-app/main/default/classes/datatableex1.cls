public with sharing class datatableex1 {
    @AuraEnabled(cacheable=true)
    public static List<contact> getContactdataTable(){
        List<contact> con =[select Name,email,phone from Contact];
        system.debug('Contact Details'+con);
        return con;
    }
   
}