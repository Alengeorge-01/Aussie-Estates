import React from 'react';

interface Props {
  squareData?: any;
  owner?: string;
  onClick?: () => void;
}

export default function Square({ squareData, owner, onClick }: Props) {
  return (
    <button
      type="button"
      className="border h-12 w-12 flex flex-col items-center justify-center text-xs"
      onClick={onClick}
      aria-label={squareData?.name ? `Select ${squareData.name}` : 'Select square'}
    >
      <span>{squareData?.name}</span>
      <span>{squareData?.price}</span>
    </button>
  );
}
