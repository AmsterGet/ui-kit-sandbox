import{c as v,j as r}from"./bind-68cebb00.js";import{r as x}from"./index-c013ead5.js";const y="_button_3xwzb_1",w="_primary_3xwzb_19",h="_disabled_3xwzb_24",g="_ghost_3xwzb_36",z="_danger_3xwzb_54",q="_text_3xwzb_70",V="_icon_3xwzb_116",N={button:y,primary:w,disabled:h,ghost:g,danger:z,text:q,"width-wide-content":"_width-wide-content_3xwzb_106","width-parent":"_width-parent_3xwzb_111",icon:V,"icon-start":"_icon-start_3xwzb_122","icon-end":"_icon-end_3xwzb_126"},s=v.bind(N),i=x.forwardRef(({variant:e="primary",icon:o,iconPlace:t="start",adjustWidthOn:a="content",type:u="button",children:d,disabled:n=!1,onClick:c,title:m,className:p,..._},f)=>{const b=s("button",e,p,{disabled:n,[`width-${a}`]:a}),l=e==="text"&&o;return r.jsxs("button",{ref:f,type:u,disabled:n,className:b,onClick:c,title:m,..._,children:[l&&r.jsx("i",{className:s("icon",{[`icon-${t}`]:t}),children:l}),d]})});try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:{value:"start"},description:"",name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'}]}},adjustWidthOn:{defaultValue:{value:"content"},description:"",name:"adjustWidthOn",required:!1,type:{name:"enum",value:[{value:'"content"'},{value:'"wide-content"'},{value:'"parent"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"ghost"'},{value:'"primary"'},{value:'"danger"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}}}}}catch{}export{i as B};
//# sourceMappingURL=button-d94982a4.js.map