trigger ContactAudit on ContactChangeEvent (after insert) 
{
	for(ContactChangeEvent event:Trigger.new)
        {
            system.debug('++++'+Trigger.new);
    EventBus.ChangeEventHeader header = event.ChangeEventHeader;
    System.debug('Received change event for ' + header.entityName + ' for the ' + header.changeType + ' operation.');

    if(header.changetype=='UPDATE')
    {
      System.debug('List of changed fields:');
        
        for (String field : header.changedFields)
        {
            if (null == event.get(field)) {
                System.debug('Deleted field value (set to null): ' + field);
            }
            else {
                System.debug('Changed field value: ' + field + '. New Value: '
                    + event.get(field));
            }
        }
    }
       }
}