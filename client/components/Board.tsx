import React from 'react';
import Square from './Square';

export default function Board() {
  // placeholder 11x11 grid
  const squares = Array.from({ length: 40 }, (_, i) => (
    <Square key={i} />
  ));

  return <div className="grid grid-cols-11 gap-1">{squares}</div>;
}
