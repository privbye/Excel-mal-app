import React from 'react';
import { SaveMode } from '../types';

interface ProcessingOptionsProps {
  saveMode: SaveMode;
  setSaveMode: (mode: SaveMode) => void;
  outputPrefix: string;
  setOutputPrefix: (prefix: string) => void;
}

const ProcessingOptions: React.FC<ProcessingOptionsProps> = ({
  saveMode,
  setSaveMode,
  outputPrefix,
  setOutputPrefix
}) => {
  return (
    <div className="mt-6 bg-gray-50 rounded-lg p-5 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Saving Options</h3>
      
      <div className="space-y-3">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="saveMode"
            checked={saveMode === 'individual'}
            onChange={() => setSaveMode('individual')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <span className="ml-2">Save each file individually</span>
        </label>
        
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="saveMode"
            checked={saveMode === 'same_folder'}
            onChange={() => setSaveMode('same_folder')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <span className="ml-2">Save all files in the same folder (with same name + number)</span>
        </label>
        
        <div className="flex items-center">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="saveMode"
              checked={saveMode === 'prefix'}
              onChange={() => setSaveMode('prefix')}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="ml-2">Give all files the same prefix:</span>
          </label>
          
          <input
            type="text"
            value={outputPrefix}
            onChange={(e) => setOutputPrefix(e.target.value)}
            disabled={saveMode !== 'prefix'}
            placeholder="Prefix (e.g. 'converted_')"
            className={`ml-3 px-3 py-1 border rounded-md text-sm ${
              saveMode === 'prefix' 
                ? 'border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' 
                : 'bg-gray-100 border-gray-200 text-gray-500'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessingOptions;
