(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{377:function(t,e,a){"use strict";a.r(e);var s=a(14),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"sending-a-document"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sending-a-document"}},[t._v("#")]),t._v(" Sending a document")]),t._v(" "),e("p",[t._v("In order to send a document you are required to have an identity with some tokens inside it.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("To know what an identity is, how to create it and how to get tokens, please refer to the\n"),e("RouterLink",{attrs:{to:"/docs2.1.2/x/id/tx/create-an-identity.html"}},[e("em",[t._v('"Creating an identity"')]),t._v(" section")]),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"transaction-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transaction-message"}},[t._v("#")]),t._v(" Transaction message")]),t._v(" "),e("p",[t._v("In order to properly send a transaction to share a document, you will need to create and sign the\nfollowing message.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commercio/MsgShareDocument"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sender"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Sender Did>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recipients"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Recipient address>"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uuid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Document UUID>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content_uri"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Document content URI>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"metadata"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content_uri"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Metadata content URI>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schema"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uri"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Metadata schema definition URI>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Metadata schema version>"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schema_type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Metadata schema type>"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"checksum"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Document content checksum value>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"algorithm"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Document content checksum algorithm>"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encryption_data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keys"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recipient"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Recipient address>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Encrypted and encoded symmetric key value>"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encrypted_data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Encrypted field identifier>"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"do_sign"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"storage_uri"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uri://storage"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signer_instance"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did S"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sdn_data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"firstName"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                \n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lastName"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                \n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                \n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vcrId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<identity VCR Identifier"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"certificateProfile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<one of the profiles supported by S>"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"fields-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fields-requirements"}},[t._v("#")]),t._v(" Fields requirements")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("sender")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("recipients")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("uuid")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("content_uri")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("No")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("metadata")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("checksum")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("No")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("encryption_data")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("No")])])])]),t._v(" "),e("h5",{attrs:{id:"metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metadata"}},[t._v("#")]),t._v(" "),e("code",[t._v("metadata")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("content_uri")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("schema_type")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("No *"),e("sup",[t._v("1")]),t._v(" *"),e("sup",[t._v("2")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("schema")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("No *"),e("sup",[t._v("1")])])])])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("*"),e("sup",[t._v("1")]),t._v(" The "),e("code",[t._v("schema_type")]),t._v(" and "),e("code",[t._v("schema")]),t._v(" fields are mutually exclusive.\nThis means that if the first one exists the second will not be used.")])]),t._v(" "),e("li",[e("p",[t._v("*"),e("sup",[t._v("2")]),t._v(" You can read which "),e("code",[t._v("schema_type")]),t._v(" values are supported inside\nthe "),e("RouterLink",{attrs:{to:"/docs2.1.2/x/docs/metadata-schemes.html#supported-metadata-schemes"}},[t._v("supported metadata schemes section")])],1)])]),t._v(" "),e("h6",{attrs:{id:"metadata-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metadata-schema"}},[t._v("#")]),t._v(" "),e("code",[t._v("metadata.schema")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("uri")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("version")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])]),t._v(" "),e("h5",{attrs:{id:"checksum"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checksum"}},[t._v("#")]),t._v(" "),e("code",[t._v("checksum")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("value")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("algorithm")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes *"),e("sup",[t._v("1")])])])])]),t._v(" "),e("ul",[e("li",[t._v("*"),e("sup",[t._v("1")]),t._v(" You can read which "),e("code",[t._v("checksum.algorithm")]),t._v(" values are supported inside the\n"),e("a",{attrs:{href:"#supported-checksum-algorithm"}},[t._v("supported checksum algorithms section")])])]),t._v(" "),e("h5",{attrs:{id:"encryption-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encryption-data"}},[t._v("#")]),t._v(" "),e("code",[t._v("encryption_data")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("key")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("encrypted_data")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])]),t._v(" "),e("h5",{attrs:{id:"do-sign"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#do-sign"}},[t._v("#")]),t._v(" "),e("code",[t._v("do_sign")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("storage_uri")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes ??")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("signer_instance")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("sdn_data")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("No")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("vcrId")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("certificateProfile")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes/No ??")])])])]),t._v(" "),e("ul",[e("li",[t._v("storage_uri")]),t._v(" "),e("li",[t._v("signer_instance")]),t._v(" "),e("li",[t._v("sdn_data: contains an array with a list of required fields for Subject Distinguish Name. The names of fields are x509 standard compliant")])]),t._v(" "),e("h2",{attrs:{id:"supported-checksum-algorithm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-checksum-algorithm"}},[t._v("#")]),t._v(" Supported checksum algorithm")]),t._v(" "),e("p",[t._v("When computing the checksum of a document's contents, you must use one of the following supported checksum algorithms."),e("br"),t._v("\nNot using one of these will result in your transaction being rejected or mishandled by recipients.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Algorithm")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Specification")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("md5")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://www.ietf.org/rfc/rfc1321.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("MD5"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("sha-1")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://tools.ietf.org/html/rfc3174",target:"_blank",rel:"noopener noreferrer"}},[t._v("SHA-1"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("sha-224")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://tools.ietf.org/html/rfc4634",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 4634"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("sha-256")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://tools.ietf.org/html/rfc4634",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 4634"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("sha-384")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://tools.ietf.org/html/rfc4634",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 4634"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("sha-512")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://tools.ietf.org/html/rfc4634",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 4634"),e("OutboundLink")],1)])])])]),t._v(" "),e("h4",{attrs:{id:"checksum-validity-check"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checksum-validity-check"}},[t._v("#")]),t._v(" Checksum validity check")]),t._v(" "),e("p",[t._v("Please note that, when sending a document that has an associated checksum, the validity of the checksum itself is\nchecked only formally. This means that we only check that the hash value has a valid length, but we do not check\nif the given has is indeed the hash of the document's content. It should be the client responsibility to perform this\ncheck.")]),t._v(" "),e("h2",{attrs:{id:"encrypting-the-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encrypting-the-data"}},[t._v("#")]),t._v(" Encrypting the data")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The following is just an example on how to do file encryption, you're free to use any other algorithm!")])]),t._v(" "),e("p",[t._v("In order to properly encrypting the data that you want to avoid being shared publicly,\nthe following procedure should be followed.")]),t._v(" "),e("p",[t._v("We'll use AES-256 in CBC mode to encrypt a file, and let the recipient decrypt it by sharing with\nit the AES encryption key.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Generate a safe AES-256 encryption key. A key size of 256 bits is recommended.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("aes_key = get_random_aes_key(key_size = 256)\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Use the AES key to encrypt the data you desire using the AES-256 CBC method.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("encrypted_data = aes_encrypt_cbc(\n  key = aes_key, \n  initialization_vector = null\n)\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Encrypt the AES-256 key using the recipient's public encryption key")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("encrypted_aes_key = rsa_encrypt(\n  key = recipient.public_rsa_encryption_key,\n  value = aes_key\n)    \n")])])])]),t._v(" "),e("li",[e("p",[t._v("Encode the encrypted AES-256 key")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("encoded_encryption_key = hex_encode(encrypted_aes_key)\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Compose the encryption data")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encryption_data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keys"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recipient"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Recipient address>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Hex encoded encryption key>"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encrypted_data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Your encrypted data identifier>"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("encrypted_data")]),t._v(" field does not contain the encrypted payload itself, but rather denotes what message property is encrypted with "),e("code",[t._v("aes_key")]),t._v(".")]),t._v(" "),e("p",[e("code",[t._v("encrypted_data")]),t._v(" only accepts the following identifiers:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("content_uri")])]),t._v(" "),e("li",[e("code",[t._v("metadata.content_uri")])]),t._v(" "),e("li",[e("code",[t._v("metadata.schema.uri")])])]),t._v(" "),e("p",[t._v("A special identifier, "),e("code",[t._v("content")]),t._v(", can be used to specify that "),e("code",[t._v("aes_key")]),t._v(" has been used to encrypt a file exchanged by other means of communication.")]),t._v(" "),e("h3",{attrs:{id:"supported-encrypted-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-encrypted-data"}},[t._v("#")]),t._v(" Supported encrypted data")]),t._v(" "),e("p",[t._v("Please note that when specifying which data you have encrypted for the document recipient, you need to use one or\nmore of the following identifiers inside the "),e("code",[t._v("encryption_data.encrypted_data")]),t._v(" field."),e("br"),t._v("\nInserting other non supported values inside such a field will result in the transactions being rejected as not valid.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Identifier")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Referenced data")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("content")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Document's file contents")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("content_uri")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Value of the "),e("code",[t._v("content_uri")]),t._v(" field")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("metadata.content_uri")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Value of the "),e("code",[t._v("content_uri")]),t._v(" field inside the "),e("code",[t._v("metadata")]),t._v(" object")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("metadata.schema.uri")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Value of the "),e("code",[t._v("uri")]),t._v(" field inside the "),e("code",[t._v("metadata")]),t._v("'s "),e("code",[t._v("schema")]),t._v(" sub-object")])])])]),t._v(" "),e("h2",{attrs:{id:"action-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action-type"}},[t._v("#")]),t._v(" Action type")]),t._v(" "),e("p",[t._v("If you want to "),e("RouterLink",{attrs:{to:"/docs2.1.2/developers/listing-transactions.html"}},[t._v("list past transactions")]),t._v(" including this kind of message,\nyou need to use the following "),e("code",[t._v("message.action")]),t._v(" value:")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("shareDocument\n")])])]),e("h2",{attrs:{id:"transaction-cost"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transaction-cost"}},[t._v("#")]),t._v(" Transaction cost")]),t._v(" "),e("p",[t._v("To make sure every person on the network has predictable costs when sending a document, you are required to set\na minimum "),e("code",[t._v("fee.amount")]),t._v(" value inside the transaction when using the "),e("code",[t._v("commercio/MsgShareDocument")]),t._v(" message type.")]),t._v(" "),e("p",[t._v("This minimum fee value is always equivalent at 0.01 euro and can be paid in two different methods:")]),t._v(" "),e("ol",[e("li",[t._v("Using "),e("code",[t._v("10000uccc")]),t._v(", which are millionth of Commercio Cash Credits."),e("br"),t._v("\nIn order to know how to get the Commercio Cash Credits, please refer to the "),e("RouterLink",{attrs:{to:"/docs2.1.2/x/commerciomint/tx/open-cdp.html"}},[e("em",[t._v('"Opening a CDP"')]),t._v(" page")])],1),t._v(" "),e("li",[t._v("Using the 0.01 euro equivalent of Commercio Tokens."),e("br"),t._v("\nPlease note that the usage of such tokens is discouraged as it is more difficult to properly have an estimate on how\nmany tokens are needed. When using it you should set a 10% more of the minimum tokens required.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);