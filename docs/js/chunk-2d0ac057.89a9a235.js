(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac057"],{1882:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bg-black z-1"},[a("div",{staticClass:"container py-5"},[a("div",{ref:"bar",staticClass:"row mx-5",style:"opacity:"+t.opacity},t._l(t.stats,(function(s){return a("div",{key:s.index,staticClass:"col-4 text-center"},[a("label",{staticClass:"dm-stat-num mb-4"},[t._v(t._s(s.cur))]),a("h5",{staticClass:"dm-stat-title text-uppercase mt-n4"},[t._v(t._s(s.title))])])})),0)])])},i=[],l={data(){return{stats:[{title:"Total Launches",val:3,cur:0},{title:"Total Landings",val:7,cur:0},{title:"Reflown Rockets",val:4,cur:0}],switch:0,offsetTop:0,bottomLine:0,opacity:0}},created(){window.addEventListener("scroll",this.scrollHandler)},destroyed(){window.removeEventListener("scroll",this.scrollHandler)},mounted(){var t=this.$refs.bar;this.offsetTop=t.offsetTop,this.bottomLine=t.offsetTop+t.offsetHeight},methods:{findMaxVal(){for(var t=this.stats[0],s=0;s<this.stats.length;s++)this.stats[s].val>t.val&&(t=this.stats[s]);return t},statsIncreament(){var t=this.findMaxVal(),s=setInterval(()=>{this.stats.forEach(a=>{a.cur<a.val&&a.cur++,t.cur===t.val&&clearInterval(s)})},100)},scrollHandler(){var t=window.scrollY+window.innerHeight-this.offsetTop;this.opacity<1&&(this.opacity=t/1e3*(t/100)),(t<0||t>this.bottomLine)&&(this.opacity=0,this.switch=0,this.stats.forEach(t=>{t.cur=0})),0===this.switch&&0!==this.opacity&&(this.statsIncreament(),this.switch=1)}}},r=l,o=a("510d"),c=Object(o["a"])(r,e,i,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0ac057.89a9a235.js.map