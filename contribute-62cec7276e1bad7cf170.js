(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{631:function(e,a,t){"use strict";t.r(a),function(e){var s,l=t(757),r=t(192),i=t(74),n=t(293),c=t(617),o=t(759),m=t(1),u=t.n(m),d=t(112),g=t(758),b=t(753),f=t(755),p=t(700),h=t.n(p),E=t(188),k=t(190);(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);var v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const N=Object(i.a)("div")({name:"Contribute",class:"c1b6b6t9"}),w=/^https:\/\/signal.art\/addstickers\/#pack_id=([\dA-Za-z]+)&pack_key=([\dA-Za-z]+)$/g,y=/^(?:([\w ]+))+(?:, ?([\w ]+))*$/g,O={signalArtUrl:"",source:"",tags:"",isNsfw:void 0,isOriginal:void 0},S={signalArtUrl:async e=>{if(!e)return"This field is required.";const a=new RegExp(w).exec(e);if(!a)return"Invalid signal.art URL.";const[,t,s]=a;if(n.a(c.a(["meta","id"],t),await Object(k.d)()))return"A sticker pack with that ID already exists in the directory.";try{await Object(k.c)(t,s)}catch{return"Invalid sticker pack. Please check the pack ID and key."}},source:e=>{if(e&&e.length>320)return"This field must be no longer than 320 characters."},tags:e=>{if(""!==e&&!new RegExp(y).test(e))return"Invalid value. Tags must be a list of comma-delimited strings."},isNsfw:e=>{if(void 0===e)return"This field is required."},isOriginal:e=>{if(void 0===e)return"This field is required."}};g.a.registerLanguage("yaml",b.a);const x=()=>{const[e,a]=u.a.useState(!1),[t,s]=u.a.useState(""),i=u.a.useRef(null),n=()=>{a(!0),s("")},c=u.a.useMemo(()=>u.a.createElement(E.a,{href:"https://github.com",title:"GitHub"},"GitHub"),[]),m=u.a.useMemo(()=>u.a.createElement(E.a,{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests",title:"Pull Request"},"Pull Request"),[]),b=u.a.useMemo(()=>u.a.createElement(E.a,{href:"https://support.signal.org/hc/articles/360031836512-Stickers#h_c2a0a45b-862f-4d12-9ab1-d9a6844062ca",title:"Sticker Creator Guidelines"},"Sticker Creator Guidelines"),[]),p=u.a.useMemo(()=>u.a.createElement(E.a,{href:"https://en.wikipedia.org/wiki/YAML",title:"YAML"},"YAML"),[]),k=u.a.useMemo(()=>u.a.createElement(E.a,{href:"https://github.com/signalstickers/signalstickers/edit/master/stickers.yml",title:"Signal Stickers repository"},"Signal Stickers repository"),[]),v=u.a.useMemo(()=>u.a.createElement(E.a,{href:"https://twitter.com/signalstickers",title:"Twitter"},"@signalstickers"),[]);return u.a.createElement(N,{className:"my-4 p-lg-3 px-lg-4"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12"},u.a.createElement("h1",{className:"mb-4"},"Contribute"),u.a.createElement("p",{className:"mt-lg-3 mb-4"},"To get your sticker pack listed in the Signal Stickers directory:"),u.a.createElement("ol",null,u.a.createElement("li",{className:"mb-2"},"If you don't already have one, create a ",c," account. You will need one in order to open a ",m," against the Signal Stickers repository."),u.a.createElement("li",{className:"mb-2"},"Create a sticker pack using the Signal desktop app. For help, see Signal's ",b,". Be sure to save the ",u.a.createElement("code",null,"signal.art")," URL for your pack. If you are creating a sticker pack derived from an existing one on another platform or from someone else's artwork, please consider using the original author's name in the ",u.a.createElement("strong",null,"Author")," field when creating your pack in Signal, and consider adding their website, Twitter handle, or other online presence to the ",u.a.createElement("strong",null,"Source")," field below."),u.a.createElement("li",{className:"mb-2"},"Open a Pull Request in the Signal Stickers GitHub repository updating ",u.a.createElement("code",null,"stickers.yml")," to to include an entry for your sticker pack.")),u.a.createElement("p",null,"The form below will guide you through the process of generating the ",p," entry for your pack that you will need to add to ",u.a.createElement("code",null,"stickers.yml"),"."),u.a.createElement("p",null,"Alternatively, you can send us the YAML via a Twitter message at ",v,". Please only use this if you have no way to open a Pull Request on GitHub!"))),u.a.createElement("hr",{className:"pt-3 pb-2"}),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},u.a.createElement(l.d,{initialValues:O,onSubmit:e=>{const a=new RegExp(w).exec(e.signalArtUrl);if(!a)throw new Error("Unable to extract pack ID and pack key from signal.art URL.");const[,t,l]=a,r=o.a(e.tags.split(",").map(e=>e.trim()).filter(e=>e.length));return s(h.a.safeDump({[t]:{key:l,source:e.source,tags:r,nsfw:"true"===e.isNsfw,original:"true"===e.isOriginal}},{indent:2}).trim()),i.current&&i.current.scrollIntoView({behavior:"smooth"}),!0},validateOnChange:e,validateOnBlur:e},({values:e,errors:a,isValidating:t,isSubmitting:s})=>u.a.createElement(l.c,{noValidate:!0},u.a.createElement("div",{className:"form-group"},u.a.createElement("div",{className:"form-row"},u.a.createElement("label",{className:Object(r.a)("col-12",a.signalArtUrl&&"text-danger"),htmlFor:"signal-art-url"},"Signal.art URL:",u.a.createElement(l.b,{type:"text",id:"signal-art-url",name:"signalArtUrl",validate:S.signalArtUrl,className:Object(r.a)("form-control","mt-2",a.signalArtUrl&&"is-invalid"),placeholder:"https://signal.art/addstickers/#pack_id=<your pack id>&pack_key=<your pack key>"}),u.a.createElement("div",{className:"invalid-feedback"},u.a.createElement(l.a,{name:"signalArtUrl"})," ")))),u.a.createElement("div",{className:"form-group"},u.a.createElement("div",{className:"form-row"},u.a.createElement("label",{className:Object(r.a)("col-12",a.source&&"text-danger"),htmlFor:"source"},"(Optional) Source:",u.a.createElement(l.b,{type:"text",id:"source",name:"source",validate:S.source,className:Object(r.a)("form-control","mt-2",a.source&&"is-invalid")}),u.a.createElement("small",{className:"form-text text-muted"},"Original author, website, company, etc."),u.a.createElement("div",{className:"invalid-feedback"},u.a.createElement(l.a,{name:"source"})," ")))),u.a.createElement("div",{className:"form-group mb-4"},u.a.createElement("div",{className:"form-row"},u.a.createElement("label",{className:Object(r.a)("col-12",a.tags&&"text-danger"),htmlFor:"tags"},"(Optional) Tags:",u.a.createElement(l.b,{type:"text",id:"tags",name:"tags",validate:S.tags,className:Object(r.a)("form-control","mt-2",a.tags&&"is-invalid")}),u.a.createElement("small",{className:"form-text text-muted"},"Comma-separated list of words."),u.a.createElement("div",{className:"invalid-feedback"},u.a.createElement(l.a,{name:"tags"})," ")))),u.a.createElement("div",{className:"form-group"},u.a.createElement("div",{className:"form-row"},u.a.createElement("legend",{className:Object(r.a)("col-12","mb-2",a.isNsfw&&"text-danger")},"Is your sticker pack ",u.a.createElement(E.a,{href:"https://www.urbandictionary.com/define.php?term=NSFW",title:"NSFW"},"NSFW"),"?")),u.a.createElement("div",{className:"form-row"},u.a.createElement("div",{className:"col-12 mb-1"},u.a.createElement("div",{className:"custom-control custom-radio"},u.a.createElement(l.b,{type:"radio",id:"is-nsfw-true",name:"isNsfw",validate:S.isNsfw,className:Object(r.a)("custom-control-input",a.isNsfw&&"is-invalid"),value:"true",checked:"true"===e.isNsfw}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"is-nsfw-true"},"Yes"))),u.a.createElement("div",{className:"col-12 mb-1"},u.a.createElement("div",{className:"custom-control custom-radio"},u.a.createElement(l.b,{type:"radio",id:"is-nsfw-false",name:"isNsfw",validate:S.isNsfw,className:Object(r.a)("custom-control-input",a.isNsfw&&"is-invalid"),value:"false",checked:"false"===e.isNsfw}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"is-nsfw-false"},"No")),u.a.createElement("div",{className:"invalid-feedback"},u.a.createElement(l.a,{name:"isNsfw"})," ")))),u.a.createElement("div",{className:"form-group"},u.a.createElement("div",{className:"form-row"},u.a.createElement("legend",{className:Object(r.a)("col-12","mb-2",a.isOriginal&&"text-danger")},"Is your pack original? Did the author of the pack draw it exclusively for Signal, from original artworks?")),u.a.createElement("div",{className:"form-row"},u.a.createElement("div",{className:"col-12 mb-1"},u.a.createElement("div",{className:"custom-control custom-radio"},u.a.createElement(l.b,{type:"radio",id:"is-original-true",name:"isOriginal",validate:S.isOriginal,className:Object(r.a)("custom-control-input",a.isOriginal&&"is-invalid"),value:"true",checked:"true"===e.isOriginal}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"is-original-true"},"Yes"))),u.a.createElement("div",{className:"col-12 mb-1"},u.a.createElement("div",{className:"custom-control custom-radio"},u.a.createElement(l.b,{type:"radio",id:"is-original-false",name:"isOriginal",validate:S.isOriginal,className:Object(r.a)("custom-control-input",a.isOriginal&&"is-invalid"),value:"false",checked:"false"===e.isOriginal}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"is-original-false"},"No")),u.a.createElement("div",{className:"invalid-feedback"},u.a.createElement(l.a,{name:"isOriginal"})," ")))),u.a.createElement("div",{className:"form-group"},u.a.createElement("div",{className:"form-row"},u.a.createElement("div",{className:"col-12"},u.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block btn-lg",disabled:s||t,onClick:n},"Generate YAML")))))))),t?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12"},u.a.createElement("hr",null),u.a.createElement("p",{className:"mt-4 mb-4"},"Great! Below is the YAML entry you will need to add to the end of ",u.a.createElement("code",null,"stickers.yml")," in the ",k,":"))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},u.a.createElement("div",{className:"card"},u.a.createElement(g.a,{language:"yaml",style:f.a,customStyle:{margin:"0"}},t)))),u.a.createElement("div",{className:"row mt-4"},u.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},u.a.createElement(E.a,{title:"Open a Pull Request",href:"https://github.com/signalstickers/signalstickers/edit/master/stickers.yml",className:"btn btn-success btn-block btn-lg",ref:i},"Edit the file and open a Pull Request",u.a.createElement(d.c,{className:"ml-2"}))))):null)};v(x,"useState{[hasBeenSubmitted, setHasBeenSubmitted](false)}\nuseState{[ymlBlob, setYmlBlob]('')}\nuseRef{openPrButton}\nuseMemo{gitHubLink}\nuseMemo{pullRequestLink}\nuseMemo{stickerPackGuideLink}\nuseMemo{yamlLink}\nuseMemo{editStickersYmlLink}\nuseMemo{twitterLink}");const L=x;var A,M;a.default=L,t(756),(A="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(A.register(N,"Contribute","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),A.register(w,"SIGNAL_ART_URL_PATTERN","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),A.register(y,"TAGS_PATTERN","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),A.register(O,"initialValues","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),A.register(S,"validators","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),A.register(x,"ContributeComponent","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),A.register(L,"default","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx")),(M="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&M(e)}.call(this,t(27)(e))},756:function(e,a,t){"use strict";t.r(a)}}]);
//# sourceMappingURL=contribute-62cec7276e1bad7cf170.js.map