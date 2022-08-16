import classes from './ProductionBackdrop.module.css'

const ProductionBackdrop = (props) => {
    return (
        <div onClick={props.clickHandler} className={classes.backdrop}/>
    )
}

export default ProductionBackdrop