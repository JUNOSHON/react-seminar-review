import "./App.css";
import {Fragment} from "react";
import Profile from "./components/Profile";
import juno from "./juno.png";
import sena from "./sena.png"


function AppProfile() {
  
  return (
    <Fragment>
      <Profile image={juno} name={"JUNO"} title="Frone-end developer"/>
      <Profile image={sena}  name={"Sena"} title="developer"/>
      <Profile/>
    
    </Fragment>
  );
}

export default AppProfile;
