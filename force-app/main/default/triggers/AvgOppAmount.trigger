trigger AvgOppAmount on Opportunity (after insert,after update) 
{
    System.debug('******'+Trigger.new[0].accountId);
    System.debug('&&&&&&&'+Trigger.new);
  //public static boolean isExecuted = True;
    public static integer counter;
    
    //List<Opportunity> lstopp =new  List<Opportunity> ();
    List<Opportunity> lstopp1 =new  List<Opportunity> ();
/*
   for(Opportunity opp : trigger.new)
   {
       Opportunity op1 =new Opportunity(id=opp.id);
       lstopp.add(op1);
   }
    if(isExecuted)
    {
        isExecuted=False;
        update lstopp;
    }
    */
   counter = [Select count() from Opportunity where AccountId=:Trigger.new[0].AccountId ];
   system.debug('+++++++'+counter);
    //counter=aggrResult.get('cnt');
    //
 
         
    List<opportunity> opp3=[Select id,AvgAmount__c,amount from Opportunity where AccountId=:Trigger.new[0].AccountId];
  
            for(Opportunity oppor :opp3)
            {      
                      
                oppor.AvgAmount__c=oppor.amount/counter;
                lstopp1.add(oppor);
           }
    
        if(RecursiveTriggerHandler.isFirstTime)
        {
        RecursiveTriggerHandler.isFirstTime = false;
            update lstopp1;
        }
                       

        
      
}