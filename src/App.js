import logo from './logo.svg';
import './style.css';
import ImageInSrc from './imageInSrc.jpg';
import myVideo from './myVideo.mp4';
function App() {
  const css = {
    border:"solid 1px black",
    maxWidth:'100vw'
  }
  return (
    <div style={css}>
    <h1 className="title red">Abdulla</h1>
    <br />
    <img src={ImageInSrc} className="responsiveImg"/>
    <br />
    <img src="/imageInPublic.jpg" className="responsiveImg"/>
    <br />
    <video width="320" height="240" controls>
      <source src={myVideo} type="video/mp4" />
    </video>    
    </div>
  );
}

export default App;
