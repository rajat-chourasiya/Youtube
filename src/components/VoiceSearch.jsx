 import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdMic } from "react-icons/io";

const VoiceSearch = ({ setSearchQuery }) => {
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();

  let recognition;

  
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognition = new SpeechRecognition();
    }
  }, []);

  const handleVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser doesn't support voice recognition.");
      return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    setIsListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      navigate(`/search/${encodeURIComponent(transcript)}`);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  return (
    <div
      className={`relative ml-1 cursor-pointer hover:bg-gray-200 duration-200 rounded-full p-2 border border-gray-600 ${
        isListening ? "bg-red-100" : ""
      }`}
      onClick={handleVoiceSearch}
    >
      {isListening && (
        <span className="absolute top-[-6px] right-[-6px] w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
      )}
      <IoMdMic size={24} />
    </div>
  );
};

export default VoiceSearch;
