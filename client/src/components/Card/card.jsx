import { Link } from "react-router-dom";

import styles from "./card.module.css";

const Card = (props) => {
  return (
    <Link to={`/detail/${props.id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.det}>
          <h3>
            <p>
              Name: <span> {`${props.forename} ${props.surname}`}</span>
            </p>
          </h3>
          <p>
            DOB: <span>{props.dob}</span>
          </p>
          <p>
            Teams: <span>{props.teams}</span>
          </p>
        </div>
        <div className={styles.imageCont}>
          <img
            src={props.image?.url ? props.image?.url : props.image}
            alt={`driver image ${props.forename} ${props.surname}`}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
