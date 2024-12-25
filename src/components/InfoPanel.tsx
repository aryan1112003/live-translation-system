import React from 'react';
import { Settings } from 'lucide-react';

export const InfoPanel: React.FC = () => (
  <div className="mt-8 bg-gray-700/50 rounded-lg p-4">
    <div className="flex items-center gap-2">
      <Settings className="w-5 h-5" />
      <h3 className="text-lg font-semibold">Settings & Information</h3>
    </div>
    <ul className="mt-2 space-y-1 text-gray-300">
      <li>• Click the microphone button to start/stop recording</li>
      <li>• Select your source and target languages from the dropdowns</li>
      <li>• Translations will appear in real-time as you speak</li>
      <li>• For best results, speak clearly and at a moderate pace</li>
    </ul>
  </div>
);