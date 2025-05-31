import { JSX, KeyboardEventHandler, useRef, useState } from "react";

export default function Input({label,onlyInput,/*defaultValue,*/type,onChange,onKeyDown,step,onBlur,field,className,placeholder,size,endContent,isDisabled,setValue,value,apiField,min}:InputClass) {
  const ref = useRef<HTMLInputElement>(null)

  const [inError,] = useState(false)
  const [errorArray,] = useState<unknown[]>([])

  const valueControlled = value ;
  const setValueControlled = setValue ;

  let sizeClasses = "p-2.5 text-sm"
  switch (size) {
    case "sm":
        sizeClasses = "p-1 text-sm rounded-sm"
        break;
    case "lg":
        sizeClasses = "p-3"
        break;
  
    default:
        break;
  }

  const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    if(setValue)
        setValueControlled!(event.target.value)
    if(onChange)
        onChange(event)
  }

  return (
    <div className={(className?.base??'relative')}>
        {!onlyInput&&(label!==undefined)&&
        <label className={` ${(className?.label??'block text-gray-700 dark:text-gray-50 text-sm  my-1')}`}>
            {label}
        </label>
        }
        <div className=" relative">
            <input
                ref={ref}
                value={valueControlled}
                disabled={isDisabled}
                className={`${sizeClasses} ${inError?" border-red-700 dark:border-red-600 border-2 ":" border-gray-300 dark:border-gray-600 border"} focus:outline-none bg-gray-50   text-gray-900 rounded-lg focus:ring-gray-400 focus:border-gray-400 disabled:dark:bg-gray-600 block w-full dark:bg-zinc-800  dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500 ${className?.input}`}
                // defaultValue={defaultValue??''}
                type={type}
                step={step}
                placeholder={placeholder}
                name={field}
                onChange={handleOnChange}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
				min={type === 'number' ? min : undefined}
            />
            
            {inError&&<div>
                {errorArray.map((error,index)=>(
                    <div key={apiField+"Error"+index} className=" text-red-700 text-xs">
                        {error as string}
                    </div>
                ))}
            </div>}
            
            <div className={" absolute top-0 right-0 "+(sizeClasses)}>
                {endContent}
            </div>
        </div>
        

    </div>
  )
}

type InputClass = {
    label?:string,
    onlyInput?:boolean,
    apiField?:string,
    errors?:{ [key: string]: unknown[] },
    defaultValue?:string | number | readonly string[] | undefined,
    type?:React.HTMLInputTypeAttribute,
    onChange?:React.ChangeEventHandler<HTMLInputElement>,
    onBlur?:React.FocusEventHandler<HTMLInputElement>,
    step?:string | number | undefined
    placeholder?:string
    field:string,
    isDisabled?:boolean
    onKeyDown?:KeyboardEventHandler<HTMLInputElement>
    className?:{
        base?:string
        label?:string,
        input?:string
    }|undefined,
    setValue?:React.Dispatch<React.SetStateAction<string | number | readonly string[] | undefined>>
    value?:string | number | readonly string[] | undefined
    endContent?:JSX.Element
    size?:"sm"|"md"|"lg",
	min?:number | string | undefined
}
