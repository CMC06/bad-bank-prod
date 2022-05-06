(this["webpackJsonpbad-bank"]=this["webpackJsonpbad-bank"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(20),r=a.n(s),l=(a(27),a(16)),o=a(2),i=(a(28),a(10)),d=a(4),b=a(0),u=function(e){var t,a=e.users,c=e.setUsers;if(a)t=a.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.balance})]},e._id)}));else{fetch("/account/all").then((function(e){return e.json()})).then((function(e){c(Object(l.a)(e)),t=e.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.balance})]},e._id)}))}))}return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h2",{children:"All User Data"})}),a?Object(b.jsx)("div",{className:"tableDiv table-responsive",children:Object(b.jsxs)("table",{className:"table table-striped table-hover ",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Email"}),Object(b.jsx)("th",{scope:"col",children:"Balance"})]})}),Object(b.jsx)("tbody",{children:t})]})}):Object(b.jsx)("h4",{children:"No user data currently available."})]})},j=function(){var e=Object(c.useContext)(S),t=e.balance;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h2",{children:"Your Current Balance"})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("p",{className:"card-text",children:Object(b.jsxs)("strong",{children:["$",t]})}),t<=0?Object(b.jsx)("p",{className:"negative",children:"You need to deposit funds before making any withdrawals."}):Object(b.jsxs)("p",{children:["Welcome, ",e.name,"! Do you want to make a deposit or withdrawal today? If so--just select the correct action above."]})]})]})})},h=a(3),m=a.n(h),O=a(6),x=function(e){var t=e.setLoggedIn,a=e.setCurrentUser,n=Object(c.useState)(""),s=Object(o.a)(n,2),r=s[0],l=s[1],i=Object(c.useState)(""),d=Object(o.a)(i,2),u=d[0],j=d[1],h=Object(c.useState)(""),x=Object(o.a)(h,2),g=x[0],f=x[1],v=Object(c.useState)(!1),p=Object(o.a)(v,2),y=p[0],N=p[1],k=Object(c.useState)(!0),w=Object(o.a)(k,2),C=w[0],B=w[1],S=Object(c.useState)(!1),I=Object(o.a)(S,2),A=I[0],U=I[1],L=Object(c.useState)(!1),P=Object(o.a)(L,2),Y=P[0],D=P[1],T=Object(c.useState)(!1),E=Object(o.a)(T,2),W=E[0],F=E[1],M=function(){var e="/account/create/".concat(r,"/").concat(u.toLowerCase(),"/").concat(g);Object(O.a)(m.a.mark((function c(){var n;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch(e,{method:"POST"});case 2:if(409!==(n=c.sent).status){c.next=6;break}return alert("Error: this email address is already attached to an account. Please log in to your existing account."),c.abrupt("return",null);case 6:201===n.status&&(a({name:r,email:u.toLowerCase(),balance:0}),sessionStorage.setItem("name","".concat(r)),sessionStorage.setItem("email","".concat(u)),sessionStorage.setItem("balance","".concat(0)),N(!0),t(!0));case 7:case"end":return c.stop()}}),c)})))()},q=function(e){var t=!1;"name"===e.target.id&&(l(e.target.value),t=""!==e.target.value&&""!==u&&""!==g,""===e.target.value?D(!0):D(!1)),"email"===e.target.id&&(j(e.target.value),t=""!==e.target.value&&""!==r&&""!==g,""===e.target.value?F(!0):F(!1),""===r&&D(!0)),"password"===e.target.id&&(f(e.target.value),t=""!==e.target.value&&e.target.value.length>=8&&""!==r&&""!==g,e.target.value.length<8?U(!0):U(!1),""===r&&D(!0),""===u&&F(!0)),""===e.target.value&&B(!0),""!==e.target.value&&t&&B(!1)};return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h2",{children:"Create Account"})}),Object(b.jsx)("div",{className:"card-body",children:!0===y?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"card-text",children:"Congratulations, you have successfully created an account with Bad Bank! If you would like to create another account, please click below."}),Object(b.jsx)("button",{type:"button",onClick:function(){N(!1),a(null),t(!1)},className:"btn btn-dark",children:"Create Another Account"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{children:"Please fill out this form to create your new Bad Bank account."}),Object(b.jsx)("p",{className:"card-text",children:"Please note, you will not be able to submit the form without first providing a name, email address, and password of at least 8 characters length."}),Object(b.jsx)("form",{children:Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Name: "}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",placeholder:"Your Name",id:"name",onChange:q,className:"form-control"}),Y?Object(b.jsx)("p",{className:"negative smallP",children:"You must enter a name to submit the form."}):null,Object(b.jsx)("label",{className:"form-label",children:"Email: "})," ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"email",placeholder:"Your Email Address",id:"email",onChange:q,className:"form-control"}),W?Object(b.jsx)("p",{className:"negative smallP",children:"You must enter an email address to submit the form."}):null,Object(b.jsx)("label",{className:"form-label",children:"Password:"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"password",minLength:"8",placeholder:"Password",id:"password",onChange:q,className:"form-control"}),A?Object(b.jsx)("p",{className:"negative smallP",children:"Your password must be at least 8 characters long."}):null,Object(b.jsx)("br",{}),C?Object(b.jsx)("button",{type:"button",disabled:!0,onClick:M,className:"btn btn-dark",children:"Create an Account"}):Object(b.jsx)("button",{type:"button",disabled:!1,onClick:M,className:"btn btn-dark",children:"Create an Account"})]})})]})})]})})},g=function(e){var t=e.setCurrentUser,a=e.currentUser,n=Object(c.useState)(0),s=Object(o.a)(n,2),r=s[0],l=s[1],i=Object(c.useState)(!1),d=Object(o.a)(i,2),u=d[0],j=d[1],h=Object(c.useState)(!0),x=Object(o.a)(h,2),g=x[0],f=x[1],v=Object(c.useState)(!1),p=Object(o.a)(v,2),y=p[0],N=p[1],k=a.balance,w=function(){var e=a.email,c=Number(k)+Number(r),n="/account/updateBalance/".concat(e,"/").concat(c);Object(O.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:"PUT"});case 2:204===e.sent.status&&(t({name:a.name,email:a.email,balance:Number(c)}),l(0),j(!0),sessionStorage.setItem("balance","".concat(c)));case 4:case"end":return e.stop()}}),e)})))()};return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h2",{children:"Make a Deposit"})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("p",{className:"card-text",children:["Your current account balance is: ",Object(b.jsxs)("strong",{children:["$",k]})]}),u?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"You have successfully made your deposit. Thank you for using Bad Bank! For any of your additional banking needs, please select the desired action above."}),Object(b.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){j(!1)},children:"Make Another Deposit"})]}):Object(b.jsx)("form",{children:Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Enter Your Deposit Amount:"}),Object(b.jsx)("input",{type:"number",min:"0",placeholder:"Deposit Amount",className:"form-control",onChange:function(e){l(e.target.value),void 0!==e.target.value&&f(!1),""===e.target.value&&f(!0),e.target.value<=0?(f(!0),N(!0)):N(!1)}}),y?Object(b.jsx)("p",{className:"negative smallP",children:'We can only accept positive number values for a deposit. If you wish to make a withdrawal, please go to the "Withdraw" section of the Bad Bank Website.'}):Object(b.jsx)("br",{}),g?Object(b.jsx)("button",{type:"button",onClick:w,className:"btn btn-dark",disabled:!0,children:"Make Deposit"}):Object(b.jsx)("button",{type:"button",onClick:w,className:"btn btn-dark",disabled:!1,children:"Make Deposit"})]})})]})]})})},f=a.p+"static/media/BBLogo.e3fe1911.png",v=function(){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:f,className:"card-img-top",alt:"Bad Bank Logo"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h2",{className:"card-title",children:"Bad Bank Home"}),Object(b.jsx)("p",{className:"card-text",children:"We would like to welcome you to Bad Bank! We're not a very good bank, because we lack any security measures. You probably definitely should not trust us with your money or banking needs. Don't give us your real password either. You've been politely warned."})]})]})},p=a(12),y=function(e){var t=e.loggedIn,a=e.setLoggedIn,n=e.setCurrentUser,s=Object(c.useState)(""),r=Object(o.a)(s,2),l=r[0],i=r[1],d=Object(c.useState)(""),u=Object(o.a)(d,2),j=u[0],h=u[1],x=Object(c.useState)(!1),g=Object(o.a)(x,2),f=g[0],v=g[1],y=Object(c.useState)(!1),N=Object(o.a)(y,2),k=N[0],w=N[1],C=Object(c.useState)(!0),B=Object(o.a)(C,2),S=B[0],I=B[1],A=function(){var e="/account/login/".concat(l.toLowerCase(),"/").concat(j);Object(O.a)(m.a.mark((function t(){var c,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if(401!==(c=t.sent).status&&409!==c.status){t.next=7;break}alert("Either user email or user password do not match our database. If you have not yet created an account, please do so by clicking 'Create Account'"),t.next=11;break;case 7:return t.next=9,c.json();case 9:(s=t.sent)&&(a(!0),n(Object(p.a)({},s)),sessionStorage.setItem("name","".concat(s.name)),sessionStorage.setItem("email","".concat(s.email)),sessionStorage.setItem("balance","".concat(s.balance)));case 11:case"end":return t.stop()}}),t)})))()},U=function(e){var t=!1;"email"===e.target.id&&(i(e.target.value),t=""!==e.target.value&&""!==j,""===e.target.value?v(!0):v(!1)),"password"===e.target.id&&(h(e.target.value),t=""!==e.target.value&&e.target.value.length>=8&&""!==j,e.target.value.length<8?w(!0):w(!1),""===l&&v(!0)),""===e.target.value&&I(!0),""!==e.target.value&&t&&I(!1)};return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h2",{children:"Login"})}),Object(b.jsx)("div",{className:"card-body",children:t?Object(b.jsx)("p",{children:"Congratulations, you have successfully logged in to your account."}):Object(b.jsx)("form",{onsubmit:A,children:Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Email:"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"form-control",type:"text",onChange:U,id:"email",placeholder:"Account Holder Email"}),f?Object(b.jsx)("p",{className:"negative smallP",children:'You must enter a previously registered email address to login. If you do not yet have an account, go to "Create An Account" to sign up now.'}):null,Object(b.jsx)("label",{className:"form-label",children:"Password:"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"password",minLength:"8",placeholder:"Password",id:"password",onChange:U,className:"form-control"}),k?Object(b.jsx)("p",{className:"negative smallP",children:"Your password must be at least 8 characters long."}):null," ",Object(b.jsx)("br",{}),S?Object(b.jsx)("button",{type:"button",disabled:!0,onClick:A,className:"btn btn-dark",children:"Login"}):Object(b.jsx)("button",{type:"button",disabled:!1,onClick:A,className:"btn btn-dark",children:"Login"}),Object(b.jsx)("button",{type:"button",disabled:!1,onClick:function(){Object(O.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/account/login/tester@test.ing/testing123");case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent)&&(a(!0),n(Object(p.a)({},c)),sessionStorage.setItem("name","".concat(c.name)),sessionStorage.setItem("email","".concat(c.email)),sessionStorage.setItem("balance","".concat(c.balance)));case 7:case"end":return e.stop()}}),e)})))()},className:"btn btn-dark",style:{marginLeft:"10px"},children:"Demo Account Login"})]})})})]})})},N=function(e){var t=e.setCurrentUser,a=e.setLoggedIn,c=e.loggedIn;return Object(b.jsx)("div",{children:c?Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h2",{children:"Confirm Logout Request"})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("strong",{children:"Please click below to confirm that you want to log out of this banking session."})}),Object(b.jsx)("button",{onClick:function(){sessionStorage.clear(),t(null),a(!1),c=!1},type:"button",className:"btn btn-dark",children:"Confirm Logout"})]})]}):Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h2",{children:"Logged Out"})}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("strong",{children:"You have successfully logged out of Bad Bank."})})})]})})},k=function(e){var t=e.setCurrentUser,a=e.currentUser,n=Object(c.useState)(0),s=Object(o.a)(n,2),r=s[0],l=s[1],i=Object(c.useState)(!1),d=Object(o.a)(i,2),u=d[0],j=d[1],h=Object(c.useState)(!1),x=Object(o.a)(h,2),g=x[0],f=x[1],v=Object(c.useState)(!0),p=Object(o.a)(v,2),y=p[0],N=p[1],k=Object(c.useState)(!1),w=Object(o.a)(k,2),C=w[0],B=w[1],S=a.balance,I=function(){var e=a.email,c=function(){var e=Number(S)-Number(r);return e<=0&&f(!0),e}();if(c<0)f(!0);else{var n="/account/updateBalance/".concat(e,"/").concat(c);Object(O.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:"PUT"});case 2:204===e.sent.status&&(t({email:a.email,name:a.name,balance:Number(c)}),l(0),j(!0),sessionStorage.setItem("balance","".concat(c)));case 4:case"end":return e.stop()}}),e)})))()}};return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h2",{children:"Make a Withdrawal"})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("p",{className:"card-text",children:["Your current account balance is: ",Object(b.jsxs)("strong",{children:["$",S]})]}),!0===g?Object(b.jsxs)("p",{className:"negative",children:["You cannot make the requested withdraw as you have insufficient funds for that amount. ",Object(b.jsx)("br",{})," Please revise the requested amount below, or deposit sufficient funds prior to withdrawal."]}):null,u?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"You have successfully made your withdrawal. Thank you for using Bad Bank! For any of your additional banking needs, please select the desired action above."}),Object(b.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){j(!1)},children:"Make Another Withdrawal"})]}):Object(b.jsx)("form",{children:Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Enter Your Withdrawal Amount:"}),Object(b.jsx)("input",{type:"number",min:"0",placeholder:"Withdrawal Amount",className:"form-control",onChange:function(e){l(e.target.value),g&&f(!1),null!==e.target.value&&N(!1),""===e.target.value&&N(!0),e.target.value<=0?(N(!0),B(!0)):B(!1)}}),C?Object(b.jsx)("p",{className:"negative smallP",children:'We can only accept positive number values for a withdrawal. If you wish to make a deposit, please go to the "Deposit" section of the Bad Bank Website.'}):Object(b.jsx)("br",{}),y?Object(b.jsx)("button",{type:"button",onClick:I,className:"btn btn-dark",disabled:!0,children:"Withdraw Cash"}):Object(b.jsx)("button",{type:"button",onClick:I,className:"btn btn-dark",disabled:!1,children:"Withdraw Cash"})]})})]})]})})},w=function(e){var t=e.currentUser,a=e.setCurrentUser,n=Object(c.useState)(0),s=Object(o.a)(n,2),r=s[0],l=s[1],i=Object(c.useState)(""),d=Object(o.a)(i,2),u=d[0],j=d[1],h=Object(c.useState)(!1),x=Object(o.a)(h,2),g=x[0],f=x[1],v=Object(c.useState)(!1),y=Object(o.a)(v,2),N=y[0],k=y[1],w=Object(c.useState)(!1),C=Object(o.a)(w,2),B=C[0],S=C[1],I=Object(c.useState)(!0),A=Object(o.a)(I,2),U=A[0],L=A[1],P=Object(c.useState)(!1),Y=Object(o.a)(P,2),D=Y[0],T=Y[1],E=Object(c.useState)(!1),W=Object(o.a)(E,2),F=W[0],M=W[1],q=function(){l(0),j(""),f(!1),k(!1),S(!1),L(!0),T(!1),M(!1)},R=function(e){"amount"===e.target.id&&(l(e.target.value),B&&S(!1),e.target.value>0&&""!==u&&L(!1),e.target.value<=0?(L(!0),T(!0)):T(!1)),"transferEmail"===e.target.id&&(j(e.target.value),""!==e.target.value&&!1===D&&r>0,""===e.target.value?f(!0):f(!1))},H=function(){var e=t.email,c=function(){var e=Number(t.balance)-Number(r);return e<=0&&S(!0),e}();if(c<0)return S(!0),void alert("You are attempting to transfer more money than is available in your account. We cannot perform your transfer request at this time. Please adjust the amount you wish to transfer to a number that is less than or equal to your current balance.");var n="/account/checkUser/".concat(u.toLowerCase()),s="/account/updateBalance/".concat(e,"/").concat(c);Object(O.a)(m.a.mark((function e(){var o,i,d,b;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:if(409!==(o=e.sent).status){e.next=6;break}return alert("The user you are attempting to send money to does not have a Bad Bank account. At this time our bank cannot transfer money to those who bank elsewhere. We apologize for any inconvenience."),e.abrupt("return");case 6:return e.next=8,o.json();case 8:if(!((i=e.sent)&&c>=0)){e.next=16;break}return e.next=12,fetch(s,{method:"PUT"});case 12:204===e.sent.status&&(a(Object(p.a)(Object(p.a)({},t),{},{balance:Number(c)})),sessionStorage.setItem("balance","".concat(c)),u=i.balance,d=Number(u)+Number(r),b="/account/updateBalance/".concat(i.email,"/").concat(d),Object(O.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b,{method:"PUT"});case 2:204===e.sent.status&&(l(0),k(!0));case 4:case"end":return e.stop()}}),e)})))()),e.next=17;break;case 16:M(!0);case 17:case"end":return e.stop()}var u}),e)})))()};return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h2",{children:"Transfer Money to Another Bad Bank Customer"})}),Object(b.jsx)("div",{className:"card-body",children:F?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:"An error has occurred during the transfer process. Typical errors could include attempting to send money to an e-mail address that is not connected to a current Bad Bank account holder, or attempting to transfer a higher amount of money than currently exists in your Bad Bank account. Please check your balance information or note any alert messages you have received during your transfer request process to best determine the issue you are experiencing. If you would like to attempt the transfer again, click the button below."})}),Object(b.jsx)("button",{type:"button",onClick:q,className:"btn btn-dark",children:"New Transfer Request"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{className:"card-text",children:["Your current account balance is: ",Object(b.jsxs)("strong",{children:["$",t.balance]})]}),!0===N?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"card-text",children:"Congratulations, you have successfully transferred funds to another Bad Bank account holder. If you would like to make additional transfers of funds, please click the button below."}),Object(b.jsx)("button",{type:"button",onClick:q,className:"btn btn-dark",children:"New Transfer Request"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{children:"Please fill out this form to transfer money to another Bad Bank account holder."}),Object(b.jsx)("p",{className:"card-text",children:"Please note, you will not be able to submit the form without first providing the e-mail address of the account holder and the amount you wish to transfer to their account. You will need to use the official e-mail address associated with the individual's account to be able to transfer funds."}),Object(b.jsx)("form",{children:Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",children:"Transfer Recipient Account Holder's E-mail Address: "}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",placeholder:"Recipient Email Address",id:"transferEmail",onChange:R,className:"form-control"}),g?Object(b.jsx)("p",{className:"negative smallP",children:"You must enter an email address to submit the form."}):null,Object(b.jsx)("label",{className:"form-label",children:"Enter Your Transfer Amount:"}),Object(b.jsx)("input",{type:"number",min:"0",placeholder:"Transfer Amount",className:"form-control",onChange:R,id:"amount"}),D?Object(b.jsx)("p",{className:"negative smallP",children:"We can only accept positive number values for a transfer. If you wish to receive money from another Bad Bank account holder, they will need to initiate the transfer of funds to your account."}):Object(b.jsx)("br",{}),U?Object(b.jsx)("button",{type:"button",disabled:!0,onClick:H,className:"btn btn-dark",children:"Transfer Money"}):Object(b.jsx)("button",{type:"button",disabled:!1,onClick:H,className:"btn btn-dark",children:"Transfer Money"})]})})]})]})})]})})};var C=function(e){var t=e.currentUser,a=e.setLoggedIn,n=e.setCurrentUser,s=Object(c.useState)(!0),r=Object(o.a)(s,2),l=r[0],i=r[1];return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h2",{children:"Delete Your Bad Bank Account"})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{children:"Account Deletion Instructions"}),Object(b.jsx)("p",{className:"card-text",children:"Please note, that if you click the button below your Bad Bank account will be permanently deleted and we will not be able to retrieve any of your credentials, balance, or other transaction history. If you delete your account by mistake, you will need to sign up for a new account to continuing using Bad Bank services."}),Object(b.jsx)("form",{children:Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("input",{type:"checkbox",id:"ackDelete",name:"ackDelete",onClick:function(e){return function(e){var t=!e.target.checked;i(t)}(e)}}),Object(b.jsx)("label",{for:"ackDelete",className:"form-label",children:"I understand that submitting this request will permanently delete my Bad Bank account."}),Object(b.jsx)("br",{}),l?Object(b.jsx)("button",{type:"button",disabled:!0,className:"btn btn-dark",children:"Delete My Account"}):Object(b.jsx)("button",{type:"button",disabled:!1,className:"btn btn-dark",onClick:function(){if("tester@test.ing"!==t.email){var e=t.email,c="/account/deleteAccount/".concat(e);Object(O.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c,{method:"DELETE"});case 2:if(200===(t=e.sent).status){e.next=6;break}return alert("There was an error when deleting this account."),e.abrupt("return",null);case 6:200===t.status&&(alert("Your account has been deleted. We are sorry to lose you as a Bad Bank customer, but hope that you find a better bank for your future business."),setTimeout((function(){sessionStorage.clear(),n(null),a(!1),window.location.reload()}),5));case 7:case"end":return e.stop()}}),e)})))()}else alert("You are currently logged in under our demo account--we cannot delete this account. To use delete functionality, please create a new Bad Bank account.")},children:"Delete My Account"})]})})]})]})})},B=function(e){var t=e.users,a=e.loggedIn,c=e.setLoggedIn,n=e.setCurrentUser,s=e.currentUser;return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{to:"/",className:"navbar-brand",title:"Bad Bank Home Page",children:"Bad Bank"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(b.jsx)("ul",{className:"navbar-nav",children:null===s?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{to:"/create-account",className:"nav-link",title:"Click here to sign up for a new account.",children:"Create Account"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{to:"/login",className:"nav-link",title:"If you have an existing account, click here to login.",children:"Login"})})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{to:"/deposit",className:"nav-link",title:"Make a deposit to your account.",children:"Deposit"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{to:"/withdraw",className:"nav-link",title:"Make a withdrawal from your account.",children:"Withdraw"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{to:"/transfer",className:"nav-link",title:"Make a transfer from your account to another Bad Bank account.",children:"Transfer"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{to:"/balance",className:"nav-link",title:"Check your balance information.",children:"Balance"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{to:"/all-data",className:"nav-link",title:"View all user data.",children:"All Data"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{to:"/delete-account",className:"nav-link",title:"Delete My Bad Bank Account",children:"Delete Account"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{to:"/logout",className:"nav-link",title:"Logout.",children:"Logout"})})]})}),null!==s?Object(b.jsx)("div",{className:"navbar-text-box",children:Object(b.jsxs)("span",{class:"navbar-text",children:["Welcome, ",s.name,"!"]})}):Object(b.jsx)(b.Fragment,{})]})]})}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/create-account",children:Object(b.jsx)(x,{loggedIn:a,setLoggedIn:c,setCurrentUser:n})}),Object(b.jsx)(d.a,{path:"/login",children:Object(b.jsx)(y,{loggedIn:a,setLoggedIn:c,setCurrentUser:n})}),Object(b.jsx)(d.a,{path:"/deposit",children:Object(b.jsx)(g,{setCurrentUser:n,currentUser:s})}),Object(b.jsx)(d.a,{path:"/withdraw",children:Object(b.jsx)(k,{setCurrentUser:n,currentUser:s})}),Object(b.jsx)(d.a,{path:"/transfer",children:Object(b.jsx)(w,{setCurrentUser:n,currentUser:s,setLoggedIn:c})}),Object(b.jsx)(d.a,{path:"/balance",children:Object(b.jsx)(j,{})}),Object(b.jsx)(d.a,{path:"/all-data",children:Object(b.jsx)(u,{users:t})}),Object(b.jsx)(d.a,{path:"/delete-account",children:Object(b.jsx)(C,{currentUser:s,setCurrentUser:n,setLoggedIn:c})}),Object(b.jsx)(d.a,{path:"/logout",children:Object(b.jsx)(N,{setCurrentUser:n,setLoggedIn:c,loggedIn:a})}),Object(b.jsx)(d.a,{path:"/",children:Object(b.jsx)(v,{})})]})]})})},S=Object(c.createContext)();var I=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!!sessionStorage.getItem("email")),r=Object(o.a)(s,2),i=r[0],d=r[1],u=Object(c.useState)(sessionStorage.getItem("email")?{email:sessionStorage.getItem("email"),name:sessionStorage.getItem("name"),balance:Number(sessionStorage.getItem("balance"))}:null),j=Object(o.a)(u,2),h=j[0],m=j[1],O=Object(c.useState)(!1),x=Object(o.a)(O,2),g=x[0],f=x[1];return Object(c.useEffect)((function(){fetch("/account/all").then((function(e){return e.json()})).then((function(e){n(Object(l.a)(e))}))}),[h]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(S.Provider,{value:h,children:Object(b.jsx)(B,{users:a,setUsers:n,loggedIn:i,setLoggedIn:d,setCurrentUser:m,currentUser:h,accountExists:g,setAccountExists:f})})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),A()}},[[39,1,2]]]);
//# sourceMappingURL=main.7487d33e.chunk.js.map