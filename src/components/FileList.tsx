import React from 'react';
import { FileSpreadsheet, Trash2, X } from 'lucide-react';

interface FileListProps {
  files: File[];
  onRemoveFile: (index: number) => void;
  onClearFiles: () => void;
}

const FileList: React.FC<FileListProps> = ({ files, onRemoveFile, onClearFiles }) => {
  if (files.length === 0) return null;

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800">Files to Process ({files.length})</h3>
        <button 
          onClick={onClearFiles}
          className="flex items-center px-3 py-1 text-sm bg-red-50 hover:bg-red-100 text-red-600 rounded-md transition-colors"
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Clear All
        </button>
      </div>
      
      <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
        <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto">
          {files.map((file, index) => (
            <li key={index} className="flex items-center justify-between p-3 hover:bg-gray-100">
              <div className="flex items-center">
                <FileSpreadsheet className="h-5 w-5 text-indigo-500 mr-3" />
                <span className="text-gray-700">{file.name}</span>
                <span className="ml-2 text-xs text-gray-500">
                  ({(file.size / 1024).toFixed(1)} KB)
                </span>
              </div>
              <button 
                onClick={() => onRemoveFile(index)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Remove file"
              >
                <X className="h-5 w-5" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileList;
