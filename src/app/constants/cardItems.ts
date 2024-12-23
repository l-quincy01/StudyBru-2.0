export const cardItems = [
  {
    id: "01",
    title: "Logic Gate",
    itemsAdded: 5,
    dateCreated: "01-07-2024",
  },
  {
    id: "02",
    title: "Electric Circuits",
    itemsAdded: 5,
    dateCreated: "01-07-2024",
  },
  {
    id: "03",
    title: "Machine Code",
    itemsAdded: 5,
    dateCreated: "01-07-2024",
  },
];

/*

const sample_arr: {
data1: <data type>;
data2: <data type>;
data3: <data type>;
}[ ] = [
{ data1: "value1", data2: "value2", data3: "value3" },
{ data1: "value12", data2: "value22", data3: "value32" },
{ data1: "value13", data2: "value23", data3: "value33" },
];
*/

export const moduleSets: {
  setTitle: string;
  notes: { notesTitle: string; thumbnailURL: string; dateAdded: string }[];
}[] = [
  {
    setTitle: "Electronics",
    notes: [
      {
        notesTitle: "Algebra Basics",
        thumbnailURL: "https://example.com/algebra-thumbnail.jpg",
        dateAdded: "2024-12-20",
      },
    ],
  },
];

export const modules: {
  subjectModuleTitle: string;
  moduleSet: any[];
}[] = [
  {
    subjectModuleTitle: "string",
    moduleSet: moduleSets,
  },
];

/*

 {
    subjectModuleTitle: "Electrical Eng",
    setTitle: ["Basics", "Advanced Topics"],
    notes: [
      {
        title: "Lecture 1: Introduction to Logic Gates",
        thumbnailURL: "../../assets/images/Shared/imgPlaceholder.png",
        dateAdded: "2024-07-01",
      },
      {
        title: "Lecture 2: AND, OR, NOT Gates",
        thumbnailURL: "../../assets/images/Shared/imgPlaceholder.png",
        dateAdded: "2024-07-02",
      },
    ],
  },

  {
    subjectModuleTitle: "Electric Circuits",
    setTitle: ["Beginner", "Intermediate"],
    notes: [
      {
        title: "Lecture 5: Basics of Circuits",
        thumbnailURL: "../../assets/images/Shared/imgPlaceholder.png",
        dateAdded: "2024-07-05",
      },
      {
        title: "Lecture 6: Parallel and Series Circuits",
        thumbnailURL: "../../assets/images/Shared/imgPlaceholder.png",
        dateAdded: "2024-07-06",
      },
    ],
  },
  {
    subjectModuleTitle: "Machine Code",
    setTitle: ["Assembly Language", "Optimization"],
    notes: [
      {
        title: "Lecture 10: Introduction to Machine Code",
        thumbnailURL: "../../assets/images/Shared/imgPlaceholder.png",
        dateAdded: "2024-07-10",
      },
      {
        title: "Lecture 11: Writing Machine Instructions",
        thumbnailURL: "../../assets/images/Shared/imgPlaceholder.png",
        dateAdded: "2024-07-11",
      },
    ],
  },
*/
