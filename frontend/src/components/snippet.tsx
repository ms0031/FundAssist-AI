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
        setError('Backend connection failed - ensure server is running');
        console.error('Health check error:', err);
      }
    };

    checkBackendStatus();
  }, []);

  return (
    <div className="mt-10 flex flex-col items-center">
      {isReady && (
        <div className="text-2xl font-bold text-green-600 animate-pulse">
          DeepSeek Ready
        </div>
      )}
      
      {error && (
        <div className="text-red-500 text-lg">
          {error} - Verify backend is running on port 5000
        </div>
      )}
    </div>
  );
}