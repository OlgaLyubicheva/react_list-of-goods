(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(8),l=o.n(r),c=o(1),s=o(2),i=o(4),u=o(3),d=o(5),h=o(6),m=function(t){function e(t){var o,n=t.goods;return Object(c.a)(this,e),(o=Object(i.a)(this,Object(u.a)(e).call(this))).reverseSort=function(){o.setState(function(t){return{sortGoods:t.sortGoods.reverse()}})},o.alphabetSort=function(){o.setState(function(t){return{sortGoods:t.sortGoods.sort(function(t,e){return t.localeCompare(e)})}})},o.lengthSort=function(){o.setState(function(t){return{sortGoods:t.sortGoods.sort(function(t,e){return t.length-e.length})}})},o.resetSort=function(){o.setState({sortGoods:Object(h.a)(o.goods),lengthSelector:1})},o.selectLength=function(t){var e=t.target.value;o.setState({sortGoods:o.goods.filter(function(t){return t.length>=Number(e)}),lengthSelector:e})},o.goods=n,o.state={sortGoods:Object(h.a)(o.goods),lengthSelector:1},o}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("button",{type:"button",onClick:this.reverseSort},"Reverse"),a.a.createElement("button",{type:"button",onClick:this.alphabetSort},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:this.lengthSort},"Sort by length"),a.a.createElement("button",{type:"button",onClick:this.resetSort},"Reset"),a.a.createElement("select",{className:"lengthSelector",onChange:this.selectLength,value:this.state.lengthSelector},a.a.createElement("option",{value:"1"},"1"),a.a.createElement("option",{value:"2"},"2"),a.a.createElement("option",{value:"3"},"3"),a.a.createElement("option",{value:"4"},"4"),a.a.createElement("option",{value:"5"},"5"),a.a.createElement("option",{value:"6"},"6"),a.a.createElement("option",{value:"7"},"7"),a.a.createElement("option",{value:"8"},"8"),a.a.createElement("option",{value:"9"},"9"),a.a.createElement("option",{value:"10"},"10")),a.a.createElement("ul",null,this.state.sortGoods.map(function(t,e){return a.a.createElement("li",{key:"".concat(t).concat(e+10)},t)})))}}]),e}(a.a.Component),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(t){function e(){var t,o;Object(c.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={goods:[],isGoodsLoaded:!0},o.startClick=function(){o.setState({goods:[].concat(p),isGoodsLoaded:!1})},o}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.isGoodsLoaded,o=t.goods;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Goods List"),e?a.a.createElement("button",{type:"button",onClick:this.startClick},"Start"):a.a.createElement(m,{goods:o}))}}]),e}(a.a.Component);l.a.render(a.a.createElement(b,null),document.getElementById("root"))},9:function(t,e,o){t.exports=o(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.8a58c5f6.chunk.js.map