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
  name?: string;
  jobType: JobType;
  floorSalary?: number;
  cellingSalary?: number
  dueTime?: number;
  location?: string;
  isFeature?: boolean;
}
