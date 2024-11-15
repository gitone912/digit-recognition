import React from 'react';
import Draw from './components/draw';

function App() {
  return (
    <div style={styles.app}>
      <h1 style={styles.heading}>Digit Recognizer</h1>
      <p style={styles.instruction}>(Draw any digit 0 to 9)</p>
      <Draw />
      <footer style={styles.footer}>
        <p>Made with ❤️ by Akash Verma</p>
      </footer>
    </div>
  );
}

const styles = {
  app: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'gray', // Set the background to gray
    color: '#fff',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  instruction: {
    fontSize: '1rem',
    fontStyle: 'italic',
    marginTop: '0',
    marginBottom: '20px',
  },
  footer: {
    marginTop: 'auto', // Pushes the footer to the bottom
    backgroundColor: '#2c2c2c',
    color: '#fff',
    padding: '10px 20px',
    width: '100%',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
};

export default App;
