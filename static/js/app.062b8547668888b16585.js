webpackJsonp([1],{"7AiZ":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")({name:"App"},s,!1,function(t){e("sn6e")},null,null).exports,a=e("/ocq"),c=e("Dd8w"),o=e.n(c),u=e("9rMa"),l=e("//Fk"),m=e.n(l),d=e("woOf"),h=e.n(d),g=e("aozt"),p=e.n(g),f=e("6yg2"),y=e.n(f);function v(t,n,e){return t+=(t.indexOf("?")<0?"?":"&")+function(t){var n="";for(var e in t){var i=void 0!==t[e]?t[e]:"";n+="&"+e+"="+encodeURIComponent(i)}return n?n.substring(1):""}(n),new m.a(function(n,i){y()(t,e,function(t,e){t?i(t):n(e)})})}var _={g_tk:5381,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},C={param:"jsonpCallback",prefix:"tan"};var L={data:function(){return{discList:[],recommendList:[]}},created:function(){this._getDiscList(),this._getRecommend()},methods:o()({_getDiscList:function(){var t,n=this;(t={g_tk:5381,notice:0,inCharset:"utf8",outCharset:"utf-8",platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,categoryId:1e7,needNewCode:0,rnd:Math.random(),format:"json"},p.a.get("/api/getDiscList",{params:t}).then(function(t){return m.a.resolve(t.data)})).then(function(t){0===t.code&&(n.discList=t.data.list)})},_getRecommend:function(){var t=this;v("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",h()({},_,{platform:"h5",uin:0,needNewCode:1}),C).then(function(n){0===n.code&&(t.recommendList=n.data.slider)})},selectList:function(t){this.$router.push({path:"/recommend/"+t.dissid}),this.setd(t)}},Object(u.c)({setd:"setDisc"}))},x={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"index-page"},[e("Layout",[e("Row",[e("Col",{attrs:{span:"18",offset:"3"}},[e("div",{staticClass:"index-carousel"},[e("Carousel",{attrs:{loop:""}},t._l(t.recommendList,function(t,n){return e("CarouselItem",{key:n},[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:t.picUrl,alt:""}})])])}))],1)]),t._v(" "),e("Col",{attrs:{span:"3"}},[t._v("col-12")])],1),t._v(" "),e("Row",[e("Col",{attrs:{span:"18",offset:"3"}},[e("div",{staticClass:"disc-list"},[e("Card",{attrs:{"dis-hover":""}},[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("为您推荐歌单")]),t._v(" "),e("div",{staticClass:"list-box clearfix"},[e("ul",t._l(t.discList,function(n){return e("li",{key:n.key,on:{click:function(e){t.selectList(n)}}},[e("div",{staticClass:"list-img"},[e("img",{attrs:{src:n.imgurl,alt:"",width:"148",height:"148"}})]),t._v(" "),e("div",{staticClass:"list-name"},[e("p",{},[t._v(t._s(n.dissname))]),t._v(" "),e("p",{staticClass:"fs-12 c-gray"},[t._v(t._s(n.creator.name))])])])}))])])],1)])],1),t._v(" "),e("Footer",{staticClass:"t-a-c"},[t._v("Copy QQMusic By Jane He")])],1)],1)},staticRenderFns:[]};var T=e("VU/8")(L,x,!1,function(t){e("7AiZ")},"data-v-5dd6e0fd",null).exports,w=e("Zrlr"),S=e.n(w),I=e("wxAW"),k=e.n(I),b={g_tk:5381,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"};var q=e("xrTZ"),$=function(){function t(n){var e=n.id,i=n.mid,s=n.singer,r=n.name,a=n.ablum,c=n.duration,o=n.image,u=n.url,l=n.url1;S()(this,t),this.id=e,this.mid=i,this.singer=s,this.name=r,this.ablum=a,this.duration=c,this.image=o,this.url=u,this.url1=l}return k()(t,[{key:"getLyric",value:function(){var t=this;return this.lyric?m.a.resolve(this.lyric):new m.a(function(n,e){var i,s;(i=t.mid,s=h()({},b,{g_tk:5381,songmid:i,platform:"yqq",hostUin:0,needNewCode:0,categoryId:1e7,pcachetime:+new Date,format:"json"}),p.a.get("/api/lyric",{params:s}).then(function(t){return m.a.resolve(t.data)})).then(function(e){0===e.retcode?(t.lyric=q.Base64.decode(e.lyric),n(t.lyric)):console.log("no lyric")})})}}]),t}();function N(t){return new $({id:t.songid,mid:t.songmid,singer:(n=t.singer,e=[],n?(n.forEach(function(t,n){e.push(t.name)}),e.join("/")):""),name:t.songname,ablum:t.ablumname,duration:function(t){if(!t)return"";var n=parseInt(t/60);n<10&&(n="0"+n);var e=parseInt(t-60*n);e<10&&(e="0"+e);return n+" : "+e}(t.interval),image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+t.albummid+".jpg?max_age=2592000",url:"http://dl.stream.qqmusic.qq.com/C400"+t.songmid+"/"+t.songid+".m4a?guid=263427534&fromtag=66",url1:"http://ws.stream.qqmusic.qq.com/C100"+t.songmid+".m4a?fromtag=0&guid="+t.songid});var n,e}var j=e("MYfc"),P=e.n(j),R={data:function(){return{columns:[{title:"歌曲",key:"name",width:450},{title:"歌手",key:"singer",width:250},{title:"时长",key:"duration"}],songs:[],curSong:{},curLyric:null,currentLineNum:0,playingLyric:"",lrcOffset:0,curIndex:0,playState:0}},created:function(){this._getSongList()},methods:o()({rowClassName:function(t,n){if(n===this.curIndex)return"highlight"},changeTime:function(t){var n=parseInt(t*this.totalTime/100);this.$store.commit("changeTime",n),this.$store.commit("setChange",!0)},updateTime:function(){var t=document.getElementById("audioPlay"),n=parseInt(t.currentTime);this.$store.commit("updatetotalTime",parseInt(t.duration)),this.change?(t.currentTime=this.tmpCurrentTime,this.$store.commit("updatecurrentTime",this.tmpCurrentTime),this.curLyric.seek(1e3*t.currentTime),this.$store.commit("setChange",!1)):this.$store.commit("updateCurrentTime",n)},playSong:function(t,n){var e=this;this.curLyric&&this.curLyric.stop(),this.curIndex=n,this.currentLineNum=0,this.curSong=this.songs[n],this.curSong.getLyric().then(function(t){e.curLyric=new P.a(t,e.handleLyric),e.curLyric.play()}),this.$store.commit("play")},handleLyric:function(t){var n=t.lineNum,e=t.txt;this.currentLineNum=n,this.playingLyric=e,this.lrcOffset=40*-(n-2)},_getSongList:function(){var t,n,e=this;this.disc.dissid?(t=this.disc.dissid,n=h()({},_,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0}),p.a.get("/api/getSongList",{params:n}).then(function(t){return m.a.resolve(t.data)})).then(function(t){0===t.code&&(e.songs=e._normalizeSongs(t.cdlist[0].songlist))}):this.$router.push("/")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){t.songid&&t.albummid&&n.push(N(t))}),n},toggleStatus:function(){this.playing?(this.$refs.myaudio.pause(),this.$store.commit("pause")):(this.$refs.myaudio.play(),this.$store.commit("play")),this.curLyric&&this.curLyric.togglePlay()},prevSong:function(){var t=this;this.curIndex=this.curIndex-1,this.curIndex<0&&(this.curIndex=this.songs.length-1),this.curSong=this.songs[this.curIndex],this.curLyric&&this.curLyric.stop(),this.currentLineNum=0,this.curSong.getLyric().then(function(n){t.curLyric=new P.a(n,t.handleLyric),t.curLyric.play()}),this.$store.commit("play")},nextSong:function(){var t=this;this.curIndex=this.curIndex+1,this.curIndex>=this.songs.length&&(this.curIndex=0),this.curSong=this.songs[this.curIndex],this.curLyric&&this.curLyric.stop(),this.currentLineNum=0,this.curSong.getLyric().then(function(n){t.curLyric=new P.a(n,t.handleLyric),t.curLyric.play()}),this.$store.commit("play")},autoPlay:function(){0===this.playState&&this.nextSong()},format:function(t){t|=0;var n=parseInt(t/60);n<10&&(n="0"+n);var e=parseInt(t-60*n);return e<10&&(e="0"+e),n+" : "+e}},Object(u.c)(["play","pause"])),computed:o()({currentPos:{get:function(){return parseInt(this.currentTime/this.totalTime*100)},set:function(){}}},Object(u.b)(["disc","currentTime","totalTime","change","tmpCurrentTime","playing"]))},O={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"recommend-page"},[e("div",{staticClass:"recommend-box"},[e("Header",{staticClass:"fix-top"},[t._v("QQ Music")]),t._v(" "),e("Content",{staticClass:"list-box"},[e("Row",[e("Col",{attrs:{span:"16"}},[e("Table",{ref:"currentRowTable",attrs:{"row-class-name":t.rowClassName,"disabled-hover":"",height:"500",columns:t.columns,data:t.songs},on:{"on-row-click":t.playSong}})],1),t._v(" "),e("Col",{attrs:{span:"8"}},[0!==t.curSong.length?e("div",[e("div",{staticClass:"song-info flex flex-j-c"},[e("div",{staticClass:"song-img"},[e("img",{attrs:{src:t.curSong.image,alt:""}})])]),t._v(" "),e("div",{staticClass:"fs-14 c-c9 t-a-c"},[e("p",[t._v("歌曲名: "+t._s(t.curSong.name))]),t._v(" "),e("p",[t._v("歌手名: "+t._s(t.curSong.singer))])])]):e("div",{staticClass:"song-info"},[e("p",[t._v("请选择歌曲")])]),t._v(" "),e("div",{staticClass:"lyric-wrapper"},[t.curLyric?e("div",{staticClass:"lyric-inner"},[t.curLyric.lines?e("div",{style:{transform:" translate3d(0px,"+t.lrcOffset+"px, 0px)"}},t._l(t.curLyric.lines,function(n,i){return e("p",{key:i,class:{current:t.currentLineNum==i}},[t._v("\r\n                "+t._s(n.txt)+"\r\n                ")])})):e("div",[t._v("\r\n                "+t._s(t.curLyric)+"\r\n              ")])]):e("div",{staticClass:"lyric-inner"},[e("p",[t._v("暂无歌词o(╥﹏╥)o")])])])])],1)],1),t._v(" "),e("Footer",{staticClass:"fix-footer"},[e("div",{staticClass:"flex ops"},[e("Button",{staticClass:"m-10",attrs:{type:"ghost",shape:"circle",icon:"ios-skipbackward"}}),t._v(" "),e("Button",{staticClass:"m-10",attrs:{type:"ghost",shape:"circle",icon:"ios-play"},on:{click:t.toggleStatus}}),t._v(" "),e("Button",{staticClass:"m-10",attrs:{type:"ghost",shape:"circle",icon:"ios-skipforward"},on:{click:t.nextSong}})],1),t._v(" "),e("div",{staticClass:"songslide"},[t._v(t._s(t.curSong.length)+"\r\n        "),t.curSong?e("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[e("Col",{attrs:{span:"20"}},[e("p",[t._v(t._s(t.curSong.name)+" - "+t._s(t.curSong.singer))])]),t._v(" "),e("Col",{attrs:{span:"4"}},[e("p",[t._v(t._s(t.format(t.currentTime))+" / "+t._s(t.curSong.duration))])])],1):t._e(),t._v(" "),e("Slider",{on:{"on-change":t.changeTime},model:{value:t.currentPos,callback:function(n){t.currentPos=n},expression:"currentPos"}})],1)])],1),t._v(" "),e("audio",{ref:"myaudio",attrs:{id:"audioPlay",src:t.curSong.url1,autoplay:""},on:{timeupdate:t.updateTime,ended:t.autoPlay}})])},staticRenderFns:[]};var D=e("VU/8")(R,O,!1,function(t){e("hyks")},null,null).exports;i.default.use(a.a);var U=new a.a({routes:[{path:"/",name:"Index",component:T},{path:"/recommend/:id",name:"RecommendDetail",component:D}]}),M=e("LsSL"),A=e.n(M);i.default.use(u.a);var B=new u.a.Store({state:{disc:{},cursong:{},currentTime:0,currentPos:0,totalTime:0,change:!1,tmpCurrentTime:0,playing:!1},getters:{disc:function(t){return t.disc},cursong:function(t){return t.cursong},currentTime:function(t){return t.currentTime},totalTime:function(t){return t.totalTime},change:function(t){return t.change},tmpCurrentTime:function(t){return t.tmpCurrentTime},playing:function(t){return t.playing},currentPos:function(t){return t.currentTime/t.totalTime*100}},mutations:{play:function(t){t.playing=!0},pause:function(t){t.playing=!1},setDisc:function(t,n){t.disc=n},setCur:function(t,n){t.cursong=n},updateCurrentTime:function(t,n){t.currentTime=n},updatetotalTime:function(t,n){t.totalTime=n},setChange:function(t,n){t.change=n},changeTime:function(t,n){t.tmpCurrentTime=n},setCurrentPos:function(t,n){t.currentPos=n}}});e("p3oC");i.default.config.productionTip=!1,i.default.use(A.a),new i.default({el:"#app",router:U,store:B,components:{App:r},template:"<App/>"})},hyks:function(t,n){},p3oC:function(t,n){},sn6e:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.062b8547668888b16585.js.map