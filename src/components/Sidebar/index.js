/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return(
        <div style={styles.sidebar}>
            <div style={styles.top}>
                <img src="https://melaninkapital.com/wp-content/uploads/2021/10/hp2-logo.png" style={styles.logo} alt="logo"/>
            </div>
            <nav style={{paddingLeft: 0}}>
                <NavLink to="home" style={({ isActive }) => isActive ? styles.linkItemActive : styles.linkItemInactive}><FontAwesomeIcon style={styles.icon} icon="fa-home" />Home</NavLink>
                <NavLink to="business-profile" style={({ isActive }) => isActive ? styles.linkItemActive : styles.linkItemInactive}><FontAwesomeIcon style={styles.icon} icon="fa-folder" />Business Profile</NavLink>
                <NavLink to="risk-profile" style={({ isActive }) => isActive ? styles.linkItemActive : styles.linkItemInactive}><FontAwesomeIcon style={styles.icon} icon="fa-exclamation-triangle" />Risk Profile</NavLink>
                <NavLink to="/" style={({ isActive }) => isActive ? styles.linkItemActive : styles.linkItemInactive}><FontAwesomeIcon style={styles.icon} icon="fa-chart-pie" />Funding</NavLink>
                <NavLink to="konnect" style={({ isActive }) => isActive ? styles.linkItemActive : styles.linkItemInactive}><FontAwesomeIcon style={styles.icon} icon="fa-users" />Konnect</NavLink>
                <NavLink to="academy" style={({ isActive }) => isActive ? styles.linkItemActive : styles.linkItemInactive}><FontAwesomeIcon style={styles.icon} icon="fa-user-graduate" />Academy</NavLink>
                <NavLink to="support" style={({ isActive }) => isActive ? styles.linkItemActive : styles.linkItemInactive}><FontAwesomeIcon style={styles.icon} icon="fa-envelope" />Support</NavLink>
            </nav>
        </div>
    );
};



const styles = {
    sidebar: {
        backgroundColor: '#ffffff',
    },
    logo:{
        display: 'inline-block',
        width: '150px'
    },
    top:{
        padding: '20px'
    },
    link: {
        textDecoration: 'none',
        color: '#000000'
    },
    linkItemActive: {
        backgroundColor: '#ffab00',
        textDecoration: 'none',
        color: '#000000',
        display: 'block',
        padding: '20px',
        margin: '20px 0',
        borderRadius: '0 30px 30px 0'
    },
    linkItemInactive: {
        backgroundColor: '#ffffff',
        textDecoration: 'none',
        color: '#000000',
        display: 'block',
        padding: '20px',
        margin: '20px 0',
        borderRadius: '0 30px 30px 0'
    },
    icon: {
        paddingRight: '5px'
    },
    title: {
        display: 'inline-block',
        padding: '10px',
        margin: '10px'
    }
};

export default Sidebar;