import React from 'react';

interface LoadingProps {
  time: number;
}

const Loading = ({ time }: LoadingProps) => {
  return <div>loading...{time}</div>;
};

export default Loading;
