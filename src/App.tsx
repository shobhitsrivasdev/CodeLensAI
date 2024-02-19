import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Review from "./components/Review";
function App() {
  const [review, setReview] = useState("");
  const [state, setState] = useState<"idle" | "generating" | "generated">("idle");

  const isGenerating = state === "generating";

  const handleGenerateReview = async (code: string) => {
    try {
      setState("generating");
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setReview(data.review);
      setState("generated");
    } catch (err) {
      alert("Something went wrong. Please try again later.");
      console.log(err);
      setState("idle");  // Reset state on error
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <Editor 
        isGenerating={isGenerating} 
        onGenerateReview={handleGenerateReview} 
      />
      <Review 
        isGenerating={isGenerating} 
        review={review} 
      />
    </div>
  );
}

export default App;