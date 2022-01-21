let Experience = [
  {
    title0: {
      name: "TAVE 6th Member",
      start: "2020-08-01",
      end: "2020-11-28",
    },
    title1: {
      name: "TAVE Research Member",
      start: "2020-12-20",
      end: "now",
    },
    title2: {
      name: "TAVE 7th Management Team",
      start: "2021-02-06",
      end: "2021-07-17",
    },
    title3: {
      name: "TAVE 7th Management Team",
      start: "2021-02-06",
      end: "2021-07-17",
    },
    title3: {
      name: "TAVE 8th Management Team",
      start: "2021-07-20 ",
      end: "2022-01-15",
    },
  },
];

let show_Experience = (i) => {
  Experience.forEach((element) => {
    document.write(`
      <div>${element}.title${i}</div>
      `);
  });
};
