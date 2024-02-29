
const Footer = () =>{
    return(
        <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4>About Us</h4>
          <p>Your Company Description Here</p>
        </div>
        <div style={styles.column}>
          <h4>Categories</h4>
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
    )
}


const styles = {
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      marginBottom: '20px',
    },
    column: {
      flexBasis: '30%',
      marginBottom: '20px',
    },
    bottomBar: {
      borderTop: '1px solid #fff',
      paddingTop: '10px',
      textAlign: 'center',
    },
  };


  export default Footer;

