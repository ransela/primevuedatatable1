export default {
  root: ({props:e,state:r})=>({class:["inline-flex","relative","w-full md:w-56","rounded-md","shadow-sm","bg-surface-0 dark:bg-surface-900",{"ring-1 ring-inset ring-surface-300 dark:ring-surface-700":!r.focused,"ring-2 ring-inset ring-primary-500 dark:ring-primary-400":r.focused},"cursor-default","select-none",{"opacity-60":e.disabled,"pointer-events-none":e.disabled}]}),
  label: ({props:e})=>({class:["font-sans","leading-6","sm:text-sm"," flex flex-auto","w-[1%]","py-1.5 px-3","rounded-none","bg-transparent","border-0",{"text-surface-800 dark:text-white/80":e.modelValue,"text-surface-400 dark:text-surface-500":!e.modelValue},"placeholder:text-surface-400 dark:placeholder:text-surface-500","transition","duration-200","focus:outline-none focus:shadow-none","relative","cursor-pointer","overflow-hidden overflow-ellipsis","whitespace-nowrap","appearance-none"]}),
  dropdownbutton: {
    class: ["sm:text-sm", "flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "rounded-tr-md", "rounded-br-md"]
  },
  panel: {
    class: ["absolute top-0 left-0", "mt-2", "border-0", "rounded-md", "shadow-md", "bg-surface-0 dark:bg-surface-700", "text-surface-800 dark:text-white/80", "ring-1 ring-inset ring-surface-300 dark:ring-surface-700"]
  },
  wrapper: {
    class: ["max-h-[200px]", "overflow-auto"]
  },
  list: {
    class: "py-1 list-none mx-1.5"
  },
  item: ({context:e})=>({class:["sm:text-sm","leading-none","border-0","rounded-md","m-0",{"text-surface-500 dark:text-white/70":!e.focused&&!e.active,"text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-black/70":e.focused&&!e.active,"text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70":e.focused&&e.active,"text-surface-900 dark:text-surface-0/80 bg-surface-50 dark:bg-black/70":!e.focused&&e.active},{"hover:bg-surface-50 dark:hover:bg-surface-800":!e.active,"hover:bg-surface-100 dark:hover:bg-black/40 text-surface-900 dark:text-surface-0/80":e.active},"transition-shadow","duration-200","cursor-pointer","overflow-hidden","whitespace-nowrap"]}),
  content: {
    class: ["relative", "flex", "items-center", "py-2 px-4", "no-underline", "overflow-hidden", "cursor-pointer", "select-none"]
  },
  groupicon: {
    class: ["ml-auto"]
  },
  sublist: {
    class: ["w-full sm:w-48", "p-1.5", "m-0", "list-none", "shadow-none sm:shadow-md", "border-0", "static sm:absolute", "z-10", "bg-surface-0 dark:bg-surface-700"]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1"
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}