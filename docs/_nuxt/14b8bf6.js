(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{469:function(t,e,n){"use strict";n.r(e);var l=n(187),c={__name:"1_1",setup:function(t){return{__sfc:!0}}},_=n(87),component=Object(_.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"mt-3 ml-3 mr-3"},[e("div",{staticClass:"text-left"},[t._m(0),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("テスト")]),t._v(" "),e(l.a,{staticClass:"mb-1"},[t._v("mdi-folder-file-outline")]),e("span",{staticClass:"filename"},[t._v("test.html")]),t._v(" "),t._m(1)],1)])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",{staticClass:"text-h5",staticStyle:{"font-weight":"bold"}},[e("span",{staticClass:"title"},[t._v("▍")]),t._v("基本的な文法・型\n    ")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("pre",{staticStyle:{"font-size":"14px"}},[t._v('<v-table>\n  <thead>\n    <tr>\n      <th class="text-left">Name</th>\n      <th class="text-left">Age</th>\n      <th class="text-left">Tel</th>\n    </tr>\n  </thead>\n  <tbody>\n    '),e("span",{staticClass:"comment"},[t._v("\x3c!--keyはデータを認識する一意のもの。indexだと順序が変になる可能性がある。--\x3e")]),t._v('\n    <tr v-for="(item, key) in data.fire_data" v-bind:key="key">\n      <td class="text-left">\n        <v-btn\n          density="compact"\n          icon="mdi-delete"\n          class="mr-2 mb-1"\n          v-on:click="delData(key)"\n        ></v-btn\n        >｛｛ item.name ｝｝\n      </td>\n      <td class="text-left">｛｛ item.age ｝｝</td>\n      <td class="text-left">｛｛ item.tel ｝｝</td>\n    </tr>\n  </tbody>\n</v-table>')])}],!1,null,null,null);e.default=component.exports}}]);