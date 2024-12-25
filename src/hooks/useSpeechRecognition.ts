import { useState, useEffect, useRef } from 'react';

interface TranslationState {
  isListening: boolean;
  transcript: string;
  translation: string;
  error: string | null;
}

export const useSpeechRecognition = () => {
  const [state, setState] = useState<TranslationState>({
    isListening: false,
    transcript: '',
    translation: '',
    error: null,
  });
  const [sourceLang, setSourceLang] = useState('en-US');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = sourceLang;

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');

        setState(prev => ({ ...prev, transcript }));
        translateText(transcript);
      };

      recognitionRef.current.onerror = (event) => {
        setState(prev => ({ ...prev, error: event.error }));
      };
    } else {
      setState(prev => ({ ...prev, error: 'Speech recognition not supported in this browser.' }));
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [sourceLang]);

  const translateText = async (text: string) => {
    try {
      // Mock translation for demonstration
      const translatedText = `[Translated]: ${text}`;
      setState(prev => ({ ...prev, translation: translatedText }));
    } catch (error) {
      setState(prev => ({ ...prev, error: 'Translation failed' }));
    }
  };

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (state.isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
    setState(prev => ({ ...prev, isListening: !prev.isListening }));
  };

  return {
    state,
    sourceLang,
    setSourceLang,
    toggleListening,
  };
};