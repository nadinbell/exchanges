import React from 'react';
import _ from 'lodash';

type ExchangeProps = {
  exchanges: any
}

export const Exchange: React.FC<ExchangeProps> = ({exchanges, ...props}) => {
  const exchangeId = props?.match?.params?.id;
  const exchange = _.find(exchanges, item => item.id === exchangeId);
  return (
    <div>
      <h2>{exchange?.name}</h2>
      <div><span>Reported Rank: </span>{exchange?.reported_rank}</div>
      <div><span>Markets: </span>{exchange?.markets}</div>
    </div>
  )
}