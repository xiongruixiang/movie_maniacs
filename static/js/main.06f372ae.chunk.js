(this.webpackJsonpfront_end=this.webpackJsonpfront_end||[]).push([[0],{122:function(e,t,s){},124:function(e,t,s){},125:function(e,t,s){},131:function(e,t,s){},132:function(e,t,s){},133:function(e,t,s){},134:function(e,t,s){},135:function(e,t,s){},138:function(e,t,s){},139:function(e,t,s){},140:function(e,t,s){},141:function(e,t,s){},142:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s.n(c),a=s(32),n=s.n(a),r=(s(122),s(123),s(100)),j=s(27),d=s(23),o=s(24),l=s(26),h=s(25),b=(s(124),{rango:s.p+"static/media/rango.146be103.jpg",banner:s.p+"static/media/banner.00fc02ef.jpeg",comedyImg:s.p+"static/media/comedy.6aeab715.jpeg",thrillerImg:s.p+"static/media/thriller.7d6fcfb4.jpeg",romanceImg:s.p+"static/media/romance.9cc3510d.jpeg",horrorImg:s.p+"static/media/horror.6cee2bed.jpeg",actionImg:s.p+"static/media/action.4d16ee1e.jpeg",crimeImg:s.p+"static/media/crime.03416c16.jpeg"}),O=s(150),u=s(43),x=s.n(u),g=[{name:"Comedy",image:b.comedyImg},{name:"Thriller",image:b.thrillerImg},{name:"Romance",image:b.romanceImg},{name:"Horror",image:b.horrorImg},{name:"Action",image:b.actionImg},{name:"Crime",image:b.crimeImg}],m=(s(125),s(44)),p=s(1),v=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={searchName:""},c}return Object(o.a)(s,[{key:"searchMovie",value:function(){var e=this,t=this.state.searchName,s="http://127.0.0.1:8000/api/movie/"+t.split(" ").join("-")+"/";x.a.get(s,(function(s){200===s.status?e.props.history.push({pathname:"/search-result/",state:{searchValue:t,searchResult:s.data,message:""}}):"failed"===s.status&&e.props.history.push({pathname:"/search-result/",state:{searchValue:t,searchResult:{},message:s.message}})}))}},{key:"getSearchMovie",value:function(e){this.setState({searchName:e.target.value.toLowerCase()})}},{key:"goToHomepage",value:function(){this.props.history.push({pathname:"/"})}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"home-top",children:[Object(p.jsx)("p",{className:"title",onClick:function(){return e.goToHomepage()},children:"Movie-Maniacs"}),Object(p.jsxs)("div",{className:"search-login-signup",children:[Object(p.jsx)("input",{className:"search-input",placeholder:"Search Movie",onChange:function(t){return e.getSearchMovie(t)}}),Object(p.jsx)(m.a,{className:"home-button",onClick:function(){return e.searchMovie()},children:"Search"}),Object(p.jsx)(m.a,{className:"home-button login-btn",children:"Login"}),Object(p.jsx)(m.a,{className:"home-button signup-btn",children:"Signup"})]})]})}}]),s}(c.Component),f=Object(j.e)(v),y=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={searchName:"",latestMovies:[],topFiveMovies:[]},c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getLatestMovies(),this.getTopFiveMovies()}},{key:"getLatestMovies",value:function(){var e=this;x.a.get("http://127.0.0.1:8000/api/movie/latest_five_movies/",(function(t){200===t.status&&e.setState({latestMovies:t.data})}))}},{key:"getTopFiveMovies",value:function(){var e=this;x.a.get("http://127.0.0.1:8000/api/movie/top_five_movies/",(function(t){200===t.status&&e.setState({topFiveMovies:t.data})}))}},{key:"movieList",value:function(){this.state.latestMovies.map((function(e,t){console.log(t)}))}},{key:"goToMovieDetail",value:function(e){var t=this,s=e.toLowerCase().split(" ").join("-"),c="http://127.0.0.1:8000/api/movie/"+s+"/";x.a.get(c,(function(e){200===e.status&&t.props.history.push({pathname:"/movie/"+s+"/",state:{movie_info:e.data}})}))}},{key:"goToAboutUs",value:function(){this.props.history.push("/about-us/")}},{key:"goToCategory",value:function(e){var t=e.toLowerCase();this.props.history.push({pathname:"/category/"+t+"/",state:{categoryName:e}})}},{key:"render",value:function(){var e=this,t=this.state,s=t.latestMovies,c=t.topFiveMovies;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"home-header",children:[Object(p.jsx)(f,{}),Object(p.jsx)("img",{src:b.banner,className:"banner",alt:"banner"})]}),Object(p.jsxs)("div",{className:"home-latest-list",children:[Object(p.jsx)("p",{className:"title sub-title",children:"Explore what's streaming"}),Object(p.jsx)("div",{className:"latest-movie-list",children:s.map((function(t,s){return Object(p.jsxs)("div",{className:"movie-detail",onClick:function(){return e.goToMovieDetail(t.movie_name)},children:[Object(p.jsx)("img",{src:t.image,alt:"movie-name",height:"280",width:"200"}),Object(p.jsxs)("p",{children:["Name: ",t.movie_name]}),Object(p.jsxs)("p",{children:["Director: ",t.director]}),Object(p.jsxs)("p",{children:["Rating: ",Object(p.jsx)("span",{className:"rating",children:t.rating})]}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:t.rating})]},s)}))})]}),Object(p.jsxs)("div",{className:"category-list",children:[Object(p.jsx)("p",{className:"title sub-title",children:"Categories"}),Object(p.jsx)("div",{className:"latest-movie-list",children:g.map((function(t,s){return Object(p.jsxs)("div",{className:"movie-detail",onClick:function(){return e.goToCategory(t.name)},children:[Object(p.jsx)("img",{src:t.image,alt:"movie-name",height:"280",width:"200"}),Object(p.jsx)("p",{className:"category-name",children:Object(p.jsx)("a",{children:t.name})})]},s)}))})]}),Object(p.jsxs)("div",{className:"category-list",children:[Object(p.jsx)("p",{className:"title sub-title",children:"Top 5 movies"}),Object(p.jsx)("div",{className:"latest-movie-list",children:c.map((function(e,t){return Object(p.jsxs)("div",{className:"movie-detail",children:[Object(p.jsx)("img",{src:e.image,alt:"movie-name",height:"280",width:"200"}),Object(p.jsxs)("p",{children:["Name: ",e.movie_name]}),Object(p.jsxs)("p",{children:["Director: ",e.director]}),Object(p.jsxs)("p",{children:["Rating: ",Object(p.jsx)("span",{className:"rating",children:e.rating})]}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:e.rating})]},t)}))})]}),Object(p.jsx)("footer",{className:"home-footer",children:Object(p.jsx)("a",{onClick:function(){return e.goToAboutUs()},children:"--about us--"})})]})}}]),s}(c.Component),N=(s(131),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={},c}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{children:"Login page Test"})}}]),s}(c.Component)),T=(s(132),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={},c}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{children:"Signup page"})}}]),s}(c.Component)),w=(s(133),s(134),c.Component,s(117)),C=s(146),I=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={},c}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("html",{children:[Object(p.jsx)(C.a,{className:"site-page-header",onBack:function(){return window.history.back()},title:"Back"}),Object(p.jsx)("div",{class:"MovieTitle",children:"Recommendation Movie page"}),Object(p.jsx)("div",{class:"comedy",children:"Comedy"}),Object(p.jsxs)("div",{class:"comedy1",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction1",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Comedy"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"comedy2",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction2",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Comedy"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"comedy3",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction3",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Comedy"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"comedy4",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction4",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Comedy"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:4})]})]}),Object(p.jsxs)("div",{class:"comedy5",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction4",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Comedy"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:4})]})]}),Object(p.jsx)("div",{class:"line1",children:Object(p.jsx)("hr",{})}),Object(p.jsx)("div",{class:"thriller",children:"Thriller"}),Object(p.jsxs)("div",{class:"thriller1",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction1",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Thriller"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"thriller2",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction2",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Thriller"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"thriller3",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction3",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Thriller"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"thriller4",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction4",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Thriller"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:4})]})]}),Object(p.jsxs)("div",{class:"thriller5",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction4",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Thriller"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:4})]})]}),Object(p.jsx)("div",{class:"line2",children:Object(p.jsx)("hr",{})}),Object(p.jsx)("div",{class:"romance",children:"Romance"}),Object(p.jsxs)("div",{class:"romance1",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction1",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Romance"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"romance2",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction2",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Romance"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"romance3",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction3",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Romance"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"romance4",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction4",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Romance"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:4})]})]}),Object(p.jsxs)("div",{class:"romance5",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction4",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Romance"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:4})]})]}),Object(p.jsx)("div",{class:"line3",children:Object(p.jsx)("hr",{})}),Object(p.jsx)("div",{class:"horror",children:"Horror"}),Object(p.jsxs)("div",{class:"horror1",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction1",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Horror"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"horror2",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction2",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Horror"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"horror3",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction3",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Horror"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"horror4",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction4",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Horror"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:4})]})]}),Object(p.jsxs)("div",{class:"horror5",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction4",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Horror"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:4})]})]}),Object(p.jsx)("div",{class:"line4",children:Object(p.jsx)("hr",{})}),Object(p.jsx)("div",{class:"action",children:"Action"}),Object(p.jsxs)("div",{class:"action1",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction1",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Action"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"action2",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction2",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Action"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"action3",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction3",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Action"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"action4",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction4",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Action"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:4})]})]}),Object(p.jsxs)("div",{class:"action5",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction4",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Action"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:4})]})]}),Object(p.jsx)("div",{class:"line5",children:Object(p.jsx)("hr",{})}),Object(p.jsx)("div",{class:"crime",children:"Crime"}),Object(p.jsxs)("div",{class:"crime1",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction1",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Crime"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"crime2",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction2",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Crime"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"crime3",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction3",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Crime"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:5})]})]}),Object(p.jsxs)("div",{class:"crime4",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction4",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Crime"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:4})]})]}),Object(p.jsxs)("div",{class:"crime5",children:[Object(p.jsx)("img",{src:b.rango,height:"300",width:"200",alt:"rango"}),Object(p.jsxs)("div",{class:"introduction4",children:["Name:",Object(p.jsx)("br",{}),"Type: ",Object(p.jsx)(w.a,{children:Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Crime"})}),Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Introduction"}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:4})]})]})]})}}]),s}(c.Component),k=(s(135),s(149)),M=s(151),V=s(145),L=s(148),A=s(114),R=s(147),_=s(50),S=s(152);function D(e,t){var s=new FileReader;s.addEventListener("load",(function(){return t(s.result)})),s.readAsDataURL(e)}function H(e){var t="image/jpeg"===e.type||"image/png"===e.type||"image/jpg"===e.type;t||A.b.error("You can only upload JPG/PNG file!");var s=e.size/1024/1024<2;return s||A.b.error("Image must smaller than 2MB!"),t&&s}var F=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(d.a)(this,s);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={loading:!1},e.handleChange=function(t){"uploading"!==t.file.status?"done"===t.file.status&&D(t.file.originFileObj,(function(t){return e.setState({imageUrl:t,loading:!1})})):e.setState({loading:!0})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.state,t=e.loading,s=e.imageUrl,c=Object(p.jsxs)("div",{children:[t?Object(p.jsx)(_.a,{}):Object(p.jsx)(S.a,{}),Object(p.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return Object(p.jsx)(R.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",beforeUpload:H,onChange:this.handleChange,children:s?Object(p.jsx)("img",{src:s,alt:"avatar",style:{width:"100%"}}):c})}}]),s}(i.a.Component),U=L.a.TextArea;function B(e,t){console.log(e,t)}var E=k.a.Option;function P(e){console.log("selected ".concat(e))}function Y(){console.log("blur")}function J(){console.log("focus")}function G(e){console.log("search:",e)}var X=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={},c}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("html",{children:[Object(p.jsx)("div",{class:"titleAddMovie",children:"Add Movie ADMIN ONLY"}),Object(p.jsx)(C.a,{className:"site-page-header",onBack:function(){return window.history.back()},title:"Back"}),Object(p.jsx)("form",{action:" ",method:"get",children:Object(p.jsxs)("table",{class:"t",children:[Object(p.jsx)("tr",{children:Object(p.jsxs)("div",{class:"name",children:[Object(p.jsx)("td",{children:"name: "}),Object(p.jsx)("td",{children:Object(p.jsx)(L.a,{placeholder:"Movie name"})}),"\xa0",Object(p.jsx)("td",{children:"Actor: "}),Object(p.jsx)("td",{children:Object(p.jsx)(L.a,{placeholder:"Actor"})}),"\xa0",Object(p.jsx)("td",{children:"Director: "}),Object(p.jsx)("td",{children:Object(p.jsx)(L.a,{placeholder:"Director"})}),"\xa0",Object(p.jsx)("td",{children:"Type: "}),Object(p.jsx)("td",{children:Object(p.jsxs)(k.a,{showSearch:!0,style:{width:200},placeholder:"Select a type",optionFilterProp:"children",onChange:P,onFocus:J,onBlur:Y,onSearch:G,filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(p.jsx)(E,{value:"Comedy",children:"Comedy"}),Object(p.jsx)(E,{value:"Thriller",children:"Thriller"}),Object(p.jsx)(E,{value:"Romance",children:"Romance"}),Object(p.jsx)(E,{value:"Horror",children:"Horror"}),Object(p.jsx)(E,{value:"Action",children:"Action"}),Object(p.jsx)(E,{value:"Crime",children:"Crime"})]})}),"\xa0",Object(p.jsx)("td",{children:"Country Of Production: "}),Object(p.jsx)("td",{children:Object(p.jsx)(L.a,{placeholder:"Country"})}),"\xa0",Object(p.jsx)("td",{children:"Language: "}),Object(p.jsx)("td",{children:Object(p.jsx)(L.a,{placeholder:"Language"})}),"\xa0",Object(p.jsx)("td",{children:"Release Data: "}),Object(p.jsx)("td",{children:Object(p.jsx)(M.b,{direction:"vertical",children:Object(p.jsx)(V.a,{onChange:B})})}),"\xa0",Object(p.jsx)("td",{children:"Length: "}),Object(p.jsx)("td",{children:Object(p.jsx)(L.a,{placeholder:"Length"})}),"\xa0",Object(p.jsx)("td",{children:" Introduction: "}),Object(p.jsx)("td",{children:Object(p.jsx)(U,{rows:4})}),"\xa0"]})}),Object(p.jsx)("div",{class:"uploadPhoto",children:Object(p.jsx)(F,{})})]})}),Object(p.jsx)("div",{class:"addMovie",children:Object(p.jsx)("form",{id:"add_page_form",method:"post",action:"{% url 'rango:add_movie' category.slug %}",children:Object(p.jsx)("input",{type:"submit",name:"submit",value:"Add Movie"})})})]})}}]),s}(c.Component),q=(s(138),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={},c}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("html",{children:[Object(p.jsx)("div",{class:"titleAboutUs",children:"ABOUT US"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{class:"teamName",children:Object(p.jsx)("h",{children:"Team Name: Hello World"})}),Object(p.jsxs)("div",{class:"email",children:[Object(p.jsxs)("p",{children:["Email: ",Object(p.jsx)("br",{})]}),"Ruixiang Xiong: 2540725X@student.gla.ac.uk",Object(p.jsx)("br",{}),"Yuanchao Li: 2538656L@student.gla.ac.uk",Object(p.jsx)("br",{}),"Cheng Feng: 2537912F@student.gla.ac.uk",Object(p.jsx)("br",{}),"Yadi Tian: 2546988T@student.gla.ac.uk",Object(p.jsx)("br",{})]}),Object(p.jsx)("div",{class:"contact",children:"If you have any questions, please do not hesitate to contact us!"})]})}}]),s}(c.Component)),z=(s(139),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={},c}return Object(o.a)(s,[{key:"render",value:function(){return console.log(this.props.location.state.movie_info),Object(p.jsx)("div",{children:Object(p.jsx)(f,{})})}}]),s}(c.Component)),W=(s(140),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={movieList:[]},c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getMoviesByCategory(this.props.location.state.categoryName)}},{key:"getMoviesByCategory",value:function(e){var t=this,s="http://127.0.0.1:8000/api/category/"+e.toLowerCase()+"/";x.a.get(s,(function(e){200===e.status&&t.setState({movieList:e.data})}))}},{key:"goToMovieDetail",value:function(e){var t=this,s=e.toLowerCase().split(" ").join("-"),c="http://127.0.0.1:8000/api/movie/"+s+"/";x.a.get(c,(function(e){200===e.status&&t.props.history.push({pathname:"/movie/"+s+"/",state:{movie_info:e.data}})}))}},{key:"render",value:function(){var e=this,t=this.props.location.state.categoryName,s=this.state.movieList;return Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{}),Object(p.jsxs)("p",{className:"title sub-title",children:[t," Movies"]}),Object(p.jsx)("div",{className:"latest-movie-list",children:s.map((function(t,s){return Object(p.jsxs)("div",{className:"movie-detail",onClick:function(){return e.goToMovieDetail(t.movie_name)},children:[Object(p.jsx)("img",{src:t.image,alt:"movie-name",height:"280",width:"200"}),Object(p.jsxs)("p",{children:["Name: ",t.movie_name]}),Object(p.jsxs)("p",{children:["Director: ",t.director]}),Object(p.jsxs)("p",{children:["Rating: ",Object(p.jsx)("span",{className:"rating",children:t.rating})]}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:t.rating})]},s)}))}),Object(p.jsx)("footer",{className:"home-footer",children:Object(p.jsx)("a",{children:"--The End--"})})]})}}]),s}(c.Component)),K=(s(141),s(74)),Q=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={},c}return Object(o.a)(s,[{key:"goToMovieDetail",value:function(e){var t=this,s=e.toLowerCase().split(" ").join("-"),c="http://127.0.0.1:8000/api/movie/"+s+"/";x.a.get(c,(function(e){200===e.status&&t.props.history.push({pathname:"/movie/"+s+"/",state:{movie_info:e.data}})}))}},{key:"render",value:function(){var e=this,t=this.props.location.state,s=t.searchValue,c=t.searchResult,i=t.message;return Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{}),Object(p.jsxs)("p",{className:"title sub-title",children:['The search results for "',s,'"']}),0===Object.keys(c).length?Object(p.jsxs)("div",{className:"empty-show",children:[Object(p.jsx)(K.a,{description:!1,imageStyle:{height:200,width:200}}),Object(p.jsx)("p",{className:"message",children:i})]}):Object(p.jsx)("div",{className:"latest-movie-list",children:Object(p.jsxs)("div",{className:"movie-detail",onClick:function(){return e.goToMovieDetail(c.movie_name)},children:[Object(p.jsx)("img",{src:c.image,alt:"movie-name",height:"280",width:"200"}),Object(p.jsxs)("p",{children:["Name: ",c.movie_name]}),Object(p.jsxs)("p",{children:["Director: ",c.director]}),Object(p.jsxs)("p",{children:["Rating: ",Object(p.jsx)("span",{className:"rating",children:c.rating})]}),Object(p.jsx)(O.a,{disabled:!0,defaultValue:c.rating})]})})]})}}]),s}(c.Component),Z=function(){return Object(p.jsx)(r.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(j.a,{exact:!0,path:"/",component:y}),Object(p.jsx)(j.a,{exact:!0,path:"/login",component:N}),Object(p.jsx)(j.a,{exact:!0,path:"/signup",component:T}),Object(p.jsx)(j.a,{exact:!0,path:"/movie",component:I}),Object(p.jsx)(j.a,{exact:!0,path:"/add-movie",component:X}),Object(p.jsx)(j.a,{exact:!0,path:"/about-us",component:q}),Object(p.jsx)(j.a,{exact:!0,path:"/movie/:name",component:z}),Object(p.jsx)(j.a,{exact:!0,path:"/category/:name",component:W}),Object(p.jsx)(j.a,{exact:!0,path:"/search-result",component:Q})]})})};n.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(Z,{})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.06f372ae.chunk.js.map