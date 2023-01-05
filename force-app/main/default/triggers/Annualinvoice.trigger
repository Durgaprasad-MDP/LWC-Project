trigger Annualinvoice on Invoice__c(before insert) 
{
    if (Trigger.isBefore && Trigger.isUpdate)
    {
        InvoiceamountHandler.insertorupdate(Trigger.new);
    }
}