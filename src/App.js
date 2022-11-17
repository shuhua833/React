import './App.css';

function App() {
  return (
    <div>
    <form className="form">
    <h3>User Registration Form</h3>
    <div className="main-div">
        <label for="fname">Your Firstname</label><br></br>
        <input type="text" placeholder="Firstname"/><br></br>

        <label for="Lname">Your Lastname</label><br></br>
        <input type="text" placeholder="Lname"/><br></br>

        <label for="address">Your Address</label><br></br>
        <input type="text" placeholder="Address"/><br></br>

        <label for="location">Your Location</label><br></br>
        <input type="text" placeholder="Address"/><br></br>

        <label for="date">Your Date of birth</label><br></br>
        <input type="date" placeholder="Date of birth"/><br></br>

        <label for="gender">Your Gender</label><br></br>
        <select name="gender">
            <option value="Male">Male</option>
            <option value="female">Female</option>
        </select><br></br>

        <label for="pic">Upload a photo</label>
        <input type="file"/><br></br>
        <div className="btn">
            <button type="submit" className="submit"> Submit</button>
            <button type="submit" className="cancel"> Cancel </button>
        </div>
    </div>
</form>
</div>
  );
}

export default App;