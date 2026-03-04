import { Thermometer, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

/**
 * Header Component
 * Displays the application title with icon and dark mode toggle
 */
export function Header({ isDarkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <header className="w-full px-4 sm:px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Title Section */}
        <div className="flex items-center gap-3">
          <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
            <Thermometer className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Smart Room Temperature
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Real-time Monitoring System
            </p>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={onToggleDarkMode}
          className="p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 shadow-md hover:shadow-lg"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-blue-600" />
          )}
        </button>
      </div>
    </header>
  );
}
