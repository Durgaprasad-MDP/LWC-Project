public class ContactListController {
    
    @AuraEnabled
    Public Static List<Contact> getContactList(){
        List<Contact> ContactList = new List<Contact>([Select Id,Name,Email,Phone From Contact Where Email != null]);
        return ContactList;
    }
    

}