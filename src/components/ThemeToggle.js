import React, {useContext} from 'react'
import {HiSun, HiMoon} from 'react-icons/hi'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {
const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className='mt-1'>
        {theme === 'dark' ? (
            <div className='flex items-center cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <HiSun size={23}/>
            </div>
        ) : (<div className='flex items-center cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' :    'dark')}>
              <HiMoon size={23}/>
            </div>)}
    </div>
  )
}

export default ThemeToggle