@isTest
private inherited sharing class CalloutRecipes_Tests {
    public static String goodUntypedJSON =
        '{\n' +
        ' "Id": "123456", \n' +
        ' "Name": "Universal Containers",\n' +
        ' "Website": "www.universalcontainers.com",\n' +
        ' "Contacts": [ \n' +
        ' { \n' +
        ' "FirstName": "Samantha",\n' +
        ' "LastName": "Smith",\n' +
        ' "Email": "ssmith@example.com"\n' +
        ' },' +
        ' {' +
        ' "FirstName": "James",\n' +
        ' "LastName": "Roberts",\n' +
        ' "Email": "jroberts@example.com"\n' +
        ' }\n' +
        ']\n' +
        '}';

    @isTest
    static void testRawCalloutPositive() {
        HttpCalloutMockFactory mock = new HttpCalloutMockFactory(
            200,
            'OK',
            'OK',
            new Map<String, String>()
        );
        Test.setMock(HttpCalloutMock.class, mock);

        Test.startTest();
        String results = CalloutRecipes.rawCallout();
        Test.stopTest();

        System.assertEquals(
            'OK',
            results,
            'Expected to recieve a valid response from the mock'
        );
    }

    @IsTest
    static void testRawCalloutNegative() {
        HttpCalloutMockFactory mock = new HttpCalloutMockFactory(
            500,
            'Server Error',
            'Server Error',
            new Map<String, String>()
        );
        Boolean didCatchTheRightException = false;
        Test.setMock(HttpCalloutMock.class, mock);

        Test.startTest();
        try {
            CalloutRecipes.rawCallout();
        } catch (CalloutRecipes.CalloutRecipesException cre) {
            if (
                cre.getMessage()
                    .containsIgnoreCase('did not get a success response')
            ) {
                didCatchTheRightException = true;
            }
        }
        Test.stopTest();

        System.assert(
            didCatchTheRightException,
            'Expected to catch a CalloutRecipesException'
        );
    }

    @isTest
    static void httpGetCalloutToSecondSalesforceOrgPositive() {
        Account[] accountList = (Account[]) TestFactory.createSObjectList(
            new Account(),
            5
        );
        String response = JSON.serialize(accountList);
        HttpCalloutMockFactory mock = new HttpCalloutMockFactory(
            200,
            'OK',
            response,
            new Map<String, String>()
        );
        Test.setMock(HttpCalloutMock.class, mock);

        Test.startTest();
        CalloutRecipes x = new CalloutRecipes('Second_Org');
        List<Account> calloutResponse = x.httpGetCalloutToSecondOrg();
        Test.stopTest();

        System.assert(
            calloutResponse.getSObjectType() == Account.SObjectType,
            'Expected the response to have the SObject Type'
        );
    }

    @isTest
    static void httpGetCalloutToSecondSalesforceOrgNegative() {
        Contact[] contactList = (Contact[]) TestFactory.createSObjectList(
            new Contact(),
            5
        );
        String response = '{"test"' + JSON.serialize(contactList);
        HttpCalloutMockFactory mock = new HttpCalloutMockFactory(
            400,
            'OK',
            response,
            new Map<String, String>()
        );
        Test.setMock(HttpCalloutMock.class, mock);

        Test.startTest();
        CalloutRecipes callouts = new CalloutRecipes('Second_Org');
        List<Account> calloutResponse = callouts.httpGetCalloutToSecondOrg();
        Test.stopTest();

        System.assert(calloutResponse == null, 'Expected a null response');
    }

    @isTest
    static void httpDeleteCalloutToSecondSalesforceOrgPositive() {
        SObject contact = TestFactory.createSObject(
            new Contact(LastName = 'test'),
            true
        );
        String response = 'Successful Delete';
        HttpCalloutMockFactory mock = new HttpCalloutMockFactory(
            200,
            'OK',
            response,
            new Map<String, String>()
        );
        Test.setMock(HttpCalloutMock.class, mock);

        Test.startTest();
        CalloutRecipes callouts = new CalloutRecipes('Second_Org');
        Integer statusCode = callouts.httpDeleteCalloutToSecondOrg(contact.Id);
        Test.stopTest();

        System.assert(statusCode == 200, 'Expected a successful delete');
    }

    @isTest
    static void httpDeleteCalloutToSecondSalesforceOrgNegative() {
        SObject contact = TestFactory.createSObject(
            new Contact(LastName = 'test'),
            true
        );
        String response = 'Unsuccessful Delete';
        HttpCalloutMockFactory mock = new HttpCalloutMockFactory(
            404,
            'Not Found',
            response,
            new Map<String, String>()
        );
        Test.setMock(HttpCalloutMock.class, mock);

        Test.startTest();
        CalloutRecipes callouts = new CalloutRecipes('Second_Org');
        Integer statusCode = callouts.httpDeleteCalloutToSecondOrg(contact.Id);
        Test.stopTest();

        System.assert(statusCode == 404, 'Expected an unsuccessful delete');
    }

    @isTest
    static void httpPostCalloutToSecondSalesforceOrgPositive() {
        Contact[] contactList = (Contact[]) TestFactory.createSObjectList(
            new Contact(),
            5
        );
        String response = 'Successful Insert';
        HttpCalloutMockFactory mock = new HttpCalloutMockFactory(
            200,
            'OK',
            response,
            new Map<String, String>()
        );
        Test.setMock(HttpCalloutMock.class, mock);

        Test.startTest();
        CalloutRecipes callouts = new CalloutRecipes('Second_Org');
        Integer statusCode = callouts.httpPostCalloutToSecondOrg(contactList);
        Test.stopTest();

        System.assert(statusCode == 200, 'Expected a successful response');
    }

    @isTest
    static void httpPostCalloutToSecondSalesforceOrgNegative() {
        Contact[] contactList = (Contact[]) TestFactory.createSObjectList(
            new Contact(),
            5
        );
        String response = 'Successful Insert';
        HttpCalloutMockFactory mock = new HttpCalloutMockFactory(
            400,
            'Not Found',
            response,
            new Map<String, String>()
        );
        Test.setMock(HttpCalloutMock.class, mock);

        Test.startTest();
        CalloutRecipes callouts = new CalloutRecipes('Second_Org');
        Integer statusCode = callouts.httpPostCalloutToSecondOrg(contactList);
        Test.stopTest();

        System.assert(statusCode == 400, 'Expected an unsusccessful response');
    }

    @isTest
    static void httpPutCalloutToSecondSalesforceOrgPositive() {
        Contact[] contactList = (Contact[]) TestFactory.createSObjectList(
            new Contact(),
            5
        );
        String response = 'Successful Upsert';
        HttpCalloutMockFactory mock = new HttpCalloutMockFactory(
            200,
            'OK',
            response,
            new Map<String, String>()
        );
        Test.setMock(HttpCalloutMock.class, mock);

        Test.startTest();
        CalloutRecipes callouts = new CalloutRecipes('Second_Org');
        Integer statusCode = callouts.httpPutCalloutToSecondOrg(contactList);
        Test.stopTest();

        System.assert(statusCode == 200, 'Expected a successful response');
    }

    @isTest
    static void httpPutCalloutToSecondSalesforceOrgNegative() {
        Contact[] contactList = (Contact[]) TestFactory.createSObjectList(
            new Contact(),
            5
        );
        String response = 'Unsuccessful Upsert';
        HttpCalloutMockFactory mock = new HttpCalloutMockFactory(
            404,
            'Not Found',
            response,
            new Map<String, String>()
        );
        Test.setMock(HttpCalloutMock.class, mock);

        Test.startTest();
        CalloutRecipes callouts = new CalloutRecipes('Second_Org');
        Integer statusCode = callouts.httpPutCalloutToSecondOrg(contactList);
        Test.stopTest();

        System.assert(statusCode == 404, 'Expected an unsusccessful response');
    }

    @isTest
    static void httpPatchCalloutToSecondSalesforceOrgPositive() {
        Account[] accountList = (Account[]) TestFactory.createSObjectList(
            new Account(),
            5
        );
        String response = 'Successful Update';
        HttpCalloutMockFactory mock = new HttpCalloutMockFactory(
            200,
            'OK',
            response,
            new Map<String, String>()
        );
        Test.setMock(HttpCalloutMock.class, mock);

        Test.startTest();
        CalloutRecipes callouts = new CalloutRecipes('Second_Org');
        Integer statusCode = callouts.httpPatchCalloutToSecondOrg(accountList);
        Test.stopTest();

        System.assert(statusCode == 200, 'Expected a successful response');
    }

    @isTest
    static void httpPatchCalloutToSecondSalesforceOrgNegative() {
        Account[] accountList = (Account[]) TestFactory.createSObjectList(
            new Account(),
            5
        );
        String response = 'Unsuccessful Update';
        HttpCalloutMockFactory mock = new HttpCalloutMockFactory(
            404,
            'Not Found',
            response,
            new Map<String, String>()
        );
        Test.setMock(HttpCalloutMock.class, mock);

        Test.startTest();
        CalloutRecipes callouts = new CalloutRecipes('Second_Org');
        Integer statusCode = callouts.httpPatchCalloutToSecondOrg(accountList);
        Test.stopTest();

        System.assert(statusCode == 404, 'Expected a successful response');
    }

    @isTest
    static void calloutWithUntypedResponsePositive() {
        String response =
            '{\n' +
            ' "Id": "123456", \n' +
            ' "Name": "Universal Containers",\n' +
            ' "Website": "www.universalcontainers.com",\n' +
            ' "Contacts": [ \n' +
            ' { \n' +
            ' "FirstName": "Samantha",\n' +
            ' "LastName": "Smith",\n' +
            ' "Email": "ssmith@example.com"\n' +
            ' },' +
            ' {' +
            ' "FirstName": "James",\n' +
            ' "LastName": "Roberts",\n' +
            ' "Email": "jroberts@example.com"\n' +
            ' }\n' +
            ']\n' +
            '}';
        HttpCalloutMockFactory mock = new HttpCalloutMockFactory(
            200,
            'OK',
            response,
            new Map<String, String>()
        );
        Test.setMock(HttpCalloutMock.class, mock);

        Test.startTest();
        CalloutRecipes callouts = new CalloutRecipes('Second_Org');
        Map<String, Object> responseMap = callouts.httpCalloutWithUntypedResponse();
        Test.stopTest();

        System.assert(
            responseMap.get('Name') == 'Universal Containers',
            'Expected to find Universal Containers as name in the response'
        );
        System.assert(
            ((List<Object>) responseMap.get('Contacts')).size() == 2,
            'Expected to find two contacts in the response'
        );
    }

    @isTest
    static void insertAccountAndContactsFromUntypedResponsePositive() {
        String response = CalloutRecipes_Tests.goodUntypedJSON;

        Test.startTest();
        CalloutRecipes callouts = new CalloutRecipes('Second_Org');
        callouts.insertAccountAndContactsFromUntypedResponse(response);
        Test.stopTest();

        List<Account> accounts = [
            SELECT Id, Name
            FROM Account
            WHERE Name = 'Universal Containers'
            LIMIT 1
        ];
        Account account = (accounts.size() == 1) ? accounts.get(0) : null;
        List<Contact> contacts = [
            SELECT Id
            FROM Contact
            WHERE AccountId = :account.Id
        ];
        System.assertEquals(
            account.Name,
            'Universal Containers',
            'Expected account name to be Universal Containers'
        );
        System.assertEquals(
            contacts.size(),
            2,
            'Expected two contacts returned'
        );
    }
}