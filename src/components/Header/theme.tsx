import { useContext } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { AppContext } from '../../context/AppContext'
import Tooltip from '../Tooltip'

export default function Theme() {
  const { setTheme,theme } = useContext(AppContext)

  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme!("dark")
    }else{
      setTheme!("light")
    }
  }

  return (
    <Tooltip label='Tema'>
      {/* <Switcher isChecked={isChecked} setIsChecked={setIsChecked}/> */}
      <button id='toggle-theme-button' className='text-slate-500 hover:text-slate-700 dark:text-slate-100 dark:hover:text-slate-300 cursor-pointer' onClick={toggleTheme}>{theme === 'light' ? <FiMoon size={20}/> : <FiSun size={20}/>}</button>
    </Tooltip>
  )
}
