"use strict";(self.webpackChunkreactapp=self.webpackChunkreactapp||[]).push([[383],{2694:function(e,t,i){i.r(t),i.d(t,{default:function(){return y}});var n=i(390),s=i(9439),r=i(140),o=[{id:8389,type:"Video",link:i.p+"static/media/video.0c8730036e8d7c4f67c6.mp4"},{id:8388,type:"Image",link:"https://images.unsplash.com/photo-1589565927725-39a53837cd6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}],a=i(6838),c=i(2462),u=(i(9266),i(5276),function(e){var t=(0,n.useState)(0),i=(0,s.Z)(t,2),r=i[0],o=i[1],c=(0,n.useState)(!0),u=(0,s.Z)(c,2),l=u[0],f=u[1],p=(0,n.useState)(!1),m=(0,s.Z)(p,2),v=m[0],x=m[1],h=(0,n.useState)(e.defaultInterval),w=(0,s.Z)(h,2),y=w[0],g=w[1],b=(0,n.useRef)(Date.now()),j=(0,a.oc)(),D=(0,n.useRef)();return(0,n.useEffect)((function(){return void 0!==e.stories[r]&&e.stories[r].type===d.BLOCK&&f(!1),e.isActive?l||v||(b.current=Date.now(),D.current=setInterval((function(){o((function(e){return e+1})),f(!0),g(e.defaultInterval)}),y)):(o(0),f(!1),g(e.defaultInterval)),function(){return clearInterval(D.current)}}),[r,l,v,e.isActive]),(0,n.useEffect)((function(){r>e.stories.length-1&&e.isActive&&(e.index===e.countStories?e.onStoryEnd(0):j.slideNext(500))}),[r,e.stories,e.isActive]),{currentCount:r,paused:v,loaded:l,start:b,onClose:function(){return e.onStoryEnd(0)},onLoad:function(){return f(!1)},previous:function(){0!==r?(o((function(e){return e-1})),f(!0),g(e.defaultInterval)):j.slidePrev(500)},next:function(){r>=e.stories.length-1?e.index===e.countStories?e.onStoryEnd(0):j.slideNext(500):(o((function(e){return e+1})),f(!0),g(e.defaultInterval))},setInter:g,setPaused:x}}),l=i(2559),d={IMAGE:"Image",VIDEO:"Video",BLOCK:"Block"},f=function(e){var t=u(e),i=t.currentCount,s=t.paused,r=t.loaded,o=t.start,a=t.onClose,c=t.onLoad,f=t.previous,p=t.next,m=t.setInter,v=t.setPaused,x=(0,n.useRef)(null),h=(0,n.useRef)(),w=function(t){t.preventDefault(),e.isMoveSlider&&!r&&(h.current=setTimeout((function(){m((function(e){return e-(Date.now()-o.current)})),v(!s)}),200))},y=function(t){return function(i){i.preventDefault(),h.current&&clearTimeout(h.current),r||(s?v(!s):e.isMoveSlider&&!s&&("next"===t?p():f()))}};return(0,n.useEffect)((function(){if(void 0!==e.stories[i]&&e.stories[i].type===d.VIDEO){var t,n,o;if(s)return void(null===(n=x.current)||void 0===n||n.pause());if(e.isActive&&!r)return void(null===(o=x.current)||void 0===o||o.play());null===(t=x.current)||void 0===t||t.load()}}),[i,s,r,x.current,e.isActive]),(0,l.jsxs)("div",{className:"stories",onMouseDown:w,onTouchStart:w,children:[(0,l.jsx)("div",{className:"stories-close",onClick:a}),(0,l.jsx)("div",{className:"stories-progress",style:{opacity:s?0:1},children:e.stories.map((function(t,n){return(0,l.jsx)("div",{className:"stories-progress__item ".concat(n<i?"stories-progress__item--done":""," ").concat(n===i&&!r&&e.isActive?"stories-progress__item--active":""),style:{width:"".concat(100/e.stories.length,"%")},children:(0,l.jsx)("div",{className:"stories-progress__item-progress",style:{animationDuration:"".concat(e.defaultInterval,"ms"),animationPlayState:s?"paused":"running"}})},t.id)}))}),(0,l.jsxs)("div",{className:"stories-content",children:[r&&(0,l.jsx)("div",{className:"stories-content__loaded",children:(0,l.jsx)("div",{className:"stories-content__loaded-spiner"})}),i<=e.stories.length-1&&(e.stories[i].type===d.IMAGE&&(0,l.jsx)("img",{src:e.stories[i].link,onLoad:c,alt:"car"})||e.stories[i].type===d.VIDEO&&(0,l.jsx)("video",{ref:x,muted:!0,playsInline:!0,onCanPlayThrough:c,children:(0,l.jsx)("source",{src:e.stories[i].link,type:"video/mp4"})})||e.stories[i].type===d.BLOCK&&function(){var t=e.stories[i].link;return(0,l.jsx)(t,{})}())]}),(0,l.jsxs)("div",{className:"stories-navigation",children:[(0,l.jsx)("div",{className:"stories-navigation__prev",onMouseUp:y("prev"),onTouchEnd:y("prev")}),(0,l.jsx)("div",{className:"stories-navigation__next",onMouseUp:y("next"),onTouchEnd:y("next")})]})]})},p=(0,n.memo)(f),m=function(e){var t=(0,n.useState)(!0),i=(0,s.Z)(t,2),r=i[0],o=i[1],u=(0,n.useState)(e.initialSlide),d=(0,s.Z)(u,2),f=d[0],m=d[1];return(0,l.jsx)("div",{className:"stories-container-cube ".concat(r?"stories-slider-perspective":""),children:(0,l.jsx)(a.tq,{effect:"cube",cubeEffect:{shadow:!1,shadowOffset:0,slideShadows:!1},onTransitionStart:function(){return o(!1)},onSliderFirstMove:function(){return o(!1)},onTransitionEnd:function(){return o(!0)},modules:[c.SH],initialSlide:e.initialSlide,touchStartPreventDefault:!1,onActiveIndexChange:function(e){return m(e.activeIndex)},children:e.list.map((function(t,i){return(0,l.jsx)(a.o5,{children:(0,l.jsx)(p,{index:i,countStories:e.list.length-1,stories:t.list,defaultInterval:5e3,isActive:i===f&&r,isMoveSlider:r,onStoryEnd:e.setActiveStory})},t.key)}))})})},v=(0,n.memo)(m),x=[{key:0,preview:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e",list:[{id:8380,type:"Block",link:function(){return(0,l.jsxs)("div",{style:{background:"pink",padding:20},children:[(0,l.jsx)("h1",{style:{marginTop:"100%",marginBottom:0},children:"\ud83c\udf1d"}),(0,l.jsx)("h1",{style:{marginTop:5},children:"A custom title can go here."})]})}}]},{key:3,preview:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e",list:o},{key:1,preview:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e",list:[{id:8386,type:"Image",link:"https://images.unsplash.com/photo-1532969200589-57f1fe57aaab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWVufGVufDB8fDB8&auto=format&fit=crop&w=900&q=60"},{id:8387,type:"Image",link:"https://images.unsplash.com/photo-1440186170739-681f007fc4d1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3300&q=80"}]},{key:2,preview:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e",list:[{id:8381,type:"Image",link:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80"},{id:8382,type:"Image",link:"https://images.unsplash.com/photo-1555353540-64580b51c258?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2426&q=80"},{id:8383,type:"Image",link:"https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3900&q=80"},{id:8384,type:"Image",link:"https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1900&q=80"},{id:8385,type:"Image",link:"https://images.unsplash.com/photo-1522932467653-e48f79727abf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2458&q=80"}]}],h=function(){var e=(0,n.useState)(!1),t=(0,s.Z)(e,2),i=t[0],o=t[1],a=(0,n.useState)(0),c=(0,s.Z)(a,2),u=c[0],d=c[1],f=(0,n.useMemo)((function(){return u}),[u]),p=(0,n.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o(t),d(e)}),[]);return(0,l.jsxs)(l.Fragment,{children:[x.map((function(e,t){return(0,l.jsx)(r.Z,{type:"primary",onClick:function(){return p(t,!0)},className:"stories-preview",children:"".concat(e.preview," ").concat(e.key)},e.key)})),i&&(0,l.jsx)(v,{list:x,initialSlide:f,setActiveStory:p})]})},w=(0,n.memo)(h),y=function(){return(0,l.jsx)("div",{className:"workshop page-container",children:(0,l.jsx)(w,{})})}}}]);
//# sourceMappingURL=383.1c1ec4d7.chunk.js.map