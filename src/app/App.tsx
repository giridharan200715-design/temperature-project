import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TemperatureCard } from './components/TemperatureCard';
import { TemperatureChart } from './components/TemperatureChart';
import { StatusSection } from './components/StatusSection';
import { Footer } from './components/Footer';

// Interface for temperature history data
interface TemperatureReading {
  time: string;
  temperature: number;
}

// Type for temperature status
type TemperatureStatus = 'cold' | 'normal' | 'hot';

/**
 * Smart Room Temperature Monitoring System
 * 
 * A modern React dashboard for real-time temperature monitoring.
 * Features:
 * - Live temperature display with circular gauge
 * - Automatic updates every 3 seconds
 * - Manual temperature controls
 * - Historical data visualization
 * - Color-coded status indicators
 * - Dark/Light mode toggle
 * - Fully responsive design
 * 
 * @author Final Year Project
 * @version 1.0.0
 */
export default function App() {
  // State management
  const [temperature, setTemperature] = useState<number>(24.5); // Current temperature in Celsius
  const [history, setHistory] = useState<TemperatureReading[]>([]); // Temperature history (last 10 readings)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // Dark mode toggle
  const [isAutoUpdate, setIsAutoUpdate] = useState<boolean>(true); // Auto-update control

  /**
   * Determine temperature status based on current value
   * Cold: < 18°C
   * Normal: 18°C - 30°C
   * Hot: > 30°C
   */
  const getTemperatureStatus = (temp: number): TemperatureStatus => {
    if (temp < 18) return 'cold';
    if (temp > 30) return 'hot';
    return 'normal';
  };

  const status = getTemperatureStatus(temperature);

  /**
   * Generate simulated temperature reading
   * Simulates real sensor data with slight variations
   */
  const generateRandomTemperature = (): number => {
    // Generate temperature between 15°C and 35°C with some randomness
    const baseTemp = temperature;
    const variation = (Math.random() - 0.5) * 2; // -1 to +1 degree variation
    const newTemp = baseTemp + variation;
    
    // Clamp between 15 and 35
    return Math.max(15, Math.min(35, newTemp));
  };

  /**
   * Get current time formatted as HH:MM:SS
   */
  const getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  /**
   * Add new temperature reading to history
   * Maintains only last 10 readings
   */
  const addToHistory = (temp: number) => {
    const newReading: TemperatureReading = {
      time: getCurrentTime(),
      temperature: temp,
    };

    setHistory((prev) => {
      const updated = [...prev, newReading];
      // Keep only last 10 readings
      return updated.slice(-10);
    });
  };

  /**
   * Manual temperature increase
   * Increases temperature by 1°C
   */
  const handleIncrease = () => {
    const newTemp = Math.min(temperature + 1, 50); // Max 50°C
    setTemperature(newTemp);
    addToHistory(newTemp);
  };

  /**
   * Manual temperature decrease
   * Decreases temperature by 1°C
   */
  const handleDecrease = () => {
    const newTemp = Math.max(temperature - 1, 0); // Min 0°C
    setTemperature(newTemp);
    addToHistory(newTemp);
  };

  /**
   * Toggle dark mode
   * Applies/removes 'dark' class to document root
   */
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  /**
   * Initialize component
   * Set up initial temperature history
   */
  useEffect(() => {
    // Generate initial history with 10 readings
    const initialHistory: TemperatureReading[] = [];
    let baseTemp = 22;

    for (let i = 9; i >= 0; i--) {
      const variation = (Math.random() - 0.5) * 4;
      const temp = Math.max(15, Math.min(35, baseTemp + variation));
      
      // Generate past timestamps
      const time = new Date();
      time.setSeconds(time.getSeconds() - (i * 3));
      
      initialHistory.push({
        time: time.toLocaleTimeString('en-US', { 
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
        temperature: temp,
      });
      
      baseTemp = temp;
    }

    setHistory(initialHistory);
    setTemperature(initialHistory[initialHistory.length - 1].temperature);
  }, []);

  /**
   * Auto-update temperature every 3 seconds
   * Simulates real-time sensor data
   */
  useEffect(() => {
    if (!isAutoUpdate) return;

    const interval = setInterval(() => {
      const newTemp = generateRandomTemperature();
      setTemperature(newTemp);
      addToHistory(newTemp);
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [temperature, isAutoUpdate]); // Re-create interval when temperature changes

  /**
   * API Integration Placeholder
   * Uncomment and configure for real backend integration
   */
  /*
  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch('/api/temperature');
        const data = await response.json();
        setTemperature(data.temperature);
        addToHistory(data.temperature);
      } catch (error) {
        console.error('Failed to fetch temperature:', error);
      }
    };

    // Fetch every 3 seconds
    const interval = setInterval(fetchTemperature, 3000);
    return () => clearInterval(interval);
  }, []);
  */

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />

        {/* Main Dashboard */}
        <main className="px-4 sm:px-6 pb-8 space-y-8">
          {/* Temperature Card */}
          <section className="animate-fade-in">
            <TemperatureCard
              temperature={temperature}
              status={status}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
          </section>

          {/* Temperature Chart */}
          {history.length > 0 && (
            <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <TemperatureChart data={history} isDarkMode={isDarkMode} />
            </section>
          )}

          {/* Status Section */}
          <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <StatusSection
              temperature={temperature}
              status={status}
              isAutoUpdate={isAutoUpdate}
            />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
