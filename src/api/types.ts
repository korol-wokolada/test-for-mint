enum department {
  android = "android",
  ios = "ios",
  design = "design",
  management = "management",
  qa = "qa",
  back_office = "back_office",
  frontend = "frontend",
  hr = "hr",
  pr = "pr",
  backend = "backend",
  support = "support",
  analytics = "analytics",
}

export type DataType = {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  department: department;
  position: string;
  birthday: string;
  phone: string;
};

export type ResponseDataType = { items: DataType[] };
