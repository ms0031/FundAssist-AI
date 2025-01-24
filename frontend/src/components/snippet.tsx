import { useState, useEffect } from "react";

export default function StatusApp() {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/health', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) throw new Error('Backend not ready');
        
        const data = await response.json();
        if (data.model === 'deepseek-r1:1.5b') {
          setIsReady(true);
        }
      } catch (err) {
        setError('Backend connection Failed - Ensure server is Running.');
        console.error('Health check error:', err);
      }
    };

    checkBackendStatus();
  }, []);

  return (
    <div className="mt-2 flex flex-col items-center">
      {isReady && (
        <div className="text-sm font-bold text-green-600">
          DeepSeek Ready
        </div>
      )}
      
      {error && (
        <div className="text-left text-red-500 text-sm">
          {error} 
        </div>
      )}
    </div>
  );
}