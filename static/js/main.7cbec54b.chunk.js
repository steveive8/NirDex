(this.webpackJsonpdepthx=this.webpackJsonpdepthx||[]).push([[0],{202:function(t,n,e){"use strict";e.r(n);var i=e(1),c=e.n(i),r=e(68),o=e.n(r),s=e(16),a=e(98),u=e(72),l=e(90),j=e(91),f=e(100),b=e(99),d=e(49),h=e(63),x=e(61),p=e(62),O=e(69),g=e(93),m=(e(149),e(31)),y=e(59),w=e(3),F=e(2),v=(Object.assign({},x.StochasticSeries.defaultProps.stroke,{top:"#37a600",middle:"#b8ab00",bottom:"#37a600"}),function(t){Object(f.a)(e,t);var n=Object(b.a)(e);function e(){return Object(l.a)(this,e),n.apply(this,arguments)}return Object(j.a)(e,[{key:"render",value:function(){var t=this.props,n=t.type,e=t.data,i=t.width,c=t.ratio,r={left:70,right:70,top:20,bottom:30},o={innerTickSize:-1*(i-r.left-r.right),tickStrokeOpacity:.2},s=Object(m.ema)().id(0).options({windowSize:20}).merge((function(t,n){t.ema20=n})).accessor((function(t){return t.ema20})),a=Object(m.ema)().id(2).options({windowSize:50}).merge((function(t,n){t.ema50=n})).accessor((function(t){return t.ema50})),l=Object(m.stochasticOscillator)().options({windowSize:14,kWindowSize:3}).merge((function(t,n){t.slowSTO=n})).accessor((function(t){return t.slowSTO})),j=Object(m.stochasticOscillator)().options({windowSize:14,kWindowSize:1}).merge((function(t,n){t.fastSTO=n})).accessor((function(t){return t.fastSTO})),f=Object(m.stochasticOscillator)().options({windowSize:14,kWindowSize:3,dWindowSize:4}).merge((function(t,n){t.fullSTO=n})).accessor((function(t){return t.fullSTO})),b=Object(m.bollingerBand)().merge((function(t,n){t.bb=n})).accessor((function(t){return t.bb})),y=b(s(a(l(j(f(e)))))),v=g.discontinuousTimeScaleProvider.inputDateAccessor((function(t){return t.date}))(y),S=v.data,k=v.xScale,z=v.xAccessor,T=v.displayXAccessor,A=[z(Object(w.last)(S)),z(S[Math.max(0,S.length-150)])];return Object(F.jsxs)(h.b,{height:500,width:i,ratio:c,margin:r,type:n,seriesName:"MSFT",data:S,xScale:k,xAccessor:z,displayXAccessor:T,xExtents:A,children:[Object(F.jsxs)(h.a,{id:1,height:325,yExtents:[function(t){return[t.high,t.low]},b.accessor(),s.accessor(),a.accessor()],padding:{top:10,bottom:20},children:[Object(F.jsx)(p.YAxis,Object(u.a)(Object(u.a)({axisAt:"left",orient:"left",ticks:5},o),{},{inverted:!0,tickStroke:"#00F9FF"})),Object(F.jsx)(p.XAxis,{axisAt:"bottom",orient:"bottom",showTicks:!1,outerTickSize:0,stroke:"#00F9FF",opacity:.5}),Object(F.jsx)(O.MouseCoordinateY,{at:"right",orient:"right",displayFormat:Object(d.b)(".2f")}),Object(F.jsx)(x.CandlestickSeries,{stroke:function(t){return t.close>t.open?"#00F9FF":"#FF0500"},wickStroke:function(t){return t.close>t.open?"#00F9FF":"#FF0500"},fill:function(t){return t.close>t.open?"#00F9FF":"#FF0500"}}),"//6BA583 // DB0000"]}),Object(F.jsxs)(h.a,{id:2,yExtents:function(t){return t.volume},height:100,origin:function(t,n){return[0,n-100]},children:[Object(F.jsx)(p.YAxis,{axisAt:"left",orient:"left",ticks:5,tickFormat:Object(d.b)(".2s"),tickStroke:"#00F9FF"}),Object(F.jsx)(x.BarSeries,{yAccessor:function(t){return t.volume},fill:function(t){return t.close>t.open?"#00F9FF":"#FF0500"}})]}),Object(F.jsx)(O.CrossHairCursor,{stroke:"#00F9FF"})]})}}]),e}(c.a.Component));v.defaultProps={type:"svg"};var S=v=Object(y.fitWidth)(v),k=e(207),z=e(17);var T=Object(z.c)("%Y-%m-%d");var A,C,B,E,M,G,I,W,Y,D,P=e(14),N=e(12),X=N.c.span(A||(A=Object(P.a)(["\n    font-weight: ",";\n    font-size: ","px;\n    line-height: ","px;\n    color: ",";\n    ",";\n    ",";\n    flex: ",";\n    font-family: ",";\n    ",";\n    ",";\n    ",";\n"])),(function(t){return t.weight}),(function(t){return t.size?t.size:15}),(function(t){return t.lh}),(function(t){return t.color}),(function(t){return t.margin}),(function(t){return t.padding}),(function(t){return t.flex}),(function(t){return t.ff}),(function(t){return t.to?"cursor: pointer;":null}),(function(t){return t.to?":hover { opacity: 0.85 }":null}),(function(t){return"none"===t.us?"user-select: none":null})),H=N.c.a(C||(C=Object(P.a)(["\n    color: white;\n    cursor: pointer;\n    :hover {\n        opacity: 0.85;\n    }\n"]))),J=N.c.div(B||(B=Object(P.a)(["\n    display: flex;\n    align-items: ",";\n    justify-content: ",";\n    ",";\n    width: ",";\n    height: ",";\n    background-color: ",";\n    ",";\n    border-radius: ",";\n    flex: ",";\n    z-index: ",";\n    ",";\n    ",";\n    ",";\n    opacity: ",";\n    position: ",";\n"])),(function(t){return t.align}),(function(t){return t.justify}),(function(t){return t.margin}),(function(t){return t.size?t.size:t.width}),(function(t){return t.size?t.size:t.height}),(function(t){return t.bg}),(function(t){return t.padding}),(function(t){return t.circle?"50%":t.br}),(function(t){return t.flex}),(function(t){return t.zIndex}),(function(t){return t.to?"cursor: pointer;":null}),(function(t){return t.to?":hover { opacity: 0.85 }":null}),(function(t){return"none"===t.us?"user-select: none":null}),(function(t){return t.opacity}),(function(t){return t.position})),L=Object(N.c)(J)(E||(E=Object(P.a)(["\n    flex-direction: row;\n"]))),R=Object(N.c)(J)(M||(M=Object(P.a)(["\n    flex-direction: column;\n"]))),U=(N.c.div(G||(G=Object(P.a)(["\n    svg {\n        opacity: 0.85;\n        :hover {\n            opacity: 1;\n        };\n    };\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    z-index: ",";\n    justify-content: center;\n    ",";\n    flex: ",";\n"])),(function(t){return t.zIndex}),(function(t){return t.margin}),(function(t){return t.flex})),N.c.img(I||(I=Object(P.a)(["\n    top: ",";\n    position: ",";\n    object-fit: ",";\n    ",";\n    width: ",";\n    height: ",";\n    opacity: ",";\n"])),(function(t){return t.top}),(function(t){return t.position}),(function(t){return t.of}),(function(t){return t.margin}),(function(t){return t.width}),(function(t){return t.height}),(function(t){return t.opacity}))),q=(Object(N.c)(J)(W||(W=Object(P.a)(["\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    overflow: hidden;\n"]))),function(t){Object(s.a)(t);var n=Object(i.useState)(null),e=Object(a.a)(n,2),c=e[0],r=e[1];return Object(i.useEffect)((function(){fetch("https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv").then((function(t){return t.text()})).then((function(t){return Object(k.a)(t,(n=T,function(t){return t.date=n(t.date),t.open=+t.open,t.high=+t.high,t.low=+t.low,t.close=+t.close,t.volume=+t.volume,t}));var n})).then((function(t){console.log(t),r(t)}))}),[]),Object(F.jsx)(F.Fragment,{children:null===c?Object(F.jsx)("div",{children:"Loading"}):Object(F.jsx)(J,{className:"chartbox",children:Object(F.jsx)(y.TypeChooser,{children:function(t){return Object(F.jsx)(S,{type:t,data:c})}})})})}),K=function(t){return Object(s.a)(t),Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(q,{})})},Q=Object(N.c)(L)(Y||(Y=Object(P.a)(["\n    background-color: rgb(28, 30, 42);\n    border-radius: 20px;\n    margin: 10px;\n    width: 100%;\n    min-height: 70px;\n    padding: 12.5px;\n    :hover {\n        cursor: pointer;\n        opacity: 0.9;\n    };\n"]))),V=function(t){var n=t.src,e=t.text,i=t.height,c=void 0===i?"30px":i;return Object(F.jsxs)(Q,{align:"center",children:[Object(F.jsx)(U,{src:n,height:c,of:"contain"}),Object(F.jsx)(R,{margin:"margin-left: 15px;",children:Object(F.jsx)(X,{children:e})})]})},Z=e.p+"static/media/bitcoin.7a4072aa.png",$=e.p+"static/media/ethereum.6245256a.png",_=e.p+"static/media/xrp.a5083b82.png",tt=e.p+"static/media/dogecoin.8b6760c3.svg",nt=e.p+"static/media/depthchain.808cbe12.png",et=function(t){return Object(s.a)(t),Object(F.jsx)(R,{flex:1,children:Object(F.jsxs)(R,{position:"fixed",padding:"padding: 10px 30px",width:"30%",height:"100%",style:{right:0,overflowY:"scroll"},children:[Object(F.jsx)(V,{src:Z,text:"Bitcoin"}),Object(F.jsx)(V,{src:nt,height:"22px",text:"Depth"}),Object(F.jsx)(V,{src:$,text:"Ethereum"}),Object(F.jsx)(V,{src:_,text:"Ripple"}),Object(F.jsx)(V,{src:tt,text:"Doge"}),Object(F.jsx)(V,{}),Object(F.jsx)(V,{}),Object(F.jsx)(V,{}),Object(F.jsx)(V,{}),Object(F.jsx)(V,{}),Object(F.jsx)(V,{}),Object(F.jsx)(V,{}),Object(F.jsx)(V,{}),Object(F.jsx)(V,{})]})})},it=function(t){return Object(s.a)(t),Object(F.jsx)(F.Fragment,{})},ct=function(t){return Object(s.a)(t),Object(F.jsx)(R,{style:{width:"100%",height:"100%"},children:Object(F.jsxs)(L,{style:{width:"100%",height:"100%"},children:[Object(F.jsxs)(R,{flex:3,children:[Object(F.jsx)(K,{}),Object(F.jsx)(it,{})]}),Object(F.jsx)(et,{})]})})},rt=e(97),ot=Object(N.a)(D||(D=Object(P.a)(["\n    ",";\n    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');\n    * {\n        box-sizing: border-box;\n    }\n    @font-face {\n        font-family: 'Geometos';\n        font-style: normal;\n        font-weight: normal;\n        src: local('Geometos'), url('./Geometos.ttf') format('ttf'),\n        url('./Geometos.ttf')  format('truetype')\n    }\n    @font-face {\n        font-family: 'telegrafico';\n        font-style: normal;\n        font-weight: normal;\n        src: local('Telegrafico'), url('./telegrafico.ttf') format('ttf'),\n        url('./Geometos.ttf')  format('truetype')\n    }\n    body {\n        font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'telegrafico';\n        text-rendering:optimizeLegibility;\n        background-color: rgb(10,18,30);\n        color: white;\n    }\n    a {\n        text-decoration: none;\n        color: black;\n    }\n    input {\n        border: 0;\n    }\n    input:focus {\n        outline: none;\n    }\n    .chartbox {\n        overflow: hidden;\n    }\n    .chartbox > div {\n        width: 100%;\n        background-color: rgba(0,0,0,0);\n    }\n    .chartbox select, .chartbox label {\n        display: none;\n    }\n"])),rt.a),st=e.p+"static/media/logo.656a8c9a.png",at=function(t){var n=t.width,e=t.height;return Object(F.jsx)(U,{width:n,height:e,src:st})},ut=function(t){return Object(s.a)(t),Object(F.jsxs)(L,{bg:"rgb(24, 30, 33, 0.5)",width:"100vw",height:"80px",padding:"padding: 20px 30px;",align:"center",position:"fixed",style:{top:0},zIndex:10,children:[Object(F.jsx)(H,{children:Object(F.jsx)(at,{height:"43px",of:"contain"})}),Object(F.jsxs)(L,{flex:1,justify:"flex-end",align:"center",children:[Object(F.jsx)(H,{children:Object(F.jsx)(X,{margin:"margin-left: 38px;",children:"Exchange"})}),Object(F.jsx)(H,{children:Object(F.jsx)(X,{margin:"margin-left: 38px;",children:"Trade"})}),Object(F.jsx)(H,{children:Object(F.jsx)(X,{margin:"margin-left: 38px;",children:"Coin Status"})}),Object(F.jsx)(H,{children:Object(F.jsx)(X,{margin:"margin-left: 38px;",children:"My Profile"})})]})]})},lt=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ot,{}),Object(F.jsxs)("div",{children:[Object(F.jsx)(ut,{}),Object(F.jsx)("div",{style:{paddingTop:80,height:"100vh",width:"100vw"},children:Object(F.jsx)(ct,{})})]})]})};o.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(lt,{})}),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.7cbec54b.chunk.js.map