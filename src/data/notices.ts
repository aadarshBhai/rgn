export interface Notice {
  id: string;
  title: string;
  date: string;
  content: string;
}

export const noticesData: Notice[] = [
  { id: "1", title: "Winter Vacation Notice", date: "2025-01-01", content: "School will remain closed from 25th Dec to 5th Jan for winter vacation." },
  { id: "2", title: "Fee Submission Deadline", date: "2025-01-10", content: "Last date for fee submission for Q3 is 15th January 2025." },
  { id: "3", title: "Exam Schedule Released", date: "2025-02-01", content: "The final examination schedule for all classes has been uploaded." },
  { id: "4", title: "Annual Function Rehearsal", date: "2025-02-10", content: "All participants must attend rehearsal on 12th Feb at 9 AM." },
];
