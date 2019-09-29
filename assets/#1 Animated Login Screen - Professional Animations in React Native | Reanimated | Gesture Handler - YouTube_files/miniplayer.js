(function(g){var window=this;var B4=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.W?{A:"div",U:["ytp-icon","ytp-icon-expand-watch-page"]}:{A:"svg",K:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},H:[{A:"g",K:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},H:[{A:"g",K:{transform:"translate(-1.000000, -3.000000)"},H:[{A:"polygon",K:{points:"0 0 24 0 24 24 0 24"}},{A:"path",K:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";g.P(a.L().experiments,"kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.W?{A:"div",U:["ytp-icon","ytp-icon-expand-miniplayer"]}:{A:"svg",K:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},H:[{A:"g",K:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},H:[{A:"g",K:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},H:[{A:"path",K:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.T.call(this,{A:"button",U:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],K:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},H:[d]});this.l=a;this.ea("click",this.o,this);this.updateValue("title",g.ZL(a,e,"i"));g.Ci(this,g.uM(b.Ta(),this.element))},C4=function(a){g.vu.call(this,{A:"div",
F:"ytp-miniplayer-ui"});this.player=a;this.G=!1;this.D=this.w=this.l=void 0;this.J(a,"minimized",this.AE);this.J(a,"onStateChange",this.sL)},D4=function(a){g.SO.call(this,a);
this.g=new C4(this.player);this.g.hide();g.vK(this.player,this.g.element,4);a.app.D.g&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
g.r(B4,g.T);B4.prototype.o=function(){this.l.ha("onExpandMiniplayer")};g.r(C4,g.vu);g.h=C4.prototype;
g.h.show=function(){this.l=new g.$m(this.zE,null,this);this.l.start();if(!this.G){this.B=new g.jQ(this.player,this);g.H(this,this.B);g.vK(this.player,this.B.element,4);this.B.w=.6;this.P=new g.kP(this.player);g.H(this,this.P);this.o=new g.T({A:"div",F:"ytp-miniplayer-scrim"});g.H(this,this.o);this.o.g(this.element);this.J(this.o.element,"click",this.Ux);var a=new g.T({A:"button",U:["ytp-miniplayer-close-button","ytp-button"],K:{"aria-label":"Close"},H:[g.pL()]});g.H(this,a);a.g(this.o.element);this.J(a.element,
"click",this.pw);a=new B4(this.player,this);g.H(this,a);a.g(this.o.element);this.u=new g.T({A:"div",F:"ytp-miniplayer-controls"});g.H(this,this.u);this.u.g(this.o.element);this.J(this.u.element,"click",this.Ux);var b=new g.T({A:"div",F:"ytp-miniplayer-button-container"});g.H(this,b);b.g(this.u.element);a=new g.T({A:"div",F:"ytp-miniplayer-play-button-container"});g.H(this,a);a.g(this.u.element);var c=new g.T({A:"div",F:"ytp-miniplayer-button-container"});g.H(this,c);c.g(this.u.element);this.M=new g.aN(this.player,
this,!1);g.H(this,this.M);this.M.g(b.element);b=new g.YM(this.player,this);g.H(this,b);b.g(a.element);this.I=new g.aN(this.player,this,!0);g.H(this,this.I);this.I.g(c.element);this.D=new g.yO(this.player,this);g.H(this,this.D);this.D.g(this.o.element);this.w=new g.jN(this.player,this);g.H(this,this.w);g.vK(this.player,this.w.element,4);this.C=new g.T({A:"div",F:"ytp-miniplayer-buttons"});g.H(this,this.C);g.vK(this.player,this.C.element,4);a=new g.T({A:"button",U:["ytp-miniplayer-close-button","ytp-button"],
K:{"aria-label":"Close"},H:[g.pL()]});g.H(this,a);a.g(this.C.element);this.J(a.element,"click",this.pw);a=new g.T({A:"button",U:["ytp-miniplayer-replay-button","ytp-button"],K:{"aria-label":"Close"},H:[g.DL()]});g.H(this,a);a.g(this.C.element);this.J(a.element,"click",this.nJ);this.J(this.player,"presentingplayerstatechange",this.BE);this.J(this.player,"appresize",this.Na);this.J(this.player,"fullscreentoggled",this.Na);this.Na();this.G=!0}0!=this.player.getPlayerState()&&g.vu.prototype.show.call(this);
this.w.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.l&&(this.l.dispose(),this.l=void 0);g.vu.prototype.hide.call(this);this.player.app.D.g||(this.G&&this.w.hide(),this.player.loadModule("annotations_module"))};
g.h.V=function(){this.l&&(this.l.dispose(),this.l=void 0);g.vu.prototype.V.call(this)};
g.h.pw=function(){this.player.stopVideo();this.player.ha("onCloseMiniplayer")};
g.h.nJ=function(){this.player.playVideo()};
g.h.Ux=function(a){if(a.target==this.o.element||a.target==this.u.element)g.P(this.player.L().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.Et(g.dK(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.ha("onExpandMiniplayer")};
g.h.AE=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.app.D.g)};
g.h.zE=function(){g.lN(this.w);this.D.l();this.l&&this.l.start()};
g.h.BE=function(a){g.R(a.state,32)&&this.B.hide()};
g.h.Na=function(){var a=this.w,b=g.eK(this.player).getPlayerSize().width;a.Ba=0;a.w=b;a.C=!1;g.nN(a)};
g.h.sL=function(a){this.player.app.D.g&&(0==a?this.hide():this.show())};
g.h.Ta=function(){return this.B};
g.h.Ub=function(){return!1};
g.h.gg=function(){return!1};
g.h.Th=function(){return!1};
g.h.yr=function(){};
g.h.Hg=function(){};
g.h.aj=function(){};
g.h.Jm=function(){return null};
g.h.lq=function(){return new g.Vf(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.li=function(a,b,c,d,e){var f=0,k=d=0,l=g.tg(a);if(b){c=g.kn(b,"ytp-prev-button")||g.kn(b,"ytp-next-button");var m=g.kn(b,"ytp-play-button"),n=g.kn(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.qg(b,this.element),k=b.x,f=b.y-12):n&&(k=g.kn(b,"ytp-miniplayer-button-top-left"),f=g.qg(b,this.element),b=g.tg(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.eK(this.player).getPlayerSize().width;e=f+(e||0);l=g.nd(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.mq=function(){};
g.h.Ch=function(){};g.r(D4,g.SO);D4.prototype.create=function(){};
D4.prototype.Ne=function(){return!1};
D4.prototype.load=function(){this.player.hideControls();this.g.show()};
D4.prototype.unload=function(){this.player.showControls();this.g.hide()};g.fP.miniplayer=D4;})(_yt_player);
