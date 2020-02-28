import React, {useRef, useEffect} from 'react'
import './Header.css'

function Header(props){

  const header = useRef()

  useEffect(() => {
    props.header(header)
  }, [])

  return(
    <header ref={header} className='header'>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="83"
      height="57"
      viewBox="0 0 83 57"
    >
      <text
        fill="#C800BB"
        data-name="Bit Habit"
        fontFamily="Coda-Regular, Coda"
        fontSize="26"
        transform="translate(0 27)"
      >
        <tspan x="0" y="0">
          Bit
        </tspan>
        <tspan x="20" y="20">
          Habit
        </tspan>
      </text>
    </svg>
    </header>
  )
}

export default Header