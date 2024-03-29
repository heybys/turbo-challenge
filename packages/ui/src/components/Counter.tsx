import React from 'react';
import styles from './counter.module.css';

interface CounterProps {
  initValue: number;
}

export function Counter({ initValue }: CounterProps) {
  return (
    <div className={styles.counter}>
      <span>{initValue}</span>
    </div>
  );
}
