(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(8),l=n.n(r),c=n(1),s=n(2),u=n(4),i=n(3),d=n(5),m=n(6),p=function(t){function e(t){var n,o=t.goods;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(i.a)(e).call(this))).reverseSort=function(){n.setState(function(t){return{sortGoods:t.sortGoods.reverse()}})},n.alphabetSort=function(){n.setState(function(t){return{sortGoods:t.sortGoods.sort(function(t,e){return t.localeCompare(e)})}})},n.lengthSort=function(){n.setState(function(t){return{sortGoods:t.sortGoods.sort(function(t,e){return t.length-e.length})}})},n.resetSort=function(){n.setState({sortGoods:Object(m.a)(n.goods)}),document.querySelector(".lengthSelector").selectedIndex=0},n.selectLength=function(t){var e=t.target.value;n.setState({sortGoods:n.goods.filter(function(t){return t.length>=Number(e)})})},n.goods=o,n.state={sortGoods:Object(m.a)(n.goods)},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("button",{type:"button",onClick:this.reverseSort},"Reverse"),a.a.createElement("button",{type:"button",onClick:this.alphabetSort},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:this.lengthSort},"Sort by length"),a.a.createElement("button",{type:"button",onClick:this.resetSort},"Reset"),a.a.createElement("select",{className:"lengthSelector",onChange:this.selectLength},a.a.createElement("option",null,"1"),a.a.createElement("option",null,"2"),a.a.createElement("option",null,"3"),a.a.createElement("option",null,"4"),a.a.createElement("option",null,"5"),a.a.createElement("option",null,"6"),a.a.createElement("option",null,"7"),a.a.createElement("option",null,"8"),a.a.createElement("option",null,"9"),a.a.createElement("option",null,"10")),a.a.createElement("ul",null,this.state.sortGoods.map(function(t,e){return a.a.createElement("li",{key:"".concat(t).concat(e+10)},t)})))}}]),e}(a.a.Component),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(a)))).state={goods:[],isGoodsLoaded:!0},n.startClick=function(){n.setState({goods:[].concat(h),isGoodsLoaded:!1})},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.isGoodsLoaded,n=t.goods;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Goods List"),e?a.a.createElement("button",{type:"button",onClick:this.startClick},"Start"):a.a.createElement(p,{goods:n}))}}]),e}(a.a.Component);l.a.render(a.a.createElement(b,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a523130a.chunk.js.map