import{r as o}from"./index-B0WjJBI_.js";import{r as y}from"./index-DDpteCSn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CwPCC0ZT.js";const d=({isOpen:t,onClose:e,title:i,children:m,size:u="md",className:p=""})=>{const n=o.useRef(null);o.useEffect(()=>{const a=x=>{x.key==="Escape"&&e()};return t&&(document.addEventListener("keydown",a),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",a),document.body.style.overflow="unset"}},[t,e]);const f=a=>{n.current&&!n.current.contains(a.target)&&e()},b={sm:"max-w-md",md:"max-w-lg",lg:"max-w-2xl"};return t?y.createPortal(React.createElement("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4",onClick:f,role:"presentation"},React.createElement("div",{ref:n,className:["w-full rounded-lg bg-white dark:bg-neutral-800 shadow-xl","transform transition-all",b[u],p].join(" "),role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},React.createElement("div",{className:"flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700 px-6 py-4"},React.createElement("h2",{id:"modal-title",className:"text-xl font-semibold"},i),React.createElement("button",{onClick:e,className:"text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200","aria-label":"Close"},"×")),React.createElement("div",{className:"px-6 py-4"},m))),document.body):null},C={title:"Components/Feedback/Modal",component:d,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>{const[t,e]=o.useState(!1);return React.createElement("div",null,React.createElement("button",{onClick:()=>e(!0),className:"px-4 py-2 bg-primary-500 text-white rounded-md"},"Open Modal"),React.createElement(d,{isOpen:t,onClose:()=>e(!1),title:"Confirmation"},React.createElement("div",{className:"space-y-4"},React.createElement("p",null,"Are you sure you want to proceed with this action?"),React.createElement("div",{className:"flex justify-end space-x-2"},React.createElement("button",{onClick:()=>e(!1),className:"px-4 py-2 border border-neutral-300 rounded-md"},"Cancel"),React.createElement("button",{onClick:()=>e(!1),className:"px-4 py-2 bg-primary-500 text-white rounded-md"},"Confirm")))))}};var l,s,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const h=["ModalExample"];export{r as ModalExample,h as __namedExportsOrder,C as default};
