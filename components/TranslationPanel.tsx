import React from 'react';

interface TranslationPanelProps {
  sourceLang: string;
  targetLang: string;
  transcript: string;
  translation: string;
  onSourceLangChange: (lang: string) => void;
  onTargetLangChange: (lang: string) => void;
}

export const TranslationPanel: React.FC<TranslationPanelProps> = ({
  sourceLang,
  targetLang,
  transcript,
  translation,
  onSourceLangChange,
  onTargetLangChange,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Source Language</h2>
        <select
          value={sourceLang}
          onChange={(e) => onSourceLangChange(e.target.value)}
          className="bg-gray-700 rounded px-3 py-1"
        >
          <option value="en-US">English</option>
          <option value="es-ES">Spanish</option>
          <option value="fr-FR">French</option>
          <option value="de-DE">German</option>
        </select>
      </div>
      <div className="bg-gray-700 rounded-lg p-4 h-64 overflow-y-auto">
        {transcript || 'Start speaking...'}
      </div>
    </div>

    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Target Language</h2>
        <select
          value={targetLang}
          onChange={(e) => onTargetLangChange(e.target.value)}
          className="bg-gray-700 rounded px-3 py-1"
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="en">English</option>
        </select>
      </div>
      <div className="bg-gray-700 rounded-lg p-4 h-64 overflow-y-auto">
        {translation || 'Translation will appear here...'}
      </div>
    </div>
  </div>
);