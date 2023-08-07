public with sharing class LWCContactCall {
  
    @Auraenabled(Cacheable=true)
  public static list<contact> getContactList()
    {
      return[select id,name,phone,email from Contact limit 10];
    }
}