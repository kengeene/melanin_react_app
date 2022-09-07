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
            <div style={{textAlign: 'right',display: 'inline-block'}}>
                User Icon
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
    }
};
export default Topbar;