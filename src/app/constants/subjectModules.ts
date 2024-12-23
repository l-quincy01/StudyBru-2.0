export interface Note {
  notesTitle: string; // Title of the note
  thumbnailURL: string; // URL for note thumbnail
  dateAdded: string; // Date the note was added
}

export interface ModuleSet {
  setTitle: string; // Title of the set (e.g., Data Structures)
  notes: Note[]; // Array of notes under this set
}

// export interface ModuleSetGroup {
//   id: number; // Unique identifier for the module set group
//   sets: ModuleSet[]; // Array of sets within this group
// }

export interface SubjectModule {
  subjectModuleTitle: string; // Module Title (e.g., Computer Science)
  moduleSets: ModuleSet[]; // Array of all the sets(MULTIPLE SETS) for the specific  Module (e.g., DSA, OS ...)
}

export const userModules: SubjectModule[] = [
  {
    subjectModuleTitle: "Computer Science",
    moduleSets: [
      {
        setTitle: "Data Structures",
        notes: [
          {
            notesTitle: "Hashmaps",
            thumbnailURL: "https://example.com/hashmaps-thumbnail.jpg",
            dateAdded: "2024-12-20",
          },
          {
            notesTitle: "Linked Lists",
            thumbnailURL: "https://example.com/linked-lists-thumbnail.jpg",
            dateAdded: "2024-12-20",
          },

          // END OF NOTES BELONGING TO THIS SET
        ],
        // END OF THIS SET
      },
      {
        setTitle: "Compiler Design",
        notes: [
          {
            notesTitle: "Grammars",
            thumbnailURL: "https://example.com/grammars-thumbnail.jpg",
            dateAdded: "2024-12-20",
          },
          {
            notesTitle: "Translators",
            thumbnailURL: "https://example.com/translators-thumbnail.jpg",
            dateAdded: "2024-12-20",
          },
          {
            notesTitle: "Translators",
            thumbnailURL: "https://example.com/translators-thumbnail.jpg",
            dateAdded: "2024-12-20",
          },
          {
            notesTitle: "Translators",
            thumbnailURL: "https://example.com/translators-thumbnail.jpg",
            dateAdded: "2024-12-20",
          },
          {
            notesTitle: "Translators",
            thumbnailURL: "https://example.com/translators-thumbnail.jpg",
            dateAdded: "2024-12-20",
          },
          {
            notesTitle: "Translators",
            thumbnailURL: "https://example.com/translators-thumbnail.jpg",
            dateAdded: "2024-12-20",
          },
          {
            notesTitle: "Translators",
            thumbnailURL: "https://example.com/translators-thumbnail.jpg",
            dateAdded: "2024-12-20",
          },
          // END OF NOTES BELONGING TO THIS SET
        ],
        // END OF THIS SET
      },
      // END ALL SETS BELONGIN TO THIS MODULE
    ],
  },
];

/**


 <>
              {item.sets.map((granularItem, index) => (
                <Card
                  style={{
                    backgroundColor: theme === "dark" ? "#27272a" : "white",
                    shadowColor: "black",
                    shadowRadius: 12,
                    shadowOpacity: 0.05,
                    shadowOffset: { width: 0, height: 18 },
                    alignContent: "center",
                    justifyContent: "center",
                    width: "75%",
                    height: "92%",
                    marginLeft: 20,
                    marginTop: 5,
                  }}
                >
                  <Card.Content className="flex flex-col gap-y-6 justify-between">
                    <TextView className="text-2xl font-semibold ">
                      {granularItem.setTitle}
                    </TextView>
                    <View>
                      <View className="flex flex-col gap-y-1 grow h-4/6">
                        {granularItem.notes.map((notesItem, index) => (
                          <View key={index} className="flex flex-row gap-x-2">
                            <Image
                              style={{
                                width: 55,
                                height: 55,
                                borderRadius: 10,
                              }}
                              source={require("../../assets/images/Shared/imgPlaceholder.png")}
                            />

                            <View className="flex flex-col gap-y-1 w-4/5">
                              <TextView className="font-semibold text-md">
                                {notesItem.notesTitle}
                              </TextView>
                              <TextView className="font-light text-sm">
                                Date Added: {notesItem.dateAdded}
                              </TextView>
                            </View>
                          </View>
                        ))}
                      </View>
                    </View>
                    <View>
                      <TextView className="font-light text-sm">
                        Items Added: {item.sets[index].notes.length}
                      </TextView>
                    </View>
                  </Card.Content>
                </Card>
              ))}
            </>

 */
