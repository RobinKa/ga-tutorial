(this["webpackJsonptyped-ga-ghpages"]=this["webpackJsonptyped-ga-ghpages"]||[]).push([[0],{12:function(e,a,_){"use strict";_.r(a),_.d(a,"pointCoordinates",(function(){return d})),_.d(a,"PointElementPGA2D",(function(){return c})),_.d(a,"LineElementPGA2D",(function(){return l})),_.d(a,"SceneView",(function(){return v}));var t=_(33),o=_(14),r=_(0),i=_.n(r),n=_(13),d=function(e){var a=1/e.e12;return[-e.e02*a,e.e01*a]};function c(e){var a=e.point,_=e.radius,d=e.fill,c=e.label,l=e.trailCount,s=e.trailStroke,v=-a.e02/a.e12,u=a.e01/a.e12,E=Object(r.useState)([]),M=Object(o.a)(E,2),P=M[0],m=M[1],O=Object(r.useMemo)((function(){return P.flat().join(" ")}),[P]),h=Object(r.useCallback)((function(){if(l){if(0===P.length||P[P.length-1][0]!==v||P[P.length-1][1]!==u){var e=Object(t.a)(P);e.length>l&&(e=e.slice(1)),e.push([v,u]),m(e)}}else m([])}),[v,u,P,l]);return Object(r.useEffect)(h,[v,u]),i.a.createElement("g",null,i.a.createElement("title",null,n.repr(a)),P.length>0&&i.a.createElement("polyline",{fill:"none",stroke:s||"#F37121",strokeWidth:.5*(_||1),points:O}),i.a.createElement("circle",{cx:v,cy:u,r:_||1,fill:d||"#F37121",stroke:"white"}),c&&i.a.createElement("text",{x:v,y:u,dominantBaseline:"middle",fontWeight:"800",textAnchor:"middle",fontSize:_||1},c))}function l(e){var a=e.line,_=e.width,t=e.stroke,o=e.label,d=Object(r.useMemo)((function(){if(Math.abs(a.e2)>Math.abs(a.e1)){return[-100,-(-100*a.e1+a.e0)/a.e2,100,-(100*a.e1+a.e0)/a.e2]}return[-(-100*a.e2+a.e0)/a.e1,-100,-(100*a.e2+a.e0)/a.e1,100]}),[a]);return i.a.createElement("g",null,i.a.createElement("title",null,n.repr(a)),i.a.createElement("line",{x1:d[0],y1:d[1],x2:d[2],y2:d[3],strokeWidth:_||1,stroke:t||"#F37121"}),o&&i.a.createElement("text",{x:(d[0]+d[2])/2,y:(d[1]+d[3])/2,dominantBaseline:"middle",fontWeight:"800",textAnchor:"middle",fontSize:1},o))}function s(){for(var e=[],a=[],_=-10;_<=10;_++)e.push(_),a.push(_);var t=Object(r.useCallback)((function(e){return 0===e?1:e%5===0?.5:.25}),[]);return i.a.createElement("g",null,i.a.createElement("g",null,a.map((function(e){return i.a.createElement("g",{key:e},i.a.createElement("line",{x1:10*e,x2:10*e,y1:-100,y2:100,stroke:"#CCCCCC",strokeWidth:t(e)}),e%2===0&&0!==e&&i.a.createElement("text",{x:10*e,y:-5,fill:"white",fontSize:5,textAnchor:"middle"},"".concat((10*e).toFixed(0))))}))),i.a.createElement("g",null,e.map((function(e){return i.a.createElement("g",{key:e},i.a.createElement("line",{x1:-100,x2:100,y1:10*e,y2:10*e,stroke:"#CCCCCC",strokeWidth:t(e)}),e%2===0&&i.a.createElement("text",{x:5,y:10*e-5,fill:"white",fontSize:5,textAnchor:"middle"},"".concat((10*e).toFixed(0))))}))))}function v(e){var a=e.scene,_=e.style;return i.a.createElement("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMinYMin slice",style:_},i.a.createElement("rect",{fill:"#111D6E",width:"100%",height:"100%"}),i.a.createElement("g",{transform:"translate(50, 50) scale(0.5)"},i.a.createElement(s,null),a.lines&&a.lines.map((function(e,a){return i.a.createElement(l,Object.assign({},e,{key:a}))})),a.points&&a.points.map((function(e,a){return i.a.createElement(c,Object.assign({},e,{key:a}))}))),a.infos&&a.infos.map((function(e,a){return i.a.createElement("text",{key:a,fontWeight:"100",x:"0",y:1+a,fontSize:"1",fill:"#F37121"},e)})))}},13:function(e,a,_){"use strict";_.r(a),_.d(a,"add",(function(){return t})),_.d(a,"sub",(function(){return o})),_.d(a,"dual",(function(){return r})),_.d(a,"geometricProduct",(function(){return i})),_.d(a,"innerProduct",(function(){return n})),_.d(a,"exteriorProduct",(function(){return d})),_.d(a,"multiply",(function(){return c})),_.d(a,"div",(function(){return l})),_.d(a,"reversion",(function(){return s})),_.d(a,"repr",(function(){return v})),_.d(a,"regressiveProduct",(function(){return u})),_.d(a,"sandwichProduct",(function(){return E})),_.d(a,"commutatorProduct",(function(){return M})),_.d(a,"exponential",(function(){return P}));var t=function(e,a){return{scalar:void 0!==e.scalar||void 0!==a.scalar?(e.scalar||0)+(a.scalar||0):void 0,e0:void 0!==e.e0||void 0!==a.e0?(e.e0||0)+(a.e0||0):void 0,e1:void 0!==e.e1||void 0!==a.e1?(e.e1||0)+(a.e1||0):void 0,e2:void 0!==e.e2||void 0!==a.e2?(e.e2||0)+(a.e2||0):void 0,e01:void 0!==e.e01||void 0!==a.e01?(e.e01||0)+(a.e01||0):void 0,e02:void 0!==e.e02||void 0!==a.e02?(e.e02||0)+(a.e02||0):void 0,e12:void 0!==e.e12||void 0!==a.e12?(e.e12||0)+(a.e12||0):void 0,e012:void 0!==e.e012||void 0!==a.e012?(e.e012||0)+(a.e012||0):void 0}},o=function(e,a){return{scalar:void 0!==e.scalar||void 0!==a.scalar?(e.scalar||0)-(a.scalar||0):void 0,e0:void 0!==e.e0||void 0!==a.e0?(e.e0||0)-(a.e0||0):void 0,e1:void 0!==e.e1||void 0!==a.e1?(e.e1||0)-(a.e1||0):void 0,e2:void 0!==e.e2||void 0!==a.e2?(e.e2||0)-(a.e2||0):void 0,e01:void 0!==e.e01||void 0!==a.e01?(e.e01||0)-(a.e01||0):void 0,e02:void 0!==e.e02||void 0!==a.e02?(e.e02||0)-(a.e02||0):void 0,e12:void 0!==e.e12||void 0!==a.e12?(e.e12||0)-(a.e12||0):void 0,e012:void 0!==e.e012||void 0!==a.e012?(e.e012||0)-(a.e012||0):void 0}},r=function(e){return{scalar:void 0!==e.e012?1*e.e012:void 0,e0:void 0!==e.e12?1*e.e12:void 0,e1:void 0!==e.e02?-1*e.e02:void 0,e2:void 0!==e.e01?1*e.e01:void 0,e01:void 0!==e.e2?1*e.e2:void 0,e02:void 0!==e.e1?-1*e.e1:void 0,e12:void 0!==e.e0?1*e.e0:void 0,e012:void 0!==e.scalar?1*e.scalar:void 0}},i=function(e,a){var _=void 0,t=void 0!==e.scalar&&void 0!==a.scalar,o=void 0!==e.e1&&void 0!==a.e1,r=void 0!==e.e2&&void 0!==a.e2,i=void 0!==e.e12&&void 0!==a.e12;(t||o||r||i)&&(_=0,t&&(_+=e.scalar*a.scalar*1),o&&(_+=e.e1*a.e1*1),r&&(_+=e.e2*a.e2*1),i&&(_+=e.e12*a.e12*-1));var n=void 0,d=void 0!==e.scalar&&void 0!==a.e0,c=void 0!==e.e0&&void 0!==a.scalar,l=void 0!==e.e1&&void 0!==a.e01,s=void 0!==e.e2&&void 0!==a.e02,v=void 0!==e.e01&&void 0!==a.e1,u=void 0!==e.e02&&void 0!==a.e2,E=void 0!==e.e12&&void 0!==a.e012,M=void 0!==e.e012&&void 0!==a.e12;(d||c||l||s||v||u||E||M)&&(n=0,d&&(n+=e.scalar*a.e0*1),c&&(n+=e.e0*a.scalar*1),l&&(n+=e.e1*a.e01*-1),s&&(n+=e.e2*a.e02*-1),v&&(n+=e.e01*a.e1*1),u&&(n+=e.e02*a.e2*1),E&&(n+=e.e12*a.e012*-1),M&&(n+=e.e012*a.e12*-1));var P=void 0,m=void 0!==e.scalar&&void 0!==a.e1,O=void 0!==e.e1&&void 0!==a.scalar,h=void 0!==e.e2&&void 0!==a.e12,p=void 0!==e.e12&&void 0!==a.e2;(m||O||h||p)&&(P=0,m&&(P+=e.scalar*a.e1*1),O&&(P+=e.e1*a.scalar*1),h&&(P+=e.e2*a.e12*-1),p&&(P+=e.e12*a.e2*1));var f=void 0,D=void 0!==e.scalar&&void 0!==a.e2,b=void 0!==e.e1&&void 0!==a.e12,g=void 0!==e.e2&&void 0!==a.scalar,x=void 0!==e.e12&&void 0!==a.e1;(D||b||g||x)&&(f=0,D&&(f+=e.scalar*a.e2*1),b&&(f+=e.e1*a.e12*1),g&&(f+=e.e2*a.scalar*1),x&&(f+=e.e12*a.e1*-1));var A=void 0,C=void 0!==e.scalar&&void 0!==a.e01,R=void 0!==e.e0&&void 0!==a.e1,w=void 0!==e.e1&&void 0!==a.e0,y=void 0!==e.e2&&void 0!==a.e012,I=void 0!==e.e01&&void 0!==a.scalar,T=void 0!==e.e02&&void 0!==a.e12,B=void 0!==e.e12&&void 0!==a.e02,W=void 0!==e.e012&&void 0!==a.e2;(C||R||w||y||I||T||B||W)&&(A=0,C&&(A+=e.scalar*a.e01*1),R&&(A+=e.e0*a.e1*1),w&&(A+=e.e1*a.e0*-1),y&&(A+=e.e2*a.e012*1),I&&(A+=e.e01*a.scalar*1),T&&(A+=e.e02*a.e12*-1),B&&(A+=e.e12*a.e02*1),W&&(A+=e.e012*a.e2*1));var L=void 0,U=void 0!==e.scalar&&void 0!==a.e02,K=void 0!==e.e0&&void 0!==a.e2,k=void 0!==e.e1&&void 0!==a.e012,F=void 0!==e.e2&&void 0!==a.e0,j=void 0!==e.e01&&void 0!==a.e12,S=void 0!==e.e02&&void 0!==a.scalar,q=void 0!==e.e12&&void 0!==a.e01,z=void 0!==e.e012&&void 0!==a.e1;(U||K||k||F||j||S||q||z)&&(L=0,U&&(L+=e.scalar*a.e02*1),K&&(L+=e.e0*a.e2*1),k&&(L+=e.e1*a.e012*-1),F&&(L+=e.e2*a.e0*-1),j&&(L+=e.e01*a.e12*1),S&&(L+=e.e02*a.scalar*1),q&&(L+=e.e12*a.e01*-1),z&&(L+=e.e012*a.e1*-1));var $=void 0,G=void 0!==e.scalar&&void 0!==a.e12,V=void 0!==e.e1&&void 0!==a.e2,J=void 0!==e.e2&&void 0!==a.e1,Y=void 0!==e.e12&&void 0!==a.scalar;(G||V||J||Y)&&($=0,G&&($+=e.scalar*a.e12*1),V&&($+=e.e1*a.e2*1),J&&($+=e.e2*a.e1*-1),Y&&($+=e.e12*a.scalar*1));var H=void 0,N=void 0!==e.scalar&&void 0!==a.e012,X=void 0!==e.e0&&void 0!==a.e12,Q=void 0!==e.e1&&void 0!==a.e02,Z=void 0!==e.e2&&void 0!==a.e01,ee=void 0!==e.e01&&void 0!==a.e2,ae=void 0!==e.e02&&void 0!==a.e1,_e=void 0!==e.e12&&void 0!==a.e0,te=void 0!==e.e012&&void 0!==a.scalar;return(N||X||Q||Z||ee||ae||_e||te)&&(H=0,N&&(H+=e.scalar*a.e012*1),X&&(H+=e.e0*a.e12*1),Q&&(H+=e.e1*a.e02*-1),Z&&(H+=e.e2*a.e01*1),ee&&(H+=e.e01*a.e2*1),ae&&(H+=e.e02*a.e1*-1),_e&&(H+=e.e12*a.e0*1),te&&(H+=e.e012*a.scalar*1)),{scalar:_,e0:n,e1:P,e2:f,e01:A,e02:L,e12:$,e012:H}},n=function(e,a){var _=void 0,t=void 0!==e.scalar&&void 0!==a.scalar,o=void 0!==e.e1&&void 0!==a.e1,r=void 0!==e.e2&&void 0!==a.e2,i=void 0!==e.e12&&void 0!==a.e12;(t||o||r||i)&&(_=0,t&&(_+=e.scalar*a.scalar*1),o&&(_+=e.e1*a.e1*1),r&&(_+=e.e2*a.e2*1),i&&(_+=e.e12*a.e12*-1));var n=void 0,d=void 0!==e.scalar&&void 0!==a.e0,c=void 0!==e.e0&&void 0!==a.scalar,l=void 0!==e.e1&&void 0!==a.e01,s=void 0!==e.e2&&void 0!==a.e02,v=void 0!==e.e01&&void 0!==a.e1,u=void 0!==e.e02&&void 0!==a.e2,E=void 0!==e.e12&&void 0!==a.e012,M=void 0!==e.e012&&void 0!==a.e12;(d||c||l||s||v||u||E||M)&&(n=0,d&&(n+=e.scalar*a.e0*1),c&&(n+=e.e0*a.scalar*1),l&&(n+=e.e1*a.e01*-1),s&&(n+=e.e2*a.e02*-1),v&&(n+=e.e01*a.e1*1),u&&(n+=e.e02*a.e2*1),E&&(n+=e.e12*a.e012*-1),M&&(n+=e.e012*a.e12*-1));var P=void 0,m=void 0!==e.scalar&&void 0!==a.e1,O=void 0!==e.e1&&void 0!==a.scalar,h=void 0!==e.e2&&void 0!==a.e12,p=void 0!==e.e12&&void 0!==a.e2;(m||O||h||p)&&(P=0,m&&(P+=e.scalar*a.e1*1),O&&(P+=e.e1*a.scalar*1),h&&(P+=e.e2*a.e12*-1),p&&(P+=e.e12*a.e2*1));var f=void 0,D=void 0!==e.scalar&&void 0!==a.e2,b=void 0!==e.e1&&void 0!==a.e12,g=void 0!==e.e2&&void 0!==a.scalar,x=void 0!==e.e12&&void 0!==a.e1;(D||b||g||x)&&(f=0,D&&(f+=e.scalar*a.e2*1),b&&(f+=e.e1*a.e12*1),g&&(f+=e.e2*a.scalar*1),x&&(f+=e.e12*a.e1*-1));var A=void 0,C=void 0!==e.scalar&&void 0!==a.e01,R=void 0!==e.e2&&void 0!==a.e012,w=void 0!==e.e01&&void 0!==a.scalar,y=void 0!==e.e012&&void 0!==a.e2;(C||R||w||y)&&(A=0,C&&(A+=e.scalar*a.e01*1),R&&(A+=e.e2*a.e012*1),w&&(A+=e.e01*a.scalar*1),y&&(A+=e.e012*a.e2*1));var I=void 0,T=void 0!==e.scalar&&void 0!==a.e02,B=void 0!==e.e1&&void 0!==a.e012,W=void 0!==e.e02&&void 0!==a.scalar,L=void 0!==e.e012&&void 0!==a.e1;(T||B||W||L)&&(I=0,T&&(I+=e.scalar*a.e02*1),B&&(I+=e.e1*a.e012*-1),W&&(I+=e.e02*a.scalar*1),L&&(I+=e.e012*a.e1*-1));var U=void 0,K=void 0!==e.scalar&&void 0!==a.e12,k=void 0!==e.e12&&void 0!==a.scalar;(K||k)&&(U=0,K&&(U+=e.scalar*a.e12*1),k&&(U+=e.e12*a.scalar*1));var F=void 0,j=void 0!==e.scalar&&void 0!==a.e012,S=void 0!==e.e012&&void 0!==a.scalar;return(j||S)&&(F=0,j&&(F+=e.scalar*a.e012*1),S&&(F+=e.e012*a.scalar*1)),{scalar:_,e0:n,e1:P,e2:f,e01:A,e02:I,e12:U,e012:F}},d=function(e,a){var _=void 0,t=void 0!==e.scalar&&void 0!==a.scalar;t&&(_=0,t&&(_+=e.scalar*a.scalar*1));var o=void 0,r=void 0!==e.scalar&&void 0!==a.e0,i=void 0!==e.e0&&void 0!==a.scalar;(r||i)&&(o=0,r&&(o+=e.scalar*a.e0*1),i&&(o+=e.e0*a.scalar*1));var n=void 0,d=void 0!==e.scalar&&void 0!==a.e1,c=void 0!==e.e1&&void 0!==a.scalar;(d||c)&&(n=0,d&&(n+=e.scalar*a.e1*1),c&&(n+=e.e1*a.scalar*1));var l=void 0,s=void 0!==e.scalar&&void 0!==a.e2,v=void 0!==e.e2&&void 0!==a.scalar;(s||v)&&(l=0,s&&(l+=e.scalar*a.e2*1),v&&(l+=e.e2*a.scalar*1));var u=void 0,E=void 0!==e.scalar&&void 0!==a.e01,M=void 0!==e.e0&&void 0!==a.e1,P=void 0!==e.e1&&void 0!==a.e0,m=void 0!==e.e01&&void 0!==a.scalar;(E||M||P||m)&&(u=0,E&&(u+=e.scalar*a.e01*1),M&&(u+=e.e0*a.e1*1),P&&(u+=e.e1*a.e0*-1),m&&(u+=e.e01*a.scalar*1));var O=void 0,h=void 0!==e.scalar&&void 0!==a.e02,p=void 0!==e.e0&&void 0!==a.e2,f=void 0!==e.e2&&void 0!==a.e0,D=void 0!==e.e02&&void 0!==a.scalar;(h||p||f||D)&&(O=0,h&&(O+=e.scalar*a.e02*1),p&&(O+=e.e0*a.e2*1),f&&(O+=e.e2*a.e0*-1),D&&(O+=e.e02*a.scalar*1));var b=void 0,g=void 0!==e.scalar&&void 0!==a.e12,x=void 0!==e.e1&&void 0!==a.e2,A=void 0!==e.e2&&void 0!==a.e1,C=void 0!==e.e12&&void 0!==a.scalar;(g||x||A||C)&&(b=0,g&&(b+=e.scalar*a.e12*1),x&&(b+=e.e1*a.e2*1),A&&(b+=e.e2*a.e1*-1),C&&(b+=e.e12*a.scalar*1));var R=void 0,w=void 0!==e.scalar&&void 0!==a.e012,y=void 0!==e.e0&&void 0!==a.e12,I=void 0!==e.e1&&void 0!==a.e02,T=void 0!==e.e2&&void 0!==a.e01,B=void 0!==e.e01&&void 0!==a.e2,W=void 0!==e.e02&&void 0!==a.e1,L=void 0!==e.e12&&void 0!==a.e0,U=void 0!==e.e012&&void 0!==a.scalar;return(w||y||I||T||B||W||L||U)&&(R=0,w&&(R+=e.scalar*a.e012*1),y&&(R+=e.e0*a.e12*1),I&&(R+=e.e1*a.e02*-1),T&&(R+=e.e2*a.e01*1),B&&(R+=e.e01*a.e2*1),W&&(R+=e.e02*a.e1*-1),L&&(R+=e.e12*a.e0*1),U&&(R+=e.e012*a.scalar*1)),{scalar:_,e0:o,e1:n,e2:l,e01:u,e02:O,e12:b,e012:R}},c=function(e,a){return{scalar:void 0!==e.scalar?e.scalar*a:void 0,e0:void 0!==e.e0?e.e0*a:void 0,e1:void 0!==e.e1?e.e1*a:void 0,e2:void 0!==e.e2?e.e2*a:void 0,e01:void 0!==e.e01?e.e01*a:void 0,e02:void 0!==e.e02?e.e02*a:void 0,e12:void 0!==e.e12?e.e12*a:void 0,e012:void 0!==e.e012?e.e012*a:void 0}},l=function(e,a){return{scalar:void 0!==e.scalar?e.scalar/a:void 0,e0:void 0!==e.e0?e.e0/a:void 0,e1:void 0!==e.e1?e.e1/a:void 0,e2:void 0!==e.e2?e.e2/a:void 0,e01:void 0!==e.e01?e.e01/a:void 0,e02:void 0!==e.e02?e.e02/a:void 0,e12:void 0!==e.e12?e.e12/a:void 0,e012:void 0!==e.e012?e.e012/a:void 0}},s=function(e){return{scalar:e.scalar&&e.scalar,e0:e.e0&&e.e0,e1:e.e1&&e.e1,e2:e.e2&&e.e2,e01:e.e01&&-e.e01,e02:e.e02&&-e.e02,e12:e.e12&&-e.e12,e012:e.e012&&-e.e012}},v=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,_="";return void 0!==e.scalar&&(_+=""===_?e.scalar.toFixed(a)+"":e.scalar>=0?" + "+e.scalar.toFixed(a):" - "+Math.abs(e.scalar).toFixed(a)),void 0!==e.e0&&(_+=""===_?e.e0.toFixed(a)+"e0":e.e0>=0?" + "+e.e0.toFixed(a)+"e0":" - "+Math.abs(e.e0).toFixed(a)+"e0"),void 0!==e.e1&&(_+=""===_?e.e1.toFixed(a)+"e1":e.e1>=0?" + "+e.e1.toFixed(a)+"e1":" - "+Math.abs(e.e1).toFixed(a)+"e1"),void 0!==e.e2&&(_+=""===_?e.e2.toFixed(a)+"e2":e.e2>=0?" + "+e.e2.toFixed(a)+"e2":" - "+Math.abs(e.e2).toFixed(a)+"e2"),void 0!==e.e01&&(_+=""===_?e.e01.toFixed(a)+"e01":e.e01>=0?" + "+e.e01.toFixed(a)+"e01":" - "+Math.abs(e.e01).toFixed(a)+"e01"),void 0!==e.e02&&(_+=""===_?e.e02.toFixed(a)+"e02":e.e02>=0?" + "+e.e02.toFixed(a)+"e02":" - "+Math.abs(e.e02).toFixed(a)+"e02"),void 0!==e.e12&&(_+=""===_?e.e12.toFixed(a)+"e12":e.e12>=0?" + "+e.e12.toFixed(a)+"e12":" - "+Math.abs(e.e12).toFixed(a)+"e12"),void 0!==e.e012&&(_+=""===_?e.e012.toFixed(a)+"e012":e.e012>=0?" + "+e.e012.toFixed(a)+"e012":" - "+Math.abs(e.e012).toFixed(a)+"e012"),_},u=function(e,a){return r(d(r(e),r(a)))},E=function(e,a){return i(a,i(e,s(a)))},M=function(e,a){return c(o(i(e,a),i(a,e)),.5)},P=function(e){var a=i(e,e);if(void 0===a.scalar)throw new Error("Input to exponential needs to square to scalar");var _=a.scalar;if(_<-.1){var o=Math.sign(_)*Math.sqrt(Math.abs(_));return t({scalar:Math.cos(o)},c(e,Math.sin(o)/o))}if(_>.1){var r=Math.sign(_)*Math.sqrt(Math.abs(_));return t({scalar:Math.cosh(r)},c(e,Math.sinh(r)/r))}return t({scalar:1},e)}},30:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(17),react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),_App_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(40),_App_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__),_InteractiveCode__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7),_ga_ga_pp__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(31),_ga_ga_zpp__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(13),_ga_viz2d__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(12),visualizerExample='// Render a point at x: 50, y: 10\nrenderPointPGA({\n    e02: -50,\n    e01: 10,\n    e12: 1\n}, "lime");\n\n// Render the line 1x + 1y = 10\nrenderLinePGA({\n    e0: 10,\n    e1: 1,\n    e2: -1\n}, "orange");',textA="\nUsually introductions to GA begin by defining various rules and going over derivations before doing anything useful with them. I will also define some rules but try to get to the interesting stuff more quickly.\n",textA2="\nLike for the standard 2D vector algebra in geometric algebra we have two basis vectors $e_x, e_y$ using which arbitrary vectors $v = x e_x + y e_y$ can be formed. Below is some runnable and editable code that forms\nsuch a vector and then displays them. The basis vectors $e_x, e_y$ are labeled e0 and e1 in the code.\n",codeA2='// Render point at x=10, y=-60\nrenderPointGA({ e0: 10, e1: -60 })\n\n// Render point at x=-50, y=80\nrenderPointGA({ e0: -50, e1: 80}, "red")\n',textA3="Multiplying two same basis vectors together will result in $+1$ if they are the same (ie. $e_x e_x = 1, e_y e_y = 1$) similarly to how the dot product in standard vector algebra works.\nThe product which defines Geometric Algebra and is its most important aspect is called the Geometric Product. Let's verify these results with the code again this time just logging some text instead of visualizing.\n",codeA3='console.log("e0^2:", ga.geometricProduct({ e0: 1 }, { e0: 1 }))\nconsole.log("e1^2:", ga.geometricProduct({ e1: 1 }, { e1: 1 }))',textB="What is new is that we can also multiply two different basis vectors and the result will not be zero, but can't be simplified further $e_x e_y = e_{xy}$.\n$e_xy$ here is not something new, it just stands for the two basis vectors multiplied together as a shorthand way of writing. These elements made up of two basis vectors are called bivectors.\n",textB2="\nImportantly the order of the product matters. A rule is that when you swap the factors of a product of basis vectors you pick up a minus sign, for example: $e_{xy} = e_x e_y = -e_y e_x = -e_{yx}$.\n",codeB='console.log("e0 e1:", ga.geometricProduct({ e0: 1 }, { e1: 1 }))\nconsole.log("e1 e0:", ga.geometricProduct({ e1: 1 }, { e0: 1 }))',textC="\nLet's now use these three basic rules we just learnt and see what some results are when we use them:\n\n\\begin{aligned}\ne_x e_y e_x & = & \\text{(rewrite as shorthand)} \\\\\ne_{xyx} & = & \\text{(Swap neighbours on the right, pick up minus sign)} \\\\\n-e_{xxy} & = & \\text{(Multiplying same basis vectors results in 1, e_xx = e_x e_x = 1)} \\\\\n-e_y &\n\\end{aligned}\n\nWe can verify these results with the code:\n",codeC='var a = ga.geometricProduct({ e0: 1 }, { e1: 1 }) // e_x e_y\nvar b = ga.geometricProduct(a, { e0: 1 }) // e_x e_y e_x\nconsole.log("e0 e1 e0:", b)',textD="Hopefully this gives some idea of how the rules work and how to use them. Now for something more interesting, let's see what happens if we multiply of these together, that is, squaring it:\n",codeD='console.log("e01^2", ga.geometricProduct({ e01: 1 }, { e01: 1 }))',textE="\n\\begin{equation}\ne_{xy}^2 = e_{xy} e_{xy} = e_{xyxy} = -e_{xyyx} = -e_{xx} = -1\n\\end{equation}\n\nWe can see the square of the bivector $e_{xy}$ is $-1$, the same as the square of the imaginary unit of the complex numbers.\n",textF="\nAs mentioned before $e_{xy}$ can be identified as the imaginary unit $i$ of complex numbers hence we can represent complex numbers as $a + b e_{xy}$ and a rotation by an arbitrary angle $\\phi$\ncan be performed just like with complex numbers using Euler's formula\n\n\\begin{equation}\nR(\\phi) = e^{\\phi e_{xy}} = cos(\\phi) + e_{xy} sin(\\phi)\n\\end{equation}\n\nThe object $R$ you get after exponentiating is called a rotor (because it rotates when you multiply with it, d'uh).\n\nUnlike with complex numbers now however, we can multiply a vector by a rotor directly instead of having to treat vectors as if they were complex numbers.\n",codeF='var phi = Math.PI * 3 / 4 // 3/4 pi is 135\xb0\n\n// e^(phi e_xy)\nvar r = ga.exponential(\n    ga.geometricProduct(\n        { scalar: phi },\n        { e01: 1 }\n    )\n)\n\nvar p = { e0: 70, e1: 0 }\n\nvar rotatedP = ga.geometricProduct(r, p) // p rotated by 45\xb0\n\nrenderPointGA({ e0: 0, e1: 0 }, "purple") // Origin\nrenderPointGA(p)\nrenderPointGA(rotatedP, "red")',textG="\n\\begin{equation}\nv R(\\phi) = (x e_x + y e_y) (cos(\\phi) + e_{xy} sin(\\phi)) = e_x (x cos(\\phi) - y sin(\\phi)) + e_y (x sin(\\phi) + y cos(\\phi))\n\\end{equation}\n\nWe can see that the imaginary unit is actually a rotation in the XY plane as the bivector $e_{xy}$ is formed by multiplying the two basis vectors together, so in some sense it represents the XY plane.\n";function GATutorial(){return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){eval("if (MathJax && MathJax.typeset) MathJax.typeset();")}),[]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Geometric Algebra Basics"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,textA),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,textA2),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InteractiveCode__WEBPACK_IMPORTED_MODULE_5__.a,{sourceCode:codeA2,hideOutput:!0,withVisualizer:!0}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,textA3),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InteractiveCode__WEBPACK_IMPORTED_MODULE_5__.a,{sourceCode:codeA3}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,textB),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,textB2),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InteractiveCode__WEBPACK_IMPORTED_MODULE_5__.a,{sourceCode:codeB}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,textC),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InteractiveCode__WEBPACK_IMPORTED_MODULE_5__.a,{sourceCode:codeC}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,textD),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InteractiveCode__WEBPACK_IMPORTED_MODULE_5__.a,{sourceCode:codeD}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,textE),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Using GA to perform 2D rotations"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,textF),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InteractiveCode__WEBPACK_IMPORTED_MODULE_5__.a,{sourceCode:codeF,hideOutput:!0,withVisualizer:!0}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,textG),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.b,{to:"/pga"},"2. Projective Geometric Algebra")))}function PGATutorial(){return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){eval("if (MathJax && MathJax.typeset) MathJax.typeset();")}),[]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Points and Lines"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InteractiveCode__WEBPACK_IMPORTED_MODULE_5__.a,{sourceCode:visualizerExample,hideOutput:!0,withVisualizer:!0}))}function TutorialIndex(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Index"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"This tutorial tries to teach Geometric Algebra (GA) in an interactive way with runnable code and visualizations. It is not meant to be an entirely bottom-up way where we try to derive every single result. Instead the focus is on trying to create an understanding for GA and gradually introduce new things while directly applying the learnt concepts."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,"Sections"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.b,{to:"/ga-basics"},"Geometric Algebra Basics")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.b,{to:"/pga"},"Projective Geometric Algebra"))))}function App(){return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var wnd=window;wnd.ga=_ga_ga_pp__WEBPACK_IMPORTED_MODULE_6__,wnd.pga=_ga_ga_zpp__WEBPACK_IMPORTED_MODULE_7__,wnd.viz=_ga_viz2d__WEBPACK_IMPORTED_MODULE_8__,wnd.renderScene=function(e,a){react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(_ga_viz2d__WEBPACK_IMPORTED_MODULE_8__.SceneView({scene:e}),a)},eval("\n            var ga = wnd.ga;\n            var pga = wnd.pga;\n            var viz = wnd.viz;\n            var renderScene = wnd.renderScene;\n        ")}),[]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.c,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.a,{path:"/ga-basics"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GATutorial,null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.a,{path:"/pga"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PGATutorial,null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.a,{path:"/"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TutorialIndex,null))))}__webpack_exports__.a=App},31:function(e,a,_){"use strict";_.r(a),_.d(a,"add",(function(){return t})),_.d(a,"sub",(function(){return o})),_.d(a,"dual",(function(){return r})),_.d(a,"geometricProduct",(function(){return i})),_.d(a,"innerProduct",(function(){return n})),_.d(a,"exteriorProduct",(function(){return d})),_.d(a,"multiply",(function(){return c})),_.d(a,"div",(function(){return l})),_.d(a,"reversion",(function(){return s})),_.d(a,"repr",(function(){return v})),_.d(a,"regressiveProduct",(function(){return u})),_.d(a,"sandwichProduct",(function(){return E})),_.d(a,"commutatorProduct",(function(){return M})),_.d(a,"exponential",(function(){return P}));var t=function(e,a){return{scalar:void 0!==e.scalar||void 0!==a.scalar?(e.scalar||0)+(a.scalar||0):void 0,e0:void 0!==e.e0||void 0!==a.e0?(e.e0||0)+(a.e0||0):void 0,e1:void 0!==e.e1||void 0!==a.e1?(e.e1||0)+(a.e1||0):void 0,e01:void 0!==e.e01||void 0!==a.e01?(e.e01||0)+(a.e01||0):void 0}},o=function(e,a){return{scalar:void 0!==e.scalar||void 0!==a.scalar?(e.scalar||0)-(a.scalar||0):void 0,e0:void 0!==e.e0||void 0!==a.e0?(e.e0||0)-(a.e0||0):void 0,e1:void 0!==e.e1||void 0!==a.e1?(e.e1||0)-(a.e1||0):void 0,e01:void 0!==e.e01||void 0!==a.e01?(e.e01||0)-(a.e01||0):void 0}},r=function(e){return{scalar:void 0!==e.e01?1*e.e01:void 0,e0:void 0!==e.e1?1*e.e1:void 0,e1:void 0!==e.e0?-1*e.e0:void 0,e01:void 0!==e.scalar?1*e.scalar:void 0}},i=function(e,a){var _=void 0,t=void 0!==e.scalar&&void 0!==a.scalar,o=void 0!==e.e0&&void 0!==a.e0,r=void 0!==e.e1&&void 0!==a.e1,i=void 0!==e.e01&&void 0!==a.e01;(t||o||r||i)&&(_=0,t&&(_+=e.scalar*a.scalar*1),o&&(_+=e.e0*a.e0*1),r&&(_+=e.e1*a.e1*1),i&&(_+=e.e01*a.e01*-1));var n=void 0,d=void 0!==e.scalar&&void 0!==a.e0,c=void 0!==e.e0&&void 0!==a.scalar,l=void 0!==e.e1&&void 0!==a.e01,s=void 0!==e.e01&&void 0!==a.e1;(d||c||l||s)&&(n=0,d&&(n+=e.scalar*a.e0*1),c&&(n+=e.e0*a.scalar*1),l&&(n+=e.e1*a.e01*-1),s&&(n+=e.e01*a.e1*1));var v=void 0,u=void 0!==e.scalar&&void 0!==a.e1,E=void 0!==e.e0&&void 0!==a.e01,M=void 0!==e.e1&&void 0!==a.scalar,P=void 0!==e.e01&&void 0!==a.e0;(u||E||M||P)&&(v=0,u&&(v+=e.scalar*a.e1*1),E&&(v+=e.e0*a.e01*1),M&&(v+=e.e1*a.scalar*1),P&&(v+=e.e01*a.e0*-1));var m=void 0,O=void 0!==e.scalar&&void 0!==a.e01,h=void 0!==e.e0&&void 0!==a.e1,p=void 0!==e.e1&&void 0!==a.e0,f=void 0!==e.e01&&void 0!==a.scalar;return(O||h||p||f)&&(m=0,O&&(m+=e.scalar*a.e01*1),h&&(m+=e.e0*a.e1*1),p&&(m+=e.e1*a.e0*-1),f&&(m+=e.e01*a.scalar*1)),{scalar:_,e0:n,e1:v,e01:m}},n=function(e,a){var _=void 0,t=void 0!==e.scalar&&void 0!==a.scalar,o=void 0!==e.e0&&void 0!==a.e0,r=void 0!==e.e1&&void 0!==a.e1,i=void 0!==e.e01&&void 0!==a.e01;(t||o||r||i)&&(_=0,t&&(_+=e.scalar*a.scalar*1),o&&(_+=e.e0*a.e0*1),r&&(_+=e.e1*a.e1*1),i&&(_+=e.e01*a.e01*-1));var n=void 0,d=void 0!==e.scalar&&void 0!==a.e0,c=void 0!==e.e0&&void 0!==a.scalar,l=void 0!==e.e1&&void 0!==a.e01,s=void 0!==e.e01&&void 0!==a.e1;(d||c||l||s)&&(n=0,d&&(n+=e.scalar*a.e0*1),c&&(n+=e.e0*a.scalar*1),l&&(n+=e.e1*a.e01*-1),s&&(n+=e.e01*a.e1*1));var v=void 0,u=void 0!==e.scalar&&void 0!==a.e1,E=void 0!==e.e0&&void 0!==a.e01,M=void 0!==e.e1&&void 0!==a.scalar,P=void 0!==e.e01&&void 0!==a.e0;(u||E||M||P)&&(v=0,u&&(v+=e.scalar*a.e1*1),E&&(v+=e.e0*a.e01*1),M&&(v+=e.e1*a.scalar*1),P&&(v+=e.e01*a.e0*-1));var m=void 0,O=void 0!==e.scalar&&void 0!==a.e01,h=void 0!==e.e01&&void 0!==a.scalar;return(O||h)&&(m=0,O&&(m+=e.scalar*a.e01*1),h&&(m+=e.e01*a.scalar*1)),{scalar:_,e0:n,e1:v,e01:m}},d=function(e,a){var _=void 0,t=void 0!==e.scalar&&void 0!==a.scalar;t&&(_=0,t&&(_+=e.scalar*a.scalar*1));var o=void 0,r=void 0!==e.scalar&&void 0!==a.e0,i=void 0!==e.e0&&void 0!==a.scalar;(r||i)&&(o=0,r&&(o+=e.scalar*a.e0*1),i&&(o+=e.e0*a.scalar*1));var n=void 0,d=void 0!==e.scalar&&void 0!==a.e1,c=void 0!==e.e1&&void 0!==a.scalar;(d||c)&&(n=0,d&&(n+=e.scalar*a.e1*1),c&&(n+=e.e1*a.scalar*1));var l=void 0,s=void 0!==e.scalar&&void 0!==a.e01,v=void 0!==e.e0&&void 0!==a.e1,u=void 0!==e.e1&&void 0!==a.e0,E=void 0!==e.e01&&void 0!==a.scalar;return(s||v||u||E)&&(l=0,s&&(l+=e.scalar*a.e01*1),v&&(l+=e.e0*a.e1*1),u&&(l+=e.e1*a.e0*-1),E&&(l+=e.e01*a.scalar*1)),{scalar:_,e0:o,e1:n,e01:l}},c=function(e,a){return{scalar:void 0!==e.scalar?e.scalar*a:void 0,e0:void 0!==e.e0?e.e0*a:void 0,e1:void 0!==e.e1?e.e1*a:void 0,e01:void 0!==e.e01?e.e01*a:void 0}},l=function(e,a){return{scalar:void 0!==e.scalar?e.scalar/a:void 0,e0:void 0!==e.e0?e.e0/a:void 0,e1:void 0!==e.e1?e.e1/a:void 0,e01:void 0!==e.e01?e.e01/a:void 0}},s=function(e){return{scalar:e.scalar&&e.scalar,e0:e.e0&&e.e0,e1:e.e1&&e.e1,e01:e.e01&&-e.e01}},v=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,_="";return void 0!==e.scalar&&(_+=""===_?e.scalar.toFixed(a)+"":e.scalar>=0?" + "+e.scalar.toFixed(a):" - "+Math.abs(e.scalar).toFixed(a)),void 0!==e.e0&&(_+=""===_?e.e0.toFixed(a)+"e0":e.e0>=0?" + "+e.e0.toFixed(a)+"e0":" - "+Math.abs(e.e0).toFixed(a)+"e0"),void 0!==e.e1&&(_+=""===_?e.e1.toFixed(a)+"e1":e.e1>=0?" + "+e.e1.toFixed(a)+"e1":" - "+Math.abs(e.e1).toFixed(a)+"e1"),void 0!==e.e01&&(_+=""===_?e.e01.toFixed(a)+"e01":e.e01>=0?" + "+e.e01.toFixed(a)+"e01":" - "+Math.abs(e.e01).toFixed(a)+"e01"),_},u=function(e,a){return r(d(r(e),r(a)))},E=function(e,a){return i(a,i(e,s(a)))},M=function(e,a){return c(o(i(e,a),i(a,e)),.5)},P=function(e){var a=i(e,e);if(void 0===a.scalar)throw new Error("Input to exponential needs to square to scalar");var _=a.scalar;if(_<-.1){var o=Math.sign(_)*Math.sqrt(Math.abs(_));return t({scalar:Math.cos(o)},c(e,Math.sin(o)/o))}if(_>.1){var r=Math.sign(_)*Math.sqrt(Math.abs(_));return t({scalar:Math.cosh(r)},c(e,Math.sinh(r)/r))}return t({scalar:1},e)}},34:function(e,a,_){e.exports=_(52)},39:function(e,a,_){},40:function(e,a,_){},52:function(e,a,_){"use strict";_.r(a);var t=_(0),o=_.n(t),r=_(17),i=_.n(r),n=(_(39),_(30));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(n.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return InteractiveCode}));var _home_runner_work_ga_tutorial_ga_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9),_home_runner_work_ga_tutorial_ga_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_ace__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(21),react_ace__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_3__),ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(48),ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_4__),ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(49),ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_5__),_ga_viz2d__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(12),formatObject=function(e){return JSON.stringify(e,null,4)};function InteractiveCode(props){var sourceCode=props.sourceCode,style=props.style,hideOutput=props.hideOutput,withVisualizer=props.withVisualizer,visualizerStyle=props.visualizerStyle,outputStyle=props.outputStyle,_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(sourceCode),_useState2=Object(_home_runner_work_ga_tutorial_ga_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),code=_useState2[0],setCode=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)("Press run"),_useState4=Object(_home_runner_work_ga_tutorial_ga_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),runResult=_useState4[0],setRunResult=_useState4[1],run=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(){var oldLog=console.log,newRunResults=[];console.log=function(e){for(var a=arguments.length,_=new Array(a>1?a-1:0),t=1;t<a;t++)_[t-1]=arguments[t];newRunResults.push((void 0!==e?formatObject(e)+" ":"")+_.map(formatObject).join(" ")),oldLog.apply(void 0,[e].concat(_))};var codeToRun=code,renderTarget=withVisualizer&&visualizerRef.current;renderTarget&&(codeToRun="\n                var points = [];\n                var lines = [];\n                var renderPointPGA = (p, color) => points.push({point: p, radius: 4, fill: color});\n                var renderLinePGA = (l, color) => lines.push({line: l, width: 2, stroke: color});\n                var renderPointGA = (p, color) => renderPointPGA({e02: -p.e0, e01: p.e1, e12: 1}, color);\n            "+codeToRun+'\n                renderScene({ points: points, lines: lines }, document.getElementById("'.concat(renderTarget.id,'"));\n            '));try{eval(codeToRun),setRunResult(newRunResults.join("\n"))}catch(e){setRunResult(e.toString())}console.log=oldLog}),[code,withVisualizer]),uniqueId=Object(react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((function(){return(Math.random().toString(36)+"00000000000000000").slice(2,18)}),[]),visualizerRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{position:"relative",width:"100%"}},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{style:{border:0,background:"#505050",color:"#FFFFFF",position:"absolute",right:10,top:10,fontSize:24,zIndex:10},onClick:run},"Run")),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignContent:"stretch"}},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignContent:"stretch"}},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_ace__WEBPACK_IMPORTED_MODULE_3___default.a,{style:Object(_home_runner_work_ga_tutorial_ga_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_ga_tutorial_ga_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},{width:withVisualizer?"50%":"100%",height:void 0,minHeight:"200px"}),style),mode:"javascript",theme:"monokai",value:code,onChange:function(e){return setCode(e)},showPrintMargin:!1}),withVisualizer&&react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{id:"#".concat(uniqueId),ref:visualizerRef,style:Object(_home_runner_work_ga_tutorial_ga_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_ga_tutorial_ga_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},{width:"50%"}),visualizerStyle)},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ga_viz2d__WEBPACK_IMPORTED_MODULE_6__.SceneView,{scene:{}}))),!hideOutput&&react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_ace__WEBPACK_IMPORTED_MODULE_3___default.a,{style:Object(_home_runner_work_ga_tutorial_ga_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_ga_tutorial_ga_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},{width:"100%",height:"200px"}),outputStyle),mode:"javascript",theme:"monokai",value:runResult,readOnly:!0,showPrintMargin:!1})))}}},[[34,1,2]]]);
//# sourceMappingURL=main.539be2ed.chunk.js.map