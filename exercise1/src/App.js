import logo from './logo.svg';
import './App.css';

function App() {
    var currentYear = new Date().getFullYear()
    var isLoggedIn = false
    return (
        <div>
            <h1>ENSF-381: Full Stack Web Development</h1>
            <p>React Components</p>
            <p>{currentYear}</p>
            <p>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</p>
        </div>
    );
}

export default App;
