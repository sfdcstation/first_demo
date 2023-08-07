Public Class OauthWSFlow{
Public string jsonresponse {get;set;}

Public void getAccounts()
{
Http h = new http();
HttpRequest req = new HttpRequest();
req.setEndpoint('callout:WebServerFlow');
req.setMethod('GET');
HttpResponse res = h.send(req);
jsonresponse =res.getBody();
System.debug('#####'+jsonresponse);
}
}