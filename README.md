# Worldwise

Worldwise is a modern, feature-rich React application that lets you explore, track, and manage cities and countries around the globe. Designed for travelers and explorers, it combines an interactive map, journaling, and robust state management to deliver a seamless user experience.

## Key Architectural Highlights
- ___Context Providers:___ Both authentication and city/country data are managed via context providers, ensuring global accessibility and clean code.
- ___useReducer for State Logic:___ Complex state transitions (like loading, error, CRUD operations on cities) are handled with useReducer, making the logic robust and easy to extend.
- ___Protected Routing:___ The app uses a ProtectedRoute component to guard sensitive routes, redirecting unauthenticated users to the login page.
- ___Component Organization:___ UI is split into reusable components (e.g., City, CountryList, Map, Sidebar), making the codebase easy to navigate and extend.

## Features

- ___City & Country Explorer:___ Browse, view, and manage a personalized list of cities and countries you've visited or wish to explore.
- ___Interactive Map:___ Visualize locations using OpenStreetMap and React Leaflet. Click anywhere on the map to add a new city with automatic reverse geocoding.
- ___Geolocation Support:___ Instantly use your current location to add a city, thanks to the browser's geolocation API.
- ___Reverse Geocoding:___ Automatically fetch city and country details by clicking on the map, making data entry effortless.
- ___Travel Journaling:___ Add personal notes and the date for each city you visit, creating a travel diary.
- 🇺🇳 ___Emoji Country Flags:___ Instantly recognize countries with their flag emojis for a visually engaging experience.
- ___Protected Routes:___ Secure sections of the app (like the main dashboard) are only accessible to authenticated users, ensuring privacy and a tailored experience.
- ___Context-Based State Management:___ Uses React Context API for global state management, making data accessible throughout the app without prop drilling.
- ___useReducer for Complex State:___ Where multiple pieces of state are involved (such as cities, loading status, current city, and errors), useReducer is used to keep state organized and updates predictable and maintainable.
- ___Loading States & Error Handling:___ User-friendly feedback during data fetching, with spinners and error messages for a smooth UX.
- ___Authentication:___ Simple login system with context-based authentication and demo credentials for easy access.

> Use the following credentials to log in as a demo user.
### 🧪 Test Credentials

| Email               | Password |
|---------------------|----------|
| ayush@worldwise.com | qwerty   |


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
![screencapture-localhost-5173-app-form-2025-05-02-22_06_47](https://github.com/user-attachments/assets/7b0a11a9-5e9d-4eb6-90ee-bcf80e19d85f)
![screencapture-localhost-5173-app-form-2025-05-02-22_07_00](https://github.com/user-attachments/assets/a2cf2eb2-e780-4d25-bcd0-f04ccf90a6d7)


## Getting Started

1. ___Install dependencies:___
   ```bash
   npm install
   ```
2. ___Run the development server:___
   ```bash
   npm run dev
   ```
3. ___Open your browser:___  
   Visit `http://localhost:5173` to view the app.

## Tech Stack

- ___React___ (with hooks)
- ___Vite___ (for fast development)
- ___React Router___ (for client-side routing)
- ___CSS Modules___ (scoped styling)
- ___Fetch API___ (for data loading)

## Customization

- Add cities/countries via the UI.
- Modify or extend components in the `src/components` folder.
- Update page layouts in the `src/pages` folder.

Made with 💗 by [@ayushblaze](https://github.com/ayushblaze)
