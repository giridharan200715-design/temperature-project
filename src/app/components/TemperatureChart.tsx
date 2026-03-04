import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp } from 'lucide-react';

interface TemperatureReading {
  time: string;
  temperature: number;
}

interface TemperatureChartProps {
  data: TemperatureReading[];
  isDarkMode: boolean;
}

/**
 * Temperature Chart Component
 * Displays line chart with last 10 temperature readings
 */
export function TemperatureChart({ data, isDarkMode }: TemperatureChartProps) {
  // Custom tooltip for the chart
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-xl">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            {payload[0].payload.time}
          </p>
          <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            {payload[0].value.toFixed(1)}°C
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-2xl p-6 sm:p-8">
        {/* Chart Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Temperature History
            </h2>
            <p className="text-sm text-muted-foreground">
              Last {data.length} readings
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="w-full h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDarkMode ? '#374151' : '#e5e7eb'}
                opacity={0.5}
              />
              <XAxis
                dataKey="time"
                stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                style={{ fontSize: '12px' }}
                tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280' }}
              />
              <YAxis
                stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                style={{ fontSize: '12px' }}
                tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280' }}
                domain={[0, 50]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="temperature"
                stroke="#8b5cf6"
                strokeWidth={3}
                fill="url(#colorTemp)"
                animationDuration={1000}
              />
              <Line
                type="monotone"
                dataKey="temperature"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{
                  fill: '#8b5cf6',
                  strokeWidth: 2,
                  r: 4,
                  stroke: '#fff',
                }}
                activeDot={{
                  r: 6,
                  stroke: '#8b5cf6',
                  strokeWidth: 2,
                }}
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
