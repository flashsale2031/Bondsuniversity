/*
 * Bonds University student activity data store.
 *
 * Demo-only records: use synthetic data here. In production, replace this
 * file with an authenticated server-side data source and role-based access.
 */
const students = [
  {
    id: "BU-2028-0142",
    personalInformation: {
      firstName: "Alex",
      lastName: "Rivera",
      email: "alex.rivera@example.edu",
      phone: "+1 (555) 010-0142",
      dateOfBirth: "2005-03-18",
      program: "BSc Computer Science",
      year: "Second year",
      enrollmentStatus: "Active"
    },
    currentCourses: [
      { code: "CS-201", name: "Introduction to Algorithms", credits: 4, progress: 92, grade: "A-" },
      { code: "CS-225", name: "Foundations of Data Science", credits: 4, progress: 81, grade: "B+" },
      { code: "DES-110", name: "Designing for People", credits: 4, progress: 85, grade: "A" }
    ],
    availableCourses: [
      { code: "CS-310", name: "Applied Machine Learning", credits: 4, term: "Spring 2029" },
      { code: "BUS-204", name: "Entrepreneurship Studio", credits: 3, term: "Spring 2029" },
      { code: "RES-220", name: "Research Methods", credits: 3, term: "Spring 2029" }
    ],
    gpa: 3.72,
    onlinePurchases: [
      { date: "2026-09-11", item: "Algorithms e-textbook", category: "Course materials", amount: 84.99 },
      { date: "2026-08-28", item: "Bonds University hoodie", category: "Campus store", amount: 42.50 }
    ],
    availableBalance: 1275.40,
    lastActivity: "2026-09-16T18:42:00-07:00"
  },
  {
    id: "BU-2027-0088",
    personalInformation: {
      firstName: "Maya",
      lastName: "Chen",
      email: "maya.chen@example.edu",
      phone: "+1 (555) 010-0088",
      dateOfBirth: "2004-11-02",
      program: "BA Business & Innovation",
      year: "Third year",
      enrollmentStatus: "Active"
    },
    currentCourses: [
      { code: "BUS-301", name: "Strategy in Practice", credits: 4, progress: 74, grade: "B" },
      { code: "ECO-210", name: "Economics for Builders", credits: 3, progress: 88, grade: "A-" },
      { code: "RES-220", name: "Research Methods", credits: 3, progress: 69, grade: "B+" }
    ],
    availableCourses: [
      { code: "BUS-410", name: "Venture Lab", credits: 4, term: "Spring 2029" },
      { code: "COM-315", name: "Leadership Communication", credits: 3, term: "Spring 2029" }
    ],
    gpa: 3.48,
    onlinePurchases: [
      { date: "2026-09-05", item: "Research methods workbook", category: "Course materials", amount: 29.95 },
      { date: "2026-08-22", item: "Digital library annual pass", category: "Library", amount: 15.00 }
    ],
    availableBalance: 842.16,
    lastActivity: "2026-09-16T14:17:00-07:00"
  },
  {
    id: "BU-2029-0317",
    personalInformation: {
      firstName: "Jordan",
      lastName: "Okafor",
      email: "jordan.okafor@example.edu",
      phone: "+1 (555) 010-0317",
      dateOfBirth: "2006-07-24",
      program: "BSc Data Science",
      year: "First year",
      enrollmentStatus: "Active"
    },
    currentCourses: [
      { code: "MTH-101", name: "Quantitative Reasoning", credits: 4, progress: 63, grade: "B+" },
      { code: "CS-101", name: "Computing Foundations", credits: 4, progress: 58, grade: "B" },
      { code: "WRT-100", name: "Academic Writing Essentials", credits: 3, progress: 91, grade: "A" }
    ],
    availableCourses: [
      { code: "DS-205", name: "Data Visualization", credits: 4, term: "Spring 2029" },
      { code: "CS-125", name: "Web Programming", credits: 4, term: "Spring 2029" },
      { code: "ETH-101", name: "Ethics of Technology", credits: 3, term: "Spring 2029" }
    ],
    gpa: 3.31,
    onlinePurchases: [
      { date: "2026-09-13", item: "Computing foundations e-textbook", category: "Course materials", amount: 64.00 }
    ],
    availableBalance: 320.75,
    lastActivity: "2026-09-16T09:05:00-07:00"
  },
  {
    id: "BU-2026-0024",
    personalInformation: {
      firstName: "Sofia",
      lastName: "Martinez",
      email: "sofia.martinez@example.edu",
      phone: "+1 (555) 010-0024",
      dateOfBirth: "2003-01-09",
      program: "BA Digital Media",
      year: "Final year",
      enrollmentStatus: "On leave"
    },
    currentCourses: [
      { code: "MED-401", name: "Capstone Studio", credits: 6, progress: 46, grade: "In progress" },
      { code: "MED-330", name: "Interactive Storytelling", credits: 4, progress: 79, grade: "A-" }
    ],
    availableCourses: [
      { code: "MED-450", name: "Portfolio Lab", credits: 3, term: "Summer 2029" }
    ],
    gpa: 3.86,
    onlinePurchases: [
      { date: "2026-08-19", item: "Creative software access", category: "Technology", amount: 119.00 },
      { date: "2026-08-06", item: "Capstone critique session", category: "Student services", amount: 25.00 }
    ],
    availableBalance: 96.20,
    lastActivity: "2026-09-02T11:30:00-07:00"
  }
];

if (typeof module !== "undefined") module.exports = students;
if (typeof window !== "undefined") window.students = students;
