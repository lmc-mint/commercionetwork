(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{472:function(t,e,o){"use strict";o.r(e);var s=o(14),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"future-improvements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#future-improvements"}},[t._v("#")]),t._v(" Future Improvements")]),t._v(" "),e("h2",{attrs:{id:"block-time-drifts-problem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-time-drifts-problem"}},[t._v("#")]),t._v(" Block-time drifts problem")]),t._v(" "),e("p",[t._v("This implementation has block time drift based on block time.\nFor instance, we have an epoch of 100 units that ends at t=100, if we have a block at t=97 and a block at t=104 and t=110, this epoch ends at t=104.\nAnd new epoch start at t=110. There are time drifts here, for around 1-2 blocks time.\nIt will slow down epochs.")]),t._v(" "),e("p",[t._v("It's going to slow down epoch by 10-20s per week when epoch duration is 1 week. This should be resolved after launch.")])])}),[],!1,null,null,null);e.default=r.exports}}]);