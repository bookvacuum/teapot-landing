import styles from "../styles/Home.module.css";
import Link from 'next/link';

const Button = (props) => {
  return (
     <div className={styles.button}> 
       <Link href={props.link}>{props.buttonText}</Link>
     </div>

  )
};

export default Button;


