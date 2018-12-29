(function(t){function e(e){for(var o,s,r=e[0],c=e[1],u=e[2],p=0,d=[];p<r.length;p++)s=r[p],i[s]&&d.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/energy-station/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"033a":function(t,e,n){},"159e":function(t){t.exports=[{constant:!1,inputs:[{name:"_amount",type:"uint256"}],name:"fillEnergy",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_sellAmount",type:"uint256"}],name:"getVETReturn",outputs:[{name:"canAcquire",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"energyVirtualBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"currentSponsor",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"sponsor",type:"address"}],name:"isSponsor",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"user",type:"address"}],name:"userCredit",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"user",type:"address"}],name:"isUser",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"user",type:"address"}],name:"addUser",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"credit",type:"uint256"},{name:"recoveryRate",type:"uint256"}],name:"setCreditPlan",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"energyToken",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"conversionFee",outputs:[{name:"",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"fillVET",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"_amount",type:"uint256"}],name:"getFinalAmount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"creditPlan",outputs:[{name:"credit",type:"uint256"},{name:"recoveryRate",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_sellAmount",type:"uint256"}],name:"getEnergyReturn",outputs:[{name:"canAcquire",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"acceptOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_enabled",type:"bool"}],name:"changeConversionStatus",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"vetVirtualBalance",outputs:[{name:"",type:"uint104"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"another",type:"address"}],name:"unsponsorOthers",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdrawProfit",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"user",type:"address"}],name:"removeUser",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_minReturn",type:"uint256"}],name:"convertForEnergy",outputs:[{name:"",type:"uint256"}],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"conversionsEnabled",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"closeMarket",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"another",type:"address"}],name:"sponsorOthers",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_sellAmount",type:"uint256"},{name:"_minReturn",type:"uint256"}],name:"convertForVET",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"newOwner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"sponsor",type:"address"}],name:"selectSponsor",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_conversionFee",type:"uint32"}],name:"setConversionFee",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"tradeType",type:"int8"},{indexed:!0,name:"_trader",type:"address"},{indexed:!1,name:"_sellAmount",type:"uint256"},{indexed:!1,name:"_return",type:"uint256"},{indexed:!1,name:"_conversionFee",type:"uint256"}],name:"Conversion",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_prevFee",type:"uint32"},{indexed:!1,name:"_newFee",type:"uint32"}],name:"ConversionFeeUpdate",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_prevOwner",type:"address"},{indexed:!0,name:"_newOwner",type:"address"}],name:"OwnerUpdate",type:"event"}]},3415:function(t){t.exports=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"move",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalBurned",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]},"8f59":function(t,e,n){},c974:function(t,e,n){"use strict";var o=n("e3bd"),i=n.n(o);i.a},cccb:function(t,e,n){"use strict";var o=n("8f59"),i=n.n(o);i.a},cd49:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),i=n("9f7b"),a=(n("f9e3"),n("2dd8"),n("ecee")),s=n("c074"),r=n("ad3d"),c=n("9483");Object(c["a"])("/energy-station/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{staticClass:"navbar navbar-dark bg-primary"},[n("b-navbar-brand",{attrs:{to:"home"}},[t._v("EnergyStation")])],1),n("router-view")],1)},l=[],p=n("9ab4"),d=n("60a3"),m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p["d"](e,t),e=p["c"]([d["a"]],e),e}(d["c"]),f=m,y=f,b=n("2877"),h=Object(b["a"])(y,u,l,!1,null,null,null);h.options.__file="App.vue";var v,g,w,T=h.exports,V=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-container",{staticClass:"pt-2"},[n("b-row",{staticClass:"mb-2"},[n("b-alert",{staticClass:"w-75 mx-auto",attrs:{variant:t.sysAlertType,show:t.showSystemMsg,dismissible:"",fade:""}},[t._v("\n              "+t._s(t.systemMsg)+"\n          ")])],1)],1),n("b-container",{staticClass:"pt-4"},[n("div",{staticClass:"vld-parent"},[n("loading",{attrs:{active:!t.ready,"is-full-page":!1,color:"#007bff",opacity:.6}}),n("basic-info",{on:{"update-status":t.onUpdateInitStatus,error:t.onErrored}}),n("conversion-records",{on:{"update-status":t.onUpdateInitStatus,error:t.onErrored}}),n("convert-cards",{on:{convert:t.onConvert}}),n("convert-modal",{attrs:{"conversion-status":t.conversionStatus,"conversion-type":t.conversionType,"from-token-value":t.fromTokenValue,txid:t.txid},on:{"update:conversionStatus":function(e){t.conversionStatus=e},"update:txid":function(e){t.txid=e}}})],1)])],1)},S=[],E=n("9062"),C=n.n(E),O=(n("e40d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{staticClass:"mb-3"},[n("b-card",{staticClass:"w-75 mx-auto",attrs:{"bg-variant":"light",title:"Latest conversions"}},[n("b-table",{attrs:{striped:"",boarderd:"",outlined:"",small:"",responsive:"",items:t.conversions,fields:t.tableFields}})],1)],1)}),_=[];(function(t){t[t["ToVET"]=0]="ToVET",t[t["ToVTHO"]=1]="ToVTHO"})(v||(v={})),function(t){t[t["Initial"]=0]="Initial",t[t["Start"]=1]="Start",t[t["Initiated"]=2]="Initiated",t[t["Processing"]=3]="Processing",t[t["Confirming"]=4]="Confirming",t[t["Success"]=5]="Success",t[t["Error"]=6]="Error"}(g||(g={})),function(t){t[t["Initial"]=0]="Initial",t[t["Basic"]=1]="Basic",t[t["List"]=2]="List",t[t["Finish"]=3]="Finish"}(w||(w={})),Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t};var k=n("159e"),M=n("3415"),H=n("901e"),B="0xD015D91B42BEd5FeaF242082b11B83B431abBf4f",N="0x0000000000000000000000000000456E65726779",A=function(t){if(window.connex){var e=window.connex.thor.account(B);return e.method(j(t,k))}return null},I=function(t){if(window.connex){var e=window.connex.thor.account(B);return e.event(j(t,k))}return null},R=function(t){if(window.connex){var e=window.connex.thor.account(N);return e.method(j(t,M))}return null},j=function(t,e){var n=e.find(function(e){return e.name===t});if(!n)throw"No ABI found";return n},P=function(t,e){return t.decoded[e]},$=function(t){return new H["BigNumber"](t).dividedBy(1e18).dp(4).toString(10)},F=function(t){return new H["BigNumber"](t).dividedBy(1e18).dp(4).toFormat()},L=function(t){return/^0x[0-9a-f]{64}$/i.test(t)},z=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tableFields={conversion:{label:"Conversion"},amount:{label:"Amount"},converted:{label:"Conveted"},rate:{label:"Rate(VTHO/VET)"},conversionTime:{label:"Time"},fee:{label:"Fee"}},e.conversions=[],e.getLastConversion=function(){return p["b"](this,void 0,void 0,function(){var t,e,n,o,i,a;return p["e"](this,function(s){switch(s.label){case 0:return[4,I("Conversion").filter([]).order("desc").apply(0,5)];case 1:for(t=s.sent(),e=[],n=0,o=t;n<o.length;n++)i=o[n],a={id:i.meta.txID+i.meta.blockID},"1"==i.decoded["tradeType"]?(a.conversion="VTHO→VET",a.rate=new H["BigNumber"](P(i,"_sellAmount")).dividedBy(P(i,"_return")).dp(4).toString(10),a.fee=$(P(i,"_conversionFee"))+"VET"):(a.conversion="VET→VTHO",a.rate=new H["BigNumber"](P(i,"_return")).dividedBy(P(i,"_sellAmount")).dp(4).toString(10),a.fee=$(P(i,"_conversionFee"))+"VTHO"),a.amount=$(P(i,"_sellAmount")),a.converted=$(P(i,"_return")),a.conversionTime=new Date(1e3*i.meta.blockTimestamp).format("yyyy-MM-dd hh:mm:ss"),e.push(a);return[2,e.reverse()]}})})},e}return p["d"](e,t),e.prototype.created=function(){var t=this;window.connex&&(this.getLastConversion().then(function(e){t.conversions=e,t.$emit("update-status",w.List)}).catch(function(e){console.log(e.message),t.$emit("error")}),function(){return p["b"](t,void 0,void 0,function(){var t,e,n;return p["e"](this,function(o){switch(o.label){case 0:t=window.connex,o.label=1;case 1:return o.trys.push([1,4,,5]),[4,t.thor.ticker().next()];case 2:return o.sent(),e=this,[4,this.getLastConversion()];case 3:return e.conversions=o.sent(),[3,5];case 4:return n=o.sent(),console.log(n),[3,5];case 5:return[3,1];case 6:return[2]}})})}().catch(function(t){console.log(t)}))},e=p["c"]([d["a"]],e),e}(d["c"]),D=z,q=D,W=(n("d109"),Object(b["a"])(q,O,_,!1,null,null,null));W.options.__file="conversion-records.vue";var U=W.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{staticClass:"mb-3"},[n("b-card",{staticClass:"w-75 mx-auto",attrs:{"bg-variant":"light",title:"EnergyStaion Info"}},[n("b-table",{staticClass:"w-100 info",attrs:{stacked:"",small:"",items:[t.basicInfo]}})],1)],1)},G=[],J=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.basicInfo={EnergyStationAddress:B,"VET Balance":"-","VTHO Balance":"-","Conversion Rate":"-",Owner:"-"},e}return p["d"](e,t),e.prototype.created=function(){var t=this;window.connex&&this.getInitialInfo().then(function(){t.$emit("update-status",w.Basic)}).catch(function(e){console.log(e.message),t.$emit("error")})},e.prototype.getInitialInfo=function(){return p["b"](this,void 0,void 0,function(){var t;return p["e"](this,function(e){switch(e.label){case 0:return window.connex,[4,A("vetVirtualBalance").call([],0)];case 1:return t=e.sent(),this.basicInfo["VET Balance"]=$(P(t,"0")),[4,A("energyVirtualBalance").call([],0)];case 2:return t=e.sent(),this.basicInfo["VTHO Balance"]=$(P(t,"0")),[4,A("conversionFee").call([],0)];case 3:return t=e.sent(),this.basicInfo["Conversion Rate"]=P(t,"0")/1e4+"%",[4,A("owner").call([],0)];case 4:return t=e.sent(),this.basicInfo["Owner"]=P(t,"0"),[2]}})})},e=p["c"]([d["a"]],e),e}(d["c"]),X=J,Y=X,Q=(n("d24b"),Object(b["a"])(Y,K,G,!1,null,null,null));Q.options.__file="basic-info.vue";var Z=Q.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",{staticClass:"mb-3"},[n("b-card",{staticClass:"w-75 mx-auto",attrs:{"bg-variant":"light","border-variant":"primary"}},[n("b-form-group",{staticClass:"mb-0",attrs:{horizontal:"",breakpoint:"lg",label:"VET ⇒ VTHO","label-size":"lg","label-class":"font-weight-bold pt-0"}},[n("b-form-group",{attrs:{horizontal:""}},[n("b-input-group",[n("b-form-input",{attrs:{type:"number",formatter:t.formatUnsigedInt},on:{input:t.calcVTHOReturn},model:{value:t.VET2VTHO,callback:function(e){t.VET2VTHO=e},expression:"VET2VTHO"}})],1)],1),n("b-form-group",{attrs:{horizontal:""}},[n("b-input-group",{attrs:{prepend:"est. VTHO"}},[n("b-form-input",{attrs:{readonly:""},model:{value:t.convertedVTHO,callback:function(e){t.convertedVTHO=e},expression:"convertedVTHO"}}),n("b-input-group-append",[n("b-btn",{attrs:{text:"Button",variant:"primary",disabled:0==t.convertedVTHO},on:{click:t.proceedForEnergy}},[t._v("Convert")])],1)],1)],1)],1)],1)],1),n("b-row",{staticClass:"mb-3"},[n("b-card",{staticClass:"w-75 mx-auto",attrs:{"bg-variant":"light","border-variant":"primary"}},[n("b-form-group",{staticClass:"mb-0",attrs:{horizontal:"",breakpoint:"lg",label:"VTHO ⇒ VET","label-size":"lg","label-class":"font-weight-bold pt-0"}},[n("b-form-group",{attrs:{horizontal:""}},[n("b-input-group",[n("b-form-input",{attrs:{type:"number",formatter:t.formatUnsigedInt},on:{input:t.calcVETReturn},model:{value:t.VTHO2VET,callback:function(e){t.VTHO2VET=e},expression:"VTHO2VET"}})],1)],1),n("b-form-group",{attrs:{horizontal:""}},[n("b-input-group",{attrs:{prepend:"est. VET"}},[n("b-form-input",{attrs:{readonly:""},model:{value:t.convertedVET,callback:function(e){t.convertedVET=e},expression:"convertedVET"}}),n("b-input-group-append",[n("b-btn",{attrs:{text:"Button",variant:"primary",disabled:0==t.convertedVET},on:{click:t.proceedForVET}},[t._v("Convert")])],1)],1)],1)],1)],1)],1)],1)},et=[],nt=n("f7fe"),ot=n.n(nt),it=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.VET2VTHO="0",e.VTHO2VET="0",e.convertedVTHO="0",e.convertedVET="0",e.calcedVET=new H["BigNumber"](0),e.calcedVTHO=new H["BigNumber"](0),e.calcVTHOReturn=ot()(e.getVTHOReturn,200),e.calcVETReturn=ot()(e.getVETReturn,200),e}return p["d"](e,t),e.prototype.getVTHOReturn=function(){var t=this;this.VET2VTHO&&!isNaN(parseInt(this.VET2VTHO))&&0!==parseInt(this.VET2VTHO)?A("getEnergyReturn").call(new H["BigNumber"](this.VET2VTHO).multipliedBy(1e18).dp(0).toString(10)).then(function(e){t.calcedVTHO=new H["BigNumber"](P(e,"canAcquire")),t.convertedVTHO=$(t.calcedVTHO)}):this.convertedVTHO="0"},e.prototype.getVETReturn=function(){var t=this;this.VTHO2VET&&!isNaN(parseInt(this.VTHO2VET))&&0!==parseInt(this.VTHO2VET)?A("getVETReturn").call(new H["BigNumber"](this.VTHO2VET).multipliedBy(1e18).dp(0).toString(10)).then(function(e){t.calcedVET=new H["BigNumber"](P(e,"canAcquire")),t.convertedVET=$(t.calcedVET)}):this.convertedVET="0"},e.prototype.formatUnsigedInt=function(t){return!isNaN(parseInt(t))&&parseInt(t)>=0?parseInt(t):"0"},e.prototype.proceedForEnergy=function(){this.$emit("convert",{type:v.ToVTHO,value:new H["BigNumber"](this.VET2VTHO).multipliedBy(1e18).dp(0).toString(10)})},e.prototype.proceedForVET=function(){this.$emit("convert",{type:v.ToVET,value:new H["BigNumber"](this.VTHO2VET).multipliedBy(1e18).dp(0).toString(10)})},e=p["c"]([d["a"]],e),e}(d["c"]),at=it,st=at,rt=(n("ea38"),Object(b["a"])(st,tt,et,!1,null,null,null));rt.options.__file="convert-cards.vue";var ct=rt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:"modal",attrs:{title:"Convert Tokens","header-bg-variant":"primary","header-text-variant":"light","no-close-on-backdrop":"","no-close-on-esc":"",centered:""},on:{hidden:t.onHidden}},[n("div",[n("div",{staticClass:"vld-parent"},[n("loading",{attrs:{active:t.showLoadingSpinner,"is-full-page":!1,color:"#007bff",opacity:.6}}),n("b-container",{directives:[{name:"show",rawName:"v-show",value:t.showConvertSettings,expression:"showConvertSettings"}],staticClass:"mt-3",attrs:{fluid:""}},[n("b-row",{staticClass:"text-center",attrs:{"align-v":"center"}},[n("b-col",[n("p",[n("span",{staticStyle:{"font-size":"1.5rem"}},[t._v(t._s(t.fromWeiToDisplayValueWithThousandth(t.fromTokenValue)))]),n("span",{staticStyle:{"font-size":"0.75rem"}},[t._v("  "+t._s(t.fromTokenType))])])]),n("b-col",[n("p",{staticStyle:{"font-size":"3rem"}},[t._v("⇒")])]),n("b-col",[n("p",[n("span",{staticStyle:{"font-size":"1.5rem"}},[t._v(t._s(t.fromWeiToDisplayValueWithThousandth(t.toTokenValue)))]),n("span",{staticStyle:{"font-size":"0.75rem"}},[t._v("  "+t._s(t.toTokenType))])])])],1),n("b-row",[n("b-col",[n("p",{staticClass:"d-flex justify-content-end",staticStyle:{"font-size":"0.75rem"}},[n("span",{staticClass:"text-muted"},[t._v("Rate: ")]),n("span",{},[t._v("1 "+t._s(t.toTokenType)+"="+t._s(t.convertRate)+" "+t._s(t.fromTokenType))])])])],1),n("b-row",[n("b-card",{staticClass:"w-100"},[n("b-container",{attrs:{fluid:""}},[n("b-row",{attrs:{"align-h":"between"},on:{click:function(e){t.showAdvanced=!t.showAdvanced}}},[n("b-col",{staticClass:"d-flex justify-content-start text-muted"},[t._v("ADVANCED SEETINGS")]),n("b-col",{staticClass:"d-flex justify-content-end text-muted"},[n("fa-i",{attrs:{icon:t.showAdvanced?"angle-double-up":"angle-double-down",size:"lg"}})],1)],1),n("b-row",[n("b-col",[n("b-collapse",{attrs:{id:"advanced"},model:{value:t.showAdvanced,callback:function(e){t.showAdvanced=e},expression:"showAdvanced"}},[n("b-form-group",{staticClass:"mt-3",attrs:{label:"PRICE LIMIT","label-size":"sm","label-class":"text-muted"}},[n("b-input-group",{attrs:{size:"sm",append:t.fromTokenType}},[n("b-form-input",{attrs:{readonly:""},model:{value:t.priceLimit,callback:function(e){t.priceLimit=e},expression:"priceLimit"}})],1)],1),n("b-form-group",{staticClass:"mt-3",attrs:{label:"PRICE CHANGE","label-size":"sm","label-class":"text-muted"}},[n("b-input-group",{attrs:{size:"sm",append:"%"}},[n("b-form-input",{attrs:{type:"number",formatter:t.formatPercentage},on:{input:t.calcPriceLimit},model:{value:t.priceLoss,callback:function(e){t.priceLoss=e},expression:"priceLoss"}})],1)],1),n("b-form-group",{staticClass:"mt-3",attrs:{"label-size":"sm","label-class":"text-muted"}},[n("b-form-checkbox",{model:{value:t.checkConfirmation,callback:function(e){t.checkConfirmation=e},expression:"checkConfirmation"}},[n("span",{staticClass:"text-muted"},[t._v("WAIT FOR CONFIRMATION")])])],1),n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:t.showNoApproveOption,expression:"showNoApproveOption"}],attrs:{"label-class":"text-muted",label:"NO VTHO APPROVE CLAUSE"}},[n("b-form-checkbox",{model:{value:t.noApprove,callback:function(e){t.noApprove=e},expression:"noApprove"}},[n("span",{staticClass:"info-icon"},[n("fa-i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticStyle:{color:"#6c757d"},attrs:{icon:"info-circle",size:"xs",title:"Enerngy Station will not add an approve cluase if this is checked"}})],1),n("span",{staticClass:"text-muted"},[t._v("I have appoved enough amount before this.")])])],1)],1)],1)],1)],1)],1)],1)],1),n("transition",{attrs:{name:"move-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMessage,expression:"showMessage"}],key:"success-info"},[n("b-container",{staticClass:"d-flex flex-column justify-content-center",staticStyle:{"min-height":"210px"},attrs:{fluid:""}},[n("b-row",[n("b-col",{staticClass:"d-flex justify-content-center"},[n("fa-i",{style:{color:t.showSuccess?"#28a745":"#dc3545"},attrs:{icon:t.showSuccess?"check-circle":"times-circle",size:"6x"}})],1)],1),n("b-row",{staticClass:"mt-3"},[n("b-col",{staticClass:"d-flex justify-content-center"},[n("span",{staticClass:"text-center",class:{"text-success":t.showSuccess,"text-danger":t.showError},staticStyle:{"word-wrap":"break-word","word-break":"break-all",overflow:"hidden"}},[t._v(t._s(t.message))])])],1)],1)],1)]),n("transition",{attrs:{name:"move-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showConfirming,expression:"showConfirming"}],key:"show-confirm"},[n("b-container",{staticClass:"d-flex flex-column justify-content-end",staticStyle:{"min-height":"210px"},attrs:{fluid:""}},[n("b-row",{staticClass:"mb-3"},[n("b-col",{staticClass:"d-flex justify-content-center"},[n("span",[t._v(t._s(t.confirmCount)+"/12  "),n("b-badge",{staticClass:"status-badge",attrs:{variant:t.confirmCount<=0?"secondary":t.txReverted?"danger":"success"}},[t._v(t._s(t.confirmCount<=0?"NOT PACKED":t.txReverted?"REVERTED":"SUCCESS"))])],1)])],1)],1)],1)])],1)]),n("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[n("b-btn",{attrs:{block:"",variant:"primary",size:"lg",disabled:t.okDisabled},on:{click:t.actionOK}},[n("fa-i",{directives:[{name:"show",rawName:"v-show",value:t.converting,expression:"converting"}],attrs:{icon:"circle-notch",spin:""}}),t._v(t._s(t.converting?"  Processing":"OK"))],1)],1)])},lt=[],pt=1,dt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.toTokenValue="0",e.showAdvanced=!1,e.priceLimit="0",e.priceLoss=2,e.noApprove=!1,e.showNoApproveOption=!1,e.checkConfirmation=!1,e.message="",e.stopReceiptWating=!0,e.confirmCount=0,e.txReverted=!1,e.calcPriceLimit=ot()(e.getPriceLimit,200),e.fromWeiToDisplayValue=$,e.fromWeiToDisplayValueWithThousandth=F,e}return p["d"](e,t),Object.defineProperty(e.prototype,"fromTokenType",{get:function(){return this.conversionType===v.ToVET?"VTHO":"VET"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"toTokenType",{get:function(){return this.conversionType===v.ToVTHO?"VTHO":"VET"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"okDisabled",{get:function(){switch(this.conversionStatus){case g.Start:case g.Processing:return!0;case g.Confirming:return!(this.confirmCount>3);default:return!1}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"converting",{get:function(){return this.conversionStatus===g.Processing},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"convertRate",{get:function(){return new H["BigNumber"](this.fromTokenValue).dividedBy(this.toTokenValue).dp(6).toString(10)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"showConvertSettings",{get:function(){switch(this.conversionStatus){case g.Success:case g.Error:case g.Confirming:return!1;default:return!0}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"showMessage",{get:function(){return this.showSuccess||this.showError},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"showSuccess",{get:function(){return this.conversionStatus===g.Success},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"showError",{get:function(){return this.conversionStatus===g.Error},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"showConfirming",{get:function(){return this.conversionStatus===g.Confirming},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"showLoadingSpinner",{get:function(){return this.conversionStatus===g.Start||this.showConfirming},enumerable:!0,configurable:!0}),e.prototype.getPriceLimit=function(){this.priceLimit=new H["BigNumber"](this.fromTokenValue).dividedBy(this.toTokenValue).multipliedBy(1+this.priceLoss/100).dp(6).toString(10)},e.prototype.onHidden=function(){this.$emit("update:conversionStatus",g.Initial),!0!==this.stopReceiptWating&&(this.stopReceiptWating=!0),this.$emit("exit")},e.prototype.init=function(){var t=this;(function(){return p["b"](t,void 0,void 0,function(){var t;return p["e"](this,function(e){switch(e.label){case 0:return this.toTokenValue="0",this.showAdvanced=!1,this.priceLimit="0",this.priceLoss=2,this.noApprove=!1,this.showNoApproveOption=!1,this.checkConfirmation=!1,this.message="",this.stopReceiptWating=!0,this.confirmCount=0,this.txReverted=!1,this.$emit("update:txid",""),window.connex,this.conversionType!==v.ToVTHO?[3,2]:[4,A("getEnergyReturn").call(this.fromTokenValue)];case 1:return t=e.sent(),this.toTokenValue=new H["BigNumber"](P(t,"canAcquire")).toString(10),[3,4];case 2:return[4,A("getVETReturn").call(this.fromTokenValue)];case 3:t=e.sent(),this.toTokenValue=new H["BigNumber"](P(t,"canAcquire")).toString(10),e.label=4;case 4:return this.getPriceLimit(),[2]}})})})().then(function(){t.$emit("update:conversionStatus",g.Initiated)}).catch(function(t){console.log(t)})},e.prototype.formatPercentage=function(t){return!isNaN(parseInt(t))&&parseInt(t)>=pt?parseInt(t)>100?100:parseInt(t):pt},e.prototype.actionOK=function(){var t=this;this.conversionStatus===g.Initiated?(this.$emit("update:conversionStatus",g.Processing),function(){return p["b"](t,void 0,void 0,function(){var t,e,n,o,i,a,s,r,c,u;return p["e"](this,function(l){switch(l.label){case 0:return t=window.connex,this.conversionType!==v.ToVTHO?[3,2]:(n=new H["BigNumber"](this.toTokenValue),s=n.dividedBy(this.priceLoss/100+1),o=A("convertForEnergy").value("0x"+new H["BigNumber"](this.fromTokenValue).dp(0).toString(16)).asClause(s.dp(0).toString(10)),[4,t.vendor.sign("tx").comment("Converting "+$(this.fromTokenValue)+" VET to VTHO").link(location.origin+"/energy-station/tx-callback").request([p["a"]({},o,{comment:"Calling convert to VTHO function"})])]);case 1:return e=l.sent(),[3,4];case 2:return i=new H["BigNumber"](this.fromTokenValue),a=new H["BigNumber"](this.toTokenValue),s=a.dividedBy(this.priceLoss/100+1),r=A("convertForVET").asClause(i.dp(0).toString(10),s.dp(0).toString(10)),c=R("approve").asClause(B,i.toString(10)),u=[],this.noApprove||u.push(p["a"]({},c,{comment:"Approve EnergyStation to spent "+$(this.fromTokenValue)+" VTHO"})),u.push(p["a"]({},r,{comment:"Calling convert to VET function"})),[4,t.vendor.sign("tx").comment("Converting "+$(this.fromTokenValue)+" VTHO to VET").link(location.origin+"/energy-station/tx-callback").request(u)];case 3:e=l.sent(),l.label=4;case 4:return this.$emit("update:txid",e.txid),this.checkConfirmation?this.checkReceipt():this.actionShowSuccess("Trasaction addded to the queue!"),[2]}})})}().catch(function(e){console.log(e),t.actionShowError("Sign transaction failed!")})):this.conversionStatus===g.Success||this.conversionStatus===g.Error?this.$refs.modal.hide():this.conversionStatus===g.Confirming&&(!0!==this.stopReceiptWating&&(this.stopReceiptWating=!0),this.txReverted?this.actionShowError("Transaction reverted!"):this.actionShowSuccess("Successfully converted!"))},e.prototype.actionShowSuccess=function(t){this.$emit("update:conversionStatus",g.Success),this.message=t},e.prototype.actionShowError=function(t){this.$emit("update:conversionStatus",g.Error),this.message=t},e.prototype.checkApproval=function(){return p["b"](this,void 0,void 0,function(){var t,e,n;return p["e"](this,function(o){switch(o.label){case 0:return this.conversionType!==v.ToVET?[2]:(t="0x7567d83b7b8d80addcb281a71d54fc7b3364ffed",[4,R("allowance").call(t,B)]);case 1:return e=o.sent(),n=P(e,"remaining"),new H["BigNumber"](n).isGreaterThanOrEqualTo(this.fromTokenValue)?this.showNoApproveOption=!0:this.showNoApproveOption=!1,[2]}})})},e.prototype.checkReceipt=function(){var t=this;this.stopReceiptWating=!1,this.$emit("update:conversionStatus",g.Confirming);var e=window.connex,n=function(){return p["b"](t,void 0,void 0,function(){var t,n,o;return p["e"](this,function(i){switch(i.label){case 0:return this.txid?(t=e.thor.transaction(this.txid),[4,t.getReceipt()]):[2];case 1:return n=i.sent(),n&&(this.txReverted=n.reverted,o=e.thor.status.head.number,this.confirmCount=o-n.meta.blockNumber,this.confirmCount>12&&this.actionOK()),[2]}})})};(function(){return p["b"](t,void 0,void 0,function(){return p["e"](this,function(t){switch(t.label){case 0:return[4,n()];case 1:t.sent(),t.label=2;case 2:return this.stopReceiptWating?[3,6]:[4,e.thor.ticker().next()];case 3:return t.sent(),[4,n()];case 4:t.sent(),t.label=5;case 5:return[3,2];case 6:return[2]}})})})().catch(function(t){console.log(t)})},e.prototype.onConvensionStatusChanged=function(t,e){t===g.Start&&e===g.Initial&&(this.$refs.modal.show(),this.init()),t===g.Confirming&&e===g.Initial&&(this.$refs.modal.show(),this.message="",this.confirmCount=0,this.txReverted=!1,this.checkConfirmation=!0,this.checkReceipt())},p["c"]([Object(d["b"])(Number)],e.prototype,"conversionType",void 0),p["c"]([Object(d["b"])(Number)],e.prototype,"conversionStatus",void 0),p["c"]([Object(d["b"])(String)],e.prototype,"fromTokenValue",void 0),p["c"]([Object(d["b"])(String)],e.prototype,"txid",void 0),p["c"]([Object(d["d"])("conversionStatus")],e.prototype,"onConvensionStatusChanged",null),e=p["c"]([Object(d["a"])({components:{Loading:C.a}})],e),e}(d["c"]),mt=dt,ft=mt,yt=(n("c974"),Object(b["a"])(ft,ut,lt,!1,null,null,null));yt.options.__file="convert-modal.vue";var bt=yt.exports,ht=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.systemMsg="",e.showSystemMsg=!1,e.sysAlertType="primary",e.initStatus=w.Initial,e.initErrored=!1,e.conversionStatus=g.Initial,e.conversionType=v.ToVET,e.fromTokenValue="0",e.txid="",e}return p["d"](e,t),e.prototype.created=function(){window.connex||(this.showSysMessage("No connex environment detacted, please download sync!","danger"),this.initErrored=!0)},Object.defineProperty(e.prototype,"ready",{get:function(){return!(this.initStatus^w.Finish)&&!this.initErrored},enumerable:!0,configurable:!0}),e.prototype.onUpdateInitStatus=function(t){this.initStatus^=t},e.prototype.onErrored=function(){this.initErrored||(this.showSysMessage("Init Failed!","danger"),this.initErrored=!0)},e.prototype.onConvert=function(t){this.conversionType=t.type,this.fromTokenValue=t.value,this.conversionStatus=g.Start},e.prototype.showSysMessage=function(t,e){void 0===e&&(e="danger"),this.sysAlertType=e,this.systemMsg=t,this.showSystemMsg=!0},e=p["c"]([Object(d["a"])({components:{Loading:C.a,ConversionRecords:U,BasicInfo:Z,ConvertCards:ct,ConvertModal:bt}})],e),e}(d["c"]),vt=ht,gt=vt,wt=(n("cccb"),Object(b["a"])(gt,x,S,!1,null,null,null));wt.options.__file="Home.vue";var Tt=wt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"pt-2"},[n("b-row",{staticClass:"mb-2"},[n("b-alert",{staticClass:"w-75 mx-auto",attrs:{variant:"danger",show:t.showSystemMsg,dismissible:"",fade:""}},[t._v("\n              "+t._s(t.systemMsg)+"\n          ")])],1),n("convert-modal",{attrs:{"conversion-status":t.conversionStatus,txid:t.txid},on:{"update:conversionStatus":function(e){t.conversionStatus=e},"update:txid":function(e){t.txid=e},exit:t.onExit}})],1)},xt=[],St=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.systemMsg="",e.showSystemMsg=!1,e.txid="",e.conversionStatus=g.Initial,e}return p["d"](e,t),e.prototype.created=function(){this.$route.query.txid?(Array.isArray(this.$route.query.txid)?this.txid=this.$route.query.txid[0]:this.txid=this.$route.query.txid,L(this.txid)||this.$router.push("/")):this.$router.push("/")},e.prototype.mounted=function(){window.connex?this.conversionStatus=g.Confirming:(this.systemMsg="No connex environment detacted, please download sync!",this.showSystemMsg=!0)},e.prototype.onExit=function(){this.$router.push("/")},e=p["c"]([Object(d["a"])({components:{ConvertModal:bt}})],e),e}(d["c"]),Et=St,Ct=Et,Ot=Object(b["a"])(Ct,Vt,xt,!1,null,null,null);Ot.options.__file="TXCallBack.vue";var _t=Ot.exports;o["default"].use(V["a"]);var kt=new V["a"]({base:"/energy-station/",mode:"history",routes:[{path:"/",name:"Home",component:Tt},{path:"/tx-callback",name:"TXCallBack",component:_t},{path:"*",name:"Fallback",redirect:"/"}]}),Mt=kt;a["c"].add(s["b"],s["a"],s["d"],s["c"],s["e"],s["f"]),o["default"].component("fa-i",r["a"]),o["default"].use(i["a"]),o["default"].config.productionTip=!1,new o["default"]({router:Mt,render:function(t){return t(T)}}).$mount("#app")},d109:function(t,e,n){"use strict";var o=n("f04a"),i=n.n(o);i.a},d24b:function(t,e,n){"use strict";var o=n("d6f6"),i=n.n(o);i.a},d6f6:function(t,e,n){},e3bd:function(t,e,n){},ea38:function(t,e,n){"use strict";var o=n("033a"),i=n.n(o);i.a},f04a:function(t,e,n){}});
//# sourceMappingURL=app.95f938cb.js.map