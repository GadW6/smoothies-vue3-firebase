(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AddSmoothie"],{"077a":function(e,t,n){"use strict";n.r(t);var i=n("7a23"),a=Object(i["G"])("data-v-a5ddee3e");Object(i["s"])("data-v-a5ddee3e");var c={class:"add-smoothie container"},r=Object(i["g"])("h2",{class:"center-align indigo-text"},"Add New Smoothie Recipe:",-1),d={class:"field title"},o=Object(i["g"])("label",{for:"title"},"Smoothie Title",-1),l={class:"ingredient-list"},s={class:"field add-ingredient"},u=Object(i["g"])("label",{for:"add-ingredient"},[Object(i["f"])("Add an Ingredient: "),Object(i["g"])("small",null,"('TAB' to insert)")],-1),b={class:"field center-align"},g={key:0,class:"red-text"},p=Object(i["g"])("button",{class:"btn pink"}," ADD SMOOTHIE ",-1);Object(i["q"])();var f=a((function(e,t,n,a,f,O){return Object(i["p"])(),Object(i["d"])("div",c,[r,Object(i["g"])("form",{onSubmit:t[4]||(t[4]=Object(i["F"])((function(){return O.AddSmoothie.apply(O,arguments)}),["prevent"]))},[Object(i["g"])("div",d,[o,Object(i["D"])(Object(i["g"])("input",{type:"text",name:"title","onUpdate:modelValue":t[1]||(t[1]=function(e){return f.title=e})},null,512),[[i["A"],f.title]])]),Object(i["g"])("div",l,[(Object(i["p"])(!0),Object(i["d"])(i["a"],null,Object(i["v"])(f.ingredients,(function(e,t){return Object(i["p"])(),Object(i["d"])("span",{class:"chip",key:t},[Object(i["f"])(Object(i["y"])(e)+" ",1),Object(i["g"])("i",{class:"close material-icons",onClick:function(e){return O.DeleteIng(t)}},"close",8,["onClick"])])})),128))]),Object(i["g"])("div",s,[u,Object(i["D"])(Object(i["g"])("input",{type:"text",name:"add-ingredient",onKeydown:t[2]||(t[2]=Object(i["E"])(Object(i["F"])((function(){return O.AddIng.apply(O,arguments)}),["prevent"]),["tab"])),"onUpdate:modelValue":t[3]||(t[3]=function(e){return f.another=e})},null,544),[[i["A"],f.another]])]),Object(i["g"])("div",b,[f.feedback?(Object(i["p"])(),Object(i["d"])("p",g,Object(i["y"])(f.feedback),1)):Object(i["e"])("",!0),p])],32)])})),O=(n("d81d"),n("a434"),n("96cf"),n("1da1")),h=n("bc3a"),j=n.n(h),m=n("3666"),v=n.n(m),k="http://strapi.proxmox:1337/",A={name:"AddSmoothie",data:function(){return{title:null,another:null,ingredients:[],feedback:null,slug:null}},methods:{AddSmoothie:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var n,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=function(t){t?(e.feedback=null,e.slug=v()(t,{replacement:"-",remove:/[*+~.()'"!:@]/g,lower:!0})):e.feedback="You must enter a smoothie title"},i=function(t){t?e.AddIng():e.feedback="You must enter a value to add an ingredient"},n(e.title),i(e.another),!(e.title&&e.ingredients.length>0)){t.next=15;break}return t.prev=5,t.next=8,j.a.post(k+"ingredients",{ingredients:e.ingredients.map((function(e){return{name:e}})),name:e.title,slug:e.slug});case 8:return a=t.sent,t.abrupt("return",a.data.id?e.$router.push("/"):null);case 12:t.prev=12,t.t0=t["catch"](5),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[5,12]])})))()},AddIng:function(){this.another?(this.ingredients.push(this.another),this.another=null,this.feedback=null):this.feedback="You must enter a value to add an ingredient"},DeleteIng:function(e){this.ingredients.splice(e,1)}}};n("aa05");A.render=f,A.__scopeId="data-v-a5ddee3e";t["default"]=A},"3d95":function(e,t,n){},aa05:function(e,t,n){"use strict";n("3d95")},d81d:function(e,t,n){"use strict";var i=n("23e7"),a=n("b727").map,c=n("1dde"),r=n("ae40"),d=c("map"),o=r("map");i({target:"Array",proto:!0,forced:!d||!o},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=AddSmoothie.e5cb0342.js.map