export default function Box({ size, color, onMouseEnterHandler, onMouseLeaveHandler, toggleColorFlash }) {

  const boxStyle = {
    width: size,
    height: size,
    backgroundColor: color ? color : 'black',
    margin: '0 auto',
    transition: '.1s'
  }

  return (
    <div style={boxStyle} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} onDoubleClick={toggleColorFlash}></div>
  )

}