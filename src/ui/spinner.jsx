function LoadingSpinner() {
  return (
    
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-50">
      <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.897v3.005A4.002 4.002 0 008 12H6c0 1.1.45 2.1 1.176 2.832l.192.16z"></path>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
