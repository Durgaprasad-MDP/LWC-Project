@RestResource(urlMapping='/AccountService/*')
Global class RestServiceTest {
    
@HttpPost
    global static string dopost()
    {
        return 'Post method called from SAP';
}
}