import { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

export default function Charts({ data }) {
  const [activeTab, setActiveTab] = useState('pie');

  return (
    <div className="max-w-4xl mx-auto bg-[#f9fbfe] p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-[#111]">Spending Overview</h2>

      <div className="flex rounded-md overflow-hidden bg-gray-100 mb-6 w-fit">
        <button
          className={`px-6 py-2 text-sm font-medium transition-colors duration-200 ${
            activeTab === 'pie' ? 'bg-white text-black' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('pie')}
        >
          Pie Chart
        </button>
        <button
          className={`px-6 py-2 text-sm font-medium transition-colors duration-200 ${
            activeTab === 'bar' ? 'bg-white text-black' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('bar')}
        >
          Bar Chart
        </button>
      </div>

      <div className="w-full h-[350px]">
        <ResponsiveContainer>
          {activeTab === 'pie' ? (
            <PieChart>
              <Pie
                data={data.map((entry) => ({ name: entry.name, value: entry.spent }))}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelStyle={{ fill: '#111', fontSize: 14 }}
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={['#0088FE', '#00C49F', '#FFA500'][index % 3]}
                  />
                ))}
              </Pie>
            </PieChart>
          ) : (
            <BarChart data={data} barCategoryGap={40}>
  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#111' }} />
  <YAxis tick={{ fontSize: 12, fill: '#111' }} />
  <Tooltip />
  <Bar dataKey="total" fill="#3B82F6" barSize={40} radius={[4, 4, 0, 0]}>
    <LabelList dataKey="total" position="top" fill="#111" fontSize={12} />
  </Bar>
  <Bar dataKey="spent" fill="#f84b4bff" barSize={40} radius={[4, 4, 0, 0]}>
    <LabelList dataKey="spent" position="top" fill="#111" fontSize={12} />
  </Bar>
</BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
