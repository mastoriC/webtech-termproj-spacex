(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67453358"],{"0121":function(e,t,s){},"1a23":function(e,t,s){"use strict";s("0121")},a902f:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"text-uppercase font-weight-bold mb-4"},e._l(e.info,(function(t,a){return s("span",{key:a},[s("span",{staticClass:"pointer",class:e.selected!==a?"text-grey":"",on:{click:function(t){return e.changeItem(a)}}},[e._v(e._s(t.title))]),2!==a?s("span",{staticClass:"mx-3 text-grey font-weight-lighter"},[e._v("|")]):e._e()])})),0),s("div",{staticClass:"text mb-4"},[e._v(" "+e._s(e.info[e.selected].desc)+" ")]),e._l(e.info[e.selected].spec,(function(t,a){return s("div",{key:a,staticClass:"row mx-auto bottom-line py-3"},[s("div",{staticClass:"col p-0 font-weight-bold text-uppercase"},[e._v(e._s(a))]),s("div",{staticClass:"col text-right p-0 font-weight-light"},[Array.isArray(t)?s("div",[e._v(" "+e._s(t[0])+" "),s("span",{staticClass:"text-grey"},[e._v("/ "+e._s(t[1]))])]):s("div",[e._v(e._s(t))])])])}))],2)},n=[],i={data(){return{selected:0,info:[{title:"Overview",desc:"The Dragon capsule, also known as the pressurized section, allows for the transport of people as well as environmentally sensitive cargo. Dragon is equipped with Draco thrusters that allow Dragon to maneuver while on orbit and 8 SuperDracos that power the spacecraft’s launch escape system.",spec:{Volume:["9.3 m³","328 ft³"]}},{title:"Launch abort",desc:"The launch abort system is a crew safety system built into the Dragon spacecraft, used to quickly separate Dragon from Falcon 9 in the unlikely event of an emergency. In the unlikely event of an emergency, Dragon’s launch abort system can quickly separate the spacecraft from Falcon 9. Using its SuperDraco engines, Dragon will propel itself away from the launch vehicle.",spec:{"Number Of Engines":"8","Escape Thrust":["71 kN","16,000 lbf"]}},{title:"Attitude Control",desc:"The Dragon spacecraft is equipped with 16 Draco thrusters used to orient the spacecraft during the mission, including apogee/perigee maneuvers, orbit adjustment and attitude control. Each Draco thruster is capable of generating 90 pounds of force in the vacuum of space.",spec:{"Number Of Engines":"16","Thrust In Vacuum":["400N","90 lbf"]}}]}},methods:{changeItem(e){this.selected!==e&&(this.selected=e,this.$emit("selectSec",e+1))}}},r=i,c=(s("1a23"),s("f4a0")),o=Object(c["a"])(r,a,n,!1,null,"310a389b",null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-67453358.d28373a0.js.map