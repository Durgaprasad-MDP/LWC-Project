public class VotingPoll1 {
 @AuraEnabled
    public static List<VamriTechEmployee__c> getVamriTechEmployeeValue(){
        List<VamriTechEmployee__c> voteList = new List<VamriTechEmployee__c>([select id,Name from VamriTechEmployee__c]);
        return voteList;
    }
}