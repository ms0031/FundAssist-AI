import { useState, useRef, useEffect } from "react";
import { Textarea, Button } from "@heroui/react";

export default function TextAreaApp() {
  const [inputValue, setInputValue] = useState("");
  const [answer, setAnswer] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const eventSourceRef = useRef<EventSource | null>(null);

  const handleAsk = () => {
    if (!inputValue.trim()) return;

    setIsGenerating(true);
    setAnswer("");

    // Close existing connection if any
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }

    const question = encodeURIComponent(inputValue.trim());
    eventSourceRef.current = new EventSource(
      `http://localhost:5000/ask-stream?question=${question}`
    );

    eventSourceRef.current.onmessage = (event) => {
      if (event.data === '[DONE]') {
        setIsGenerating(false);
        eventSourceRef.current?.close();
        return;
      }
      setAnswer(prev => prev + event.data);
    };

    eventSourceRef.current.onerror = (err) => {
      console.error('SSE Error:', err);
      setIsGenerating(false);
      eventSourceRef.current?.close();
    };
  };

  useEffect(() => {
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);

  return (
    <div className="mt-32 flex flex-col items-center gap-6 w-full">
      <div className="flex gap-6 items-center w-full max-w-4xl px-4">
        <Textarea 
          isClearable
          className="w-full max-w-2xl"  // Added w-full here
          label="FundAssist-AI"
          placeholder="Search"
          variant="bordered"
          errorMessage="Please input a valid question"
          isInvalid={inputValue === ""}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onClear={() => {
            setInputValue("");
            setAnswer("");
          }}
        />
        <Button 
          isLoading={isGenerating}
          size="lg" 
          color="success" 
          className="text-3xl flex-shrink-0"
          onClick={handleAsk}
          isDisabled={!inputValue.trim()}
        >
          ASK
        </Button>
      </div>
      
      {answer && (
        <Textarea
          isReadOnly
          className="w-full max-w-4xl h-96"  // Adjusted width here
          label="Answer"
          variant="bordered"
          value={answer}
          style={{
            overflowY: 'auto',
            whiteSpace: 'pre-wrap'
          }}
        />
      )}
    </div>
  );
}