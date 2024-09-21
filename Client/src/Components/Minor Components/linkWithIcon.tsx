import React from 'react'

interface LinkProps {
  href: string
  className: string
  id?: string
  children?: React.ReactNode
  iconImage: string
}

const HtmlLinkWIcon: React.FC<LinkProps> = ({ href, className, id, children, iconImage }) => {
  return (
    <div className="linkAndIcon">
      <div className={iconImage + 'nav-links linkWIcon'} />
      <a href={href} className={className && 'htmlLink'} id={id}>
        {children || ""}
      </a>
    </div>
  )
}

export default HtmlLinkWIcon