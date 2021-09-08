import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from '../Loader/Loader.module.css';

function Spinner() {
  return (
    <div className={styles.loaderContainer}>
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Spinner;
