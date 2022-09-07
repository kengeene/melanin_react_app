import LineChart from './LineChart';
import PieChart from './PieChart';

const CurrentLoans = () => {
    return(
          <div>
            <div>
                <h2>Current loans</h2>
                <LineChart/>
            </div>
            <div>
              <div style={{display: 'block'}}>
                <h2 style={{display: 'inline-block'}}>Diaspora SME Loan</h2>
                <span style={{display: 'inline-block', float: 'right'}}>Active</span>
              </div>
              <PieChart/>
            </div>
          </div>
    );
};

export default CurrentLoans;