// ds sản phẩm
let products = [
    {
      id: 1,
      name: "THE LAUGHTER VARSITY JACKET",
      images: [
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0010.jpg?v=1641881761887",
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0016-6d1bfcbb-2746-4333-846b-8941fe4f1657.jpg?v=1641881761887",
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0036.jpg?v=1641881761887",
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0046.jpg?v=1641881761887"
      ],
      description: 'Chi tiết kỹ thuật: -Thân áo: Vải dạ. Tay áo: da tổng hợp - May 2 lớp, lớp trong lót quả trám - Áo cổ bẻ, bo dệt ở cổ tay và gấu áo - 2 túi hông tiện dụng',
      price: 400000,
      sizes: ["M", "L","XL"],
      tag:"Best Seller",
      category : "Áo Sweater Jacket"
    },
    {
      id: 2,
      name: " FLAMMY SKULL COACH JACKET",
      images: [
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0003-6d6f64bf-6d6b-4893-8e4a-0ea1b138c001.jpg?v=1639372166667",
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0005.jpg?v=1639372166667",
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/321-01-01.jpg?v=1639372166667",
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/321-01-02.jpg?v=1639372166667"
      ],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos? Exercitationem iure architecto temporibus aliquam, numquam, culpa aperiam placeat voluptatem tempora nemo alias? Similique, rerum eius. Et provident voluptatem tenetur.',
      price: 160000,
      sizes: ["S","M", "L","XL"],
      tag:"New Arrival",
      category : "Áo Jacket"
    },
    
    {
        id: 3,
        name: " LEOPARD PUFFER JACKET",
        images: [
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/65.png?v=1658826002577",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/28-2.png?v=1658826002577",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/29.png?v=1658826002577",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/36.png?v=1658826002577"
        ],
        description: 'Chất liệu: Chất gió chần bông Form dáng: Áo phao Gile Cảm hứng thiết kế: Hoạ tiết da báo với phối màu bắt mặt. Chữ  được in chuyển nhiệt ở mặt trước và sau. Hình thêu C-Star ở mặt trong phù hợp mặc cả hai mặt. Sản phẩm thuộc BST LEOPARD COLLECTION',
        price: 450000,
        sizes: ["S" ,"M", "L","XL"],
        tag:"New Arrival",
        category : "Áo Jacket"
      },
      {
        id: 4,
        name: " CYBER REFLECTIVE ANORAK JACKET",
        images: [
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0022.jpg?v=1642651246310",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0025.jpg?v=1642651246310",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-08.jpg?v=1642651246310",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-03.jpg?v=1642651246310"
        ],
        description: 'Chất liệu: vải gió (lót 2 lớp) Dáng xuông rộng, sử dụng khuy dập Mặt trước: Logo “ClownZ” - sử dụng công nghệ in phản quang chất lượng cao. Sử dụng vải nỉ thể thao kết hợp vải lót gió chống thấm nước, phù hợp với những ngày mưa',
        price: 579000,
        sizes: ["L","XL"],
        tag:"New Arrival",
        category : "Áo Jacket"
      },
      {
        id: 5,
        name: " LEOPARD PUFFER JACKET",
        images: [
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0028.jpg?v=1635861058670",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0034.jpg?v=1635861058670",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0149.jpg?v=1635861058670",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/1-61a0b3fc-eabe-4026-ac18-6d6b72d2ed59.jpg?v=1636004692863"
        ],
        description: 'Chất liệu: Chất gió chần bông Form dáng: Áo phao Gile Cảm hứng thiết kế: Hoạ tiết da báo với phối màu bắt mặt. Chữ  được in chuyển nhiệt ở mặt trước và sau. Hình thêu C-Star ở mặt trong phù hợp mặc cả hai mặt. Sản phẩm thuộc BST LEOPARD COLLECTION',
        price: 450000,
        sizes: ["S" ,"M", "L","XL"],
        tag:"New Arrival",
        category : "Áo Jacket"
      },
      {
        id: 6,
        name: " WORLDZ STAR KNIT SWEATER",
        images: [
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0006-e7e7e881-084f-4637-8ffe-208b82461f4f.jpg?v=1639234057693",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/28-2.png?v=1658826002577",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/29.png?v=1658826002577",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/36.png?v=1658826002577"
        ],
        description: 'Chất liệu: vải len dệt 100% cotton Dáng áo: Oversize Graphic được dệt trực tiết trên bề mặt vải Giặt không sấy tránh co áo',
        description_image:"https://bizweb.dktcdn.net/100/414/728/files/worldz-star-knit-sweater.jpg?v=1639373485536",
        price: 799000,
        sizes: ["S" ,"M", "L","XL"],
        tag:"Hot Item",
        category : "Áo Jacket"
      },
      {
        id: 7,
        name: " LEOPARD PUFFER JACKET",
        images: [
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0011.jpg?v=1644815529293",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0040-1-24eb8ec1-c830-48ac-9714-e4461f0d7669.jpg?v=1644815529293",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0079.jpg?v=1644815529293",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0082-dc39166f-6479-47ca-9cc2-0f788af0c452.jpg?v=1644815529293"
        ],
        description: 'Chất liệu: Chất gió chần bông Form dáng: Áo phao Gile Cảm hứng thiết kế: Hoạ tiết da báo với phối màu bắt mặt. Chữ  được in chuyển nhiệt ở mặt trước và sau. Hình thêu C-Star ở mặt trong phù hợp mặc cả hai mặt. Sản phẩm thuộc BST LEOPARD COLLECTION',
        description_image:"https://bizweb.dktcdn.net/100/414/728/files/worldz-star-knit-sweater.jpg?v=1639373485536",
        price: 450000,
        sizes: ["S" ,"M", "L","XL"],
        tag:"New Arrival",
        category : "Áo Jacket"
      },
      {
        id: 8,
        name: "STARS SWEATSHIRT",
        images: [
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0334.jpg?v=1638864990763",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0334.jpg?v=1638864990763",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0373.jpg?v=1638864998637",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0379.jpg?v=1638865002247"
        ],
        description: '• Chất liệu: vải nỉ bông Mô tả: hình in graphic "ClownZ" mặt trước và "22" mặt sau thiết kế theo phong cách Y2K, tag cao su Cyber Jester.Vải có độ co giãn, đàn hồi và tính ổn định cao.Bề mặt vải dày dặn, mềm mại, trơn láng, giữ nhiệt tốt cho cơ thể.',
        description_image:"https://bizweb.dktcdn.net/100/414/728/files/worldz-star-knit-sweater.jpg?v=1639373485536",
        price: 499000,
        sizes: ["S" ,"M", "L","XL"],
        tag:"New Arrival",
        category : "Áo Jacket"
      },
      {
        id: 9,
        name: " LEOPARD PUFFER JACKET",
        images: [
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0096a-af7586ac-1c2b-4fd3-86fb-a712a64be6a8.jpg?v=1638873025320",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0099a-00200099-99aa-4678-9ad9-17d25d91542d.jpg?v=1638873026867",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0202-ebaee748-17e6-4fc7-a489-84e2febde45f.jpg?v=1638873028443",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0201.jpg?v=1638873029770"
        ],
        description: '• Chất liệu: Nỉ bông Mặt trước: hình in "skeleton in green fire"Mặt sau: hình in "flamy skull in green fire Vải có độ co giãn, đàn hồi và tính ổn định cao.Bề mặt vải dày dặn, mềm mại, trơn láng, giữ nhiệt tốt cho cơ thể.',
        description_image:"https://bizweb.dktcdn.net/100/414/728/files/flamy-skull-hoodie.jpg?v=1638873147829",
        price: 549000,
        sizes: ["S" ,"M", "L","XL"],
        tag:"New Arrival",
        category : "Áo Jacket"
      },
      {
        id: 10,
        name: "MONOGRAM CAMO HOODED COACH JACKETT",
        images: [
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0340.jpg?v=1637578318957",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0343.jpg?v=1637578318957",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0350.jpg?v=1637912078750",
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/cz-0352.jpg?v=1637912082810"
        ],
        description: 'Chất liệu: vải gió Dáng xuông Chống thấm nước khi đi mưa',
        price: 629000,
        description_image:"https://bizweb.dktcdn.net/100/414/728/files/flamy-skull-hoodie.jpg?v=1638873147829",
        sizes: ["M", "L","XL"],
        tag:"New Arrival",
        category : "Áo Jacket"
      },
      
  ]