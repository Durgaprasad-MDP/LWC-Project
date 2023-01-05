public class ContactCretaion {
    @AuraEnabled
    public static string createContact(Contact contobj){
        system.debug('contact::'+contobj.firstName);
        insert contobj;
        return contobj.Id;
    }
}