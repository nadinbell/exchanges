import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.css';

type MainProps = {
  exchanges: any[];
}

export const Main: React.FC<MainProps> = ({exchanges}) => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.header}>Exchanges</h2>
      {exchanges.map(exchange => (
        <Link to={`/exchange/${exchange.id}`} exchange={exchange} key={exchange.id}>
          <div className={styles.exchangeItem}>
              {exchange.name}
          </div>
        </Link>
      ))}
    </div>
  )
};