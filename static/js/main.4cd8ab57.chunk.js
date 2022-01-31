(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){},21:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var i=s(7),c=s.n(i),n=(s(15),s(10)),a=s(2),r=s(1),l=(s(16),s(17),s(18),s(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},j=s(8),m=s(6),b=s.n(m),u=s(9),v=s.n(u);function h(e){return fetch("https://www.omdbapi.com/?apikey=1094a50a&t="+e).then((function(e){return e.json()}))}s(21);var O=function(e){var t=e.addMovie,s=e.moviesList,i=Object(r.useState)(""),c=Object(a.a)(i,2),n=c[0],d=c[1],m=Object(r.useState)(!1),u=Object(a.a)(m,2),O=u[0],x=u[1],f=Object(r.useState)({Poster:"",Title:"",Plot:"",imdbID:""}),p=Object(a.a)(f,2),N=p[0],g=p[1],w=function(){var e=Object(j.a)(b.a.mark((function e(t){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:"True"===(s=e.sent).Response?g(s):g({Poster:"",Title:"",Plot:"",imdbID:""}),d(""),x(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=!N.Title&&O,P=s.findIndex((function(e){return e.imdbID===N.imdbID})),I=!N.Title||P>=0;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),w(n)},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:v()("input",{"is-danger":y}),value:n,onChange:function(e){d(e.target.value)}})})]}),y&&Object(l.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit",className:"button is-light",children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){t(N)},disabled:I,children:"Add to the list"})})]})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),N.Title?Object(l.jsx)(o,{movie:N}):Object(l.jsx)("span",{children:"Please enter the movie title and press the find button"})]})]})},x=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),s=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:s})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(O,{addMovie:function(e){i((function(t){return[].concat(Object(n.a)(t),[e])}))},moviesList:s})})]})};c.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.4cd8ab57.chunk.js.map