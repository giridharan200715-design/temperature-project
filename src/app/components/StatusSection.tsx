import { Wifi, Database, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

interface StatusSectionProps {
  temperature: number;
  status: 'cold' | 'normal' | 'hot';
  isAutoUpdate: boolean;
}

/**
 * Status Section Component
 * Displays system status, alerts, and additional information
 */
export function StatusSection({ temperature, status, isAutoUpdate }: StatusSectionProps) {
  // Check if temperature is out of safe range
  const isOutOfRange = temperature < 18 || temperature > 30;
  const alertMessage = 
    temperature < 18
      ? '⚠️ Temperature is too low! Consider turning on heating.'
      : temperature > 30
      ? '⚠️ Temperature is too high! Consider turning on cooling.'
      : null;

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {/* Alert Card */}
      <div
        className={`rounded-2xl backdrop-blur-xl border shadow-lg p-6 transition-all duration-500 ${
          isOutOfRange
            ? 'bg-red-50/80 dark:bg-red-900/20 border-red-300 dark:border-red-700'
            : 'bg-green-50/80 dark:bg-green-900/20 border-green-300 dark:border-green-700'
        }`}
      >
        <div className="flex items-start gap-3">
          {isOutOfRange ? (
            <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
          ) : (
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
          )}
          <div>
            <h3
              className={`font-bold mb-1 ${
                isOutOfRange
                  ? 'text-red-700 dark:text-red-300'
                  : 'text-green-700 dark:text-green-300'
              }`}
            >
              {isOutOfRange ? 'Alert' : 'All Systems Normal'}
            </h3>
            <p
              className={`text-sm ${
                isOutOfRange
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-green-600 dark:text-green-400'
              }`}
            >
              {alertMessage || '✓ Temperature within safe range (18°C - 30°C)'}
            </p>
          </div>
        </div>
      </div>

      {/* System Info Card */}
      <div className="rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
        <div className="flex items-start gap-3">
          <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-3">
              System Status
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Connection
                  </span>
                </div>
                <span className="font-semibold text-green-600 dark:text-green-400">
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Data Logging
                  </span>
                </div>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Auto Update
                  </span>
                </div>
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  {isAutoUpdate ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Temperature Range Info */}
      <div className="rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 md:col-span-2">
        <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4">
          Temperature Ranges
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Cold */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
            <div className="text-2xl">❄️</div>
            <div>
              <div className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                Cold
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400">
                Below 18°C
              </div>
            </div>
          </div>

          {/* Normal */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <div className="text-2xl">✓</div>
            <div>
              <div className="text-sm font-semibold text-green-700 dark:text-green-300">
                Normal
              </div>
              <div className="text-xs text-green-600 dark:text-green-400">
                18°C - 30°C
              </div>
            </div>
          </div>

          {/* Hot */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <div className="text-2xl">🔥</div>
            <div>
              <div className="text-sm font-semibold text-red-700 dark:text-red-300">
                Hot
              </div>
              <div className="text-xs text-red-600 dark:text-red-400">
                Above 30°C
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
