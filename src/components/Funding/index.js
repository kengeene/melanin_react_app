import Sidebar from '../Sidebar/index';
import Body from '../Funding/components/index';

const Funding = () => {
    return(
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <Sidebar/>
        </div>
        <Body />
        </div>
    );
}

const styles = {
  container: {
    margin: '0 auto',
    width: '100%',
    height: '100%',
    fontFamily: 'futura',
    backgroundColor: '#f7f7f7'
  },
  sidebar: {
    display: 'inline-block',
    width: '15%'
  },
  main: {
    display: 'inline-block',
    width: '85%',
    height: '100%',
    float: 'right'
  }
};

export default Funding;