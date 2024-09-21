import React, { useState } from 'react'
import subLink from './subLink'

interface LinkProps {
  href: string
  className: string
  subLinks?: typeof subLink
  id?: string
  children?: React.ReactNode
}

const HtmlLink: React.FC<LinkProps> = ({ href, className, subLinks, id, children }) => {
  const [onHover, setOnHover] = useState(false)

  const displayCalc = () => {
    if (onHover === true) {
      return 'block'
    } else {
      return 'none'
    }
  }

  return (
    <a href={href} className={className && 'htmlLink'} id={id}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      style={{ position: 'relative' }}
    >
      {children || ""}
      {subLinks && <div className="subLinks"
        style={{
          display: displayCalc(),
          position: 'absolute',
          top: '100%',
          transition: '3000ms ease 3000ms'
        }}
      ><subLink /></div>}
    </a>
  )
}

export default HtmlLink