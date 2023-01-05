({
	sum : function(component, event, helper) 
    {
		var v1 = component.find("txt1").get("v.value");
        var v2 = component.find("txt2").get("v.value");
        var v3 = parseInt(v1)+parseInt(v2);
        component.set("v.actionName","Addition");
        component.set("v.result",v3)

	},
    sub : function(component, event, helper) 
    {
		var v1 = component.find("txt1").get("v.value");
        var v2 = component.find("txt2").get("v.value");
        var v3 = parseInt(v1)-parseInt(v2);
        component.set("v.actionName","subtraction");
        component.set("v.result",v3)
},
 Mul : function(component, event, helper) 
    {
		var v1 = component.find("txt1").get("v.value");
        var v2 = component.find("txt2").get("v.value");
        var v3 = parseInt(v1)*parseInt(v2);
        component.set("v.actionName","Multiplication");
        component.set("v.result",v3)
    },
Div : function(component, event, helper) 
    {
		var v1 = component.find("txt1").get("v.value");
        var v2 = component.find("txt2").get("v.value");
        var v3 = parseInt(v1)/parseInt(v2);
        component.set("v.actionName","Division");
        component.set("v.result",v3)
    }
})