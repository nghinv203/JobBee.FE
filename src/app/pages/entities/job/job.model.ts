export enum JobType {
  FULL_TIME = '',
  PART_TIME = '',
  INTERNSHIP = '',
  SEASONAL = '',
  REMOTE = '',
  HYBRID = '',
  CONTRACT_BASE = '',
  FREELANCE = ''
}

export interface IJob {
  id?: string;
  name: string;
  jobType: JobType;
  salary?: string;
  dueTime?: string;
  location?: string;
  img?: string;
}
