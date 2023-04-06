"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[985],{7985:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,o,i,a,s,c,d,l,p,x,u,f,m,b=t(168),h=t(7691),g=h.ZP.div(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Z=h.ZP.h2(o||(o=(0,b.Z)(["\n  display: block;\n  margin: 20px 0 10px;\n  color: #333340;\n  font-size: 24px;\n"]))),j=h.ZP.div(i||(i=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),v=h.ZP.p(a||(a=(0,b.Z)(["\n  display: block;\n  margin: 0 0 20px;\n  color: #333340;\n  font-size: 18px;\n"]))),y=t(9439),w=t(2791),C=t(6429),k=t.n(C),P=h.ZP.form(s||(s=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),z=h.ZP.label(c||(c=(0,b.Z)(["\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),_=h.ZP.input(d||(d=(0,b.Z)(["\n  margin: 0;\n  outline: none;\n  width: 300px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border: 1px solid #333340;\n  border-radius: 5px;\n"]))),T=h.ZP.button(l||(l=(0,b.Z)(["\n  cursor: pointer;\n  width: 120px;\n  height: 34px;\n  margin-top: 10px;\n  border-radius: 5px;\n  border: 1px solid #ff6b08;\n  transition: box-shadow 400ms ease-in, color 400ms ease-in,\n    background-color 400ms ease-in;\n  color: #ff6b08;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n  font-weight: 700;\n  font-size: 16px;\n  text-shadow: 0 0 1px #000000;\n\n  &:hover {\n    color: #ffffff;\n    background-color: #ff6b08;\n    border: none;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  }\n"]))),A=t(897),L=t(6916),N=function(n){return n.filter},F=function(n){return n.contacts.items},I=function(n){return n.contacts.isLoading},G=function(n){return n.contacts.error},S=(0,L.P1)([F,N],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),q=t(9434),D=t(3329),K=function(){var n=(0,w.useState)(""),e=(0,y.Z)(n,2),t=e[0],r=e[1],o=(0,w.useState)(""),i=(0,y.Z)(o,2),a=i[0],s=i[1],c=(0,q.v9)(F),d=(0,q.I0)(),l=k().generate(),p=function(n){var e=n.currentTarget,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":s(o);break;default:return}},x=function(){r(""),s("")};return(0,D.jsxs)(P,{onSubmit:function(n){var e;n.preventDefault(),c.find((function(n){return n.name.toLocaleLowerCase()===t.toLowerCase()}))?alert("".concat(t," is already in contacs")):(e=function(n){var e=n.name,t=n.number;return{id:l,name:e,number:t}}({name:t,number:a}),d((0,A.uK)(e)),x())},children:[(0,D.jsx)(z,{children:"Name"}),(0,D.jsx)(_,{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p}),(0,D.jsx)(z,{children:" Number "}),(0,D.jsx)(_,{type:"tel",name:"number",value:a,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p}),(0,D.jsx)(T,{type:"submit",children:" Add contact "})]})},R=h.ZP.label(p||(p=(0,b.Z)(["\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),B=h.ZP.input(x||(x=(0,b.Z)(["\n  margin: 0;\n  outline: none;\n  width: 300px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border: 1px solid #333340;\n  border-radius: 5px;\n\n"]))),E=t(5030),J=function(){var n=(0,q.v9)(N),e=(0,q.I0)();return(0,D.jsxs)("div",{children:[(0,D.jsx)(R,{children:"Find contacts by name"}),(0,D.jsx)(B,{type:"text",value:n,name:"filter",onChange:function(n){return e((0,E.T)(n.target.value))}})]})},M=h.ZP.ul(u||(u=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n  padding: 0 40px;\n  list-style: none;\n"]))),$=h.ZP.li(f||(f=(0,b.Z)(["\n  display: flex;\n  gap: 40px;\n  align-items: center;\n  justify-content:space-between;\n"]))),H=h.ZP.button(m||(m=(0,b.Z)(["\n  cursor: pointer;\n  width: 80px;\n  height: 22px;\n  border-radius: 5px;\n  border: 1px solid #ff6b08;\n  transition: box-shadow 400ms ease-in, color 400ms ease-in,\n  background-color 400ms ease-in;\n  color: #ff6b08;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n  font-weight: 500;\n  font-size: 16px;\n  text-shadow: 0 0 1px #000000;\n\n  &:hover {\n    color: #ffffff;\n    background-color: #ff6b08;\n    border: none;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  }"]))),O=function(){var n=(0,q.v9)(S),e=(0,q.I0)();return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(M,{children:n.map((function(n){var t=n.name,r=n.id,o=n.number;return(0,D.jsxs)($,{children:[t," : ",o,(0,D.jsx)(H,{type:"button",onClick:function(){return e((0,A.GK)(r))},children:"Delete"})]},r)}))})})},Q=t(5243);function U(){var n=(0,q.v9)(S),e=(0,q.v9)(G),t=(0,q.v9)(I),r=(0,q.I0)();return(0,w.useEffect)((function(){r((0,A.yF)())}),[r]),(0,D.jsx)(g,{children:(0,D.jsxs)("div",{children:[(0,D.jsx)(K,{}),(0,D.jsx)(Z,{children:"Contacts"}),(0,D.jsx)(J,{}),t&&!e?(0,D.jsx)(j,{children:(0,D.jsx)(Q.g4,{})}):(0,D.jsx)(O,{}),!n.length&&(0,D.jsx)(v,{children:"There are no contacts in the Phonebook"})]})})}}}]);
//# sourceMappingURL=985.60a8600c.chunk.js.map