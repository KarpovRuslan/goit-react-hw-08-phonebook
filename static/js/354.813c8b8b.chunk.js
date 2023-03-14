"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[354],{9354:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var a=n(168),s=n(4270),r=n(7691),i=n(9439),c=n(2791),l="ContactForm_ContactForm__QuT-m",o="ContactForm_ContactForm__input__aPjmg",u=n(9434),d=n(3634),m=function(e){return e.contactsReducer.items},_=function(e){return e.contactsReducer.filter},f=n(1588),h=n(4281),x=n(184);function p(){var e=(0,u.I0)(),t=(0,u.v9)(m),n=(0,c.useState)(""),a=(0,i.Z)(n,2),s=a[0],r=a[1],_=(0,c.useState)(""),p=(0,i.Z)(_,2),v=p[0],C=p[1],b=function(e){"name"===e.target.name?r(e.target.value):"number"===e.target.name&&C(e.target.value)};return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("form",{onSubmit:function(n){n.preventDefault(),null!==t&&void 0!==t&&t.find((function(e){return e.name===s}))?alert("".concat(s," is already in contacts")):e((0,d.uK)({name:s,number:v})),r(""),C("")},className:l,children:[(0,x.jsx)(f.Z,{type:"text",size:"small",margin:"dense",label:"Name",value:s,onChange:b,name:"name",className:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,x.jsx)(f.Z,{type:"tel",size:"small",margin:"dense",label:"Number",value:v,onChange:b,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,x.jsx)(h.Z,{type:"submit",variant:"contained",children:"Add contact"})]})})}var v="ContactList_ContactList__2mXfy",C="ContactList_ContactList__item__B+7D-",b="ContactList_ContactList__text__EGfQe",j="ContactList_ContactList__btn__nA-UK",g="ContactList_ContactList_find__76piz";function F(){var e=(0,u.I0)(),t=(0,u.v9)(m),n=(0,u.v9)(_),a=null===t||void 0===t?void 0:t.filter((function(e){return e.name.toLowerCase().includes(n)}));return(0,c.useEffect)((function(){e((0,d.yF)())}),[e]),(0,x.jsxs)("ul",{className:v,children:[(0,x.jsxs)("p",{className:g,children:["Total contacts: ",null===a||void 0===a?void 0:a.length]}),null===a||void 0===a?void 0:a.map((function(t){return(0,x.jsxs)("li",{className:C,children:[(0,x.jsxs)("p",{className:b,children:[t.name,": ",t.number]}),(0,x.jsx)("button",{className:j,onClick:function(){return e((0,d.GK)(t.id))},children:"Delete"})]},t.id)}))]})}var N,L="Filter_Filter__input__wYlsf",y="Filter_Filter__Gzk39",Z="Filter_Filter__text__R7YBj",k="Filter_Filter__block__8aiG+",z=n(1538);function w(){var e=(0,u.I0)();return(0,x.jsxs)("div",{className:k,children:[(0,x.jsxs)("label",{htmlFor:"find",className:y,children:["Find contacts by ",(0,x.jsx)("span",{className:Z,children:"name"})]}),(0,x.jsx)(f.Z,{fullWidth:!0,label:"search",size:"small",margin:"dense",type:"text",className:L,onChange:function(t){return e((0,z.W)(t.target.value.toLowerCase()))}})]})}function A(){var e=r.ZP.section(N||(N=(0,a.Z)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  "])));return(0,x.jsxs)("div",{children:[(0,x.jsx)(s.q,{title:"Contacts"}),(0,x.jsxs)(e,{children:[(0,x.jsx)(p,{}),(0,x.jsx)(w,{}),(0,x.jsx)(F,{})]})]})}}}]);
//# sourceMappingURL=354.813c8b8b.chunk.js.map