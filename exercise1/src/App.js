import logo from './logo.svg';
import './App.css';

function App() {
    const currentYear = new Date().getFullYear()
    const isLoggedIn = false
    return (
        <div>
            <h1>ENSF-381: Full Stack Web Development</h1>
            <p>React Components</p>

            <p>Current Year: {currentYear}</p>
            <p>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</p>
        </div>
    );
}

export default App;
