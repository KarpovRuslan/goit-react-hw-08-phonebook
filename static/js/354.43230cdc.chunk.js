"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[354],{9354:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(168),s=n(4270),r=n(7691),i=n(9439),l=n(2791),c="ContactForm_ContactForm__QuT-m",o="ContactForm_ContactForm__input__aPjmg",u=n(9434),d=n(3634),m=function(e){return e.contactsReducer.items},_=function(e){return e.contactsReducer.filter},h=n(346),f=n(6151),x=n(675),p=n(184);function v(){var e=(0,u.I0)(),t=(0,u.v9)(m),n=(0,l.useState)(""),a=(0,i.Z)(n,2),s=a[0],r=a[1],_=(0,l.useState)(""),v=(0,i.Z)(_,2),j=v[0],C=v[1],b=function(e){"name"===e.target.name?r(e.target.value):"number"===e.target.name&&C(e.target.value)};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("form",{onSubmit:function(n){n.preventDefault(),null!==t&&void 0!==t&&t.find((function(e){return e.name===s}))?alert("".concat(s," is already in contacts")):e((0,d.uK)({name:s,number:j})),r(""),C("")},className:c,children:[(0,p.jsx)(h.Z,{type:"text",size:"small",margin:"dense",label:"Name",value:s,onChange:b,name:"name",className:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,p.jsx)(h.Z,{type:"tel",size:"small",margin:"dense",label:"Number",value:j,onChange:b,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,p.jsx)(f.Z,{type:"submit",variant:"contained",startIcon:(0,p.jsx)(x.Z,{}),children:"Add contact"})]})})}var j="ContactList_ContactList__2mXfy",C="ContactList_ContactList__item__B+7D-",b="ContactList_ContactList__text__EGfQe",g="ContactList_ContactList_find__76piz",F=n(3400),Z=n(7247);function y(){var e=(0,u.I0)(),t=(0,u.v9)(m),n=(0,u.v9)(_),a=null===t||void 0===t?void 0:t.filter((function(e){return e.name.toLowerCase().includes(n)}));return(0,l.useEffect)((function(){e((0,d.yF)())}),[e]),(0,p.jsxs)("ul",{className:j,children:[(0,p.jsxs)("p",{className:g,children:["Total contacts: ",null===a||void 0===a?void 0:a.length]}),null===a||void 0===a?void 0:a.map((function(t){return(0,p.jsxs)("li",{className:C,children:[(0,p.jsxs)("p",{className:b,children:[t.name,": ",t.number]}),(0,p.jsx)(F.Z,{"aria-label":"delete",onClick:function(){return e((0,d.GK)(t.id))},color:"primary",children:(0,p.jsx)(Z.Z,{})})]},t.id)}))]})}var N,L="Filter_Filter__input__wYlsf",k="Filter_Filter__Gzk39",z="Filter_Filter__text__R7YBj",w="Filter_Filter__block__8aiG+",A=n(1538);function G(){var e=(0,u.I0)();return(0,p.jsxs)("div",{className:w,children:[(0,p.jsxs)("label",{htmlFor:"find",className:k,children:["Find contacts by ",(0,p.jsx)("span",{className:z,children:"name"})]}),(0,p.jsx)(h.Z,{fullWidth:!0,label:"search",size:"small",margin:"dense",type:"text",className:L,onChange:function(t){return e((0,A.W)(t.target.value.toLowerCase()))}})]})}function I(){var e=r.ZP.section(N||(N=(0,a.Z)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  "])));return(0,p.jsxs)("div",{children:[(0,p.jsx)(s.q,{title:"Contacts"}),(0,p.jsxs)(e,{children:[(0,p.jsx)("h1",{children:"Manage your contacts list"}),(0,p.jsx)(v,{}),(0,p.jsx)(G,{}),(0,p.jsx)(y,{})]})]})}}}]);
//# sourceMappingURL=354.43230cdc.chunk.js.map