_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{AL3f:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),s=(n("YFqc"),n("cWnB")),l=n("EFVI"),c=a.a.createElement;function u(){return c(a.a.Fragment,null,c(i.a,null,c("title",null,"42 Silicon Valley - Github Repos"),c("meta",{name:"description",content:"All piscine related material for the 42/42 SV program. PDFs, coding norms, and more."}),c("link",{rel:"canonical",href:"https://42sv.info/Sources/Github_repos"})),c("section",{className:"block"},c("h1",null,"Github repos"),c("p",null,"This is just a dump of random links that I had saved while I was looking around for 42 github repositories. Most are similar, others not listed here could be more useful for the current curriculum. While most of the projects are the same in general, there might be some minor differences and the overall order might be different. The PDFs link should have the coding norms and other rules as well as the actual Piscine PDFs that are given to you on each day.")),c("section",{className:"block"},c("h3",null,"Piscine materials"),c("div",{className:"btn-link-container"},c("a",{href:" https://github.com/gcamerli/bootcamp_c/tree/master/documents",target:"blank",rel:"noopener noreferrer"},c(s.a,{variant:"light",className:"btn-next"},"Piscine PDFs")),c("a",{target:"blank",rel:"noopener noreferrer",href:"https://github.com/Manmeet2018/42-Piscine-Jan-2019"},c(s.a,{variant:"light",className:"btn-next"},"Manmeet2018 Piscine")),c("a",{target:"blank",rel:"noopener noreferrer",href:"https://github.com/jraleman/42_Piscine-C"},c(s.a,{variant:"light",className:"btn-next"},"Jraleman Piscine")),c("a",{target:"blank",rel:"noopener noreferrer",href:"https://github.com/MrRobb/42_piscine"},c(s.a,{variant:"light",className:"btn-next"},"MrRobb Piscine")),c("a",{target:"blank",rel:"noopener noreferrer",href:"https://github.com/Sbk3824/42-Piscine"},c(s.a,{variant:"light",className:"btn-next"},"Sbk3824 Piscine")),c("a",{target:"blank",rel:"noopener noreferrer",href:"https://github.com/akharrou/42-Piscine-C/tree/ed366f0b21ed48f55ed7e9ddb9e0e8a841f89b0e"},c(s.a,{variant:"light",className:"btn-next"},"Akharrou Piscine")),c("a",{target:"blank",rel:"noopener noreferrer",href:"https://github.com/anononamemo/42_Piscine_Reloaded"},c(s.a,{variant:"light",className:"btn-next"},"Anononamemo Piscine")),c("a",{target:"blank",rel:"noopener noreferrer",href:"https://github.com/gcamerli/examshell"},c(s.a,{variant:"light",className:"btn-next"},"Piscine examshell")),c("a",{target:"blank",rel:"noopener noreferrer",href:"https://github.com/Sbk3824/42-Piscine/wiki/FInal-Exam-tips"},c(s.a,{variant:"light",className:"btn-next"},"Piscine final tips")),c("a",{target:"blank",rel:"noopener noreferrer",href:"https://github.com/gcamerli/42norme"},c(s.a,{variant:"light",className:"btn-next"},"42 Norminette")),c("a",{target:"blank",rel:"noopener noreferrer",href:"https://github.com/mirror12k/42us-stupidity"},c(s.a,{variant:"light",className:"btn-next"},"42 Stupidity (Moulinette)")))),c("section",{className:"block"},c(l.a,{name:"Sources"})),c("span",{className:"buffy-the-buffer"}))}},EFVI:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),o=n("nOHt"),i=n("cWnB"),s=n("IP2g"),l=a.a.createElement;function c(e){console.log(e);var t=Object(o.useRouter)();return l("section",{className:"block"},l(i.a,{variant:"primary",className:"btn-next",onClick:function(){return t.back()}},l(s.a,{icon:"arrow-alt-circle-left"})," Back to ",e.name))}},N2Ia:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sources/github_repos",function(){return n("AL3f")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),s=n("elyg"),l=n("nOHt"),c=new Map,u=window.IntersectionObserver,f={};var h=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),c.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),c.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):function(){}};function p(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],c=a[1],m=(0,l.useRouter)(),b=m&&m.pathname||"/",d=i.default.useMemo((function(){var t=(0,s.resolveHref)(b,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,s.resolveHref)(b,e.as):o||a}}),[b,e.href,e.as]),g=d.href,v=d.as;i.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,s.isLocalURL)(g)&&!f[g+"%"+v])return h(o,(function(){p(m,g,v)}))}),[t,o,g,v,m]);var k=e.children,N=e.replace,P=e.shallow,w=e.scroll,y=e.locale;"string"===typeof k&&(k=i.default.createElement("a",null,k));var _=i.Children.only(k),E={ref:function(e){e&&c(e),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(e):"object"===typeof _.ref&&(_.ref.current=e))},onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:l}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,g,v,N,P,w,y)}};return t&&(E.onMouseEnter=function(e){(0,s.isLocalURL)(g)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),p(m,g,v,{priority:!0}))}),(e.passHref||"a"===_.type&&!("href"in _.props))&&(E.href=(0,s.addBasePath)((0,s.addLocale)(v,"undefined"!==typeof y?y:m&&m.locale,m&&m.defaultLocale))),i.default.cloneElement(_,E)};t.default=m}},[["N2Ia",0,1,2,3,4]]]);