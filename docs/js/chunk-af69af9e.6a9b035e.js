(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af69af9e"],{"16d9":function(e){e.exports=JSON.parse('{"desktop":[["https://www.spacex.com/static/images/falcon-heavy/desktop/WebsiteFHFairings_Render_Desktop.webp"],["https://www.spacex.com/static/images/falcon-heavy/desktop/WebsiteFHS1_Render_Desktop.webp","https://www.spacex.com/static/images/falcon-heavy/desktop/WebsiteFHEngines_Render_Desktop.webp","https://www.spacex.com/static/images/falcon-heavy/desktop/WebsiteFHS1Legs_Render_Desktop.webp"],["https://www.spacex.com/static/images/falcon-heavy/desktop/WebsiteFHInterstage_Render_Desktop.webp"],["https://www.spacex.com/static/images/falcon-heavy/desktop/WebsiteFHS2_Render_Desktop.webp"],["https://www.spacex.com/static/images/falcon-heavy/desktop/WebsiteFHSoloFairings_Render_Desktop.webp"]],"mobile":[["https://www.spacex.com/static/images/falcon-heavy/mobile/WebsiteFHFairings_Render_Mobile.webp"],["https://www.spacex.com/static/images/falcon-heavy/mobile/WebsiteFHS1_Render_Mobile.webp","https://www.spacex.com/static/images/falcon-heavy/mobile/WebsiteFHEngines_Render_Mobile.webp","https://www.spacex.com/static/images/falcon-heavy/mobile/WebsiteFHS1Legs_Render_Mobile.webp"],["https://www.spacex.com/static/images/falcon-heavy/mobile/WebsiteFHInterstage_Render_Mobile.webp"],["https://www.spacex.com/static/images/falcon-heavy/mobile/WebsiteFHS2_Render_Mobile.webp"],["https://www.spacex.com/static/images/falcon-heavy/mobile/WebsiteFHSoloFairings_Render_Mobile.webp"]]}')},6010:function(e,t,s){},aadf:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{ref:"bg",staticClass:"position-relative",staticStyle:{height:"200vh"}},[s("div",{staticClass:"background background-full vh-100",style:this.opacity>=1?"background-color: black":"background-image: url("+e.bgFirst+")"},[s("div",{staticClass:"background-sec background-full vh-100",style:"opacity: "+e.opacity+"; background-image: url("+e.selectBgSize[e.pageNumber-1][e.secNumber-1]+")"},[this.$isMobile?e._e():s("div",{staticClass:"section-inner mx-auto"},[s("div",{staticClass:"inner-half col-5 mx-0 mx-sm-4 mx-md-5 px-3 px-sm-0 info-box"},[s("div",{staticClass:"text-uppercase mb-5"},[s("h5",{staticClass:"mb-3"},[e._v("Falcon Heavy")]),s("div",{staticClass:"h1 font-weight-bold"},[e._v(e._s(e.titles[e.pageNumber-1]))])]),1===e.pageNumber?s("Overview"):2===e.pageNumber?s("FirstStg",{on:{selectSec:e.changeSec}}):3===e.pageNumber?s("InterStg"):4===e.pageNumber?s("SecStg"):5===e.pageNumber?s("Payload"):e._e()],1),s("CarouselUI",{class:this.opacity>=1?"event-auto":"event-none",attrs:{curSelected:e.pageNumber},on:{selectPg:e.changePg}})],1)])]),e._m(0)]),this.$isMobile?s("div",{staticClass:"section-inner mx-auto my-5"},[s("div",{staticClass:"inner-half col-12"},[s("div",{staticClass:"mb-4"},[s("div",{staticClass:"text-uppercase d-inline-block"},[s("h6",{staticClass:"mb-0"},[e._v("Falcon Heavy")]),s("div",{staticClass:"h1 font-weight-bold"},[e._v(e._s(e.titles[e.pageNumber-1]))])]),s("div",{staticClass:"float-right"},[s("CarouselUI",{attrs:{curSelected:e.pageNumber},on:{selectPg:e.changePg}})],1)]),1==e.pageNumber?s("Overview"):2===e.pageNumber?s("FirstStg",{on:{selectSec:e.changeSec}}):3===e.pageNumber?s("InterStg"):4===e.pageNumber?s("SecStg"):5===e.pageNumber?s("Payload"):e._e()],1)]):e._e()])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"section-inner mx-auto px-lg-5"},[s("div",{staticClass:"inner-half col-10 p-0 offset-1 col-md-8 offset-md-2 col-lg-5 col-xl-4 offset-lg-0 text-box"},[s("span",{staticClass:"dm-text"},[e._v(" Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb) Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy. Falcon Heavy is composed of three Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft. ")])])])}],o=s("16d9");const c=()=>s.e("chunk-2c56e334").then(s.bind(null,"09ed")),n=()=>s.e("chunk-6a39c003").then(s.bind(null,"3338")),l=()=>s.e("chunk-67f87ace").then(s.bind(null,"d0ea")),r=()=>s.e("chunk-2d0e4fb6").then(s.bind(null,"9317")),h=()=>s.e("chunk-0c4dcacf").then(s.bind(null,"701d")),p=()=>s.e("chunk-0b2732f0").then(s.bind(null,"0731"));var b={components:{Overview:c,FirstStg:n,SecStg:l,InterStg:r,Payload:h,CarouselUI:p},data(){return{actHeight:0,opacity:0,lastPos:window.scrollY,pageNumber:1,secNumber:1,titles:["Overview","First Stage","Interstage","Second Stage","Payload"],bgFirst:this.$isMobile?"https://www.spacex.com/static/images/falcon-heavy/mobile/WebsiteFHFairings_Lines_Mobile.webp":"https://www.spacex.com/static/images/falcon-heavy/desktop/WebsiteFHFairings_Lines_Desktop.webp",bgs:o}},mounted(){var e=this.$refs.bg;this.actHeight=e.scrollHeight-e.scrollHeight*(window.screen.availWidth/5e4),window.scrollY>this.actHeight&&(this.opacity=1)},created(){window.addEventListener("scroll",this.scrollHandler)},destroyed(){window.removeEventListener("scroll",this.scrollHandler)},methods:{scrollHandler(){var e,t;window.scrollY>this.actHeight&&this.opacity<1&&this.lastPos<=window.scrollY?e=setInterval(()=>{this.opacity<1&&(this.opacity+=.005),!(this.opacity>=1)&&window.scrollY>=this.actHeight||clearInterval(e)},1):this.opacity>0&&this.lastPos>=window.scrollY&&window.scrollY<=this.actHeight&&(t=setInterval(()=>{this.opacity>0&&(this.opacity-=.005),!(this.opacity<=0)&&window.scrollY<=this.actHeight||clearInterval(t)},1),this.pageNumber>1&&this.pageNumber--),this.lastPos=window.scrollY},changePg(e){this.pageNumber=e,this.secNumber=1},changeSec(e){this.secNumber=e}},computed:{selectBgSize(){return window.innerWidth>=992?this.bgs.desktop:this.bgs.mobile}}},d=b,g=(s("fda9"),s("a90d")),w=Object(g["a"])(d,a,i,!1,null,"e0b3ee30",null);t["default"]=w.exports},fda9:function(e,t,s){"use strict";s("6010")}}]);
//# sourceMappingURL=chunk-af69af9e.6a9b035e.js.map