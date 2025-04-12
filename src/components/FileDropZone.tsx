import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface FileDropZoneProps {
  onDrop: (files: File[]) => void;
}

const FileDropZone: React.FC<FileDropZoneProps> = ({ onDrop }) => {
  const [isDragging, setIsDragging] = React.useState(false);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      const files = Array.from(e.dataTransfer.files);
      onDrop(files);
    }
  }, [onDrop]);

  return (
    <div 
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
        isDragging 
          ? 'border-indigo-500 bg-indigo-50' 
          : 'border-gray-300 hover:border-indigo-400 hover:bg-gray-50'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center">
        <Upload className={`h-12 w-12 mb-3 ${isDragging ? 'text-indigo-500' : 'text-gray-400'}`} />
        <p className="text-lg font-medium mb-1">Drag and drop Excel files here</p>
        <p className="text-sm text-gray-500">Supports .xlsx and .xls files</p>
      </div>
    </div>
  );
};

export default FileDropZone;
