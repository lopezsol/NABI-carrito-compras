import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={3}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="37" y="43" rx="2" ry="2" width="136" height="173" /> 
    <rect x="202" y="42" rx="2" ry="2" width="136" height="173" /> 
    <rect x="38" y="243" rx="2" ry="2" width="136" height="173" /> 
    <rect x="206" y="245" rx="2" ry="2" width="136" height="173" />
  </ContentLoader>
)

export default MyLoader

