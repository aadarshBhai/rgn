export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  classApplied: string;
  message: string;
  date: string;
}

export const enquiriesData: Enquiry[] = [
  { id: "1", name: "Rajesh Kumar", email: "rajesh@email.com", phone: "9876543210", classApplied: "Class V", message: "Looking for admission for my son.", date: "2025-01-15" },
  { id: "2", name: "Priya Singh", email: "priya@email.com", phone: "9876543211", classApplied: "Nursery", message: "Want to know about the fee structure.", date: "2025-01-20" },
  { id: "3", name: "Amit Verma", email: "amit@email.com", phone: "9876543212", classApplied: "Class IX", message: "Transfer from another school.", date: "2025-02-01" },
  { id: "4", name: "Sunita Devi", email: "sunita@email.com", phone: "9876543213", classApplied: "Class I", message: "Need information about transport.", date: "2025-02-05" },
];
