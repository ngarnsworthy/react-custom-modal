(this["webpackJsonpreact-custom-popup"]=this["webpackJsonpreact-custom-popup"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a,o=n(0),i=n.n(o),l=n(8),c=n.n(l),r=n(3),s=n(4),u=n(1),m=(n(14),n(15),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#484848";return i.a.createElement("svg",{color:e,height:20,width:20,"aria-hidden":"true","data-prefix":"fas","data-icon":"times",className:"svg-inline--fa fa-times fa-w-11",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},i.a.createElement("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}))}),p={warning:i.a.createElement("svg",{width:20,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i.a.createElement("path",{d:"M256 0C115.2 0 0 115.2 0 256s115.2 256 256 256 256-115.2 256-256S396.8 0 256 0zm0 51.2c28.16 0 48.64 23.04 46.08 51.2L281.6 307.2h-51.2l-20.48-204.8c-2.56-28.16 17.92-51.2 46.08-51.2zm0 409.6c-28.16 0-51.2-23.04-51.2-51.2 0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2c0 28.16-23.04 51.2-51.2 51.2z"})),info:i.a.createElement("svg",{width:20,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 450.56 450.56"},i.a.createElement("path",{d:"M225.28 0C101.376 0 0 101.376 0 225.28s101.376 225.28 225.28 225.28 225.28-101.376 225.28-225.28S349.184 0 225.28 0zm23.552 321.024h-48.128V183.296h48.128v137.728zm0-167.424h-48.128v-30.208h48.128V153.6z"})),success:i.a.createElement("svg",{width:20,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 477.867 477.867"},i.a.createElement("path",{d:"M238.933 0C106.974 0 0 106.974 0 238.933s106.974 238.933 238.933 238.933 238.933-106.974 238.933-238.933C477.726 107.033 370.834.141 238.933 0zm131.533 165.666L199.799 336.333c-6.665 6.663-17.468 6.663-24.132 0L107.4 268.066c-6.78-6.548-6.968-17.352-.42-24.132 6.548-6.78 17.352-6.968 24.132-.42.142.138.282.277.42.42l56.201 56.201 158.601-158.601c6.78-6.548 17.584-6.36 24.132.419 6.388 6.614 6.388 17.099 0 23.713z"})),danger:i.a.createElement("svg",{width:20,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i.a.createElement("path",{d:"M501.362 383.95L320.497 51.474c-29.059-48.921-99.896-48.986-128.994 0L10.647 383.95c-29.706 49.989 6.259 113.291 64.482 113.291h361.736c58.174 0 94.203-63.251 64.497-113.291zM256 437.241c-16.538 0-30-13.462-30-30s13.462-30 30-30 30 13.462 30 30-13.462 30-30 30zm30-120c0 16.538-13.462 30-30 30s-30-13.462-30-30v-150c0-16.538 13.462-30 30-30s30 13.462 30 30v150z"}))};!function(e){e.TOP_RIGHT="top-right",e.BOTTOM_RIGHT="bottom-right",e.BOTTOM_CENTER="bottom-center"}(a||(a={}));var d=a.BOTTOM_RIGHT;function f(e){var t=e.toasts,n=e.hideToast;return i.a.createElement("div",{className:"react-custom-toast-container react-custom-toast-".concat(d)},t&&t.map((function(e){return i.a.createElement(h,{key:e.id,toast:e,hideToast:n})})))}function h(e){var t,n=e.toast,l=e.hideToast,c=Object(o.useState)(null),s=Object(r.a)(c,2),f=s[0],h=s[1],E=Object(o.useState)({in:"",out:""}),v=Object(r.a)(E,2),b=v[0],y=v[1];Object(o.useEffect)((function(){return f&&!n?O():n&&!f&&(T(),n.timeoutDuration&&(t=setTimeout(O,n.timeoutDuration))),function(){return clearTimeout(t)}}),[n]),Object(o.useEffect)((function(){b.in&&n&&h(n),b.out&&(t=setTimeout((function(){h(null),l(n.id)}),500))}),[b]);var O=Object(o.useCallback)((function(){d===a.BOTTOM_CENTER?y({out:"animate__animated animate__slideOutDown animate__faster",in:""}):y({out:"animate__animated animate__slideOutRight animate__faster",in:""})}),[]),T=Object(o.useCallback)((function(){d===a.BOTTOM_CENTER?y({in:"animate__animated animate__slideInUp animate__faster",out:""}):y({in:"animate__animated animate__slideInRight animate__faster",out:""})}),[]);return f?i.a.createElement("div",{className:"react-custom-toast-".concat(f.type," react-custom-toast ").concat(b.in," ").concat(b.out),style:Object(u.a)({},n.containerStyle)},i.a.createElement("div",{style:{width:"90%",display:"flex",flexDirection:"row",alignItems:"center"}},n.customComponent||i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,p[f.type]),i.a.createElement("div",{className:"react-custom-toast-text",style:Object(u.a)({},n.textStyle)},f.text))),i.a.createElement("div",{style:{width:"10%",cursor:"pointer"},onClick:O},m())):null}function E(e){var t,n=e.hideModal,a=e.Component,l=e.ComponentJSX,c=e.componentProps,s=Object(o.useState)(void 0),m=Object(r.a)(s,2),p=m[0],d=m[1],f=Object(o.useState)({in:"",out:""}),h=Object(r.a)(f,2),E=h[0],y=h[1],O=c.animationType,T=c.outAnimationType,g=c.allowOutsideClick,x=void 0===g||g;Object(o.useEffect)((function(){return!p||a||l?(a||l)&&C():w(),function(){return clearTimeout(t)}}),[a,l,c]),Object(o.useEffect)((function(){var e;E.in&&(a||l)&&(a&&(e=Object(o.createElement)(a,Object(u.a)(Object(u.a)({},c),{},{hideModal:n}))),d(l||e));E.out&&(T?t=setTimeout((function(){d(void 0)}),600):d(void 0))}),[E]);var w=Object(o.useCallback)((function(){y({out:"animate__animated animate__".concat(T," animate__faster"),in:""})}),[T]),C=Object(o.useCallback)((function(){y({out:"",in:"animate__animated animate__".concat(O," animate__faster")})}),[O]);return p?i.a.createElement(b,null,i.a.createElement(v,{onClick:x?n:function(){}}),i.a.createElement("div",{className:E.in||E.out},p)):null}var v=function(e){var t=e.onClick;return Object(o.useEffect)((function(){return document.body.classList.add("react-custom-modal-open"),function(){document.body.classList.remove("react-custom-modal-open")}}),[]),i.a.createElement("div",{onClick:t,className:"react-custom-modal-backdrop"})},b=function(e){var t=e.children;return i.a.createElement("div",{className:"react-custom-modal-wrapper"},t)},y=function(){var e=M(),t=e.componentJSX,n=e.component,a=e.toasts,o=e.componentProps,l=e.hideModal,c=e.hideToast;return o=Object(u.a)({},o),i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{componentProps:o,Component:n,ComponentJSX:t,hideModal:l}),i.a.createElement(f,{hideToast:c,toasts:a}))},O=n(2),T=(n(16),function(e){var t=e.showCloseButton,n=e.type,a=e.hideModal,o=e.title,l=e.headerTextStyle,c=e.headerStyle;return i.a.createElement("div",{className:"react-custom-header react-custom-header-".concat(n),style:Object(u.a)({},c)},p[n],t&&i.a.createElement("div",{style:{position:"absolute",right:20,cursor:"pointer"},onClick:a},m()),i.a.createElement("div",{className:"react-custom-title ".concat(p[n]?"react-custom-title-margin":""),style:Object(u.a)({},l)},o))});function g(e){var t=e.optionsToRender,n=e.footerStyle;return i.a.createElement("div",{className:"react-custom-footer",style:Object(u.a)({},n)},i.a.createElement("div",{className:"react-custom-options-container"},t.map((function(e,t){return i.a.createElement("button",{key:"option".concat(t),className:"react-custom-option-button",onClick:e.onClick},e.name)}))))}function x(e){var t=e.item,n=e.setInputValues,a=e.inputValues;return i.a.createElement("div",{style:{textAlign:"left"}},i.a.createElement("label",{style:{display:"block",marginBottom:5}},t.label),t.inputType&&"textarea"!==t.inputType?i.a.createElement("input",{className:"react-custom-input-item",onChange:function(e){n(Object(u.a)(Object(u.a)({},a),{},Object(O.a)({},t.name,e.nativeEvent.target.value)))},value:a[t.name]?a[t.name]:"",id:t.name,placeholder:t.placeholder,type:t.inputType||"text"}):null,"textarea"===t.inputType?i.a.createElement("textarea",{onChange:function(e){n(Object(u.a)(Object(u.a)({},a),{},Object(O.a)({},t.name,e.nativeEvent.target.value)))},value:a[t.name]?a[t.name]:"",className:"react-custom-input-item",id:t.name,placeholder:t.placeholder}):null)}function w(e){var t=e.setInputValues,n=e.inputValues,a=e.item,l=Object(o.useRef)(null);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{textAlign:"left"}},i.a.createElement("label",{style:{display:"block",marginBottom:5}},a.label||""),i.a.createElement("div",{style:{cursor:"pointer"},className:"react-custom-input-item select-image",onClick:function(){l.current&&l.current.click()}},"Select Image"),i.a.createElement("input",{ref:function(e){l.current=e},value:l.current?l.current.value:"",multiple:a.multiple||!1,className:"react-custom-input-item",onChange:function(e){return function(e){if(e.target.files){var o=[],i=[];Array.from(e.target.files).forEach((function(e){o.push(new Promise((function(t){var n=new FileReader;n.onload=function(n){i.push({src:n.target.result,value:e}),t()},n.readAsDataURL(e)})))})),Promise.all(o).then((function(){t(Object(u.a)(Object(u.a)({},n),{},Object(O.a)({},a.name,[].concat(i)))),l.current.value=""}))}}(e)},style:{display:"none"},id:"image",type:"file"})),i.a.createElement("div",{style:{textAlign:"left"}},n&&n[a.name]&&n[a.name].map((function(e,o){return i.a.createElement("div",{className:"react-custom-input-img-container",key:"image"+o,style:{position:"relative"}},i.a.createElement("img",{alt:"",style:{maxHeight:100},src:e.src}),i.a.createElement("div",{onClick:function(){t(Object(u.a)(Object(u.a)({},n),{},Object(O.a)({},a.name,[].concat(Object(s.a)(n[a.name].slice(0,o)),Object(s.a)(n[a.name].slice(o+1))))))},style:{borderRadius:5,position:"absolute",top:5,right:5,zIndex:500,cursor:"pointer"}},m("white")))}))))}var C,N,j,_=function(e){var t=e.title,n=e.text,a=e.type,l=e.hideModal,c=e.optionButtons,s=void 0===c?null:c,m=e.onConfirm,p=void 0===m?null:m,d=e.onCancel,f=void 0===d?null:d,h=e.isAlert,E=void 0===h||h,v=e.showCloseButton,b=void 0!==v&&v,y=e.isInput,C=void 0!==y&&y,N=e.confirmText,j=void 0===N?"Ok":N,_=e.cancelText,I=void 0===_?"Cancel":_,S=e.inputs,k=void 0===S?null:S,D=e.onDismissed,L=void 0===D?null:D,A=e.input,M=e.headerTextStyle,R=e.textStyle,F=e.containerStyle,P=e.headerStyle,B=e.footerStyle,U=e.bodyComponent,z=Object(o.useState)(A&&A.default?Object(O.a)({},A.name,A.default):{}),J=Object(r.a)(z,2),G=J[0],W=J[1],V=[];V=E?[{name:j,onClick:function(){l()}}]:s||[{name:I,onClick:function(){l(),f&&f(),L&&C&&L(G)}},{name:j,onClick:function(){l(),p&&p(G),L&&C&&L(G)}}];var H=[];return C&&(H=k||[A]),i.a.createElement("div",{className:"react-custom-dialog-wrapper",style:Object(u.a)({},F)},i.a.createElement(T,{headerStyle:P,headerTextStyle:M,showCloseButton:b,type:a,hideModal:l,title:t}),U||i.a.createElement(i.a.Fragment,null,n&&""!==n?i.a.createElement("div",{className:"react-custom-body-text",style:Object(u.a)({},R)},n):null,C&&i.a.createElement("div",{className:"react-custom-inputs-container"},i.a.createElement(i.a.Fragment,null,H.map((function(e,t){return i.a.createElement("div",{key:"input".concat(t),className:"react-custom-input-container"},"image"!==e.inputType?i.a.createElement(x,{item:e,setInputValues:W,inputValues:G}):i.a.createElement(w,{item:e,setInputValues:W,inputValues:G}))}))))),i.a.createElement(g,{footerStyle:B,optionsToRender:V}))};!function(e){e.FADE_IN="fadeIn",e.FADE_IN_UP="fadeInUp",e.FLASH="flash",e.HEART_BEAT="heartBeat",e.SLIDE_IN_LEFT="slideInLeft",e.SLIDE_IN_RIGHT="slideInRight",e.SLIDE_IN_UP="slideInUp",e.SWING="swing",e.ZOOM_IN="zoomIn"}(C||(C={})),function(e){e.FADE_OUT="fadeOut",e.SLIDE_OUT_LEFT="slideOutLeft",e.SLIDE_OUT_RIGHT="slideOutRight",e.SLIDE_OUT_UP="slideOutUp",e.ZOOM_OUT="zoomOut"}(N||(N={})),function(e){e.WARNING="warning",e.INFO="info",e.DANGER="danger",e.SUCCESS="success"}(j||(j={}));var I={showModal:function(e,t){return null},hideModal:function(){return null},showAlert:function(e){return null},hideAlert:function(){return null},showOptionDialog:function(e){return null},showInputDialog:function(e){return null},showToast:function(e){return null},hideToast:function(e){return null}},S=Object(u.a)({},I),k=Object(o.createContext)(I),D=k.Provider,L=(k.Consumer,function(e,t){var n=t.type,a=t.component,o=t.componentProps,i=t.componentJSX,l=t.toast,c=t.id;switch(n){case"openModal":return Object(u.a)(Object(u.a)({},e),{},{component:a,componentProps:o,componentJSX:i});case"hideModal":return Object(u.a)(Object(u.a)({},e),{},{component:null,modalProps:{},componentJSX:null});case"showToast":return Object(u.a)(Object(u.a)({},e),{},{toasts:[].concat(Object(s.a)(e.toasts),[l]),componentProps:o});case"hideToast":var r=e.toasts.findIndex((function(e){return e.id===c}));return Object(u.a)(Object(u.a)({},e),{},{toasts:[].concat(Object(s.a)(e.toasts.slice(0,r)),Object(s.a)(e.toasts.slice(r+1)))});default:throw new Error("Unspecified reducer action")}}),A=function(e){var t=e.children,n={componentJSX:void 0,component:void 0,componentProps:{},toasts:[],showModal:function(e,t){s({type:"openModal",componentJSX:e,componentProps:Object(u.a)({},t)})},hideModal:function(){s({type:"hideModal"})},showAlert:function(e){s({type:"openModal",component:_,componentProps:Object(u.a)({isAlert:!0,isInputDialog:!1},e)})},hideAlert:function(){s({type:"hideModal"})},showOptionDialog:function(e){s({type:"openModal",component:_,componentProps:Object(u.a)({isAlert:!1,isInput:!1},e)})},showInputDialog:function(e){s({type:"openModal",component:_,componentProps:Object(u.a)({isAlert:!1,isInput:!0},e)})},showToast:function(e){s({type:"showToast",toast:Object(u.a)(Object(u.a)({},e),{},{id:Math.random().toString(36).substring(7)}),componentProps:Object(u.a)({},e)})},hideToast:function(e){s({type:"hideToast",id:e})}};S=n;var a=Object(o.useReducer)(L,n),l=Object(r.a)(a,2),c=l[0],s=l[1];return i.a.createElement("div",null,i.a.createElement(D,{value:c},i.a.createElement(y,null),t))},M=function(){return Object(o.useContext)(k)};n(17);function R(){S.showToast({text:"test",type:j.DANGER})}var F=function(){var e=function(e){return i.a.createElement("div",{style:{background:"white",borderRadius:5,width:500,padding:20}},i.a.createElement("h4",null," Fantasy T-shirt"),i.a.createElement("label",{className:"text-muted"},"Shirts"),i.a.createElement("h3",{className:"mt-3",style:{fontWeight:600,fontSize:"20px"}},"$39.99"),i.a.createElement("p",{className:"mt-3"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias."),"Received Props: ",JSON.stringify(e))},t=M(),n=t.showAlert,a=t.showOptionDialog,o=t.showInputDialog,l=t.showModal,c=t.showToast,r={display:"block",marginTop:5};return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Modal"),i.a.createElement("div",{className:"example-button",style:r,onClick:function(){return l(i.a.createElement(e,{a:"test"}),{animationType:C.SLIDE_IN_UP,outAnimationType:N.SLIDE_OUT_UP})}},"Modal"),i.a.createElement("h2",null,"Alert"),i.a.createElement("div",{className:"example-button",style:r,onClick:function(){return n({type:j.DANGER,text:"Text",title:"Title",animationType:C.FADE_IN,outAnimationType:N.FADE_OUT})}},"Danger Alert"),i.a.createElement("div",{className:"example-button",style:r,onClick:function(){return n({type:j.WARNING,text:"Text",title:"Title",animationType:C.ZOOM_IN})}},"Warning Alert"),i.a.createElement("div",{className:"example-button",style:r,onClick:function(){return n({type:j.SUCCESS,text:"Text",title:"Title"})}},"Success Alert"),i.a.createElement("div",{className:"example-button",style:r,onClick:function(){return n({type:j.INFO,text:"Text",title:"Title",allowOutsideClick:!1})}},"Info Alert"),i.a.createElement("div",{className:"example-button",style:r,onClick:function(){return n({type:j.WARNING,text:"Text",title:"Title",animationType:C.FADE_IN,bodyComponent:i.a.createElement(e,{a:"a"})})}},"Custom Content Alert"),i.a.createElement("div",{className:"example-button",style:r,onClick:function(){return a({text:"Text",title:"Title"})}},"Option Dialog"),i.a.createElement("div",{className:"example-button",style:r,onClick:function(){return o({title:"Sign Up",showCloseButton:!0,headerTextStyle:{fontWeight:"bold",fontSize:"x-large"},headerStyle:{marginTop:5,marginBottom:5},inputs:[{inputType:"text",name:"fname",label:"First Name"},{inputType:"text",name:"lname",label:"Last Name"},{inputType:"image",name:"avatar",label:"Avatar",multiple:!0},{inputType:"date",name:"dob",label:"Date of Birth"}],onConfirm:function(e){n({title:"Result",text:JSON.stringify(e)})}})}},"Input Dialog With Multiple Input Fields"),i.a.createElement("div",{className:"example-button",style:r,onClick:function(){return o({title:"Title",inputs:[{inputType:"text",name:"test"}],onConfirm:function(e){n({title:"Result",text:JSON.stringify(e)})}})}},"Input Dialog With Text Field"),i.a.createElement("div",{className:"example-button",style:r,onClick:function(){return o({title:"Title",inputs:[{inputType:"date",name:"test"}],onConfirm:function(e){n({title:"Result",text:JSON.stringify(e)})}})}},"Input Dialog With Date"),i.a.createElement("div",{className:"example-button",style:r,onClick:function(){return o({title:"Title",input:{inputType:"image",name:"myimage"},onConfirm:function(e){n({title:"Result",text:JSON.stringify(e)})}})}},"Input Dialog With Date"),i.a.createElement("h2",null,"Toast"),i.a.createElement("div",{className:"example-button",style:r,onClick:R},"Toast Outside of Component"),i.a.createElement("div",{className:"example-button",style:r,onClick:function(){return c({text:"Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum",type:j.INFO,timeoutDuration:5e3})}},"Toast"),i.a.createElement("div",{className:"example-button",style:r,onClick:function(){return c({customComponent:i.a.createElement(e,{a:"test"}),type:j.INFO,timeoutDuration:5e3})}},"Custom Content Toast"))},P=function(){return i.a.createElement(F,null)},B=function(){return i.a.createElement(A,null,i.a.createElement(P,null))};c.a.render(i.a.createElement(B,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.b1d675f6.chunk.js.map