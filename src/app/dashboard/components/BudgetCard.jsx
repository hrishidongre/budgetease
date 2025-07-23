import React from 'react';

export default function BudgetCard({ category, budget, spent, icon }) {
  const remaining = budget - spent;
  const isOver = remaining < 0;

  return (
    <div className="relative bg-white rounded-lg p-6 shadow-md group transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
      {/* Header */}
      <div className="flex items-center justify-between h-[60px]">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-lg font-semibold">{category}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex justify-between text-sm">
          <span>Spent</span>
          <span>₹{spent.toFixed(2)}</span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${isOver ? 'bg-red-500' : 'bg-gray-800'}`}
            style={{ width: `${Math.min((spent / budget) * 100, 100)}%` }}
          />
        </div>

        <div className="flex justify-between text-sm">
          <span>Budget: ₹{budget.toFixed(2)}</span>
          <span className={isOver ? 'text-red-600 font-semibold' : 'text-green-600 font-semibold'}>
            {isOver
              ? `Over: ₹${Math.abs(remaining).toFixed(2)}`
              : `Remaining: ₹${remaining.toFixed(2)}`}
          </span>
        </div>
      </div>
    </div>
  );
}
