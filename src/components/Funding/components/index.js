import Menubar from './Topbar.js';
import FundingCard from './FundingCard';
import LoanHistory from './LoanHistory';
import CurrentLoans from './CurrentLoans/index.js';

const Body = (props) => {
    return (
     <div style={styles.main}>
          <Menubar user={props.user}/>
          <div style={{display: 'inline-block', width: '65%'}}>
            <FundingCard/>
            <div style={{clear: 'both'}}/>
            <LoanHistory/>
          </div>
          <div style={{display: 'inline-block', width: '30%', backgroundColor: '#ffffff', margin: '10px', float: 'right', padding: '20px'}}>
            <CurrentLoans/>
          </div>
        </div>
    );
};

const styles = {
  main: {
    display: 'inline-block',
    width: '85%',
    height: '100%',
    float: 'right'
  }
};

export default Body;