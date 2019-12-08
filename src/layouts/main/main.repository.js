export class MainRepository {
  async getNews() {
    //const response = await fetch("https://localhost:44365/user");
    const data = {
      news: [
        {
          title: "new title",
          description:
            "lorem ipsum aslkdjaksldjaklsdjalsdjalksdjsf sdf gsjdf ew ejw jlw lsdj sl sdsfgsdf",
          date: "22.12.2054"
        },
        {
          title: "new title",
          description:
            "totem ipsum aslkdjaksldjaklsdjalsdjalksdjsf sdf gsjdf ew ejw jlw lsdj sl sdsfgsdf",
          date: "22.12.2054"
        },
        {
          title: "new title",
          description:
            "totem ipsum aslkdjaksldjaklsdjalsdjalksdjsf sdf gsjdf ew ejw jlw lsdj sl sdsfgsdf",
          date: "22.12.2054"
        },
        {
          title: "new title",
          description:
            "totem ipsum aslkdjaksldjaklsdjalsdjalksdjsf sdf gsjdf ew ejw jlw lsdj sl sdsfgsdf",
          date: "22.12.2054"
        },
        {
          title: "new title",
          description:
            "totem ipsum aslkdjaksldjaklsdjalsdjalksdjsf sdf gsjdf ew ejw jlw lsdj sl sdsfgsdf",
          date: "22.12.2054"
        },
        {
          title: "new title",
          description:
            "totem ipsum aslkdjaksldjaklsdjalsdjalksdjsf sdf gsjdf ew ejw jlw lsdj sl sdsfgsdf",
          date: "22.12.2054"
        },
        {
          title: "new title",
          description:
            "totem ipsum aslkdjaksldjaklsdjalsdjalksdjsf sdf gsjdf ew ejw jlw lsdj sl sdsfgsdf",
          date: "22.12.2054"
        },
        {
          title: "new title",
          description:
            "lorem ipsum aslkdjaksldjaklsdjalsdjalksdjsf sdf gsjdf ew ejw jlw lsdj sl sdsfgsdf",
          date: "22.12.2054"
        }
      ]
    };
    return data.news;
  }
}
