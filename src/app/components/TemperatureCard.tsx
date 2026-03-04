import { Plus, Minus, Activity } from 'lucide-react';

interface TemperatureCardProps {
  temperature: number;
  status: 'cold' | 'normal' | 'hot';
  onIncrease: () => void;
  onDecrease: () => void;
}

/**
 * Temperature Card Component
 * Main display showing current temperature with circular gauge and controls
 */
export function TemperatureCard({
  temperature,
  status,
  onIncrease,
  onDecrease,
}: TemperatureCardProps) {
  // Get theme colors based on temperature status
  const getStatusColors = () => {
    switch (status) {
      case 'cold':
        return {
          gradient: 'from-blue-400 to-cyan-400',
          glow: 'shadow-blue-500/50',
          text: 'text-blue-600 dark:text-blue-400',
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/30',
          label: 'Cold',
          icon: '❄️',
        };
      case 'hot':
        return {
          gradient: 'from-red-400 to-orange-400',
          glow: 'shadow-red-500/50',
          text: 'text-red-600 dark:text-red-400',
          bg: 'bg-red-500/10',
          border: 'border-red-500/30',
          label: 'Hot',
          icon: '🔥',
        };
      default:
        return {
          gradient: 'from-green-400 to-emerald-400',
          glow: 'shadow-green-500/50',
          text: 'text-green-600 dark:text-green-400',
          bg: 'bg-green-500/10',
          border: 'border-green-500/30',
          label: 'Normal',
          icon: '✓',
        };
    }
  };

  const colors = getStatusColors();
  
  // Calculate circular progress (0-50°C range)
  const percentage = Math.min(Math.max((temperature / 50) * 100, 0), 100);
  const circumference = 2 * Math.PI * 120;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main Card */}
      <div className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-2xl transition-all duration-500">
        {/* Animated Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-5 transition-all duration-500`}
        />

        <div className="relative p-8 sm:p-12">
          {/* Status Badge */}
          <div className="flex justify-center mb-6">
            <div
              className={`px-6 py-2 rounded-full ${colors.bg} ${colors.border} border backdrop-blur-sm flex items-center gap-2`}
            >
              <Activity className={`w-4 h-4 ${colors.text}`} />
              <span className={`font-semibold ${colors.text}`}>
                Status: {colors.label} {colors.icon}
              </span>
            </div>
          </div>

          {/* Circular Gauge */}
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Background Circle */}
              <svg className="w-full h-full -rotate-90 transform">
                <circle
                  cx="50%"
                  cy="50%"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  className="text-gray-200 dark:text-gray-700"
                />
                {/* Progress Circle */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  className={`${colors.text} transition-all duration-500 ease-out drop-shadow-lg`}
                />
              </svg>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className={`text-6xl sm:text-7xl font-bold bg-gradient-to-br ${colors.gradient} bg-clip-text text-transparent mb-2 transition-all duration-500`}
                >
                  {temperature.toFixed(1)}
                </div>
                <div className={`text-2xl sm:text-3xl font-semibold ${colors.text}`}>
                  °C
                </div>
                <div className="mt-3 text-sm text-muted-foreground">
                  Room Temperature
                </div>
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={onDecrease}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Minus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Decrease
              </span>
            </button>

            <button
              onClick={onIncrease}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:border-red-400 dark:hover:border-red-500 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Plus className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Increase
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
