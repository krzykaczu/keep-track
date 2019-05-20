export const today = new Date();

export const projects = [
  {
    client: 'Ikea',
    project: '500 pcs of Billy bookstands',
    startDate: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 15
    ),
    dueDate: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 13
    ),
  },
  {
    client: 'Agata meble',
    project: 'Flower pots',
    startDate: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 5
    ),
    dueDate: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    ),
  },
  {
    client: 'BoConcept',
    project: '50 sofas',
    startDate: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 3
    ),
    dueDate: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 50
    ),
  },
  {
    client: 'Vitra',
    project: 'New task chair',
    startDate: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 30
    ),
    dueDate: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 6
    ),
  },
];
