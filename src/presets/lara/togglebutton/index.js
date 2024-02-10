export default {
  root: {
    class: ["relative", "inline-flex", "align-bottom", "cursor-pointer", "select-none"]
  },
  box: ({props:e})=>({class:["items-center inline-flex flex-1 text-center align-bottom justify-center","px-4 py-3 leading-none","rounded-md border",{"bg-surface-0 dark:bg-surface-900 ":!e.modelValue,"border-surface-200 dark:border-surface-700 ":!e.modelValue,"text-surface-700 dark:text-white/80":!e.modelValue,"bg-primary-500 dark:bg-primary-400 border-primary-500 dark:border-primary-400 text-white dark:text-surface-900":e.modelValue},{"peer-hover:bg-surface-50 dark:peer-hover:bg-surface-800/80 peer-hover:border-surface-200 dark:peer-hover:bg-surface-700 peer-hover:text-surface-700 dark:peer-hover:text-white/80":!e.modelValue,"peer-hover:bg-primary-600 peer-hover:border-primary-600 dark:peer-hover:bg-primary-300 dark:peer-hover:border-primary-300":e.modelValue,"peer-focus-visible:ring peer-focus-visible:ring-primary-400/50 dark:peer-focus-visible:ring-primary-300/50":!e.disabled},"transition-all duration-200",{"cursor-pointer":!e.disabled,"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),
  label: {
    class: "font-bold text-center w-full"
  },
  input: {
    class: ["peer", "w-full ", "h-full", "absolute", "top-0 left-0", "z-10", "p-0", "m-0", "opacity-0", "rounded-md", "outline-none", "border border-surface-200 dark:border-surface-700", "appareance-none", "cursor-pointer"]
  },
  icon: ({props:e})=>({class:[" mr-2",{"text-surface-600 dark:text-white/70":!e.modelValue,"text-white dark:text-surface-900":e.modelValue}]})
}