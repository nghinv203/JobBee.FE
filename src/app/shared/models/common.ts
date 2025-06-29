export interface IJobDetail {
  title: string;
  description: string;
  responsibility: string;
  postedAt: string;
  applicationDeadline: number;
  level: string;
  minSalary: number;
  maxSalary: number;
  locationCity: string;
  jobType: string;
  experience: string;
  employer: IEmployerDetail;
}

export interface IEmployerDetail {
  companyLogo: string;
  companyName: string;
  industry: string;
  companySize: string;
  contactPhone: string;
  contactEmail: string;
  websiteUrl: string;
  socialMedials: ISocialMedia[];
}

export interface ISocialMedia {
  platform: string;
  link: string;
}
