import './App.css';
import Restaurant from './img/restaurant_1.png';

function App() {
  return (
    <div className="App">
      <div className="background">
        
        <div className="content-flex">
          <div className="title-container">
            <h1>Discover-U</h1>
            <img src={Restaurant} alt="restaurant" />
          </div>

          <form className="login-container">
            <label for="fname">Email Address</label>
            <input type="text" id="fname" name="fname" />
            <label for="lname">Password</label>
            <input type="text" id="lname" name="lname" /><br />
            <button>Login</button>

            <h1>Don't have account? <span>Register</span></h1>
          </form>
        </div> 
      </div>
    </div>
  );
}

export default App;
