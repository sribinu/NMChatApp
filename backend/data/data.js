const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Abin",
        email: "abin@example.com",
      },
      {
        name: "Sribinu",
        email: "sribinu@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Abin",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Sribinu",
        email: "Sribinu@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Challuri",
        email: "Challuri@example.com",
      },
      {
        name: "Sribinu",
        email: "Sribinu@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Challuri",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Abin",
        email: "jon@example.com",
      },
      {
        name: "Sribinu",
        email: "Sribinu@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Subin",
        email: "subin@example.com",
      },
      {
        name: "Sribinu",
        email: "Sribinu@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Subin",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Abin",
        email: "abin@example.com",
      },
      {
        name: "Sribinu",
        email: "Sribinu@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports={ chats }