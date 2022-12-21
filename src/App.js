import logo from './logo.svg';
import './App.css';
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

function App() {
  const modelPath =
  "https://raw.githubusercontent.com/dwqdaiwenqi/react-3d-viewer/master/site/src/lib/model/DamagedHelmet.gltf";
return (
  <div style={{}}>
    Rifat 
    <GLTFModel src={modelPath} >
      <AmbientLight color={0xffffff} />
      <DirectionLight
        color={0xffffff}
        position={{ x: 100, y: 200, z: 100 }}
      />
      <DirectionLight
        color={0xff00ff}
        position={{ x: -100, y: 200, z: -100 }}
      />
    </GLTFModel>
  
  </div>
  );
}

export default App;
