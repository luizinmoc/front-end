import React, { JSX } from 'react'

export default function Button({children,type,onClick,className,onlyIcon,size,icon,endContent}:ButtonClass) {

  let sizeStyle = ''

  switch (size) {
    case 'lg':
      sizeStyle = ' py-3 px-6 '
      break;
    case 'sm':
      sizeStyle = ' py-1 px-2 text-sm'
      break;
  
    default:
      sizeStyle = ' py-[0.3rem] px-4'
      break;
  }

  return (
    <button 
        className=
          {

            (onlyIcon?'focus:outline-none  bg-transparent items-center border-0 focus:bottom-0 hover:border-0  disabled:cursor-default cursor-pointer'
              : (sizeStyle) + ` bg-gray-800 disabled:bg-zinc-300 cursor-pointer dark:disabled:bg-zinc-600 flex ${icon ? 'justify-between' : 'justify-center'} border-0 focus:bottom-0 hover:border-0 hover:opacity-95 focus:outline-none text-white font-semibold rounded transition-transform transform active:scale-95 text-center `)
              +
              (className?.button??'')}
        type={type}
        onClick={onClick}
        >
          <div className='flex items-center gap-2 text-center'>
            {children}
          </div>
          {endContent}
    </button>
  )
}

type ButtonClass = {
    children?:React.ReactNode,
    type?:"button" | "reset" | "submit" | undefined
    onClick?:React.MouseEventHandler<HTMLButtonElement>,
    className?:{
        button?:string
    }|undefined
    onlyIcon?:boolean,
    icon?:JSX.Element,
    endContent?:JSX.Element,
    size?:"md" | "lg" | "sm"| undefined
}
