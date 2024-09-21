interface subLinkProps {
  image: string
  title: string
  description: string
}

const subLink: React.FC<subLinkProps> = ({ image, title, description }) => {
  return (
    <div className="subLink">
      <div className="subLinkImage"
        style={{
          backgroundImage: `url(${image})`
        }}></div>
      <div className="subLinkTitle">{title}</div>
      <div className="subLinkDescription">{description}</div>
    </div>
  )
}

export default subLink