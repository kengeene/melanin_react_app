import BarChart from './BarChart';

const LoanHistory = () =>{
    return (
        <div style={{display: 'block', height: '50%', backgroundColor: '#ffffff', margin: '10px', padding: 10}}>
            <h2>Loan history</h2>
            <BarChart/>
        </div>
    );
};

export default LoanHistory;