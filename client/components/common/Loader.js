const Loader = ({ size = 5, containerStyles }) => {
  const dotStyle = { border: `${size}px solid #ecf0f1`, margin: `calc(${size}px * 2)` }
  return (
    <div className={'loaderContainer'} style={containerStyles}>
      <style></style>
      <div className={'loader'}>
        <span className={'loaderElement'} style={dotStyle}></span>
        <span className={'loaderElement'} style={dotStyle}></span>
        <span className={'loaderElement'} style={dotStyle}></span>
      </div>
    </div>
  )
}

export default Loader
