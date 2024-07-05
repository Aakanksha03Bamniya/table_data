import React from 'react'
import useTheme from './Theme'
// import { ThemeProvider } from './Theme'
// import { darkMode } from '../../tailwind.config'

const Button = () => {
    const {themeMode,darkMode,lightMode}=useTheme()

    const onChangebtn = (e)=>{
        const statusDark = e.currentTarget.checked
        if (statusDark){
            darkMode()
        }
        else {
            lightMode()
        }

    }
  return (
    <div>


            <input
                type="checkbox"
                value=""
                onChange={onChangebtn}
                checked={themeMode==='dark'}
                // className="sr-only peer"
              
            />
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
       

    </div>
  )
}

export default Button