import styles from "../styles/Home.module.css";

const Button = (props) => {
  return (
     <div className={styles.button}> 
       <a href={props.link}>{props.buttonText}</a>
     </div>

  )
};

export default Button;


