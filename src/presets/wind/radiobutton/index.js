export default {
  root: {
    class: ["relative", "inline-flex", "align-bottom", "w-4 h-4", "cursor-default", "select-none"]
  },
  box: ({props:e})=>({class:["flex justify-center items-center","w-4 h-4","text-sm","font-medium","border-2","rounded-full","transition duration-200 ease-in-out",{"text-surface-700 dark:text-white/80":e.value!==e.modelValue&&e.value!==void 0,"bg-surface-0 dark:bg-surface-900":e.value!==e.modelValue&&e.value!==void 0,"border-surface-300 dark:border-surface-700":e.value!==e.modelValue&&e.value!==void 0,"border-primary-500 dark:border-primary-400":e.value==e.modelValue&&e.value!==void 0},{"outline-none outline-offset-0":!e.disabled,"peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface-0 dark:focus-visible:ring-offset-surface-800 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400":!e.disabled,"opacity-60 cursor-default":e.disabled}]}),
  input: {
    class: ["peer", "w-full ", "h-full", "absolute", "top-0 left-0", "z-10", "p-0", "m-0", "opacity-0", "rounded-md", "outline-none", "border-2 border-surface-300 dark:border-surface-700", "appareance-none", "cursor-default"]
  },
  icon: {
    class: "hidden"
  }
}