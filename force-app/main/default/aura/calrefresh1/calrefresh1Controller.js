({
    Additionaction : function(component, event, helper) {
        var Number1 = parseInt(component.get("v.num1"));
        var Number2 = parseInt(component.get("v.num2"));
        var result = Number1+Number2;
        component.set("v.num3",result);
        component.set("v.isAdd",true);
        component.set("v.isSub",false);
        component.set("v.isMul",false);
        component.set("v.isDiv",false);
        component.set("v.isRefresh",true);
    },
    Subtractionaction : function(component, event, helper) {
        var Number1 = component.get("v.num1");
        var Number2 = component.get("v.num2");
        var result = Number1-Number2;
        component.set("v.num3",result);
        component.set("v.isAdd",false);
        component.set("v.isSub",true);
        component.set("v.isMul",false);
        component.set("v.isDiv",false);
        component.set("v.isRefresh",true);
    },
    Multiplicationaction : function(component, event, helper) {
        var Number1 = component.get("v.num1");
        var Number2 = component.get("v.num2");
        var result = Number1*Number2;
        component.set("v.num3",result);
        component.set("v.isAdd",false);
        component.set("v.isSub",false);
        component.set("v.isMul",true);
        component.set("v.isDiv",false);
        component.set("v.isRefresh",true);
    },
    Divisionaction : function(component, event, helper) {
        var Number1 = component.get("v.num1");
        var Number2 = component.get("v.num2");
        var result = Number1/Number2;
        component.set("v.num3",result);
        component.set("v.isAdd",false);
        component.set("v.isSub",false);
        component.set("v.isMul",false);
        component.set("v.isDiv",true);
        component.set("v.isRefresh",true);
    },
    refreshAction : function(component, event, helper) {
        component.set("v.num1", 0);
        component.set("v.num2", 0);
        component.set("v.isAdd",false);
        component.set("v.isSub",false);
        component.set("v.isMul",false);
        component.set("v.isDiv",false);
        component.set("v.isRefresh",false);
    }
})