public with sharing class DynamicLWCDataTable {
    @AuraEnabled(cacheable=true)
    public static DataTableResponse gettableName(String TableName)

    {
        System.debug('Hi');
        system.debug('Table Name'+TableName);
        List<DataTableColumns> lstDataColumns            = new List<DataTableColumns>();
        List<SObject> lstDataTableData                   = new List<SObject>();
        List<string> columnList                          = new List<string>();
        List<string> fieldAPINameList                    = new List<string>();

        Dynamic_Data_Table__mdt TableComponentMetadata = 
        [SELECT Id, DeveloperName, 	FieldValue__c, HeaderValue__c,
         Query__c, 	TableName__c FROM Dynamic_Data_Table__mdt
         WHERE DeveloperName =: TableName];

         system.debug ('+++'+TableComponentMetadata);

        if(TableComponentMetadata.HeaderValue__c != null)   
        {
            columnList = TableComponentMetadata.HeaderValue__c.split(',');
        }

        if(TableComponentMetadata.FieldValue__c != null)
        {
            fieldAPINameList = TableComponentMetadata.FieldValue__c.split(',');
        }

        for(integer i = 0; i < columnList.size(); i++)
        {

            DataTableColumns datacolumns = 
            new DataTableColumns( columnList[i].trim() ,
            fieldAPINameList[i].substringBefore(':').trim(), 
            fieldAPINameList[i].substringAfter(':').trim());

            lstDataColumns.add(datacolumns);
        }

        for(SObject SObjectItem : Database.query(TableComponentMetadata.Query__c))
        {
            lstDataTableData.add(SObjectItem);
        }

        DataTableResponse finalWrapper   = new DataTableResponse();
        finalWrapper.TableTitle          = TableComponentMetadata.TableName__c ;
        finalWrapper.lstDataTableColumns = lstDataColumns;
        finalWrapper.lstDataTableData    = lstDataTableData;
        return finalWrapper;
        
    }

   public class DataTableColumns {
        @AuraEnabled
        public String label {get;set;}
        @AuraEnabled       
        public String fieldName {get;set;}
        @AuraEnabled
        public String type {get;set;}

        public DataTableColumns(String label, String fieldName, String type)
        {
            this.label     = label;
            this.fieldName = fieldName;
            this.type      = type;          
        }
    }
    
    public class DataTableResponse {
        @AuraEnabled
        public List<DataTableColumns> lstDataTableColumns {get;set;}
        @AuraEnabled
        public List<sObject> lstDataTableData {get;set;}
        @AuraEnabled
        public String TableTitle {get;set;}       
    }
}