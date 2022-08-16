import classes from './ChargeImportBackdrop.module.css'

const ChargeImportBackdrop = (props) => {
    return (
        <div onClick={props.clickHandler} className={classes.backdrop}/>
    )
}

export default ChargeImportBackdrop