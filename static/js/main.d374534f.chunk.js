(this.webpackJsonpfront_end=this.webpackJsonpfront_end||[]).push([[0],{166:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},180:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){},253:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(37),c=a.n(n),r=(a(166),a(167),a(133)),o=a(31),l=a(23),j=a(24),h=a(26),d=a(25),u=(a(168),{rango:a.p+"static/media/rango.146be103.jpg",banner:a.p+"static/media/banner.00fc02ef.jpeg",comedyImg:a.p+"static/media/comedy.6aeab715.jpeg",thrillerImg:a.p+"static/media/thriller.7d6fcfb4.jpeg",romanceImg:a.p+"static/media/romance.9cc3510d.jpeg",horrorImg:a.p+"static/media/horror.6cee2bed.jpeg",actionImg:a.p+"static/media/action.4d16ee1e.jpeg",crimeImg:a.p+"static/media/crime.03416c16.jpeg"}),m=a(273),b=a(34),v=a.n(b),O=[{name:"Comedy",image:u.comedyImg},{name:"Thriller",image:u.thrillerImg},{name:"Romance",image:u.romanceImg},{name:"Horror",image:u.horrorImg},{name:"Action",image:u.actionImg},{name:"Crime",image:u.crimeImg}],p=(a(169),a(55)),g=a(3),x=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={searchName:"",username:localStorage.getItem("username")},s}return Object(j.a)(a,[{key:"searchMovie",value:function(){var e=this,t=this.state.searchName,a="http://127.0.0.1:8000/api/movie/"+t.split(" ").join("-")+"/";v.a.get(a,(function(a){200===a.status?e.props.history.push({pathname:"/search-result/",state:{searchValue:t,searchResult:a.data,message:""}}):"failed"===a.status&&e.props.history.push({pathname:"/search-result/",state:{searchValue:t,searchResult:{},message:a.message}})}))}},{key:"getSearchMovie",value:function(e){this.setState({searchName:e.target.value.toLowerCase()})}},{key:"goToHomepage",value:function(){this.props.history.push({pathname:"/"})}},{key:"goToLoginPage",value:function(){this.props.history.push({pathname:"/login"})}},{key:"goToSignupPage",value:function(){this.props.history.push({pathname:"/signup"})}},{key:"logout",value:function(){localStorage.clear(),"/"===window.location.pathname?this.setState({username:""}):this.props.history.push("/")}},{key:"render",value:function(){var e=this,t=this.state.username;return Object(g.jsxs)("div",{className:"home-top",children:[Object(g.jsx)("p",{className:"title",onClick:function(){return e.goToHomepage()},children:"Movie-Maniacs"}),Object(g.jsxs)("div",{className:"search-login-signup",children:[Object(g.jsx)("input",{className:"search-input",placeholder:"Search Movie",onChange:function(t){return e.getSearchMovie(t)}}),Object(g.jsx)(p.a,{className:"home-button",onClick:function(){return e.searchMovie()},children:"Search"}),t?Object(g.jsxs)("div",{children:[Object(g.jsxs)(p.a,{className:"home-button login-btn show-username",children:["Hi, ",t]}),Object(g.jsx)(p.a,{className:"home-button signup-btn",onClick:function(){return e.logout()},children:"Logout"})]}):Object(g.jsxs)("div",{children:[Object(g.jsx)(p.a,{className:"home-button login-btn",onClick:function(){return e.goToLoginPage()},children:"Login"}),Object(g.jsx)(p.a,{className:"home-button signup-btn",onClick:function(){return e.goToSignupPage()},children:"Signup"})]})]})]})}}]),a}(s.Component),f=Object(o.e)(x),y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={searchName:"",latestMovies:[],topFiveMovies:[]},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getLatestMovies(),this.getTopFiveMovies()}},{key:"getLatestMovies",value:function(){var e=this;v.a.get("http://127.0.0.1:8000/api/movie/latest_five_movies/",(function(t){200===t.status&&e.setState({latestMovies:t.data})}))}},{key:"getTopFiveMovies",value:function(){var e=this;v.a.get("http://127.0.0.1:8000/api/movie/top_five_movies/",(function(t){200===t.status&&e.setState({topFiveMovies:t.data})}))}},{key:"movieList",value:function(){this.state.latestMovies.map((function(e,t){console.log(t)}))}},{key:"goToMovieDetail",value:function(e){var t=e.toLowerCase().split(" ").join("-");this.props.history.push({pathname:"/movie/"+t+"/",state:{movie_name_slug:t}})}},{key:"goToAboutUs",value:function(){this.props.history.push("/about-us/")}},{key:"goToCategory",value:function(e){var t=e.toLowerCase();this.props.history.push({pathname:"/category/"+t+"/",state:{categoryName:e}})}},{key:"goToAllMoviePage",value:function(){this.props.history.push({pathname:"/movie-list"})}},{key:"render",value:function(){var e=this,t=this.state,a=t.latestMovies,s=t.topFiveMovies;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"home-header",children:[Object(g.jsx)(f,{}),Object(g.jsx)("img",{src:u.banner,className:"banner",alt:"banner"})]}),Object(g.jsxs)("div",{className:"home-latest-list",children:[Object(g.jsx)("p",{className:"title sub-title",children:"Explore what's streaming"}),Object(g.jsxs)("div",{className:"latest-movie-list",children:[a.map((function(t,a){return Object(g.jsxs)("div",{className:"movie-detail",onClick:function(){return e.goToMovieDetail(t.movie_name)},children:[Object(g.jsx)("img",{src:t.image,alt:"movie-name",height:"280",width:"200"}),Object(g.jsxs)("p",{children:["Name: ",t.movie_name]}),Object(g.jsxs)("p",{children:["Director: ",t.director]}),Object(g.jsxs)("p",{children:["Rating: ",Object(g.jsx)("span",{className:"rating",children:t.rating})]}),Object(g.jsx)(m.a,{disabled:!0,defaultValue:t.rating})]},a)})),Object(g.jsx)("div",{className:"get-more",children:Object(g.jsx)("button",{onClick:function(){return e.goToAllMoviePage()},children:"Get More Movies"})})]})]}),Object(g.jsxs)("div",{className:"category-list",children:[Object(g.jsx)("p",{className:"title sub-title",children:"Categories"}),Object(g.jsx)("div",{className:"latest-movie-list",children:O.map((function(t,a){return Object(g.jsxs)("div",{className:"movie-detail",onClick:function(){return e.goToCategory(t.name)},children:[Object(g.jsx)("img",{src:t.image,alt:"movie-name",height:"280",width:"200"}),Object(g.jsx)("p",{className:"category-name",children:Object(g.jsx)("a",{children:t.name})})]},a)}))})]}),Object(g.jsxs)("div",{className:"category-list",children:[Object(g.jsx)("p",{className:"title sub-title",children:"Top 5 movies"}),Object(g.jsx)("div",{className:"latest-movie-list",children:s.map((function(t,a){return Object(g.jsxs)("div",{className:"movie-detail",onClick:function(){return e.goToMovieDetail(t.movie_name)},children:[Object(g.jsx)("img",{src:t.image,alt:"movie-name",height:"280",width:"200"}),Object(g.jsxs)("p",{children:["Name: ",t.movie_name]}),Object(g.jsxs)("p",{children:["Director: ",t.director]}),Object(g.jsxs)("p",{children:["Rating: ",Object(g.jsx)("span",{className:"rating",children:t.rating})]}),Object(g.jsx)(m.a,{disabled:!0,defaultValue:t.rating})]},a)}))})]}),Object(g.jsx)("footer",{className:"home-footer",children:Object(g.jsx)("a",{onClick:function(){return e.goToAboutUs()},children:"--about us--"})})]})}}]),a}(s.Component),w=(a(180),a(271)),N=a(274),k=a(277),C=a(278),M=a(279),T=a(160),I=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onFinish=function(e){v.a.post("http://127.0.0.1:8000/api/login/",e,(function(t){200===t.status?(localStorage.setItem("username",e.username),localStorage.setItem("token",t.token),s.props.history.push("/")):"failed"===t.status&&s.setState({message:t.message,showMessage:!0})}))},s.state={showMessage:!1,message:""},s}return Object(j.a)(a,[{key:"goToSignupPage",value:function(){this.props.history.push("/signup")}},{key:"render",value:function(){var e=this,t=this.state,a=t.message,s=t.showMessage;return Object(g.jsxs)("div",{children:[Object(g.jsx)(f,{}),Object(g.jsxs)(w.a,{name:"login",className:"login",onFinish:this.onFinish,children:[Object(g.jsxs)(w.a.Item,{className:"login-header",children:[Object(g.jsx)("br",{}),"Log in"]}),Object(g.jsx)(w.a.Item,{name:"username",rules:[{required:!0,message:"Please enter your Email!"}],children:Object(g.jsx)(N.a,{prefix:Object(g.jsx)(k.a,{}),placeholder:"Username"})}),Object(g.jsx)(w.a.Item,{name:"password",rules:[{required:!0,message:"Please enter your Password!"}],children:Object(g.jsx)(N.a.Password,{prefix:Object(g.jsx)(C.a,{}),placeholder:"Password",iconRender:function(e){return e?Object(g.jsx)(M.a,{}):Object(g.jsx)(T.a,{})}})}),s&&Object(g.jsx)(w.a.Item,{className:"show-message",children:Object(g.jsx)("p",{children:a})}),Object(g.jsx)(w.a.Item,{children:Object(g.jsx)(p.a,{type:"primary",htmlType:"submit",className:"login-button",children:"Log in"})}),Object(g.jsxs)(w.a.Item,{className:"login-signup",children:["No account? ",Object(g.jsx)("a",{onClick:function(){return e.goToSignupPage()},children:"Sign up"})]})]})]})}}]),a}(s.Component),L=(a(249),a(280)),_=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onFinish=function(e){var t={username:e.username,password:e.password,email:e.email};v.a.post("http://127.0.0.1:8000/api/signup/",t,(function(t){console.log(t),200===t.status?(localStorage.setItem("username",e.username),localStorage.setItem("token",t.token),s.props.history.push("/")):"failed"===t.status&&s.setState({message:t.message,showMessage:!0})}))},s.state={message:"",showMessage:!1},s}return Object(j.a)(a,[{key:"goToLoginPage",value:function(){this.props.history.push("/login")}},{key:"render",value:function(){var e=this,t=this.state,a=t.showMessage,s=t.message;return Object(g.jsxs)("div",{children:[Object(g.jsx)(f,{}),Object(g.jsxs)(w.a,{name:"signup",className:"signup",onFinish:this.onFinish,layout:"vertical",children:[Object(g.jsxs)(w.a.Item,{className:"signup-header",children:[Object(g.jsx)("br",{}),"Sign up"]}),Object(g.jsx)(w.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please enter your User ID!"}],children:Object(g.jsx)(N.a,{prefix:Object(g.jsx)(L.a,{})})}),Object(g.jsx)(w.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please enter your Email!"},{type:"email",message:"The Email is not valid!"}],children:Object(g.jsx)(N.a,{prefix:Object(g.jsx)(k.a,{})})}),Object(g.jsx)(w.a.Item,{label:"Password",name:"password",hasFeedback:!0,rules:[{required:!0,message:"Please enter your Password!"}],children:Object(g.jsx)(N.a.Password,{prefix:Object(g.jsx)(C.a,{}),iconRender:function(e){return e?Object(g.jsx)(M.a,{}):Object(g.jsx)(T.a,{})}})}),Object(g.jsx)(w.a.Item,{label:"Re-enter password",name:"reEnter",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please re-enter your Password!"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!=a?Promise.reject(new Error("The two passwords you entered do not match!")):Promise.resolve()}}}],children:Object(g.jsx)(N.a.Password,{prefix:Object(g.jsx)(C.a,{}),iconRender:function(e){return e?Object(g.jsx)(M.a,{}):Object(g.jsx)(T.a,{})}})}),a&&Object(g.jsx)(w.a.Item,{className:"show-message",children:Object(g.jsx)("p",{children:s})}),Object(g.jsxs)(w.a.Item,{children:[Object(g.jsx)("br",{}),Object(g.jsx)(p.a,{type:"primary",htmlType:"submit",className:"signup-button",children:"Sign up"})]}),Object(g.jsxs)(w.a.Item,{className:"signup-login",children:["Already have an account? ",Object(g.jsx)("a",{onClick:function(){return e.goToLoginPage()},children:"Log in."})]})]})]})}}]),a}(s.Component),S=(a(250),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{children:"Movie"})}}]),a}(s.Component)),P=(a(251),a(269)),R=a(93),D=a(276),A=a(266),F=a(156),E=a(267),U=a(50),H=a(161);function V(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}function q(e){var t="image/jpeg"===e.type||"image/png"===e.type||"image/jpg"===e.type;t||F.b.error("You can only upload JPG/PNG file!");var a=e.size/1024/1024<2;return a||F.b.error("Image must smaller than 2MB!"),t&&a}var B=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={loading:!1},e.handleChange=function(t){"uploading"!==t.file.status?"done"===t.file.status&&V(t.file.originFileObj,(function(t){return e.setState({imageUrl:t,loading:!1})})):e.setState({loading:!0})},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.loading,a=e.imageUrl,s=Object(g.jsxs)("div",{children:[t?Object(g.jsx)(U.a,{}):Object(g.jsx)(H.a,{}),Object(g.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return Object(g.jsx)(E.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",beforeUpload:q,onChange:this.handleChange,children:a?Object(g.jsx)("img",{src:a,alt:"avatar",style:{width:"100%"}}):s})}}]),a}(i.a.Component),z=N.a.TextArea;function Y(e,t){console.log(e,t)}var X=R.a.Option;function G(e){console.log("selected ".concat(e))}function J(){console.log("blur")}function W(){console.log("focus")}function K(e){console.log("search:",e)}var Q=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("html",{children:[Object(g.jsx)("div",{class:"titleAddMovie",children:"Add Movie ADMIN ONLY"}),Object(g.jsx)(P.a,{className:"site-page-header",onBack:function(){return window.history.back()},title:"Back"}),Object(g.jsx)("form",{action:" ",method:"get",children:Object(g.jsxs)("table",{class:"t",children:[Object(g.jsx)("tr",{children:Object(g.jsxs)("div",{class:"name",children:[Object(g.jsx)("td",{children:"name: "}),Object(g.jsx)("td",{children:Object(g.jsx)(N.a,{placeholder:"Movie name"})}),"\xa0",Object(g.jsx)("td",{children:"Actor: "}),Object(g.jsx)("td",{children:Object(g.jsx)(N.a,{placeholder:"Actor"})}),"\xa0",Object(g.jsx)("td",{children:"Director: "}),Object(g.jsx)("td",{children:Object(g.jsx)(N.a,{placeholder:"Director"})}),"\xa0",Object(g.jsx)("td",{children:"Type: "}),Object(g.jsx)("td",{children:Object(g.jsxs)(R.a,{showSearch:!0,style:{width:200},placeholder:"Select a type",optionFilterProp:"children",onChange:G,onFocus:W,onBlur:J,onSearch:K,filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(g.jsx)(X,{value:"Comedy",children:"Comedy"}),Object(g.jsx)(X,{value:"Thriller",children:"Thriller"}),Object(g.jsx)(X,{value:"Romance",children:"Romance"}),Object(g.jsx)(X,{value:"Horror",children:"Horror"}),Object(g.jsx)(X,{value:"Action",children:"Action"}),Object(g.jsx)(X,{value:"Crime",children:"Crime"})]})}),"\xa0",Object(g.jsx)("td",{children:"Country Of Production: "}),Object(g.jsx)("td",{children:Object(g.jsx)(N.a,{placeholder:"Country"})}),"\xa0",Object(g.jsx)("td",{children:"Language: "}),Object(g.jsx)("td",{children:Object(g.jsx)(N.a,{placeholder:"Language"})}),"\xa0",Object(g.jsx)("td",{children:"Release Data: "}),Object(g.jsx)("td",{children:Object(g.jsx)(D.b,{direction:"vertical",children:Object(g.jsx)(A.a,{onChange:Y})})}),"\xa0",Object(g.jsx)("td",{children:"Length: "}),Object(g.jsx)("td",{children:Object(g.jsx)(N.a,{placeholder:"Length"})}),"\xa0",Object(g.jsx)("td",{children:" Introduction: "}),Object(g.jsx)("td",{children:Object(g.jsx)(z,{rows:4})}),"\xa0"]})}),Object(g.jsx)("div",{class:"uploadPhoto",children:Object(g.jsx)(B,{})})]})}),Object(g.jsx)("div",{class:"addMovie",children:Object(g.jsx)("form",{id:"add_page_form",method:"post",action:"{% url 'rango:add_movie' category.slug %}",children:Object(g.jsx)("input",{type:"submit",name:"submit",value:"Add Movie"})})})]})}}]),a}(s.Component),Z=(a(252),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("html",{children:[Object(g.jsx)(f,{}),Object(g.jsx)("div",{class:"titleAboutUs",children:"ABOUT US"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{class:"teamName",children:Object(g.jsx)("h",{children:"Team Name: Hello World"})}),Object(g.jsxs)("div",{class:"email",children:[Object(g.jsxs)("p",{children:["Email: ",Object(g.jsx)("br",{})]}),"Ruixiang Xiong: 2540725X@student.gla.ac.uk",Object(g.jsx)("br",{}),"Yuanchao Li: 2538656L@student.gla.ac.uk",Object(g.jsx)("br",{}),"Cheng Feng: 2537912F@student.gla.ac.uk",Object(g.jsx)("br",{}),"Yadi Tian: 2546988T@student.gla.ac.uk",Object(g.jsx)("br",{})]}),Object(g.jsx)("div",{class:"contact",children:"If you have any questions, please do not hesitate to contact us!"})]})}}]),a}(s.Component)),$=(a(253),a(268)),ee=a(275),te=a(270),ae=a(272),se=a(265),ie=a(155),ne=a(61),ce=a(281),re=a(282),oe=function(){F.b.error("Please login")},le=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={movie_info:[],review:[],user:[]},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.state.movie_name_slug;this.getMovieDetail(e)}},{key:"getMovieDetail",value:function(e){var t=this,a="http://127.0.0.1:8000/api/movie/"+e.toLowerCase().split(" ").join("-")+"/";v.a.get(a,(function(e){200===e.status&&t.setState({movie_info:e.data,review:e.review,user:e.user})}))}},{key:"addLikes",value:function(e,t){if(localStorage.getItem("username")){var a=t.toLowerCase().split(" ").join("-"),s=document.getElementsByClassName("likes-number")[e],i=Number(s.innerHTML)+1;s.innerHTML=i;var n="http://127.0.0.1:8000/api/movie/"+a+"/add-likes/",c={new_likes:i,movie_name:t,review_index:e};v.a.post(n,c,(function(e){e.status}))}else oe()}},{key:"goToAddReviewPage",value:function(e){if(localStorage.getItem("username")){var t="/movie/"+e+"/add-review";this.props.history.push({pathname:t,state:{movie_name:e}})}else oe()}},{key:"render",value:function(){var e=this,t=this.state,a=t.movie_info,i=t.review,n=t.user,c=this.props.location.state.movie_name_slug;return Object(g.jsxs)("div",{children:[Object(g.jsx)(f,{}),Object(g.jsxs)("div",{className:"movie-page",children:[Object(g.jsx)("div",{className:"movie-name",children:a.movie_name}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:Object(g.jsxs)(D.b,{size:50,children:[Object(g.jsx)($.a,{height:280,width:200,src:a.image}),Object(g.jsxs)(ee.b,{bordered:!0,size:"small",column:1,children:[Object(g.jsx)(ee.b.Item,{label:"Director",children:a.director}),Object(g.jsx)(ee.b.Item,{label:"Actor",children:a.leading_actor}),Object(g.jsx)(ee.b.Item,{label:"Country of Production",children:a.country_of_production}),Object(g.jsx)(ee.b.Item,{label:"Language",children:a.language}),Object(g.jsx)(ee.b.Item,{label:"Release Date",children:a.release_date}),Object(g.jsx)(ee.b.Item,{label:"Length",children:a.length}),Object(g.jsx)(ee.b.Item,{label:"Rating",children:Object(g.jsx)(D.b,{children:a.rating})})]})]})}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"introduction-header",children:"Introduction"}),Object(g.jsx)(te.a,{children:Object(g.jsx)("p",{children:a.introduction})})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:"review-header",children:["Reviews ( ",i.length," )"]}),Object(g.jsx)("div",{children:Object(g.jsx)(ae.b,{className:"comment-list",itemLayout:"horizontal",dataSource:i,renderItem:function(t,i){return Object(g.jsx)("li",{children:Object(g.jsxs)(te.a,{children:[Object(g.jsxs)(D.b,{children:["Rating: ",t.rating,Object(g.jsx)(m.a,{disabled:!0,defaultValue:t.rating})]}),Object(g.jsx)(se.a,{avatar:Object(g.jsx)(ie.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"Han Solo"}),author:n[i],content:t.content,actions:[Object(g.jsx)(ne.a,{title:"Like",children:Object(g.jsxs)("span",{onClick:function(){return e.addLikes(i,a.movie_name)},children:[Object(s.createElement)("liked"===t.action?ce.a:re.a),"\xa0",Object(g.jsx)("span",{className:"comment-action likes-number",children:t.likes})]})},"comment-like")]})]})})}})}),Object(g.jsx)("br",{}),Object(g.jsx)(p.a,{className:"add-review-button",onClick:function(){return e.goToAddReviewPage(c)},children:"+ Review"})]}),Object(g.jsx)("footer",{className:"detail-footer"})]})}}]),a}(s.Component),je=(a(259),["terrible","bad","normal","good","wonderful"]),he=(R.a.Option,function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onFinish=function(e){var t=localStorage.getItem("username");if(t)if(0===s.state.value)s.setState({showMessage:!0});else{var a=s.props.location.state.movie_name,i="http://127.0.0.1:8000/api/movie/"+a+"/add-review/",n={content:e.movie.review,username:t,rating:s.state.value};v.a.post(i,n,(function(e){s.props.history.push({pathname:"/movie/"+a+"/",state:{movie_name_slug:a}})}))}},s.handleChange=function(e){s.setState({value:e})},s.state={value:0,message:"Please select a rating",showMessage:!1},s}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.showMessage,s=e.message;return Object(g.jsxs)("div",{children:[Object(g.jsx)(f,{}),Object(g.jsxs)(w.a,{name:"addReview",className:"add-review",onFinish:this.onFinish,children:[Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:"add-rate-header",children:["Rating",a&&Object(g.jsx)("span",{children:s})]}),Object(g.jsx)(w.a.Item,{name:["movie","rating"],children:Object(g.jsxs)(D.b,{children:[Object(g.jsx)(m.a,{tooltips:je,onChange:this.handleChange,value:t}),t?je[t-1]:""]})}),Object(g.jsx)("div",{className:"add-review-header",children:"Review"}),Object(g.jsx)(w.a.Item,{name:["movie","review"],rules:[{required:!0,message:"Review cannot be empty!"}],children:Object(g.jsx)(N.a.TextArea,{rows:10,placeholder:"Write a review..."})}),Object(g.jsx)(w.a.Item,{className:"add-review-button",children:Object(g.jsx)(D.b,{children:Object(g.jsx)(p.a,{type:"primary",htmlType:"submit",className:"submit-btn",children:"Submit"})})})]})]})}}]),a}(s.Component)),de=(a(260),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={movieList:[]},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getMoviesByCategory(this.props.location.state.categoryName)}},{key:"getMoviesByCategory",value:function(e){var t=this,a="http://127.0.0.1:8000/api/category/"+e.toLowerCase()+"/";v.a.get(a,(function(e){200===e.status&&t.setState({movieList:e.data})}))}},{key:"goToMovieDetail",value:function(e){var t=e.toLowerCase().split(" ").join("-");this.props.history.push({pathname:"/movie/"+t+"/",state:{movie_name_slug:t}})}},{key:"render",value:function(){var e=this,t=this.props.location.state.categoryName,a=this.state.movieList;return Object(g.jsxs)("div",{children:[Object(g.jsx)(f,{}),Object(g.jsxs)("p",{className:"title sub-title",children:[t," Movies"]}),Object(g.jsx)("div",{className:"all-movie-list",children:a.map((function(t,a){return Object(g.jsxs)("div",{className:"each-movie-detail",onClick:function(){return e.goToMovieDetail(t.movie_name)},children:[Object(g.jsx)("img",{src:t.image,alt:"movie-name",height:"280",width:"200"}),Object(g.jsxs)("p",{children:["Name: ",t.movie_name]}),Object(g.jsxs)("p",{children:["Director: ",t.director]}),Object(g.jsxs)("p",{children:["Rating: ",Object(g.jsx)("span",{className:"rating",children:t.rating})]}),Object(g.jsx)(m.a,{disabled:!0,defaultValue:t.rating})]},a)}))}),Object(g.jsx)("footer",{className:"home-footer",children:Object(g.jsx)("a",{children:"--The End--"})})]})}}]),a}(s.Component)),ue=(a(261),a(86)),me=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={},s}return Object(j.a)(a,[{key:"goToMovieDetail",value:function(e){var t=e.toLowerCase().split(" ").join("-");this.props.history.push({pathname:"/movie/"+t+"/",state:{movie_name_slug:t}})}},{key:"render",value:function(){var e=this,t=this.props.location.state,a=t.searchValue,s=t.searchResult,i=t.message;return Object(g.jsxs)("div",{children:[Object(g.jsx)(f,{}),Object(g.jsxs)("p",{className:"title sub-title",children:['The search results for "',a,'"']}),0===Object.keys(s).length?Object(g.jsxs)("div",{className:"empty-show",children:[Object(g.jsx)(ue.a,{description:!1,imageStyle:{height:200,width:200}}),Object(g.jsx)("p",{className:"message",children:i})]}):Object(g.jsx)("div",{className:"latest-movie-list",children:Object(g.jsxs)("div",{className:"movie-detail",onClick:function(){return e.goToMovieDetail(s.movie_name)},children:[Object(g.jsx)("img",{src:s.image,alt:"movie-name",height:"280",width:"200"}),Object(g.jsxs)("p",{children:["Name: ",s.movie_name]}),Object(g.jsxs)("p",{children:["Director: ",s.director]}),Object(g.jsxs)("p",{children:["Rating: ",Object(g.jsx)("span",{className:"rating",children:s.rating})]}),Object(g.jsx)(m.a,{disabled:!0,defaultValue:s.rating})]})})]})}}]),a}(s.Component),be=(a(262),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={movieList:[]},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getAllMovies()}},{key:"getAllMovies",value:function(){var e=this;v.a.get("http://127.0.0.1:8000/api/movie_list/",(function(t){200===t.status&&e.setState({movieList:t.data})}))}},{key:"goToMovieDetail",value:function(e){var t=e.toLowerCase().split(" ").join("-");this.props.history.push({pathname:"/movie/"+t+"/",state:{movie_name_slug:t}})}},{key:"render",value:function(){var e=this,t=this.state.movieList;return Object(g.jsxs)("div",{children:[Object(g.jsx)(f,{}),Object(g.jsx)("p",{className:"title sub-title",children:"All Movies"}),Object(g.jsx)("div",{className:"all-movie-list",children:t.map((function(t,a){return Object(g.jsxs)("div",{className:"each-movie-detail",onClick:function(){return e.goToMovieDetail(t.movie_name)},children:[Object(g.jsx)("img",{src:t.image,alt:"movie-name",height:"310",width:"220"}),Object(g.jsxs)("p",{children:["Name: ",t.movie_name]}),Object(g.jsxs)("p",{children:["Director: ",t.director]}),Object(g.jsxs)("p",{children:["Rating: ",Object(g.jsx)("span",{className:"rating",children:t.rating})]}),Object(g.jsx)(m.a,{disabled:!0,defaultValue:t.rating})]},a)}))}),Object(g.jsx)("footer",{className:"home-footer",children:Object(g.jsx)("a",{children:"--The End--"})})]})}}]),a}(s.Component)),ve=function(){return Object(g.jsx)(r.a,{children:Object(g.jsxs)("div",{children:[Object(g.jsx)(o.a,{exact:!0,path:"/",component:y}),Object(g.jsx)(o.a,{exact:!0,path:"/login",component:I}),Object(g.jsx)(o.a,{exact:!0,path:"/signup",component:_}),Object(g.jsx)(o.a,{exact:!0,path:"/movie",component:S}),Object(g.jsx)(o.a,{exact:!0,path:"/add-movie",component:Q}),Object(g.jsx)(o.a,{exact:!0,path:"/about-us",component:Z}),Object(g.jsx)(o.a,{exact:!0,path:"/movie/:name",component:le}),Object(g.jsx)(o.a,{exact:!0,path:"/movie/:name/add-review",component:he}),Object(g.jsx)(o.a,{exact:!0,path:"/category/:name",component:de}),Object(g.jsx)(o.a,{exact:!0,path:"/search-result",component:me}),Object(g.jsx)(o.a,{exact:!0,path:"/movie-list",component:be})]})})};c.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(ve,{})}),document.getElementById("root"))}},[[263,1,2]]]);
//# sourceMappingURL=main.d374534f.chunk.js.map