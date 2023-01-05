({
    doInit : function(component) {
        var action  = component.get('c.getRec');
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var returnData = response.getReturnValue();
                component.set("v.getResources",returnData);
            }
        });
        $A.enqueueAction(action);
        
    } ,
    increment : function(component, event, helper) {
       var count = parseInt (component.get("v.count")+1);
          component.set("v.count",count);
    },
    decrement : function(component, event, helper) {
        var count=parseInt (component.get("v.count")-1);
        component.set("v.count",count);
    },
   increment1 : function(component, event, helper) {
       var count = parseInt (component.get("v.count1")+1);
          component.set("v.count1",count);
    },
    decrement1 : function(component, event, helper) {
        var count=parseInt (component.get("v.count1")-1);
        component.set("v.count1",count);
    },
     increment2: function(component, event, helper) {
var count = parseInt(component.get("v.count2")+1);
        component.set("v.count2", count);
  },
    decrement2: function(component, event, helper) {
var count = parseInt(component.get("v.count2")-1);
component.set("v.count2", count);
         },
    
     increment3: function(component, event, helper) {
var count = parseInt(component.get("v.count3")+1);
        component.set("v.count3", count);
  },
    decrement3: function(component, event, helper) {
var count = parseInt(component.get("v.count3")-1);
component.set("v.count3", count);
         },
    increment4: function(component, event, helper) {
var count = parseInt(component.get("v.count4")+1);
        component.set("v.count4", count);
  },
    decrement4: function(component, event, helper) {
var count = parseInt(component.get("v.count4")-1);
component.set("v.count4", count);
         },
    increment5: function(component, event, helper) {
var count = parseInt(component.get("v.count5")+1);
        component.set("v.count5", count);
  },
    decrement5: function(component, event, helper) {
var count = parseInt(component.get("v.count5")-1);
component.set("v.count5", count);
         },
    increment6: function(component, event, helper) {
var count = parseInt(component.get("v.count6")+1);
        component.set("v.count6", count);
  },
    decrement6: function(component, event, helper) {
var count = parseInt(component.get("v.count6")-1);
component.set("v.count6", count);
         },
    increment7: function(component, event, helper) {
var count = parseInt(component.get("v.count7")+1);
        component.set("v.count7", count);
  },
    decrement7: function(component, event, helper) {
var count = parseInt(component.get("v.count7")-1);
component.set("v.count7", count);
         },
    increment8: function(component, event, helper) {
var count = parseInt(component.get("v.count8")+1);
        component.set("v.count8", count);
  },
    decrement8: function(component, event, helper) {
var count = parseInt(component.get("v.count8")-1);
component.set("v.count8", count);
         },
    increment9: function(component, event, helper) {
var count = parseInt(component.get("v.count9")+1);
        component.set("v.count9", count);
  },
    decrement9: function(component, event, helper) {
var count = parseInt(component.get("v.count9")-1);
component.set("v.count9", count);
         },
    increment10: function(component, event, helper) {
var count = parseInt(component.get("v.count10")+1);
        component.set("v.count10", count);
  },
    decrement10: function(component, event, helper) {
var count = parseInt(component.get("v.count10")-1);
component.set("v.count10", count);
         },
    increment11: function(component, event, helper) {
var count = parseInt(component.get("v.count11")+1);
        component.set("v.count11", count);
  },
    decrement11: function(component, event, helper) {
var count = parseInt(component.get("v.count11")-1);
component.set("v.count11", count);
         },
    increment12: function(component, event, helper) {
var count = parseInt(component.get("v.count12")+1);
        component.set("v.count12", count);
  },
    decrement12: function(component, event, helper) {
var count = parseInt(component.get("v.count12")-1);
component.set("v.count12", count);
         },
    increment13: function(component, event, helper) {
var count = parseInt(component.get("v.count13")+1);
        component.set("v.count13", count);
  },
    decrement13: function(component, event, helper) {
var count = parseInt(component.get("v.count13")-1);
component.set("v.count13", count);
         },
    increment14: function(component, event, helper) {
var count = parseInt(component.get("v.count14")+1);
        component.set("v.count14", count);
  },
    decrement14: function(component, event, helper) {
var count = parseInt(component.get("v.count14")-1);
component.set("v.count14", count);
         },
    increment15: function(component, event, helper) {
var count = parseInt(component.get("v.count15")+1);
        component.set("v.count15", count);
  },
    decrement15: function(component, event, helper) {
var count = parseInt(component.get("v.count15")-1);
component.set("v.count15", count);
         },
    increment16: function(component, event, helper) {
var count = parseInt(component.get("v.count16")+1);
        component.set("v.count16", count);
  },
    decrement16: function(component, event, helper) {
var count = parseInt(component.get("v.count16")-1);
component.set("v.count16", count);
         },
    increment17: function(component, event, helper) {
var count = parseInt(component.get("v.count17")+1);
        component.set("v.count17", count);
  },
    decrement17: function(component, event, helper) {
var count = parseInt(component.get("v.count17")-1);
component.set("v.count17", count);
         },
      increment18: function(component, event, helper) {
var count = parseInt(component.get("v.count18")+1);
        component.set("v.count18", count);
  },
    decrement18: function(component, event, helper) {
var count = parseInt(component.get("v.count18")-1);
component.set("v.count18", count);
         },
  
    increment19: function(component, event, helper) {
var count = parseInt(component.get("v.count19")+1);
        component.set("v.count19", count);
  },
    decrement19: function(component, event, helper) {
var count = parseInt(component.get("v.count19")-1);
component.set("v.count19", count);
         },
    increment20: function(component, event, helper) {
var count = parseInt(component.get("v.count20")+1);
        component.set("v.count20", count);
  },
    decrement20: function(component, event, helper) {
var count = parseInt(component.get("v.count20")-1);
component.set("v.count20", count);
         },
    increment21: function(component, event, helper) {
var count = parseInt(component.get("v.count21")+1);
        component.set("v.count21", count);
  },
    decrement21: function(component, event, helper) {
var count = parseInt(component.get("v.count21")-1);
component.set("v.count21", count);
         },
  openModel: function(component, event, helper) {
      component.set("v.isModalOpen", true);
                var name= component.find("inputname").get("v.value");
       var count = component.find("input").get("v.value");
       var name1= component.find("inputname1").get("v.value");
       var count1 = component.find("input1").get("v.value");
       var name2= component.find("inputname2").get("v.value");
       var count2= component.find("input2").get("v.value");
               var name3= component.find("inputname3").get("v.value");
       var count3= component.find("input3").get("v.value");

 var custs = [];
   
       custs.push({value:count, key:name});
       custs.push({value:count1, key:name1});
       custs.push({value:count2, key:name2});
       
 
       component.set("v.totalCount",custs);
       console.log("v.totalCount-------"+JSON.stringify(custs));
   },
  
   closeModel: function(component, event, helper) {  
          component.set("v.isModalOpen", false);
   },
  
   submitDetails: function(component, event, helper) {
      component.set("v.isModalOpen", false);
      },    
});