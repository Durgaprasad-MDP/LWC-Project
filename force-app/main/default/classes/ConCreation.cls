global with sharing class ConCreation{
    @auraenabled
    public static string saveContact(contact c){
        if(c != null)
        {
            insert c;
            system.debug('c--'+c);
        }
        return c.id;
    }
}