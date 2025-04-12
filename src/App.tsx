import React, { useState, useRef } from 'react';
import { FileUp, Upload, Settings, Database, FileSpreadsheet, Save, Trash2, Edit, HelpCircle, RefreshCw } from 'lucide-react';
import Header from './components/Header';
import FileDropZone from './components/FileDropZone';
import FileList from './components/FileList';
import SettingsPanel from './components/SettingsPanel';
import ProcessingOptions from './components/ProcessingOptions';
import { CompanyType, ObjectType, SaveMode } from './types';
import Footer from './components/Footer';

function App() {
  const [files, setFiles] = useState<File[]>([]);
  const [company, setCompany] = useState<CompanyType>('protector');
  const [objectType, setObjectType] = useState<ObjectType>('motor');
  const [saveMode, setSaveMode] = useState<SaveMode>('individual');
  const [outputPrefix, setOutputPrefix] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).filter(
        file => file.name.endsWith('.xlsx') || file.name.endsWith('.xls')
      );
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleFileDrop = (acceptedFiles: File[]) => {
    const excelFiles = acceptedFiles.filter(
      file => file.name.endsWith('.xlsx') || file.name.endsWith('.xls')
    );
    setFiles(prev => [...prev, ...excelFiles]);
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearFiles = () => {
    setFiles([]);
  };

  const handleProcessFiles = () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      alert(`Processed ${files.length} files successfully!`);
    }, 2000);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6 max-w-6xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <FileSpreadsheet className="h-6 w-6 text-indigo-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-800">Excel Column Mapper</h2>
              </div>
              
              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowSettings(!showSettings)}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  {showSettings ? 'Hide Settings' : 'Show Settings'}
                </button>
                
                <button 
                  onClick={triggerFileInput}
                  className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors"
                >
                  <FileUp className="h-4 w-4 mr-2" />
                  Add Files
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".xlsx,.xls"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            </div>
            
            {showSettings && (
              <SettingsPanel 
                company={company}
                setCompany={setCompany}
                objectType={objectType}
                setObjectType={setObjectType}
              />
            )}
            
            <FileDropZone onDrop={handleFileDrop} />
            
            {files.length > 0 && (
              <>
                <FileList 
                  files={files} 
                  onRemoveFile={handleRemoveFile} 
                  onClearFiles={handleClearFiles} 
                />
                
                <ProcessingOptions 
                  saveMode={saveMode}
                  setSaveMode={setSaveMode}
                  outputPrefix={outputPrefix}
                  setOutputPrefix={setOutputPrefix}
                />
                
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={handleProcessFiles}
                    disabled={isProcessing}
                    className={`flex items-center px-6 py-3 rounded-lg text-white font-medium transition-colors ${
                      isProcessing 
                        ? 'bg-indigo-400 cursor-not-allowed' 
                        : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Save className="h-5 w-5 mr-2" />
                        Process and Save Files
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
