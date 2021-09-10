import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons';
import styles from './star-rating.module.css';

export default function StarRating (props) {
  const stars = [];
  const getIcon = (rating, index) => {
    if (index < rating) {
      if (rating - index > 0 && rating - index < 1) return faStarHalfAlt;
      else return faStar;
    } 
    return faStarO;
  }
  for (let i = 0; i < 5; i++) {
    stars.push(<FontAwesomeIcon key={i} className={styles.star} icon={getIcon(props.rating, i)} />)
  }
  return <div>{stars}</div>;
}