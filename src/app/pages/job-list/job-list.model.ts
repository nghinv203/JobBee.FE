export interface IJobSearch {
  keyword?: string;
  location?: string;
  category?: string[];
  experience?: string;
  minSalary?: number;
  maxSalary?: number;
  jobTypes?: string[];
  educationLevel?: string[];
  level?: string;
  is_featured?: boolean;
}
