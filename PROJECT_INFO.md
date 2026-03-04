# Smart Room Temperature Monitoring System

## 🎓 Final Year Project - React Dashboard Application

A modern, professional dashboard for monitoring room temperature in real-time with beautiful UI and smooth animations.

---

## ✨ Features Implemented

### Core Features
- ✅ **Live Temperature Display** - Real-time temperature in Celsius (°C)
- ✅ **Temperature Status Indicator**
  - Below 18°C → Cold (Blue theme) ❄️
  - 18°C – 30°C → Normal (Green theme) ✓
  - Above 30°C → Hot (Red theme) 🔥
- ✅ **Animated Temperature Card** - Dynamic color changes based on temperature
- ✅ **Auto-Update System** - Simulated temperature updates every 3 seconds
- ✅ **Manual Controls** - Increase/Decrease buttons for demo purposes
- ✅ **Circular Gauge Visualization** - Modern circular progress indicator
- ✅ **Line Chart** - Shows last 10 temperature readings using Recharts
- ✅ **Alert System** - Warning messages when temperature exceeds safe range
- ✅ **Dark/Light Mode Toggle** - Complete theme switching capability

### UI/UX Features
- ✅ **Modern Glassmorphism Design** - Frosted glass effect with backdrop blur
- ✅ **Gradient Backgrounds** - Beautiful color gradients throughout
- ✅ **Smooth Animations** - Fade-in effects and smooth transitions
- ✅ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ✅ **Professional Dashboard Layout** - Clean and organized interface
- ✅ **Inter Font** - Modern, clean typography

---

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                      # Main application component
│   └── components/
│       ├── Header.tsx               # Header with title and dark mode toggle
│       ├── TemperatureCard.tsx      # Main temperature display with gauge
│       ├── TemperatureChart.tsx     # Historical data chart
│       ├── StatusSection.tsx        # System status and alerts
│       └── Footer.tsx               # Project info and credits
└── styles/
    ├── fonts.css                    # Inter font import
    ├── theme.css                    # Theme variables and animations
    ├── tailwind.css                 # Tailwind configuration
    └── index.css                    # Global styles
```

---

## 🛠️ Tech Stack

- **React 18.3.1** - UI library with functional components
- **TypeScript** - Type-safe code
- **Tailwind CSS v4** - Utility-first styling
- **Recharts 2.15.2** - Chart visualization library
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool

---

## 🎯 Component Breakdown

### 1. App.tsx (Main Component)
- **State Management**: useState for temperature, history, dark mode
- **Side Effects**: useEffect for auto-updates and initialization
- **Features**:
  - Temperature tracking
  - History management (last 10 readings)
  - Auto-update every 3 seconds
  - Manual temperature controls
  - Dark mode persistence

### 2. Header.tsx
- Project title with gradient text
- Thermometer icon
- Dark/Light mode toggle button
- Responsive design

### 3. TemperatureCard.tsx
- **Circular Gauge**: SVG-based progress indicator
- **Dynamic Theming**: Changes colors based on temperature status
- **Status Badge**: Visual indicator (Cold/Normal/Hot)
- **Control Buttons**: Increase/Decrease temperature
- **Responsive**: Scales perfectly on all devices

### 4. TemperatureChart.tsx
- **Area + Line Chart**: Combined visualization
- **Last 10 Readings**: Maintains history
- **Custom Tooltip**: Shows time and temperature on hover
- **Gradient Fill**: Beautiful purple gradient
- **Dark Mode Support**: Adapts to theme

### 5. StatusSection.tsx
- **Alert Card**: Warns when temperature is out of range
- **System Info**: Shows connection status, data logging, auto-update
- **Temperature Ranges**: Visual guide for Cold/Normal/Hot
- **Color-coded Cards**: Different colors for different states

### 6. Footer.tsx
- Project description
- Tech stack badges
- API integration notes
- Copyright information
- Made with ❤️ message

---

## 🚀 How It Works

### Temperature Status Logic
```typescript
if (temp < 18°C)  → Status: Cold  (Blue theme)
if (18°C ≤ temp ≤ 30°C) → Status: Normal (Green theme)
if (temp > 30°C)  → Status: Hot   (Red theme)
```

### Auto-Update System
- Updates every **3 seconds** automatically
- Generates random variation of ±1°C
- Maintains temperature between 15°C and 35°C
- Adds reading to history (keeps last 10)

### Manual Controls
- **Increase Button**: Adds +1°C (max 50°C)
- **Decrease Button**: Removes -1°C (min 0°C)
- Both update the history chart immediately

### Dark Mode
- Toggle switches between light and dark themes
- Applies `dark` class to HTML root element
- All components respond to theme change
- Smooth transition effects

---

## 🔌 API Integration (Future Enhancement)

The code includes a placeholder for backend integration:

```typescript
// Uncomment in App.tsx to connect to real API
useEffect(() => {
  const fetchTemperature = async () => {
    const response = await fetch('/api/temperature');
    const data = await response.json();
    setTemperature(data.temperature);
  };
  
  const interval = setInterval(fetchTemperature, 3000);
  return () => clearInterval(interval);
}, []);
```

**Compatible with:**
- DHT11/DHT22 temperature sensors
- NodeMCU / ESP8266
- Arduino with WiFi
- Raspberry Pi
- Any REST API endpoint returning JSON: `{ "temperature": number }`

---

## 📱 Responsive Design

### Mobile (< 640px)
- Single column layout
- Smaller gauge size (256px)
- Compact buttons and text
- Touch-friendly controls

### Tablet (640px - 1024px)
- Optimized spacing
- Medium gauge size (320px)
- Grid layouts for status cards

### Desktop (> 1024px)
- Full-size components
- Maximum width containers
- Side-by-side layouts
- Large gauge (320px)

---

## 🎨 Design Features

### Glassmorphism
- Semi-transparent backgrounds
- Backdrop blur effects
- Subtle borders
- Layered depth

### Gradients
- Blue to Purple (header)
- Color-based on status (card)
- Animated background orbs
- Chart gradient fills

### Animations
- Fade-in on component mount
- Smooth color transitions (500ms)
- Hover effects on buttons
- Scale transforms on interaction
- Pulsing background orbs

---

## 📊 Data Visualization

### Circular Gauge
- 0-50°C range
- SVG-based rendering
- Smooth progress animation
- Color-coded by status
- Percentage-based calculation

### Line Chart (Recharts)
- Last 10 temperature readings
- Time-based X-axis (HH:MM:SS)
- Temperature Y-axis (0-50°C)
- Area fill with gradient
- Interactive tooltips
- Animated line drawing
- Responsive sizing

---

## 💡 Key Code Highlights

### Type Safety
```typescript
interface TemperatureReading {
  time: string;
  temperature: number;
}

type TemperatureStatus = 'cold' | 'normal' | 'hot';
```

### Smart Time Formatting
```typescript
const getCurrentTime = (): string => {
  return new Date().toLocaleTimeString('en-US', { 
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};
```

### History Management
```typescript
const addToHistory = (temp: number) => {
  const newReading = { time: getCurrentTime(), temperature: temp };
  setHistory(prev => [...prev, newReading].slice(-10)); // Keep last 10
};
```

---

## 🎓 Perfect for Final Year Project

### Why This Project Stands Out:
1. ✅ **Production-Ready Code** - Clean, well-structured, commented
2. ✅ **Modern Tech Stack** - Latest React patterns and libraries
3. ✅ **Professional UI** - Looks like a commercial product
4. ✅ **Fully Functional** - No dummy components, everything works
5. ✅ **Scalable Architecture** - Easy to extend and modify
6. ✅ **IoT Integration Ready** - Can connect to real sensors
7. ✅ **Responsive Design** - Works on all devices
8. ✅ **Documentation** - Well-commented code and clear structure

### Demonstration Features:
- Live updates every 3 seconds
- Manual controls for testing different scenarios
- Visual alerts for out-of-range temperatures
- Historical data tracking
- Theme switching
- Multiple visualizations (gauge + chart)

---

## 🔧 Customization Options

### Change Update Interval
```typescript
// In App.tsx, line ~150
setInterval(() => { ... }, 3000); // Change 3000 to desired milliseconds
```

### Modify Temperature Ranges
```typescript
// In App.tsx, getTemperatureStatus function
if (temp < 18) return 'cold';     // Change 18
if (temp > 30) return 'hot';      // Change 30
```

### Adjust History Length
```typescript
// In App.tsx, addToHistory function
return updated.slice(-10);  // Change -10 to keep more/fewer readings
```

---

## 📈 Future Enhancements

- 🔄 Connect to real temperature sensor via API
- 📧 Email/SMS alerts for critical temperatures
- 💾 Database integration for long-term storage
- 📊 Advanced analytics (daily/weekly averages)
- 🌍 Multiple room monitoring
- 📱 Mobile app version
- 🔔 Push notifications
- 📥 Export data to CSV/Excel
- 🤖 Machine learning predictions

---

## ✅ Running the Application

The application is ready to run with:

```bash
npm start
```

All dependencies are already installed in `package.json`:
- ✅ React & React DOM
- ✅ Recharts
- ✅ Lucide React (icons)
- ✅ Tailwind CSS v4
- ✅ TypeScript
- ✅ Vite

---

## 📝 Code Quality

- **TypeScript**: Full type safety
- **ESLint Ready**: Clean code standards
- **Comments**: Comprehensive JSDoc comments
- **Naming**: Clear, descriptive variable names
- **Structure**: Modular component design
- **Performance**: Optimized re-renders
- **Accessibility**: Proper ARIA labels

---

## 🎉 Project Highlights

This temperature monitoring system demonstrates:

1. **React Expertise** - Hooks, state management, effects
2. **TypeScript Skills** - Interfaces, types, type safety
3. **UI/UX Design** - Modern, beautiful, user-friendly
4. **Data Visualization** - Charts and gauges
5. **Responsive Design** - Mobile-first approach
6. **Real-time Updates** - Simulated live data
7. **Theme Support** - Dark/Light modes
8. **Code Quality** - Clean, maintainable, documented

**Perfect for demonstrating in college presentations!** 🎓

---

**Created with ❤️ for Final Year Project • © 2026**
