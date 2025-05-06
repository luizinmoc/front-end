import { createContext, useEffect, useState } from "react";

const AppContext = createContext<AppContextType>({})

const AppProvider = ({children}:{children:React.ReactNode})=>{
	const [theme, setTheme] = useState<string>(localStorage.getItem('theme')??'light')
	useEffect(() => {
		// const classes = document.body.classList
		if(theme==="light"){
		  document.body.classList.remove("dark")
		  document.body.classList.remove("bg-slate-950")
	
		}else if(theme==="dark"){
		  document.body.classList.add("dark")
		  document.body.classList.add("bg-slate-950")
	
	
		}
	}, [theme])

	const handleSetTheme = (theme:string) => {
		if(theme.toLowerCase().trim()==="light"){
		  localStorage.setItem('theme','light')
		  document.body.classList.remove("dark")
		  setTheme('light')
		}else{
			const classes = document.body.classList
			if(!classes!.contains("dark")){
				document.body.classList.add("dark")
			}
			localStorage.setItem('theme','dark')
			setTheme('dark')
		}
	}

	return (
		<AppContext.Provider
		  value={{ theme,setTheme:handleSetTheme }}
		>
		  {children}
		</AppContext.Provider>
	  )
}

export { AppProvider, AppContext }

type AppContextType = {
	theme?:string
	setTheme?:(theme:string)=>void,
	
}