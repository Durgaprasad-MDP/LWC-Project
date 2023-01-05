public class AccordionAuraController {
    @AuraEnabled
    public static List<Case> getCaseList(){
        List<Case> caseList = new List<Case>();
        caseList = [SELECT Id,CaseNumber,Origin,Priority,Status From Case Where ContactEmail='barr_tim@grandhotels.com' LIMIT 10];
        return caseList;
    }
}