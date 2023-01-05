global class AccountBatch implements Database.Batchable<sObject>
{
 global Database.QueryLocator start(Database.BatchableContext bc) //start method
 {
   String query = 'select id, Name from Account';
   return Database.getQueryLocator(Query); 
 }
global void execute(Database.BatchableContext bc, List<Account> scope)
//execute method
 { 
  for(Account acc : scope)
  { 
      acc.Name = acc.Name+' _vamritech'  ;
    }
update scope;
  }
global void finish(Database.BatchableContext bc)
//finish method
 {
  }
}