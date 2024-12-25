import React from 'react';

export const Watermark: React.FC = () => (
  <div className="fixed bottom-4 right-4 text-white/50 text-sm font-medium">
    © {new Date().getFullYear()} Aryan Acharya. All rights reserved.
  </div>
);