import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Header } from './Header';
import { Watermark } from './Watermark';
import { TranslationPanel } from './TranslationPanel';
import { InfoPanel } from './InfoPanel';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';

const TranslationSystem: React.FC = () => {
  const [targetLang, setTargetLang] = useState('es');
  const {
    state,
    sourceLang,
    setSourceLang,
    toggleListening,
  } = useSpeechRecognition();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Header 
          isListening={state.isListening}
          onToggleListening={toggleListening}
        />

        <TranslationPanel
          sourceLang={sourceLang}
          targetLang={targetLang}
          transcript={state.transcript}
          translation={state.translation}
          onSourceLangChange={setSourceLang}
          onTargetLangChange={setTargetLang}
        />

        {state.error && (
          <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg">
            {state.error}
          </div>
        )}

        <InfoPanel />
        <Watermark />
      </div>
    </div>
  );
};

export default TranslationSystem;