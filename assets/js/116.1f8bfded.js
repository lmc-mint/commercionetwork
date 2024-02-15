(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{430:function(t,e,s){"use strict";s.r(e);var a=s(14),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"sending-a-document-reading-receipt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sending-a-document-reading-receipt"}},[t._v("#")]),t._v(" Sending a document reading receipt")]),t._v(" "),e("p",[t._v("Once you have received a document and you want to acknowledge the sender that you have properly read it, you can use\nthe "),e("code",[t._v("MsgSendDocumentReceipt")]),t._v(" message that allows you to do that.")]),t._v(" "),e("h2",{attrs:{id:"transaction-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transaction-message"}},[t._v("#")]),t._v(" Transaction message")]),t._v(" "),e("p",[t._v("In order to properly send a transaction to share a document, you will need to create and sign the\nfollowing message.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commercio/MsgSendDocumentReceipt"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uuid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Unique receipt identifier>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sender"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Document sender address>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recipient"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Document recipient address>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tx_hash"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Tx hash in which the document has been sent>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"document_uuid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Document UUID>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"proof"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Optional reading proof>"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"fields-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fields-requirements"}},[t._v("#")]),t._v(" Fields requirements")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("uuid")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("sender")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("recipient")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("tx_hash")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("document_uuid")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("proof")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("No")])])])]),t._v(" "),e("h2",{attrs:{id:"action-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action-type"}},[t._v("#")]),t._v(" Action type")]),t._v(" "),e("p",[t._v("If you want to "),e("RouterLink",{attrs:{to:"/docs2.2.0/developers/listing-transactions.html"}},[t._v("list past transactions")]),t._v(" including this kind of message,\nyou need to use the following "),e("code",[t._v("message.action")]),t._v(" value:")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sendDocumentReceipt\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);