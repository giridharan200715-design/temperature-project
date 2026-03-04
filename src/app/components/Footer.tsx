import { Github, Code, Heart } from 'lucide-react';

/**
 * Footer Component
 * Displays project information and credits
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 sm:px-6 py-8 mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 sm:p-8">
          <div className="text-center space-y-4">
            {/* Project Title */}
            <div className="flex items-center justify-center gap-2">
              <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-bold text-gray-800 dark:text-gray-100">
                Smart Room Temperature Monitoring System
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              A modern, real-time temperature monitoring dashboard built with React and TypeScript. 
              Features live updates, interactive charts, and adaptive theming for optimal user experience.
              Perfect for IoT integration with sensors like DHT11 and NodeMCU.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                React
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold">
                TypeScript
              </span>
              <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold">
                Recharts
              </span>
              <span className="px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs font-semibold">
                Tailwind CSS
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>

            {/* API Integration Note */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <Github className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-100 mb-1">
                    API Integration Ready
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    This system includes a placeholder for backend integration. 
                    Connect to <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-purple-600 dark:text-purple-400 font-mono text-xs">
                      /api/temperature
                    </code> endpoint to fetch real-time data from IoT sensors.
                  </p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground pt-2">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              <span>for Final Year Project</span>
              <span>•</span>
              <span>© {currentYear}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
