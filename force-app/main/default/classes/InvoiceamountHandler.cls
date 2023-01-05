public class InvoiceamountHandler {
    public static void insertorupdate(list<invoice__c> Invoice){
        List<Account> updateAccList = new List<Account>();
        for ( Account acc:[SELECT id,name,last_year_annual_invoice__c,Latest__c FROM Account WHERE id IN: AccountId(Invoice)])
        {
            Double invoiceAmountofLastYear = 0 ;
for(Invoice__c invoiceList:[SELECT id, Name, Invoice_Amount__c FROM Invoice__c WHERE Account__c =:acc.id AND Invoice_Date__c= LAST_YEAR])       {
         invoiceAmountofLastYear = invoiceAmountofLastYear + invoiceList.Invoice_Amount__c;
          }
      acc.last_year_annual_invoice__c = invoiceAmountofLastYear;
acc.Latest__c = [SELECT id, Name, Invoice_Amount__c FROM Invoice__c WHERE Account__c=: acc.id ORDER BY Invoice_Date__c DESC LIMIT 1].Invoice_Amount__c;      }
}
    {
      List<Account> updateAccList = new List<Account>();
       if     (updateAccList != null &&  !updateAccList.isEmpty()){
       update updateAccList;
        }
           }
     public static list<Id> AccountId(List<Invoice__c> items){
     List<Id> AccountIDList = new List<Id>();
        for(Invoice__c ProcessItem :items){
        AccountIDList.add(ProcessItem.Account__c);
        }
       return(AccountIDList);
       }
        }