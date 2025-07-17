// "use client"
// import { supabase } from '../supabase'
// import {useRouter} from "next/navigation"
// import { Wallet, TrendingUp, TrendingDown} from 'lucide-react';
// import DHeader from './components/dHeader';
// import StatsCard from './uiElements/StateCard';
// import AddBudgetDialog from './components/addBudgetDialog';
// import AddExpenseDialog from './components/addExpenseDlalog';


// import { useState } from 'react';


// export default function dashboard() {


//   const totalBudget = 5000;
//   const totalSpent = 3250;
//   const totalRemaining = totalBudget - totalSpent;


//   const router = useRouter();

//   const handleSignOut = async ()=>{
//     await supabase.auth.signOut();
//     router.push("/");

//   }
//   return (
//     <div className='bg-[#F3F4F6] min-h-screen'> 
//       <DHeader/>

//       <AddBudgetDialog/>
//       <AddExpenseDialog/>



     


//       <div className="w-full flex justify-center mt-5 mx-10">
//   <div className="w-full max-w-6xl">
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  mb-8">
//       <StatsCard
//         title="Total Budget"
//         value={new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalBudget)}
//         icon={Wallet}
//         color="text-blue-600"
//         trend="Monthly allocation"
//       />
//       <StatsCard
//         title="Total Spent"
//         value={new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalSpent.toFixed(2))}

//         icon={TrendingUp}
//         color="text-red-600"
//         trend={`${((totalSpent / totalBudget) * 100).toFixed(1)}% of budget`}
//       />
//       <StatsCard
//         title="Remaining"
//         value={new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalRemaining.toFixed(2))}

//         icon={totalRemaining >= 0 ? TrendingDown : TrendingUp}
//         color={totalRemaining >= 0 ? "text-green-600" : "text-red-600"}
//         trend={totalRemaining >= 0 ? "Under budget" : "Over budget"}
//       />
//     </div>
//   </div>
// </div>


      
      

      


//       <h1>this is  dashboard</h1>

//       <button className='m-5 p-2 border rounded' onClick={handleSignOut}>Sign Out</button>

//     </div>
//   )
// }
// "use client"

// import { supabase } from '../supabase'
// import { useRouter } from "next/navigation"
// import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';
// import DHeader from './components/dHeader';
// import StatsCard from './uiElements/StateCard';
// import AddBudgetDialog from './components/addBudgetDialog';
// import AddExpenseDialog from './components/addExpenseDlalog';

// import { useState } from 'react';

// export default function Dashboard() {
//   const totalBudget = 5000;
//   const totalSpent = 3250;
//   const totalRemaining = totalBudget - totalSpent;

//   const router = useRouter();

//   const handleSignOut = async () => {
//     await supabase.auth.signOut();
//     router.push("/");
//   };

//   return (
//     <div className='bg-[#F3F4F6] min-h-screen'>
//       <DHeader />

//       {/* Top Header Section */}
//       <div className="max-w-6xl mx-auto px-4 pt-8">
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">Budget Dashboard</h1>
//             <p className="text-gray-500 mt-1">Track your spending and stay on budget</p>
//           </div>
//           <div className="flex gap-3">
//             <AddBudgetDialog />
//             <AddExpenseDialog />
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <StatsCard
//             title="Total Budget"
//             value={new Intl.NumberFormat('en-IN', {
//               style: 'currency',
//               currency: 'INR'
//             }).format(totalBudget)}
//             icon={Wallet}
//             color="text-blue-600"
//             trend="Monthly allocation"
//           />
//           <StatsCard
//             title="Total Spent"
//             value={new Intl.NumberFormat('en-IN', {
//               style: 'currency',
//               currency: 'INR'
//             }).format(totalSpent.toFixed(2))}
//             icon={TrendingUp}
//             color="text-red-600"
//             trend={`${((totalSpent / totalBudget) * 100).toFixed(1)}% of budget`}
//           />
//           <StatsCard
//             title="Remaining"
//             value={new Intl.NumberFormat('en-IN', {
//               style: 'currency',
//               currency: 'INR'
//             }).format(totalRemaining.toFixed(2))}
//             icon={totalRemaining >= 0 ? TrendingDown : TrendingUp}
//             color={totalRemaining >= 0 ? "text-green-600" : "text-red-600"}
//             trend={totalRemaining >= 0 ? "Under budget" : "Over budget"}
//           />
      
//         </div>
//       </div>

//       {/* Sign Out (For Dev) */}
//       <div className="p-5">
//         <button className='px-4 py-2 border rounded' onClick={handleSignOut}>Sign Out</button>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { Wallet, TrendingUp, TrendingDown } from "lucide-react";
// import DHeader from "./components/dHeader";
// import StatsCard from "./uiElements/StateCard";
// import AddBudgetDialog from "./components/addBudgetDialog";
// import AddExpenseDialog from "./components/addExpenseDlalog";
// import BudgetCard from "./components/BudgetCard";
// import Charts from "./components/charts";
// import RecentTransaction from "./components/recentTransaction";




// export default function Dashboard() {
//   const totalBudget = 5000;
//   const totalSpent = 3250;
//   const totalRemaining = totalBudget - totalSpent;

//   const demoData = [
//   { name: "Food & Dining", spent: 5000, total: 12000 },
//   { name: "Transportation", spent: 3500, total: 6000 },
//   { name: "Entertainment", spent: 1800, total: 22000 },
//   ]

//   const sampleTransactions = [
//   {
//     title: 'Lunch at cafe',
//     category: 'Food & Dining',
//     amount: 45.5,
//     date: '2025-01-10',
//   },
//   {
//     title: 'Gas station',
//     category: 'Transportation',
//     amount: 25.0,
//     date: '2025-01-09',
//   },
//   {
//     title: 'Netflix subscription',
//     category: 'Entertainment',
//     amount: 15.99,
//     date: '2025-01-08',
//   },
//   {
//     title: 'Snacks',
//     category: 'Food & Dining',
//     amount: 10.0,
//     date: '2025-01-07',
//   },
// ];

  

 

//   return (
//     <div className="min-h-screen bg-blue-50 ">
//       <DHeader />

//       {/* Header Title + Buttons */}
//       <div className="max-w-6xl mx-auto px-4 pt-8">
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          
//           <div>
//              <h1 className="text-4xl font-bold text-gray-900  leading-tight">
//             Your 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Finances, Organized.</span>
//           </h1>

//           </div>
//           <div className="flex gap-3">
//             <AddBudgetDialog />
//             <AddExpenseDialog />
//           </div>
//         </div>

//         {/* Stats Cards Row */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <StatsCard
//             title="Total Budget"
//             value={new Intl.NumberFormat("en-IN", {
//               style: "currency",
//               currency: "INR",
//             }).format(totalBudget)}
//             icon={Wallet}
//             color="text-blue-600"
//             trend="Monthly allocation"
//           />
//           <StatsCard
//             title="Total Spent"
//             value={new Intl.NumberFormat("en-IN", {
//               style: "currency",
//               currency: "INR",
//             }).format(totalSpent.toFixed(2))}
//             icon={TrendingUp}
//             color="text-red-600"
//             trend={`${((totalSpent / totalBudget) * 100).toFixed(1)}% of budget`}
//           />
//           <StatsCard
//             title="Remaining"
//             value={new Intl.NumberFormat("en-IN", {
//               style: "currency",
//               currency: "INR",
//             }).format(totalRemaining.toFixed(2))}
//             icon={totalRemaining >= 0 ? TrendingDown : TrendingUp}
//             color={totalRemaining >= 0 ? "text-green-600" : "text-red-600"}
//             trend={totalRemaining >= 0 ? "Under budget" : "Over budget"}
//           />
//         </div>
//       </div>

      
//       <div className="flex px-6 py-4 gap-6 ml-5">
//         {/* Left column: Budget Cards */}
//         <div className="flex flex-col gap-5 w-1/3">
//           <BudgetCard category="Entertainment" budget={550} spent={200} icon="🎬" />
//           <BudgetCard category="Food & Dining" budget={500} spent={320} icon="🍽️" />
//           <BudgetCard category="Transportation" budget={200} spent={150} icon="🚗" />
//         </div>

//         {/* Right column: Charts */}
//         <div className="w-2/3"> <Charts data={demoData} /> </div>
//       </div>

//       <RecentTransaction transactions={sampleTransactions} />
     


//   </div>

//   );
// }

'use client'; // if using Next.js app directory (optional based on context)

import DHeader from './components/dHeader';
import AddBudgetDialog from "./components/addBudgetDialog";
import AddExpenseDialog from './components/addExpenseDlalog';
import StatsCard from './uiElements/StateCard';
import BudgetCard from './components/BudgetCard';
import Charts from './components/charts';
import RecentTransaction from './components/recentTransaction';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

export default function Page() {
  const totalBudget = 5000;
  const totalSpent = 3250;
  const totalRemaining = totalBudget - totalSpent;

  const sampleTransactions = [
    { title: "Lunch at cafe", category: "Food & Dining", amount: 45.5, date: "2025-01-10" },
    { title: "Gas station", category: "Transportation", amount: 25.0, date: "2025-01-09" },
    { title: "Netflix subscription", category: "Entertainment", amount: 15.99, date: "2025-01-08" },
  ];

  const demoData = [
    { name: 'Entertainment', spent: 200, total: 550 },
    { name: 'Food & Dining', spent: 320, total: 500 },
    { name: 'Transportation', spent: 150, total: 200 },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <DHeader />

      {/* Header Title + Buttons */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
          {/* Left: Title and Buttons */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Finances, Organized.</span>
            </h1>
            <div className="flex gap-3">
              <AddBudgetDialog />
              <AddExpenseDialog />
            </div>
          </div>

          {/* Right: Recent Transactions */}
          <div className="w-full md:w-[300px]">
            <RecentTransaction transactions={sampleTransactions} />
          </div>
        </div>

        {/* Stats Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatsCard
            title="Total Budget"
            value={new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(totalBudget)}
            icon={Wallet}
            color="text-blue-600"
            trend="Monthly allocation"
          />
          <StatsCard
            title="Total Spent"
            value={new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(totalSpent.toFixed(2))}
            icon={TrendingUp}
            color="text-red-600"
            trend={`${((totalSpent / totalBudget) * 100).toFixed(1)}% of budget`}
          />
          <StatsCard
            title="Remaining"
            value={new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(totalRemaining.toFixed(2))}
            icon={totalRemaining >= 0 ? TrendingDown : TrendingUp}
            color={totalRemaining >= 0 ? "text-green-600" : "text-red-600"}
            trend={totalRemaining >= 0 ? "Under budget" : "Over budget"}
          />
        </div>
      </div>

      {/* Budgets & Chart */}
      <div className="flex px-6 py-4 gap-6 ml-5">
        <div className="flex flex-col gap-5 w-1/3">
          <BudgetCard category="Entertainment" budget={550} spent={200} icon="🎬" />
          <BudgetCard category="Food & Dining" budget={500} spent={320} icon="🍽️" />
          <BudgetCard category="Transportation" budget={200} spent={150} icon="🚗" />
        </div>
        <div className="w-2/3">
          <Charts data={demoData} />
        </div>
      </div>
    </div>
  );
}
