(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EditSmoothie"],{"2ca8":function(e,t,n){"use strict";n("413b")},"413b":function(e,t,n){},"97a8":function(e,t,n){"use strict";n.r(t);n("b0c0");var i=n("7a23"),o=Object(i["G"])("data-v-f638754c");Object(i["s"])("data-v-f638754c");var a={key:0,class:"edit-smoothie container"},r={class:"field title"},c=Object(i["g"])("label",{for:"title"},"Smoothie Title",-1),s={class:"ingredient-list"},u={class:"field add-ingredient"},d=Object(i["g"])("label",{for:"add-ingredient"},[Object(i["f"])("Add an Ingredient: "),Object(i["g"])("small",null,"('TAB' to insert)")],-1),l={class:"field center-align"},b={key:0,class:"red-text"},m=Object(i["g"])("button",{class:"btn pink"}," EDIT SMOOTHIE ",-1);Object(i["q"])();var h=o((function(e,t,n,o,h,p){return h.smoothie?(Object(i["p"])(),Object(i["d"])("div",a,[Object(i["g"])("h2",null,"Edit "+Object(i["y"])(h.smoothie.name)+" Smoothie:",1),Object(i["g"])("form",{onSubmit:t[4]||(t[4]=Object(i["F"])((function(){return p.EditSmoothie.apply(p,arguments)}),["prevent"]))},[Object(i["g"])("div",r,[c,Object(i["D"])(Object(i["g"])("input",{type:"text",name:"title","onUpdate:modelValue":t[1]||(t[1]=function(e){return h.smoothie.name=e})},null,512),[[i["A"],h.smoothie.name]])]),Object(i["g"])("div",s,[(Object(i["p"])(!0),Object(i["d"])(i["a"],null,Object(i["v"])(h.smoothie.ingredients,(function(e,t){return Object(i["p"])(),Object(i["d"])("span",{class:"chip",key:t},[Object(i["f"])(Object(i["y"])(e.name)+" ",1),Object(i["g"])("i",{class:"close material-icons",onClick:function(e){return p.DeleteIng(t)}},"close",8,["onClick"])])})),128))]),Object(i["g"])("div",u,[d,Object(i["D"])(Object(i["g"])("input",{type:"text",name:"add-ingredient",onKeydown:t[2]||(t[2]=Object(i["E"])(Object(i["F"])((function(){return p.AddIng.apply(p,arguments)}),["prevent"]),["tab"])),"onUpdate:modelValue":t[3]||(t[3]=function(e){return h.another=e})},null,544),[[i["A"],h.another]])]),Object(i["g"])("div",l,[h.feedback?(Object(i["p"])(),Object(i["d"])("p",b,Object(i["y"])(h.feedback),1)):Object(i["e"])("",!0),m])],32)])):Object(i["e"])("",!0)})),p=(n("a434"),n("96cf"),n("1da1")),g=n("3666"),O=n.n(g),f=n("bc3a"),j=n.n(f),v="http://strapi.proxmox:1337/",k={name:"EditSmoothie",props:["smoothie_slug"],data:function(){return{smoothie:null,another:null,feedback:null}},methods:{AddIng:function(){this.another?(this.smoothie.ingredients.push({name:this.another}),this.another=null,this.feedback=null):this.feedback="You must enter a value to edit an ingredient"},DeleteIng:function(e){this.smoothie.ingredients.splice(e,1)},EditSmoothie:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=function(t){t?e.AddIng():e.feedback="You must enter a value to add an ingredient"},n(e.another),!(e.smoothie.name&&e.smoothie.ingredients.length>0)){t.next=13;break}return t.prev=3,t.next=6,j.a.put(v+"smoothies/"+e.smoothie.id,{ingredients:e.smoothie.ingredients,name:e.smoothie.name,slug:O()(e.smoothie.name,{replacement:"-",remove:/[*+~.()'"!:@]/g,lower:!0})});case 6:return i=t.sent,t.abrupt("return",i.data.id?e.$router.push("/"):null);case 10:t.prev=10,t.t0=t["catch"](3),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()}},mounted:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get(v+"smoothies/slug/".concat(e.$props.smoothie_slug));case 3:n=t.sent,e.smoothie=n.data,t.next=10;break;case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",{msg:"There was an error: ".concat(t.t0)});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}};n("2ca8");k.render=h,k.__scopeId="data-v-f638754c";t["default"]=k}}]);
//# sourceMappingURL=EditSmoothie.ef1c9b9b.js.map