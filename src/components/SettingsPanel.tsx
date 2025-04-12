import React from 'react';
import { CompanyType, ObjectType } from '../types';
import { Edit } from 'lucide-react';

interface SettingsPanelProps {
  company: CompanyType;
  setCompany: (company: CompanyType) => void;
  objectType: ObjectType;
  setObjectType: (objectType: ObjectType) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ 
  company, 
  setCompany, 
  objectType, 
  setObjectType 
}) => {
  const [templatePath, setTemplatePath] = React.useState<string>(
    company === 'protector' 
      ? objectType === 'bygning' 
        ? 'C:/Users/u001050/Downloads/MAL BYGG PROT.xlsx'
        : 'C:/Users/u001050/Downloads/MAL MOTOR PROT.xlsx'
      : objectType === 'bygning'
        ? 'C:/Users/u001050/Downloads/MAL BYGG KLP.xlsx'
        : 'C:/Users/u001050/Downloads/MAL MOTOR KLP.xlsx'
  );

  React.useEffect(() => {
    // Update template path when company or object type changes
    setTemplatePath(
      company === 'protector' 
        ? objectType === 'bygning' 
          ? 'C:/Users/u001050/Downloads/MAL BYGG PROT.xlsx'
          : 'C:/Users/u001050/Downloads/MAL MOTOR PROT.xlsx'
        : objectType === 'bygning'
          ? 'C:/Users/u001050/Downloads/MAL BYGG KLP.xlsx'
          : 'C:/Users/u001050/Downloads/MAL MOTOR KLP.xlsx'
    );
  }, [company, objectType]);

  const handleChangeTemplate = () => {
    // In a real app, this would open a file dialog
    alert('This would open a file dialog to select a new template file.');
  };

  return (
    <div className="bg-gray-50 rounded-lg p-5 mb-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Settings</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium text-gray-700 mb-3">Insurance Company</h4>
          <div className="flex space-x-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="company"
                checked={company === 'protector'}
                onChange={() => setCompany('protector')}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2">Protector</span>
            </label>
            
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="company"
                checked={company === 'klp'}
                onChange={() => setCompany('klp')}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2">KLP</span>
            </label>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-700 mb-3">Object Type</h4>
          <div className="flex space-x-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="objectType"
                checked={objectType === 'bygning'}
                onChange={() => setObjectType('bygning')}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2">Bygning</span>
            </label>
            
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="objectType"
                checked={objectType === 'motor'}
                onChange={() => setObjectType('motor')}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2">Motor</span>
            </label>
          </div>
        </div>
      </div>
      
      <div className="mt-5">
        <h4 className="font-medium text-gray-700 mb-2">Template File</h4>
        <div className="flex items-center">
          <div className="flex-grow bg-white border border-gray-300 rounded-l-md px-3 py-2 text-sm text-gray-600 truncate">
            {templatePath}
          </div>
          <button 
            onClick={handleChangeTemplate}
            className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-r-md transition-colors"
          >
            <Edit className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="mt-5">
        <button className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium">
          <Edit className="h-4 w-4 mr-1" />
          Edit Column Mapping
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;
