export default {
  root: {
    class: ["relative", "inline-flex", "align-bottom", "w-[1.571rem] h-[1.571rem]", "cursor-pointer", "select-none"]
  },
  box: ({props:e})=>({class:["flex justify-center items-center","w-[1.571rem] h-[1.571rem]","border-2","rounded-full","transition duration-200 ease-in-out",{"text-surface-700 dark:text-white/80":e.value!==e.modelValue&&e.value!==void 0,"bg-surface-0 dark:bg-surface-900":e.value!==e.modelValue&&e.value!==void 0,"border-surface-300 dark:border-surface-700":e.value!==e.modelValue&&e.value!==void 0,"border-primary-500 dark:border-primary-400":e.value==e.modelValue&&e.value!==void 0,"bg-primary-500 dark:bg-primary-400":e.value==e.modelValue&&e.value!==void 0},{"peer-hover:border-primary-500 dark:peer-hover:border-primary-400":!e.disabled,"peer-hover:border-primary-600 dark:peer-hover:border-primary-300 peer-hover:bg-primary-600 dark:peer-hover:bg-primary-300":!e.disabled&&e.value==e.modelValue&&e.value!==void 0,"peer-focus-visible:border-primary-500 dark:peer-focus-visible:border-primary-400 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-400/20 dark:peer-focus-visible:ring-primary-300/20":!e.disabled,"opacity-60 cursor-default":e.disabled}]}),
  input: {
    class: ["peer", "w-full ", "h-full", "absolute", "top-0 left-0", "z-10", "p-0", "m-0", "opacity-0", "rounded-md", "outline-none", "border-2 border-surface-200 dark:border-surface-700", "appareance-none", "cursor-pointer"]
  },
  icon: ({props:e})=>({class:["block","rounded-full","w-[0.857rem] h-[0.857rem]","bg-surface-0 dark:bg-surface-900",{"backface-hidden scale-10 invisible":e.value!==e.modelValue,"transform visible scale-[1.1]":e.value==e.modelValue},"transition duration-200"]})
}