(function(t){function e(e){for(var r,o,c=e[0],l=e[1],i=e[2],d=0,f=[];d<c.length;d++)o=c[d],n[o]&&f.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0162":function(t,e,a){},"1aff":function(t,e,a){"use strict";var r=a("e8ed"),n=a.n(r);n.a},"2c9b":function(t,e,a){"use strict";var r=a("0162"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("744f"),a("6c7b"),a("7514"),a("20d6"),a("1c4c"),a("6762"),a("cadf"),a("e804"),a("55dd"),a("d04f"),a("c8ce"),a("217b"),a("7f7f"),a("f400"),a("7f25"),a("536b"),a("d9ab"),a("f9ab"),a("32d7"),a("25c9"),a("9f3c"),a("042e"),a("c7c6"),a("f4ff"),a("049f"),a("7872"),a("a69f"),a("0b21"),a("6c1a"),a("c7c62"),a("84b4"),a("c5f6"),a("2e37"),a("fca0"),a("7cdf"),a("ee1d"),a("b1b1"),a("87f3"),a("9278"),a("5df2"),a("04ff"),a("f751"),a("4504"),a("fee7"),a("ffc1"),a("0d6d"),a("9986"),a("8e6e"),a("25db"),a("e4f7"),a("b9a1"),a("64d5"),a("9aea"),a("db97"),a("66c8"),a("57f0"),a("165b"),a("456d"),a("cf6a"),a("fd24"),a("8615"),a("551c"),a("097d"),a("df1b"),a("2397"),a("88ca"),a("ba16"),a("d185"),a("ebde"),a("2d34"),a("f6b3"),a("2251"),a("c698"),a("a19f"),a("9253"),a("9275"),a("3b2b"),a("3846"),a("4917"),a("a481"),a("28a5"),a("386d"),a("6b54"),a("4f7f"),a("8a81"),a("ac4d"),a("8449"),a("9c86"),a("fa83"),a("48c0"),a("a032"),a("aef6"),a("d263"),a("6c37"),a("9ec8"),a("5695"),a("2fdb"),a("d0b0"),a("5df3"),a("b54a"),a("f576"),a("ed50"),a("788d"),a("14b9"),a("f386"),a("f559"),a("1448"),a("673e"),a("242a"),a("c66f"),a("b05c"),a("34ef"),a("6aa2"),a("15ac"),a("af56"),a("b6e4"),a("9c29"),a("63d9"),a("4dda"),a("10ad"),a("c02b"),a("4795"),a("130f"),a("ac6a"),a("96cf");var r=a("2b0e"),n=a("8c4f"),s=a("ce5b"),o=a.n(s);a("bf40");r["default"].use(o.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},iconfont:"fa"});var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"usable-home",dark:""}},[a("v-container",{attrs:{fluid:""}},[a("usable-navbar"),a("transition",{attrs:{name:"component-fade",mode:"out-in"}},[a("router-view")],1),a("usable-footer")],1)],1)},l=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"navbar",attrs:{"align-center":""}},[r("v-flex",{attrs:{xs8:""}},[r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{src:a("f9f2"),alt:"Usable Logo"},on:{click:t.toHomeStyles}})])],1),r("v-flex",{staticClass:"text-xs-right",attrs:{xs4:""}},[r("span",{staticClass:"login title font-weight-thin",on:{click:function(e){t.dialog=!0}}},[t._v("LOG IN")]),r("span",{staticClass:"ml-2 mr-2 title font-weight-light"},[t._v("|")]),r("router-link",{attrs:{to:"/contact-us"}},[r("span",{staticClass:"font-weight-bold title contact",on:{click:t.leaveHomeStyles}},[t._v("CONTACT US")])]),r("v-dialog",{attrs:{width:"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-form",[r("v-card",[r("v-card-title",{staticClass:"headline grey justify-center",attrs:{"primary-title":""}},[t._v("\n          Log Into "),r("span",[r("img",{staticClass:"ml-2",attrs:{src:a("f9f2"),alt:""}})])]),r("v-card-text",[r("v-text-field",{attrs:{type:"text",required:"",label:"Email",color:"cyan"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("v-text-field",{attrs:{type:"text",required:"",label:"Password",color:"cyan"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs6:""}},[r("v-checkbox",{staticClass:"pl-2",attrs:{label:"Remember Me"},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1),r("v-flex",{staticClass:"d-flex text-xs-right pr-2",attrs:{xs6:"","align-center":""}},[r("span",{staticClass:"forgot"},[t._v("Forgot Password")])])],1)],1),r("v-divider"),r("v-card-actions",{staticClass:"d-block text-xs-center"},[r("v-spacer"),r("v-btn",{staticClass:"pr-5 pl-5 mt-3",staticStyle:{"border-radius":"20px"},attrs:{color:"cyan"},on:{click:function(e){t.dialog=!1}}},[t._v("\n            Log In\n          ")]),r("p",{staticClass:"or"},[t._v("or")]),r("router-link",{attrs:{to:"sign-up"}},[r("v-btn",{staticClass:"pr-5 pl-5 mb-3",staticStyle:{"border-radius":"20px"},attrs:{color:"grey"},on:{click:function(e){t.dialog=!1}}},[t._v("\n          CREATE NEW ACCOUNT\n          ")])],1)],1)],1)],1)],1)],1)],1)},u=[],d={data:function(){return{dialog:!1,checkbox:!1,email:"",password:""}},methods:{toHomeStyles:function(){document.querySelector("#usable-home").style.backgroundImage="url(/img/background.27769967.png)"},leaveHomeStyles:function(){document.querySelector("#usable-home").style.backgroundImage="none",document.querySelector("#usable-home").style.backgroundColor="#fff",document.querySelector(".navbar").style.backgroundImage="url(/img/background.27769967.png)",document.querySelector(".navbar").style.backgroundSize="cover"}}},f=d,p=(a("2c9b"),a("2877")),m=Object(p["a"])(f,i,u,!1,null,"31413990",null),v=m.exports,b={name:"App",components:{UsableNavbar:v}},y=b,h=(a("d821"),Object(p["a"])(y,c,l,!1,null,"fb5074ca",null)),g=h.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{staticClass:"text-xs-center"},[t.iconShow?r("img",{staticClass:"loading-icon",attrs:{src:a("d7ec"),alt:"Loading Icon"}}):t._e(),r("v-flex",{attrs:{xs12:""}},[r("h1",{staticClass:"grey--text darken-4 display-2 font-weight-light pb-3 pt-5"},[t._v("Create Tasks")]),r("p",{staticClass:"grey--text darken-4"},[t._v("Add custom tasks to have your Testers accomplish to get more data to help you better your sites navigation and usability. Press the (+) icon to add more than one task.\n        "),r("br"),r("strong",{staticClass:"red--text"},[t._v("A MAXIMUM OF 5 TASKS MAY BE USED")])]),r("hr",{staticClass:"mb-5"}),r("v-form",{staticClass:"text-xs-left mb-5",attrs:{name:"noLog",action:"/site/",method:"post"}},[r("p",{staticClass:"grey--text darken-4 text-xs-center"},[t._v("Give your test a name for easier tracking.")]),r("v-text-field",{staticClass:"task-name",attrs:{label:"Test Name",name:"testName",color:"cyan",light:"",box:"",required:""}}),r("hr"),r("ul",[r("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.tasks,function(e,a){return r("li",{key:e,staticClass:"list-item"},[r("h2",{staticClass:"cyan--text mt-3"},[t._v("Task "+t._s(a+1))]),r("i",{staticClass:"fas fa-minus-circle",on:{click:function(e){t.deleteTask(a)}}}),r("v-textarea",{attrs:{light:"",box:"",color:"cyan",name:"task"+a++,placeholder:"Enter your task here..."}})],1)}),0)],1),r("hr"),r("i",{staticClass:"mt-3 fas fa-plus-circle fa-2x green--text d-block text-xs-center",on:{click:function(e){t.addTask()}}}),r("v-alert",{staticClass:"mt-3 black--text",attrs:{value:t.alert,type:"warning",color:"yellow",transition:"scale-transition"}},[t._v("You may only have a maximum of\n          "),r("strong",[t._v("5")]),t._v(" tasks.\n        ")]),r("p",{staticClass:"text-xs-center grey--text darken-4 mt-5"},[t._v("Submit tasks then receive a new link that you will send to your testers.")]),r("v-btn",{staticClass:"d-block mt-3 ma-auto pl-5 pr-5",attrs:{round:"",color:"cyan"},on:{click:t.submitForm}},[t._v("SUBMIT TASKS")])],1)],1),r("div",{staticClass:"text-xs-center"},[r("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline grey",staticStyle:{display:"flex","align-items":"center","justify-content":"center"},attrs:{"primary-title":""}},[t._v("Your\n            "),r("span",[r("img",{staticClass:"ml-2 mr-2",attrs:{src:a("f9f2"),alt:""}})]),t._v("URL\n          ")]),r("v-card-text",{staticClass:"text-xs-center"},[t._v("Click the link below to copy it to your clipboard and then send it to your testers!")]),r("v-text-field",{staticClass:"ma-3",attrs:{value:"www.kennystephens.com",color:"cyan"},on:{click:t.copyURL}}),t.copied?r("p",{staticClass:"text-xs-center title pb-4"},[t._v("COPIED!")]):t._e(),r("v-divider")],1)],1)],1)],1)],1)},k=[],C={data:function(){return{tasks:[{taskNumber:1}],alert:!1,taskResults:[],iconShow:!1,dialog:!1,copied:!1}},methods:{addTask:function(){var t=this;if(this.tasks.length<5){var e=document.createElement("li");this.tasks.push(e)}else this.alert=!0,setTimeout(function(){t.alert=!1},3e3)},submitForm:function(){var t=this;this.iconShow=!0,this.copied=!1,document.querySelector("#usable-home").style.filter="brightness(50%)",setTimeout(function(){t.iconShow=!1,document.querySelector("#usable-home").style.filter="brightness(100%)",t.dialog=!0},3e3);var e=document.querySelectorAll("textarea");e.forEach(function(e){return t.taskResults.push(e.value)})},deleteTask:function(t){this.tasks.splice(t.target,1)},copyURL:function(){var t=this;document.querySelector("input").select(),document.execCommand("copy"),this.copied=!0,setTimeout(function(){t.dialog=!1},5e3)}}},w=C,S=(a("1aff"),Object(p["a"])(w,x,k,!1,null,"51ba269c",null)),_=S.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{id:"main-section",wrap:"","align-content-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",{staticClass:"text-sm-center display-1 font-weight-medium"},[t._v("A testing platform to enhance your\n      "),a("span",{staticStyle:{"text-decoration":"underline"}},[t._v("User's Experience")])])]),a("v-flex",{staticClass:"text-sm-center",attrs:{xs12:""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.urlInput,expression:"urlInput"}],staticClass:"mt-4 urlInputBox",attrs:{type:"text",placeholder:"Enter Site Link...",id:"webURL"},domProps:{value:t.urlInput},on:{input:function(e){e.target.composing||(t.urlInput=e.target.value)}}}),a("i",{staticClass:"fas fa-check fa-2x"}),a("transition",{attrs:{name:"fade"}},[a("router-link",{staticClass:"to-form-btn",attrs:{to:"/new-test"}},[a("v-btn",{staticClass:"d-block ma-auto mt-3 pl-5 pr-5 continueBtn",attrs:{round:"",color:"cyan",disabled:t.urlCheck},on:{click:t.leaveHomeStyles}},[t._v("CONTINUE\n          "),a("i",{staticClass:"ml-2 fas fa-chevron-right"})])],1)],1),a("p",{staticClass:"pt-5"},[t._v("New to\n      "),a("span",{staticClass:"font-italic font-weight-medium"},[t._v("usable")]),t._v("?\n      "),a("span",{staticClass:"learn",staticStyle:{"text-decoration":"underline"}},[t._v("Click Here")]),t._v(" to learn how to use the platform!\n    ")])],1)],1)},T=[],E={data:function(){return{urlInput:"",urlCheck:!0}},methods:{leaveHomeStyles:function(){document.querySelector("#usable-home").style.backgroundImage="none",document.querySelector("#usable-home").style.backgroundColor="#fff",document.querySelector(".navbar").style.backgroundImage="url(/img/background.27769967.png)",document.querySelector(".navbar").style.backgroundSize="cover"}},watch:{urlInput:function(){var t=document.querySelector(".urlInputBox"),e=this,a=e.urlInput.split(""),r=a[0]+a[1]+a[2]+a[3];"http"!=r&&(e.urlInput="http://"+e.urlInput),fetch(this.urlInput,{mode:"no-cors"}).then(function(a){setTimeout(function(){"opaque"===a.type&&(e.urlCheck=!1,document.querySelector(".continueBtn").style.visibility="visible",t.style.borderColor="green",document.querySelector(".fa-check").style.opacity="1",document.querySelector(".fa-check").style.right="40px",document.querySelector(".fa-chevron-right").style.position="relative",document.querySelector(".fa-chevron-right").style.right="-5px")},1500)}).catch(function(){e.urlCheck=!0,t.style.borderColor="red",document.querySelector(".continueBtn").style.visibility="hidden",document.querySelector(".fa-check").style.opacity="0",document.querySelector(".fa-check").style.right="0px",document.querySelector(".fa-chevron-right").style.right="0px"})}}},I=E,O=(a("f88b"),Object(p["a"])(I,q,T,!1,null,"e903bba6",null)),j=O.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"mt-5":"","pt-5":""}},[r("v-layout",[r("v-flex",[r("v-card",[r("v-card-title",{staticClass:"headline grey justify-center",attrs:{"primary-title":""}},[t._v("\n        Create an Account with "),r("span",[r("img",{staticClass:"ml-2",attrs:{src:a("f9f2"),alt:""}})])]),r("v-card-text",[r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{type:"text",required:"",label:"Email",color:"cyan"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),r("v-layout",[r("v-flex",[r("v-text-field",{attrs:{type:"text",required:"",label:"Password",color:"cyan"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),r("v-layout",[r("v-flex",[r("v-text-field",{attrs:{type:"text",required:"",label:"Confirm Password",color:"cyan"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1)],1),r("v-layout",{staticClass:"justify-center"},[r("v-btn",{staticClass:"pr-5 pl-5 mb-4",staticStyle:{"border-radius":"20px"},attrs:{color:"grey"},on:{click:function(e){t.dialog=!1}}},[t._v("\n        CREATE NEW ACCOUNT\n        ")])],1)],1)],1)],1)],1)},P=[],N={data:function(){return{email:"",password:"",confirmPassword:""}}},U=N,F=Object(p["a"])(U,A,P,!1,null,null,null),L=F.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-flex",[a("h1",{staticStyle:{color:"black"}},[t._v("CONTACT US PAGE HERE")])])],1)},R=[],B={},H=Object(p["a"])(B,M,R,!1,null,null,null),$=H.exports,G=[{path:"",component:j},{path:"/new-test",component:_},{path:"/sign-up",component:L},{path:"/contact-us",component:$}];r["default"].config.productionTip=!1,r["default"].use(n["a"]);var Y=new n["a"]({routes:G});new r["default"]({render:function(t){return t(g)},router:Y}).$mount("#app")},"6a50":function(t,e,a){},c44d:function(t,e,a){},d7ec:function(t,e,a){t.exports=a.p+"img/loading-gif.e4b6323e.gif"},d821:function(t,e,a){"use strict";var r=a("6a50"),n=a.n(r);n.a},e8ed:function(t,e,a){},f88b:function(t,e,a){"use strict";var r=a("c44d"),n=a.n(r);n.a},f9f2:function(t,e,a){t.exports=a.p+"img/usable_logo.f82721b1.svg"}});
//# sourceMappingURL=app.52b70a04.js.map