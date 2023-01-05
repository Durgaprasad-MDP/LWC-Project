public class Counting { 
 @AuraEnabled
    public static List<VamriTechEmployee__c> getVamriTechEmployeeValue(){
        List<VamriTechEmployee__c> countList = new List<VamriTechEmployee__c>([select id,Name from VamriTechEmployee__c]);
        return countList;
    }
}