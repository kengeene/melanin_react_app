/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
    return(
        <div style={styles.sidebar}>
            <div style={styles.top}>
                <FontAwesomeIcon style={styles.imageIcon} icon="fa-road" />
                <h3 style={styles.title}>Melanin Kapital</h3>
            </div>
            <ul style={{paddingLeft: 0}}>
                <a href="#" style={styles.link}><li style={styles.linkItem}><FontAwesomeIcon style={styles.icon} icon="fa-home" />Home</li></a>
                <a href="#" style={styles.link}><li style={styles.linkItem}><FontAwesomeIcon style={styles.icon} icon="fa-folder" />Business Profile</li></a>
                <a href="#" style={styles.link}><li style={styles.linkItem}><FontAwesomeIcon style={styles.icon} icon="fa-exclamation-triangle" />Risk Profile</li></a>
                <a href="#" style={styles.link}><li style={styles.linkItem}><FontAwesomeIcon style={styles.icon} icon="fa-chart-pie" />Funding</li></a>
                <a href="#" style={styles.link}><li style={styles.linkItem}><FontAwesomeIcon style={styles.icon} icon="fa-users" />Konnect</li></a>
                <a href="#" style={styles.link}><li style={styles.linkItem}><FontAwesomeIcon style={styles.icon} icon="fa-user-graduate" />Academy</li></a>
                <a href="#" style={styles.link}><li style={styles.linkItem}><FontAwesomeIcon style={styles.icon} icon="fa-envelope" />Support</li></a>
            </ul>
        </div>
    );
};

const styles = {
    sidebar: {
        backgroundColor: '#ffffff'
    },
    imageIcon:{
        display: 'inline-block'
    },
    top:{
        padding: '20px'
    },
    link: {
        textDecoration: 'none',
        color: '#000000'
    },
    linkItem: {
        display: 'block',
        padding: '20px',
        backgroundColor: '#ffab00',
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