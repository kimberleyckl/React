import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <div>toolbar, side drawer, backdrop</div>
        <main className = {classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;