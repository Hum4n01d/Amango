import React from "react"

const Favicon = (props) => {
  let faviconEl
  
  if (props.url.startsWith('http')) {
    const faviconUrl = "http://www.google.com/s2/favicons?domain=" + props.url
    
    faviconEl = <img className="favicon" src={faviconUrl}/>
  } else {
  
  }
  return (
    <div className='favicon'>
      {faviconEl}
    </div>
  )
}

export default Favicon 