import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div >
    
   <section className="container">
   <div className="navbar">
      
      <h1>GD.</h1>

      <ul className="list">
        <li className="listItem"><a href="#">About</a></li>
        <li className="listItem"><a href="#">Services</a></li>
        <li className="listItem"><a href="#">Our Work</a></li>
        <li className="listItem"><button  className="button btn">Enrol Now</button></li>
      </ul>
    </div>

    <div className="hero-section">
      
      <div className="left">

        <h1> Learn the art of Game Dev</h1>
        <p> This is a comprehensive course on Game Development. You will learn everything from generating an idea to publishing your games to different platforms.</p>
        <button className="button btn" > <i class='fas fa-edit'/>Enrol Now</button>
      </div>

      <div className="right">
        
      <img  className="image" src="src/images/img1.svg" alt="resim"/>

      </div>


    </div>


   </section>
    </div>
  );
}

export default App;
