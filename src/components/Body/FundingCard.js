import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/styles.css';

const FundingCard = () => {
    return(
        <div style={{display: 'block', height: '30%', backgroundColor: '#ffffff', padding: '0 0 10px 10px', margin: '10px 0 10px 10px'}}>
            <div style={{display: 'inline-block'}}>
             <h4 style={{display: 'block'}}>Get more funding Today!</h4>
             <span style={{display: 'block', fontSize: '14px'}}>What Kind of Funding would you want for your business?</span>
             <div style={{display: 'block', marginTop: '20px'}}>
                <div style={{display: 'inline-block',backgroundColor: '#feebc3',borderRadius: '10px',height: '50px',width: '40%', padding: '10px'}}>
                    <span style={styles.cardText}>Get a Loan</span>
                    <FontAwesomeIcon icon="fa-solid fa-location-arrow" style={styles.icon} />
                </div>
                <div style={{display: 'inline-block',backgroundColor: '#feebc3',borderRadius: '10px',height: '50px',width: '40%', padding: '10px', float: 'right'}}>
                    <span style={styles.cardText}>Get Private Capital</span>
                    <FontAwesomeIcon icon="fa-solid fa-location-arrow" style={styles.icon}/>
                </div>
            </div>
            </div>
            <div style={{display: 'inline-block', width: '40%', float: 'right', backgroundColor: '#ffab00', padding: '10px 5px', borderRadius: '10px'}}>
                <h4>Funds Statistics</h4>
                <div style={styles.fundsCard}>
                    <span style={styles.fundsCardValue}>KES 6,690,900</span>
                    <span style={styles.fundsCardTitle}>Total private capital</span>
                </div>
                <div style={styles.fundsCard}>
                    <span style={styles.fundsCardValue}> KES 3,000,000</span>
                    <span style={styles.fundsCardTitle}>Total loan borroed</span>
                </div>
            </div>
        </div>
    );
};

const styles = {
    card: {
    },
    cardText:{
        fontSize: '14px',
        display: 'inline-block',
        width: '60%'
    },
    icon: {
        float: 'right',
        padding: '10px'
    },
    fundsCard: {
        backgroundColor: '#fec41a',
        width: '90%',
        margin: '15px 0',
        borderRadius: '10px',
        padding: '10px'
    },
    fundsCardTitle: {
        display: 'block',
        fontSize: '12px'
    },
    fundsCardValue: {
        display: 'block',
        fontSize: '16px',
        fontWeight: 'bold'
    }
};

export default FundingCard;