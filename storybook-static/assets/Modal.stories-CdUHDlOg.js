import{r as s,R as t}from"./index-B0WjJBI_.js";import{r as E}from"./index-DDpteCSn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CwPCC0ZT.js";const i=({isOpen:a,onClose:e,title:m,children:u,size:p="md",className:f=""})=>{const o=s.useRef(null);s.useEffect(()=>{const r=y=>{y.key==="Escape"&&e()};return a&&(document.addEventListener("keydown",r),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",r),document.body.style.overflow="unset"}},[a,e]);const b=r=>{o.current&&!o.current.contains(r.target)&&e()},x={sm:"max-w-md",md:"max-w-lg",lg:"max-w-2xl"};return a?E.createPortal(React.createElement("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4",onClick:b,role:"presentation"},React.createElement("div",{ref:o,className:["w-full rounded-lg bg-white dark:bg-neutral-800 shadow-xl","transform transition-all",x[p],f].join(" "),role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},React.createElement("div",{className:"flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700 px-6 py-4"},React.createElement("h2",{id:"modal-title",className:"text-xl font-semibold"},m),React.createElement("button",{onClick:e,className:"text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200","aria-label":"Close"},"×")),React.createElement("div",{className:"px-6 py-4"},u))),document.body):null},h={title:"Components/Feedback/Modal",component:i,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>{const[a,e]=s.useState(!1);return t.createElement("div",null,t.createElement("button",{onClick:()=>e(!0),className:"px-4 py-2 bg-primary-500 text-white rounded-md"},"Open Modal"),t.createElement(i,{isOpen:a,onClose:()=>e(!1),title:"Confirmation"},t.createElement("div",{className:"space-y-4"},t.createElement("p",null,"Are you sure you want to proceed with this action?"),t.createElement("div",{className:"flex justify-end space-x-2"},t.createElement("button",{onClick:()=>e(!1),className:"px-4 py-2 border border-neutral-300 rounded-md"},"Cancel"),t.createElement("button",{onClick:()=>e(!1),className:"px-4 py-2 bg-primary-500 text-white rounded-md"},"Confirm")))))}};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>\r
        <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-primary-500 text-white rounded-md">\r
          Open Modal\r
        </button>\r
\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirmation">\r
          <div className="space-y-4">\r
            <p>Are you sure you want to proceed with this action?</p>\r
            <div className="flex justify-end space-x-2">\r
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 border border-neutral-300 rounded-md">\r
                Cancel\r
              </button>\r
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-primary-500 text-white rounded-md">\r
                Confirm\r
              </button>\r
            </div>\r
          </div>\r
        </Modal>\r
      </div>;
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const N=["ModalExample"];export{n as ModalExample,N as __namedExportsOrder,h as default};
