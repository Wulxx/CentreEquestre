export interface CoursesElement {
  name: string;
  assignedMonitor: string;
  debutDate: string;
  endDate: string;
  _id: string;
  horses: [];
  students: [];
}

export interface DialogData {
  user: string;
  lessonsId: string;
}
