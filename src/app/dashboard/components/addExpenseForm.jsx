// components/ExpenseDialogBody.jsx
import Input from "../uiElements/input";
import Label from "../uiElements/label";
import Select from "../uiElements/Select";

const categoryOptions = [
  { name: "Food & Dining", icon: "🍽️" },
  { name: "Transportation", icon: "🚗" },
  { name: "Shopping", icon: "🛒" },
  { name: "Entertainment", icon: "🎬" },
  { name: "Bills & Utilities", icon: "💡" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Education", icon: "📚" },
  { name: "Travel", icon: "✈️" },
  { name: "Savings", icon: "💰" },
  { name: "Other", icon: "📋" },
];

export default function ExpenseDialogBody({ category, setCategory }) {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="category">Category</Label>
        <Select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={categoryOptions}
        />
      </div>

      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input type="number" id="amount" placeholder="0.00" />
      </div>

      <div>
        <Label htmlFor="description">Description (Optional)</Label>
        <textarea
          id="description"
          placeholder="What was this expense for?"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <button
          type="button"
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}
