# Worldwise

Worldwise is a modern React application that helps users explore and manage information about cities and countries around the world. Built with React and Vite, the project follows best practices in component-based architecture, routing, and state management.

## Features

- 🌍 **City & Country Explorer:** Browse, view, and manage lists of cities and countries.
- 🗺️ **Interactive Map:** Visualize locations on a map using OpenStreetMap and React Leaflet.
- 📍 **Geolocation:** Instantly use your current location to add a city.
- 🔄 **Reverse Geocoding:** Automatically fetch city and country details by clicking on the map.
- 📝 **Travel Journaling:** Add personal notes and date for each city you visit.
- 🇺🇳 **Emoji Country Flags:** Visualize countries with their flag emojis.
- 🔒 **Authentication:** Login system for user access.
- 🚦 **Loading States & Error Handling:** User-friendly feedback during data fetching.
- 🧩 **Modular Components:** Reusable and well-organized components for UI and logic.

## Project Structure

```
src/
│
├── App.jsx                # Main app component with routing logic
├── main.jsx               # Entry point for React/Vite
├── index.css              # Global styles
│
├── assets/                # Static assets (e.g., images, SVGs)
│   └── react.svg
│
├── components/            # Reusable UI components
│   ├── AppNav.jsx
│   ├── Button.jsx
│   ├── City.jsx
│   ├── CityItem.jsx
│   ├── CityList.jsx
│   ├── CountryItem.jsx
│   ├── CountryList.jsx
│   ├── Form.jsx
│   ├── Logo.jsx
│   ├── Map.jsx
│   ├── Message.jsx
│   ├── PageNav.jsx
│   ├── Sidebar.jsx
│   ├── Spinner.jsx
│   ├── SpinnerFullPage.jsx
│   ├── User.jsx
│   └── *.module.css       # Component-scoped styles
│
└── pages/                 # Page-level components (for routing)
    ├── AppLayout.jsx
    ├── Homepage.jsx
    ├── Login.jsx
    ├── PageNotFound.jsx
    ├── Pricing.jsx
    └── Product.jsx
```

## Screenshots

![screencapture-localhost-5173-app-cities-2025-05-02-22_05_01](https://github.com/user-attachments/assets/c4149a72-5d9c-41f9-a174-17870908d321)


To add screenshots:
1. Take screenshots of your app (e.g., homepage, map, add city form).
2. Save them in the `src/assets/` directory.
3. Reference them above using the correct path.


## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**  
   Visit `http://localhost:5173` to view the app.

## Tech Stack

- **React** (with hooks)
- **Vite** (for fast development)
- **React Router** (for client-side routing)
- **CSS Modules** (scoped styling)
- **Fetch API** (for data loading)

## Customization

- Add cities/countries via the UI.
- Modify or extend components in the `src/components` folder.
- Update page layouts in the `src/pages` folder.

## License

This project is for educational and demonstration purposes.
