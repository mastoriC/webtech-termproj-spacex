(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e03ca00"],{6800:function(e){e.exports=JSON.parse('{"desktop":[["https://www.spacex.com/static/images/dragon/desktop/DragonTrunk_Render_Desktop.webp"],["https://www.spacex.com/static/images/dragon/desktop/Trunk_Render_Desktop.webp"],["https://www.spacex.com/static/images/dragon/desktop/Dragon_Render_Desktop.webp","https://www.spacex.com/static/images/dragon/desktop/DragonEscape_Desktop.webp","https://www.spacex.com/static/images/dragon/desktop/DragonDraco_Desktop.webp"]],"mobile":[["https://www.spacex.com/static/images/dragon/mobile/DragonTrunk_Render_Mobile.webp"],["https://www.spacex.com/static/images/dragon/mobile/Trunk_Render_Mobile.webp"],["https://www.spacex.com/static/images/dragon/mobile/Dragon_Render_Mobile.webp","https://www.spacex.com/static/images/dragon/mobile/DragonEscape_Mobile.webp","https://www.spacex.com/static/images/dragon/mobile/DragonDraco_Mobile.webp"]]}')},a5e9:function(e,t,s){"use strict";s("b906")},b906:function(e,t,s){},e398:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{ref:"bg",staticClass:"position-relative",staticStyle:{height:"200vh"}},[s("div",{staticClass:"background background-full vh-100",style:this.opacity>=1?"background-color: black":"background-image: url("+e.bgFirst+")"},[s("div",{staticClass:"background-sec background-full vh-100",style:"opacity: "+e.opacity+"; background-image: url("+e.selectBgSize[e.pageNumber-1][e.secNumber-1]+")"},[this.$isMobile?e._e():s("div",{staticClass:"section-inner mx-auto"},[s("div",{staticClass:"inner-half col-5 mx-0 mx-sm-4 mx-md-5 px-3 px-sm-0 info-box"},[s("div",{staticClass:"text-uppercase mb-5"},[s("h5",{staticClass:"mb-3"},[e._v("DRAGON")]),s("div",{staticClass:"h1 font-weight-bold"},[e._v(e._s(e.titles[e.pageNumber-1]))])]),1===e.pageNumber?s("Overview"):2===e.pageNumber?s("Trunk"):3===e.pageNumber?s("Capsule",{on:{selectSec:e.changeSec}}):e._e()],1),s("CarouselUI",{class:this.opacity>=1?"event-auto":"event-none",attrs:{curSelected:e.pageNumber},on:{selectPg:e.changePg}})],1)])]),e._m(0)]),this.$isMobile?s("div",{staticClass:"section-inner mx-auto my-5"},[s("div",{staticClass:"inner-half col-12"},[s("div",{staticClass:"mb-4"},[s("div",{staticClass:"text-uppercase d-inline-block"},[s("h6",{staticClass:"mb-0"},[e._v("DRAGON")]),s("div",{staticClass:"h1 font-weight-bold"},[e._v(e._s(e.titles[e.pageNumber-1]))])]),s("div",{staticClass:"float-right"},[s("CarouselUI",{attrs:{curSelected:e.pageNumber},on:{selectPg:e.changePg}})],1)]),1==e.pageNumber?s("Overview"):2==e.pageNumber?s("Trunk"):3==e.pageNumber?s("Capsule",{on:{selectSec:e.changeSec}}):e._e()],1)]):e._e()])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"section-inner mx-auto px-lg-5"},[s("div",{staticClass:"inner-half col-10 p-0 offset-1 col-md-8 offset-md-2 col-lg-5 col-xl-4 offset-lg-0 text-box"},[s("span",{staticClass:"dm-text"},[e._v(" The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station. ")])])])}],o=s("6800");const c=()=>s.e("chunk-b31471ac").then(s.bind(null,"06e9")),n=()=>s.e("chunk-64660fee").then(s.bind(null,"e7c8")),r=()=>s.e("chunk-b098f236").then(s.bind(null,"a902")),l=()=>s.e("chunk-14adf671").then(s.bind(null,"b55b"));var p={components:{Overview:c,Trunk:n,Capsule:r,CarouselUI:l},data(){return{actHeight:0,opacity:0,lastPos:window.scrollY,pageNumber:1,secNumber:1,titles:["Overview","Trunk","Capsule"],bgFirst:this.$isMobile?"https://www.spacex.com/static/images/dragon/mobile/DragonTrunk_Lines_Mobile.webp":"https://www.spacex.com/static/images/dragon/desktop/DragonTrunk_Lines_Desktop.webp",bgs:o}},mounted(){var e=this.$refs.bg;this.actHeight=e.scrollHeight-e.scrollHeight*(window.screen.availWidth/5e4),console.log(this.actHeight,e.scrollHeight,window.screen.availWidth),window.scrollY>this.actHeight&&(this.opacity=1)},created(){window.addEventListener("scroll",this.scrollHandler)},destroyed(){window.removeEventListener("scroll",this.scrollHandler)},methods:{scrollHandler(){var e,t;window.scrollY>this.actHeight&&this.opacity<1&&this.lastPos<=window.scrollY?e=setInterval(()=>{this.opacity<1&&(this.opacity+=.005),!(this.opacity>=1)&&window.scrollY>=this.actHeight||clearInterval(e)},1):this.opacity>0&&this.lastPos>=window.scrollY&&window.scrollY<=this.actHeight&&(t=setInterval(()=>{this.opacity>0&&(this.opacity-=.005),!(this.opacity<=0)&&window.scrollY<=this.actHeight||clearInterval(t)},1),this.pageNumber>1&&this.pageNumber--),this.lastPos=window.scrollY},changePg(e){this.pageNumber=e,this.secNumber=1},changeSec(e){this.secNumber=e}},computed:{selectBgSize(){return window.innerWidth>=992?this.bgs.desktop:this.bgs.mobile}}},g=p,h=(s("a5e9"),s("a90d")),d=Object(h["a"])(g,a,i,!1,null,"a2c36dfa",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-6e03ca00.81800ff3.js.map