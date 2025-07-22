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
  employerName?: string;
  jobCategory?: string;
  jobType?: string;
  jobStatus?: string;
  experienceLevel?: string;
  minEducationLevel?: string;
  locationCity?: string;
  locationState?: string;
  locationCountry?: string;
  minSalary?: number;
  maxSalary?: number;
  salaryPeriod?: string;
  salaryNegotiable?: boolean;
  isRemote?: boolean;
  isFeatured?: boolean;
  viewsCount?: number;
  applicationsCount?: number;
  companyLogo?: string;
  postedAt?: string;
  updatedAt?: string;
  expiresAt?: string | null;
  applicationDeadline?: string;
}
