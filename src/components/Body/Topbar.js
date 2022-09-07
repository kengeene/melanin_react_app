import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Topbar = () => {
    return(
        <div style={styles.menubar}>
            <div style={styles.heading}>
                <h2>Funding</h2>
            </div>
            <div style={styles.heading}>
                <div  style={styles.searchbar}>
                <input placeholder="What are you looking for?" style={styles.searchbarInput}/>
                <FontAwesomeIcon icon="fa-search" />
                </div>
            </div>
            <div style={{display: 'inline-block'}}>
                <FontAwesomeIcon icon="fa-envelope" style={{marginRight: '10px'}} />
                <FontAwesomeIcon icon="fa-bell" />
            </div>
            <div style={{textAlign: 'right',display: 'inline-block', float: 'right'}}>
                <img src='https://randomuser.me/api/portraits/men/5.jpg' alt='profile_picture' style={{display: 'inline-block', width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px'}}/>
                <div style={{display: 'inline-block', float: 'right'}}>
                    <span style={{fontSize: '14px', display: 'block', fontWeight: 'bold'}}>Tafari Mwangi</span>
                    <span style={{fontSize: '10px', display: 'block'}}>Entrepreneur <FontAwesomeIcon icon="fa-chevron-down" /></span>
                </div>
            </div>
        </div>
    );
};


const styles={
    menubar: {
        display: 'block',
        height: '10vh',
        padding: '2vh',
        backgroundColor: '#ffffff'
    },
    heading: {
        paddingLeft: '30px',
        width: '30vw',
        display: 'inline-block'
    },
    searchbar: {
        border: '1px solid black',
        borderRadius: '15px',
        width: '15vw',
        padding: '10px'
    },
    searchbarInput: {
        width: '13vw',
        border: 'none'
    },
    profilePhoto: {
        height: '50px',
        width: '50px',
        borderRadius: '50%'
    }
};
export default Topbar;