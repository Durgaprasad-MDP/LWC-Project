public class noofprojectshandler {
 
    public static void countprojects(List<BuildingProject__c> newList, List<BuildingProject__c> oldList)
    {
        set<id> accountids=new set<id>();
        if(newList!=null)
        {
        for(BuildingProject__c b: newList)
        {
            if(b.Account__c!=null)
            {
                accountids.add(b.Account__c);
            }
        }
        }
        if(oldList!=null)
        {
            for(BuildingProject__c bp:oldList)
            
        {
            if(bp.Account__c!=null)
            {
               accountids.add(bp.Account__c);
            }
    }
            
        }
        
    
   List<account> showaccount=[SELECT id,Number_of_Building_Projects__c,(SELECT id from BuildingProjects__r) from account where id In:accountids];
   if(!showaccount.isEmpty())
  {
    for(account acc:showaccount)
  {
        acc.Number_of_Building_Projects__c=acc.BuildingProjects__r.size();
  } 
}
        
     update showaccount;
}
}