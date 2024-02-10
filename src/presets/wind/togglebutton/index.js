export default {
  root: {
    class: ["relative", "inline-flex", "align-bottom", "cursor-pointer", "select-none"]
  },
  box: ({props:e})=>({class:["items-center inline-flex flex-1 text-center align-bottom justify-center","px-2.5 py-1.5","text-sm","rounded-md shadow-sm","text-surface-700 dark:text-white/80","ring-1 ring-surface-200 dark:ring-surface-700",{"bg-surface-0 dark:bg-surface-900 ":!e.modelValue,"bg-surface-100 dark:bg-surface-700":e.modelValue},"peer-hover:bg-surface-200 dark:peer-hover:bg-surface-600/80",{"peer-focus-visible:ring-2 peer-focus-visible:ring-inset peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400":!e.disabled},"transition-all duration-200",{"cursor-pointer":!e.disabled,"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),
  label: {
    class: "font-semibold text-center w-full"
  },
  input: {
    class: ["peer", "w-full ", "h-full", "absolute", "top-0 left-0", "z-10", "p-0", "m-0", "opacity-0", "rounded-md", "outline-none", "border border-surface-200 dark:border-surface-700", "appareance-none", "cursor-pointer"]
  },
  icon: {
    class: [" mr-2", "text-surface-700 dark:text-white/80"]
  }
}