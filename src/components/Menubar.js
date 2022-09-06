const Menubar = () => {
    return(
        <div style={styles.menubar}>
            <div style={styles.heading}>
                Funding
            </div>
            <div style={styles.heading}>
                <input placeholder="What are you looking for?" style={styles.searchbar}/>
            </div>
        </div>
    );
};


const styles={
    menubar: {
        display: 'block',
        height: '10vh'
    },
    heading: {
        width: '30vw',
        display: 'inline-block'
    },
    searchbar: {
        width: '15vw',
        padding: '10px',
        borderRadius: '15px'
    }
};
export default Menubar;