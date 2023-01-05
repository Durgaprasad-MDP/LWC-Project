trigger totalprojectsonaccount on BuildingProject__c(after insert,after update,after delete)
{
    if(trigger.isafter)
    {
       
             if(trigger.isInsert || trigger.isUpdate || trigger.isDelete )
    {
        
             noofprojectshandler.countprojects(trigger.old,trigger.new);
        
    }        
    }
     
}