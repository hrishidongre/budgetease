
export default function StatsCard({ title, value, icon: Icon, color, trend }) {
  return (
    <div
      className="relative rounded-lg bg-white p-4 max-w-xs w-full shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Icon - Top Right */}
      <div className={`absolute top-3 right-3 ${color}`}>
        <Icon className="w-5 h-5" />
      </div>

      {/* Content */}
      <div className="flex flex-col space-y-1 pl-10">
        <h4 className="text-sm font-medium text-gray-800">{title}</h4>
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <span className="text-xs text-gray-600">{trend}</span>
      </div>
    </div>
  );
}
