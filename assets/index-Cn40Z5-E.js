import{r as D,a8 as C,N as ke,ae as Oe,j as H,e as Le}from"./index-C2xFYc7i.js";var Ne=function(e,n){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(s[a[r]]=e[a[r]]);return s},F=function(e){e.inHeader,e.columnKey,e.headers,e.forwardedRef;var n=Ne(e,["inHeader","columnKey","headers","forwardedRef"]);return n},le=D.createContext(void 0);function we(e){var n=e.children,s=D.useState([]),a=s[0],r=s[1],v=D.useMemo(function(){return{headers:a,setHeaders:r}},[a]);return C.createElement(le.Provider,{value:v},n)}var se=function(){return se=Object.assign||function(e){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se.apply(this,arguments)},Ee=function(e,n){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(s[a[r]]=e[a[r]]);return s},Pe=D.forwardRef(function(e,n){var s=e.className,a=Ee(e,["className"]),r="".concat(s||""," responsiveTable");return C.createElement("table",se({"data-testid":"table"},F(a),{className:r,ref:n}))});Pe.displayName="Table";function Ke(e){return C.createElement(we,null,C.createElement(Pe,se({},e)))}var de=function(){return de=Object.assign||function(e){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)};function Me(e){return C.createElement("tbody",de({"data-testid":"tbody"},F(e)))}var oe=function(){return oe=Object.assign||function(e){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)};function je(e){var n=e.headers,s=e.children,a=e.columnKey,r=e.className,v=e.colSpan,S="".concat(r||""," pivoted");return v?C.createElement("td",oe({"data-testid":"td"},F(e))):C.createElement("td",oe({"data-testid":"td"},F(e),{className:S}),C.createElement("div",{"data-testid":"td-before",className:"tdBefore"},n[a]),s??C.createElement("div",null," "))}var pe=function(){return pe=Object.assign||function(e){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)};function Je(e){var n=D.useContext(le);if(!n)throw new Error("Td must be used as a child of the Table component");var s=n.headers;return C.createElement(je,pe({},e,{headers:s}))}var fe=function(){return fe=Object.assign||function(e){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe.apply(this,arguments)};function Ve(e){return C.createElement("th",fe({"data-testid":"th"},F(e)))}var ge=function(){return ge=Object.assign||function(e){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ge.apply(this,arguments)};function Ze(e){var n=e.children;return C.createElement("thead",ge({"data-testid":"thead"},F(e)),C.cloneElement(n,{inHeader:!0}))}var be=function(){return be=Object.assign||function(e){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)},_e=function(e,n){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(s[a[r]]=e[a[r]]);return s},Re=function(e,n,s){if(s||arguments.length===2)for(var a=0,r=n.length,v;a<r;a++)(v||!(a in n))&&(v||(v=Array.prototype.slice.call(n,0,a)),v[a]=n[a]);return e.concat(v||Array.prototype.slice.call(n))};function Te(e){var n=e.children,s=e.inHeader,a=_e(e,["children","inHeader"]),r=D.useContext(le);if(!r)throw new Error("TrInner must be used as a child of the Table component");var v=r.setHeaders,S=r.headers;return D.useEffect(function(){if(s){var p=Re([],S,!0);C.Children.forEach(n,function(f,O){C.isValidElement(f)&&(p[O]=f.props.children)}),v(p)}},[s,n]),C.createElement("tr",be({"data-testid":"tr"},F(a)),n&&C.Children.map(n,function(p,f){return C.isValidElement(p)?C.cloneElement(p,{key:f,columnKey:f}):null}))}var me=function(){return me=Object.assign||function(e){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)};function Fe(e){var n=D.useContext(le);if(!n)throw new Error("Tr must be used as a child of the Table component");var s=n.headers;return C.createElement(Te,me({},e,{headers:s}))}var ie={exports:{}},Ae=ie.exports,ye;function Se(){return ye||(ye=1,function(e,n){(function(s,a){e.exports=a(ke())})(Ae,s=>(()=>{var a={703:(p,f,O)=>{var i=O(414);function U(){}function G(){}G.resetWarningCache=U,p.exports=function(){function k(he,B,ee,Q,ve,X){if(X!==i){var te=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw te.name="Invariant Violation",te}}function R(){return k}k.isRequired=k;var W={array:k,bigint:k,bool:k,func:k,number:k,object:k,string:k,symbol:k,any:k,arrayOf:R,element:k,elementType:k,instanceOf:R,node:k,objectOf:R,oneOf:R,oneOfType:R,shape:R,exact:R,checkPropTypes:G,resetWarningCache:U};return W.PropTypes=W,W}},697:(p,f,O)=>{p.exports=O(703)()},414:p=>{p.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:p=>{p.exports=s}},r={};function v(p){var f=r[p];if(f!==void 0)return f.exports;var O=r[p]={exports:{}};return a[p](O,O.exports,v),O.exports}v.n=p=>{var f=p&&p.__esModule?()=>p.default:()=>p;return v.d(f,{a:f}),f},v.d=(p,f)=>{for(var O in f)v.o(f,O)&&!v.o(p,O)&&Object.defineProperty(p,O,{enumerable:!0,get:f[O]})},v.o=(p,f)=>Object.prototype.hasOwnProperty.call(p,f),v.r=p=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})};var S={};return(()=>{v.r(S),v.d(S,{default:()=>Ce});var p=v(98),f=v.n(p),O=v(697),i=v.n(O);function U(){return U=Object.assign?Object.assign.bind():function(l){for(var u=1;u<arguments.length;u++){var g=arguments[u];for(var b in g)Object.prototype.hasOwnProperty.call(g,b)&&(l[b]=g[b])}return l},U.apply(this,arguments)}var G=function(l){var u=l.pageClassName,g=l.pageLinkClassName,b=l.page,J=l.selected,V=l.activeClassName,T=l.activeLinkClassName,o=l.getEventListener,t=l.pageSelectedHandler,h=l.href,c=l.extraAriaContext,d=l.pageLabelBuilder,m=l.rel,P=l.ariaLabel||"Page "+b+(c?" "+c:""),L=null;return J&&(L="page",P=l.ariaLabel||"Page "+b+" is your current page",u=u!==void 0?u+" "+V:V,g!==void 0?T!==void 0&&(g=g+" "+T):g=T),f().createElement("li",{className:u},f().createElement("a",U({rel:m,role:h?void 0:"button",className:g,href:h,tabIndex:J?"-1":"0","aria-label":P,"aria-current":L,onKeyPress:t},o(t)),d(b)))};G.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};const k=G;function R(){return R=Object.assign?Object.assign.bind():function(l){for(var u=1;u<arguments.length;u++){var g=arguments[u];for(var b in g)Object.prototype.hasOwnProperty.call(g,b)&&(l[b]=g[b])}return l},R.apply(this,arguments)}var W=function(l){var u=l.breakLabel,g=l.breakAriaLabel,b=l.breakClassName,J=l.breakLinkClassName,V=l.breakHandler,T=l.getEventListener,o=b||"break";return f().createElement("li",{className:o},f().createElement("a",R({className:J,role:"button",tabIndex:"0","aria-label":g,onKeyPress:V},T(V)),u))};W.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};const he=W;function B(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return l??u}function ee(l){return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},ee(l)}function Q(){return Q=Object.assign?Object.assign.bind():function(l){for(var u=1;u<arguments.length;u++){var g=arguments[u];for(var b in g)Object.prototype.hasOwnProperty.call(g,b)&&(l[b]=g[b])}return l},Q.apply(this,arguments)}function ve(l,u){for(var g=0;g<u.length;g++){var b=u[g];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(l,b.key,b)}}function X(l,u){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,b){return g.__proto__=b,g},X(l,u)}function te(l,u){if(u&&(ee(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return E(l)}function E(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function ne(l){return ne=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},ne(l)}function N(l,u,g){return u in l?Object.defineProperty(l,u,{value:g,enumerable:!0,configurable:!0,writable:!0}):l[u]=g,l}var ce=function(l){(function(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),t&&X(o,t)})(T,l);var u,g,b,J,V=(b=T,J=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var o,t=ne(b);if(J){var h=ne(this).constructor;o=Reflect.construct(t,arguments,h)}else o=t.apply(this,arguments);return te(this,o)});function T(o){var t,h;return function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}(this,T),N(E(t=V.call(this,o)),"handlePreviousPage",function(c){var d=t.state.selected;t.handleClick(c,null,d>0?d-1:void 0,{isPrevious:!0})}),N(E(t),"handleNextPage",function(c){var d=t.state.selected,m=t.props.pageCount;t.handleClick(c,null,d<m-1?d+1:void 0,{isNext:!0})}),N(E(t),"handlePageSelected",function(c,d){if(t.state.selected===c)return t.callActiveCallback(c),void t.handleClick(d,null,void 0,{isActive:!0});t.handleClick(d,null,c)}),N(E(t),"handlePageChange",function(c){t.state.selected!==c&&(t.setState({selected:c}),t.callCallback(c))}),N(E(t),"getEventListener",function(c){return N({},t.props.eventListener,c)}),N(E(t),"handleClick",function(c,d,m){var P=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},L=P.isPrevious,A=L!==void 0&&L,Y=P.isNext,z=Y!==void 0&&Y,Z=P.isBreak,j=Z!==void 0&&Z,I=P.isActive,q=I!==void 0&&I;c.preventDefault?c.preventDefault():c.returnValue=!1;var $=t.state.selected,y=t.props.onClick,_=m;if(y){var w=y({index:d,selected:$,nextSelectedPage:m,event:c,isPrevious:A,isNext:z,isBreak:j,isActive:q});if(w===!1)return;Number.isInteger(w)&&(_=w)}_!==void 0&&t.handlePageChange(_)}),N(E(t),"handleBreakClick",function(c,d){var m=t.state.selected;t.handleClick(d,c,m<c?t.getForwardJump():t.getBackwardJump(),{isBreak:!0})}),N(E(t),"callCallback",function(c){t.props.onPageChange!==void 0&&typeof t.props.onPageChange=="function"&&t.props.onPageChange({selected:c})}),N(E(t),"callActiveCallback",function(c){t.props.onPageActive!==void 0&&typeof t.props.onPageActive=="function"&&t.props.onPageActive({selected:c})}),N(E(t),"getElementPageRel",function(c){var d=t.state.selected,m=t.props,P=m.nextPageRel,L=m.prevPageRel,A=m.selectedPageRel;return d-1===c?L:d===c?A:d+1===c?P:void 0}),N(E(t),"pagination",function(){var c=[],d=t.props,m=d.pageRangeDisplayed,P=d.pageCount,L=d.marginPagesDisplayed,A=d.breakLabel,Y=d.breakClassName,z=d.breakLinkClassName,Z=d.breakAriaLabels,j=t.state.selected;if(P<=m)for(var I=0;I<P;I++)c.push(t.getPageElement(I));else{var q=m/2,$=m-q;j>P-m/2?q=m-($=P-j):j<m/2&&($=m-(q=j));var y,_,w=function(K){return t.getPageElement(K)},x=[];for(y=0;y<P;y++){var ae=y+1;if(ae<=L)x.push({type:"page",index:y,display:w(y)});else if(ae>P-L)x.push({type:"page",index:y,display:w(y)});else if(y>=j-q&&y<=j+(j===0&&m>1?$-1:$))x.push({type:"page",index:y,display:w(y)});else if(A&&x.length>0&&x[x.length-1].display!==_&&(m>0||L>0)){var ue=y<j?Z.backward:Z.forward;_=f().createElement(he,{key:y,breakAriaLabel:ue,breakLabel:A,breakClassName:Y,breakLinkClassName:z,breakHandler:t.handleBreakClick.bind(null,y),getEventListener:t.getEventListener}),x.push({type:"break",index:y,display:_})}}x.forEach(function(K,M){var re=K;K.type==="break"&&x[M-1]&&x[M-1].type==="page"&&x[M+1]&&x[M+1].type==="page"&&x[M+1].index-x[M-1].index<=2&&(re={type:"page",index:K.index,display:w(K.index)}),c.push(re.display)})}return c}),o.initialPage!==void 0&&o.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(o.initialPage,") and forcePage (").concat(o.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),h=o.initialPage?o.initialPage:o.forcePage?o.forcePage:0,t.state={selected:h},t}return u=T,(g=[{key:"componentDidMount",value:function(){var o=this.props,t=o.initialPage,h=o.disableInitialCallback,c=o.extraAriaContext,d=o.pageCount,m=o.forcePage;t===void 0||h||this.callCallback(t),c&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(d)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(d,"). Did you forget a Math.ceil()?")),t!==void 0&&t>d-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(d-1,").")),m!==void 0&&m>d-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(m," > ").concat(d-1,")."))}},{key:"componentDidUpdate",value:function(o){this.props.forcePage!==void 0&&this.props.forcePage!==o.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(o.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var o=this.state.selected,t=this.props,h=t.pageCount,c=o+t.pageRangeDisplayed;return c>=h?h-1:c}},{key:"getBackwardJump",value:function(){var o=this.state.selected-this.props.pageRangeDisplayed;return o<0?0:o}},{key:"getElementHref",value:function(o){var t=this.props,h=t.hrefBuilder,c=t.pageCount,d=t.hrefAllControls;if(h)return d||o>=0&&o<c?h(o+1,c,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(o){var t=o===this.state.selected;if(this.props.ariaLabelBuilder&&o>=0&&o<this.props.pageCount){var h=this.props.ariaLabelBuilder(o+1,t);return this.props.extraAriaContext&&!t&&(h=h+" "+this.props.extraAriaContext),h}}},{key:"getPageElement",value:function(o){var t=this.state.selected,h=this.props,c=h.pageClassName,d=h.pageLinkClassName,m=h.activeClassName,P=h.activeLinkClassName,L=h.extraAriaContext,A=h.pageLabelBuilder;return f().createElement(k,{key:o,pageSelectedHandler:this.handlePageSelected.bind(null,o),selected:t===o,rel:this.getElementPageRel(o),pageClassName:c,pageLinkClassName:d,activeClassName:m,activeLinkClassName:P,extraAriaContext:L,href:this.getElementHref(o),ariaLabel:this.ariaLabelBuilder(o),page:o+1,pageLabelBuilder:A,getEventListener:this.getEventListener})}},{key:"render",value:function(){var o=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&o!==void 0)return o&&o(this.props);var t=this.props,h=t.disabledClassName,c=t.disabledLinkClassName,d=t.pageCount,m=t.className,P=t.containerClassName,L=t.previousLabel,A=t.previousClassName,Y=t.previousLinkClassName,z=t.previousAriaLabel,Z=t.prevRel,j=t.nextLabel,I=t.nextClassName,q=t.nextLinkClassName,$=t.nextAriaLabel,y=t.nextRel,_=this.state.selected,w=_===0,x=_===d-1,ae="".concat(B(A)).concat(w?" ".concat(B(h)):""),ue="".concat(B(I)).concat(x?" ".concat(B(h)):""),K="".concat(B(Y)).concat(w?" ".concat(B(c)):""),M="".concat(B(q)).concat(x?" ".concat(B(c)):""),re=w?"true":"false",xe=x?"true":"false";return f().createElement("ul",{className:m||P,role:"navigation","aria-label":"Pagination"},f().createElement("li",{className:ae},f().createElement("a",Q({className:K,href:this.getElementHref(_-1),tabIndex:w?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":re,"aria-label":z,rel:Z},this.getEventListener(this.handlePreviousPage)),L)),this.pagination(),f().createElement("li",{className:ue},f().createElement("a",Q({className:M,href:this.getElementHref(_+1),tabIndex:x?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":xe,"aria-label":$,rel:y},this.getEventListener(this.handleNextPage)),j)))}}])&&ve(u.prototype,g),Object.defineProperty(u,"prototype",{writable:!1}),T}(p.Component);N(ce,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),N(ce,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(l){return l},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const Ce=ce})(),S})())}(ie)),ie.exports}var Be=Se();const He=Oe(Be),De=({size:e=12})=>H.jsx("svg",{width:e,height:e,viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:H.jsx("path",{d:"M6.53801 11.8401L0.652009 6.53005C0.400009 6.31405 0.400009 5.91805 0.652009 5.70205L6.53801 0.39205C6.91601 0.0500505 7.52801 0.30205 7.52801 0.80605L7.52801 11.4261C7.52801 11.9301 6.91601 12.1821 6.53801 11.8401Z",fill:"#fff"})}),Ie=({size:e=12})=>H.jsx("svg",{width:e,height:e,viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:H.jsx("path",{d:"M1.60487 0.392126L7.49087 5.70213C7.74287 5.91813 7.74287 6.31413 7.49087 6.53013L1.60487 11.8401C1.22687 12.1821 0.614868 11.9301 0.614868 11.4261L0.614868 0.806127C0.614868 0.302127 1.22687 0.0501261 1.60487 0.392126Z",fill:"#fff"})}),qe=({totalPages:e,setCurrentPage:n,currentPage:s,pageRangeDisplayed:a=2,redux:r=!0})=>{const v=Le(),S=({selected:p})=>{r?v(n(p+1)):n(p+1)};return H.jsxs("div",{className:"bg-stroke py-3 px-4 rounded-lg mt-4 flex items-center sm:justify-between  justify-center",children:[H.jsxs("div",{className:"sm:block hidden",children:["Page ",s," of ",e]}),H.jsx(He,{breakLabel:"...",nextLabel:H.jsx(Ie,{}),onPageChange:S,pageRangeDisplayed:a,pageCount:e,previousLabel:H.jsx(De,{}),className:"flex items-center gap-4 pagination",forcePage:s-1})]})},Ue=D.memo(qe);export{Ue as P,Ke as T,Ze as a,Fe as b,Ve as c,Me as d,Je as e};
