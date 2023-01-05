public class ContactListController1 {
    @AuraEnabled
    public static List<contact> getContactList(){
        List<contact> contactList = new List<contact>([select Id, Name,Email,Phone From contact where Email != null]);
        return contactList;
    }

}