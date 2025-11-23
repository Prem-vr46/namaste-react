import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      <h2>{loggedInUser}</h2>
      <h2>This is from about page</h2>
    </div>
  );
};

export default About;
