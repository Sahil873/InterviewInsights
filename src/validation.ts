import zod from "zod";

export const companySchema = zod.object({
  companyName: zod.string().min(1, "company name is required"),
  position: zod.string().min(1, "position is required"),
  interviewType: zod.enum(["On-site", "Remote", "Hybrid"], {
    required_error: "interview-type is required",
  }),
});

export const userSchema = zod.object({
  userName: zod.string().min(1, "name is required"),
  currentPosition: zod.string().min(1, "current position is required"),
  institute: zod.string().min(1, "institute is required"),
  linkedIn: zod.string().min(1, "LinkedIn Url is required"),
  twitter: zod.string().optional(),
});

export type CompanyType = zod.infer<typeof companySchema>;
export type UserType = zod.infer<typeof userSchema>;
