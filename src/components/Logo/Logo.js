import burgerLogo from '../../assets/image/burger-logo.png'
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={burgerLogo} alt='my logo' />
    </div>
)

export default logo;