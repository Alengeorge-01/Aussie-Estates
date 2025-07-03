import React from 'react';

interface Props {
  squareData?: any;
  owner?: string;
  onClick?: () => void;
}

export default function Square({ squareData, owner, onClick }: Props) {
  return (
    <div
      className="border h-12 w-12 flex flex-col items-center justify-center text-xs"
      onClick={onClick}
    >
      <span>{squareData?.name}</span>
      <span>{squareData?.price}</span>
    </div>
  );
}
