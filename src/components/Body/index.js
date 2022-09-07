import Menubar from './Topbar.js';
import FundingCard from './FundingCard';
import LoanHistory from './LoanHistory';
import CurrentLoans from './CurrentLoans/index.js';

const Body = () => {
    return (
     <div style={styles.main}>
          <Menubar/>
          <div style={{display: 'inline-block', width: '45%'}}>
            <FundingCard/>
            <LoanHistory/>
          </div>
          <CurrentLoans/>
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