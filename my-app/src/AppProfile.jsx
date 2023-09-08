import "./App.css";
import {Fragment} from "react";
import Profile from "./components/Profile";
import juno from "./juno.png";
import sena from "./sena.png"
import Avatar from "./components/Avatar";


function AppProfile() {
  
  return (
    <Fragment>
      <Avatar image={juno} isNew={true}/>
      <Profile image={juno} name={"JUNO"} title="Frone-end developer"isNew={true} />
      <Profile image={sena}  name={"Sena"} title="developer" isNew={true}/>
    </Fragment>
  );
}

export default AppProfile;
