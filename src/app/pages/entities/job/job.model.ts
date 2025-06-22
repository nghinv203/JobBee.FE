export enum JobType {
  FULL_TIME = 'global.jobType.FULL_TIME',
  PART_TIME = 'global.jobType.PART_TIME',
  INTERNSHIP = 'global.jobType.INTERNSHIP',
  SEASONAL = 'global.jobType.SEASONAL',
  REMOTE = 'global.jobType.REMOTE',
  HYBRID = 'global.jobType.HYBRID',
  CONTRACT_BASE = 'global.jobType.CONTRACT_BASE',
  FREELANCE = 'global.jobType.FREELANCE'
}

export interface IJob {
  id?: string;
  title?: string;
  employer_name?: string;
  job_category?: string;
  job_type?: string;
  job_status?: string;
  experience_level?: string;
  min_education_level?: string;
  location_city?: string;
  location_state?: string;
  location_country?: string;
  min_salary?: number;
  max_salary?: number;
  salary_period?: string;
  salary_negotiable?: boolean;
  is_remote?: boolean;
  is_featured?: boolean;
  views_count?: number;
  applications_count?: number;
  posted_at?: string;
  updated_at?: string;
  expires_at?: string | null;
  application_deadline?: string;
}
