import React from 'react';
import { Languages, Mic, MicOff } from 'lucide-react';

export const Header: React.FC<{
  isListening: boolean;
  onToggleListening: () => void;
}> = ({ isListening, onToggleListening }) => (
  <div className="flex items-center justify-between mb-8">
    <div>
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <Languages className="w-8 h-8" />
        Live Translation System
      </h1>
      <p className="text-sm text-gray-400 mt-1">
        Created by Aryan Acharya
      </p>
    </div>
    <button
      onClick={onToggleListening}
      className={`p-4 rounded-full transition-all ${
        isListening 
          ? 'bg-red-500 hover:bg-red-600' 
          : 'bg-green-500 hover:bg-green-600'
      }`}
    >
      {isListening ? (
        <MicOff className="w-6 h-6" />
      ) : (
        <Mic className="w-6 h-6" />
      )}
    </button>
  </div>
);