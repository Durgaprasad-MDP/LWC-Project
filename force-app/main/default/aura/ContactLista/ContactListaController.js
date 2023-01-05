({
    doInit : function(component, event, helper) {
        /* step 1(document of action class) */
        var action = component.get('c.getContactList');
        /* optionl */ /*step 2*/
        action.params({
        });
        /*step 4*/
        action.setCallback(this,function(response){
            var responsevalue = response.getReturnValue();
            console.log('responseValue',responseValue);
            component.set('v.conactList',responsrValue);
        });
        /*step 3*/
        $A.enqueueAction(action, false);
    }
})