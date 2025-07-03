import React from 'react';

interface Props {
  onRoll?: () => void;
}

export default function Dice({ onRoll }: Props) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      aria-label="Roll dice"
      onClick={onRoll}
    >
      Roll
    </button>
  );
}
