import React from "react";

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  width = 400, 
  height = 300, 
  text = "Image", 
  className = "" 
}) => {
  return (
    <div 
      className={`bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center text-gray-400 ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="text-center">
        <div className="text-4xl mb-2">📸</div>
        <div className="text-sm font-medium">{text}</div>
        <div className="text-xs opacity-75">{width}x{height}px</div>
      </div>
    </div>
  );
};

export default ImagePlaceholder;
