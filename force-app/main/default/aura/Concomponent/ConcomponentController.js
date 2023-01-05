({
    saveCon : function(component, event) {
        var con = component.get("v.conInfo");

        var action1 = component.get("c.saveContact");
        action1.setParams({
        "c": con
       });
        action1.setCallback(this, function(response) {
            var state = response.getState();
            console.log('state--'+state);            
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.conInfo", response.getReturnValue());
            }
        });
        $A.enqueueAction(action1);       
    }
})