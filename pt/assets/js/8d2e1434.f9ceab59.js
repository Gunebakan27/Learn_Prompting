"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[596],{3905:(e,o,t)=>{t.d(o,{Zo:()=>l,kt:()=>f});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=r.createContext({}),p=function(e){var o=r.useContext(m),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},l=function(e){var o=p(e.components);return r.createElement(m.Provider,{value:o},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,f=u["".concat(m,".").concat(d)]||u[d]||c[d]||a;return t?r.createElement(f,s(s({ref:o},l),{},{components:t})):r.createElement(f,s({ref:o},l))}));function f(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var m in o)hasOwnProperty.call(o,m)&&(i[m]=o[m]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75689:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(87462),n=(t(67294),t(3905));const a={sidebar_position:2},s="\ud83d\udfe2 Dando Instru\xe7\xf5es",i={unversionedId:"basics/instructions",id:"basics/instructions",title:"\ud83d\udfe2 Dando Instru\xe7\xf5es",description:"Um dos m\xe9todos de prompting mais simples \xe9 apenas dar instru\xe7\xf5es. N\xf3s j\xe1 vimos uma instru\xe7\xe3o simples na se\xe7\xe3o anterior (um outro exemplo seria)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/basics/instructions.md",sourceDirName:"basics",slug:"/basics/instructions",permalink:"/pt/docs/basics/instructions",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/basics/instructions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Prompting",permalink:"/pt/docs/basics/prompting"},next:{title:"\ud83d\udfe2 Role Prompting",permalink:"/pt/docs/basics/roles"}},m={},p=[{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Notes",id:"notes",level:2}],l={toc:p},u="wrapper";function c(e){let{components:o,...t}=e;return(0,n.kt)(u,(0,r.Z)({},l,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-dando-instru\xe7\xf5es"},"\ud83d\udfe2 Dando Instru\xe7\xf5es"),(0,n.kt)("p",null,"Um dos m\xe9todos de ",(0,n.kt)("em",{parentName:"p"},"prompting")," mais simples \xe9 apenas dar instru\xe7\xf5es. N\xf3s j\xe1 vimos uma instru\xe7\xe3o simples na se\xe7\xe3o anterior (um outro exemplo seria: ",(0,n.kt)("inlineCode",{parentName:"p"},"Quanto \xe9 1.000.000 * 9.000? Tenha certeza de colocar a quantidade certa de zeros, mesmo que sejam muitos:"),")"),(0,n.kt)("p",null,"Abaixo, tem-se um exemplo interativo com o ",(0,n.kt)("a",{parentName:"p",href:"https://trydyno.com/"},(0,n.kt)("em",{parentName:"a"},"toolkit")," Dyno"),". Se n\xe3o estiver vendo, certifique-se de habilitar Javascript no seu navegador. Como \xe9 uma demonstra\xe7\xe3o interativa, voc\xea pode editar o texto e clicar em ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"em"},"Generate"))," para receber um novo retorno da IA."),(0,n.kt)("h4",{id:"exemplo-1"},"Exemplo 1"),(0,n.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Um usu\xe1rio digitou o seu primeiro e o seu \xfaltimo nome em um formul\xe1rio. N\xf3s n\xe3o sabemos em qual ordem o seu primeiro/\xfaltimo nome est\xe1, mas n\xf3s precisamos que esteja no formato '\xdaltimo, Primeiro'. Converta a seguir:\\n\\njonh doe","initial-response":"Doe, Jonh","max-tokens":"256","box-rows":"7","model-temp":"0","top-p":"0"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"A IA \xe9 capaz de facilmente resolver este problema. Usando instru\xe7\xf5es de ",(0,n.kt)("em",{parentName:"p"},"prompting"),", ela pode resolver muitos outros problemas, sejam simples ou mais complexos."),(0,n.kt)("h4",{id:"exemplo-2"},"Exemplo 2"),(0,n.kt)("p",null,"Aqui est\xe1 um exemplo mais complicado",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Leia o seguinte e-mail de venda e remova todas as informa\xe7\xf5es de identifica\xe7\xe3o pessoal, \nsubstituindo-as com o espa\xe7o reservado apropriado. Por exemplo, substitua o nome "Jonh Doe" \npor "[NOME]" e garanta que todas informa\xe7\xf5es pessoais foram substitu\xeddas apropriadamente.\n\nOl\xe1, Jonh!\n\nEu estou escrevendo porque percebi que voc\xea comprou um novo carro recentemente. \nEu sou o vendedor de uma concession\xe1ria local (Cheap Dealz) e gostaria que voc\xea soubesse \nque n\xf3s temos uma \xf3tima oferta em um carro novo. Se voc\xea tiver interesse, por favor, avise-me.\n\nAtenciosamente,\n\nJimmy Smith\n\nTelefone: 410-805-2345\nE-mail: jimmysmith@cheapdealz.com\n')),(0,n.kt)("p",null,"Aqui est\xe1 a ",(0,n.kt)("a",{parentName:"p",href:"https://platform.openai.com/playground/p/6fy8vbdvGelrMlF190tLEE5n?model=text-davinci-003"},"resposta da IA")," (por se tratar de um modelo probabil\xedstico, podem ocorrer varia\xe7\xf5es na resposta):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"// highlight-start\nOl\xe1, [NOME]!\n\nEu estou escrevendo porque percebi que voc\xea comprou um novo carro recentemente. \nEu sou o vendedor de uma concession\xe1ria local (Cheap Dealz) e gostaria que voc\xea soubesse \nque n\xf3s temos uma \xf3tima oferta em um carro novo. Se voc\xea tiver interesse, por favor, avise-me.\n\nAtenciosamente,\n\n[NOME]\n\nTelefone: [N\xdaMERO DE TELEFONE]\nE-mail: [ENDERE\xc7O DE E-MAIL]\n// highlight-end\n")),(0,n.kt)("p",null,"\xc9 bem legal perceber como o modelo pode ir al\xe9m das instru\xe7\xf5es. N\xe3o h\xe1 uma indica\xe7\xe3o expl\xedcita de como deve ser a mudan\xe7a para o e-mail e telefone, mas ocorre a substitui\xe7\xe3o de maneira adequada",(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"."),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("p",null,"\ud83d\udea7 Esta p\xe1gina precisa de cita\xe7\xf5es \ud83d\udea7"),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"Solicitar para a IA remover informa\xe7\xf5es de identifica\xe7\xe3o pessoal \xe9 uma abordagem promissora, contudo, deve ser usada com extrema precau\xe7\xe3o, visto que erros podem acontecer.",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Comparando-se com o ",(0,n.kt)("a",{parentName:"li",href:"https://learnprompting.org/docs/basics/instructions"},(0,n.kt)("em",{parentName:"a"},"prompt")," original"),", em ingl\xeas, nota-se que o ",(0,n.kt)("em",{parentName:"li"},"prompt")," em portugu\xeas apresentou um resultado inferior.",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);