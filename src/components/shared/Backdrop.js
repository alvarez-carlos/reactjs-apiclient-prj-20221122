import './Backdrop.css'

const Backdrop = (props) => {
    return (
        <div onClick={props.clickHandler} className='backdrop'/>
    )
}

export default Backdrop