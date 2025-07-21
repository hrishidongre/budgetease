"use client"
import { X, Plus } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import ExpenseDialogBody from "./addExpenseForm";


// Add this prop: trigger
export default function AddExpenseDialog({ trigger }) {
  return (
    <DialogPrimitive.Root>
      {/* Use the passed trigger if available */}
      <DialogPrimitive.Trigger asChild>
        {trigger ? trigger : (
          <button className="flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition m-5">
            <Plus className="w-4 h-4 mr-2" />
            Add Expense
          </button>
        )}
      </DialogPrimitive.Trigger>

      {/* The rest stays the same... */}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg focus:outline-none">
          <DialogPrimitive.Close asChild>
            <button className="absolute right-4 top-4 text-gray-500 hover:text-black">
              <X className="h-5 w-5" />
            </button>
          </DialogPrimitive.Close>

          <DialogPrimitive.Title className="text-lg font-semibold mb-4">
            Add Expense
          </DialogPrimitive.Title>

          <ExpenseDialogBody />
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

// export default function AddExpenseDialog() {
//   return (
//     <DialogPrimitive.Root>
//       <DialogPrimitive.Trigger asChild>
//         <button className="flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition m-5">
//           <Plus className="w-4 h-4 mr-2" />
//           Add Expense
//         </button>
//       </DialogPrimitive.Trigger>

//       <DialogPrimitive.Portal>
//         <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 z-40" />
//         <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg focus:outline-none">
//           <DialogPrimitive.Close asChild>
//             <button className="absolute right-4 top-4 text-gray-500 hover:text-black">
//               <X className="h-5 w-5" />
//             </button>
//           </DialogPrimitive.Close>

//           <DialogPrimitive.Title className="text-lg font-semibold mb-4">
//             Add Expense
//           </DialogPrimitive.Title>

//           {/* ✅ Reusable Form */}
//           <ExpenseDialogBody />
//         </DialogPrimitive.Content>
//       </DialogPrimitive.Portal>
//     </DialogPrimitive.Root>
//   );
// }
