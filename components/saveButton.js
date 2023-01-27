import styles from "../styles/poci.module.css";
import {useState} from "react";

const SaveButton = (props) => {
const [isSaved, setSaved] = useState(false)
  return (
     <div> 
        {isSaved ? <p>POCI Signed! You are all set. LFG! </p> : <p>Click to Sign POCI</p>}
       <button className={styles.button} onClick={() => setSaved(!isSaved)}> {isSaved ? "POCI Signed" : "Sign POCI"} </button>
     </div>

  )
};

export default SaveButton;


