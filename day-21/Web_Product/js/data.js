// ds sản phẩm
let products = [
  {
    id: 1,
    name: "Áo polo",
    images: [
      "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos? Exercitationem iure architecto temporibus aliquam, numquam, culpa aperiam placeat voluptatem tempora nemo alias? Similique, rerum eius. Et provident voluptatem tenetur.',
    rating: 4.5,
    price: 400000,
    sizes: ["M", "L","XL"]
  },
  {
    id: 2,
    name: "Áo 3 lỗ",
    images: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos? Exercitationem iure architecto temporibus aliquam, numquam, culpa aperiam placeat voluptatem tempora nemo alias? Similique, rerum eius. Et provident voluptatem tenetur.',
    rating: 5,
    price: 160000,
    sizes: ["M", "L","XL"]
  },
  {
    id: 3,
    name: "Áo Phông Trơn",
    images: [
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1537274942065-eda9d00a6293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos? Exercitationem iure architecto temporibus aliquam, numquam, culpa aperiam placeat voluptatem tempora nemo alias? Similique, rerum eius. Et provident voluptatem tenetur.',
    rating: 3.5,
    price: 450000,
    sizes: ["S" ,"M", "L","XL"]
  },
  {
    id: 4,
    name: "Áo polo",
    images: [
      "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos? Exercitationem iure architecto temporibus aliquam, numquam, culpa aperiam placeat voluptatem tempora nemo alias? Similique, rerum eius. Et provident voluptatem tenetur.',
    rating: 4.5,
    price: 400000,
    sizes: ["M", "L","XL"]
  },
  {
    id: 5,
    name: "Áo polo",
    images: [
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos? Exercitationem iure architecto temporibus aliquam, numquam, culpa aperiam placeat voluptatem tempora nemo alias? Similique, rerum eius. Et provident voluptatem tenetur.',
    rating: 4.5,
    price: 400000,
    sizes: ["M", "L","XL"]
  },
  {
    id: 6,
    name: "Áo đi biển",
    images: [
      "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos? Exercitationem iure architecto temporibus aliquam, numquam, culpa aperiam placeat voluptatem tempora nemo alias? Similique, rerum eius. Et provident voluptatem tenetur.',
    rating: 4.5,
    price: 400000,
    sizes: ["M", "L","XL"]
  },
  {
    id: 7,
    name: "Đồ đi chơi",
    images: [
      "https://images.unsplash.com/photo-1619166719123-471cee9ce91e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos? Exercitationem iure architecto temporibus aliquam, numquam, culpa aperiam placeat voluptatem tempora nemo alias? Similique, rerum eius. Et provident voluptatem tenetur.',
    rating: 1.5,
    price: 405000,
    sizes: ["S","M", "L","XL"]
  },
  {
    id: 8,
    name: "Phụ kiện tương tự",
    images: [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos? Exercitationem iure architecto temporibus aliquam, numquam, culpa aperiam placeat voluptatem tempora nemo alias? Similique, rerum eius. Et provident voluptatem tenetur.',
    rating: 5,
    price: 18200000,
    sizes: ["M", "L","XL"]
  },
];
