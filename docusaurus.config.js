const config={
 title:'VedoyScript',tagline:'Less syntax. More creation.',favicon:'img/favicon.svg',
 // Replace with the actual verified domain when Vercel is connected.
 url:'https://example.com',baseUrl:'/',organizationName:'leandervedoy',projectName:'VedoyScript-',
 onBrokenLinks:'throw',onBrokenMarkdownLinks:'throw',
 i18n:{defaultLocale:'en',locales:['en']},
 presets:[['classic',{docs:{sidebarPath:'./sidebars.js',routeBasePath:'docs',
 editUrl:'https://github.com/leandervedoy/VedoyScript-/edit/main/'},blog:false,
 theme:{customCss:'./src/css/custom.css'}}]],
 themeConfig:{
  image:'img/website-preview.svg',
  navbar:{title:'VedoyScript',logo:{alt:'VedoyScript',src:'img/favicon.svg'},
  items:[{to:'/docs/intro',label:'Docs',position:'left'},
   {to:'/docs/getting-started',label:'Get started',position:'left'},
   {to:'/learn',label:'Learn',position:'left'},
   {to:'/examples',label:'Examples',position:'left'},
   {to:'/reference',label:'Reference',position:'left'},
   {to:'/search',label:'Search',position:'left'},
   {to:'/performance',label:'Performance',position:'left'},
   {href:'https://github.com/leandervedoy/VedoyScript-',label:'GitHub',position:'right'}]},
  colorMode:{defaultMode:'dark',disableSwitch:false,respectPrefersColorScheme:true},
  prism:{additionalLanguages:['bash','json','javascript','typescript','python']},
  footer:{style:'dark',links:[
   {title:'Learn',items:[{label:'Getting started',to:'/docs/getting-started'},{label:'Syntax',to:'/docs/syntax'},{label:'API and JSON',to:'/docs/api-json'},{label:'Learn',to:'/learn'},{label:'Examples',to:'/examples'}]},
   {title:'Engineering',items:[{label:'Capabilities',to:'/docs/capabilities'},{label:'Architecture',to:'/docs/architecture'},{label:'Performance',to:'/performance'},{label:'Search',to:'/search'}]},
   {title:'Ecosystem',items:[{label:'Forge',href:'https://github.com/leandervedoy/vedoy-dev-studio/pull/3'},{label:'Polyglot',href:'https://github.com/leandervedoy/vedoy-dev-studio/pull/6'}]}
  ],copyright:'© 2026 Vedoy · Experimental language beta'}
 }
};module.exports=config;
