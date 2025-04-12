export type CompanyType = 'protector' | 'klp';
export type ObjectType = 'bygning' | 'motor';
export type SaveMode = 'individual' | 'same_folder' | 'prefix';

export interface ColumnMapping {
  [sourceColumn: string]: string;
}

export interface MappingConfig {
  template_path: string;
  mapping: ColumnMapping;
}

export interface CompanyConfig {
  [objectType: string]: MappingConfig;
}

export interface MappingsConfig {
  [company: string]: CompanyConfig;
}
