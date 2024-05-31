export let MilkNguyen = {
  userId: 1,
  name: 'Milk Nguyen',
  avatar:
    'https://2sao.vietnamnetjsc.vn/images/2022/09/07/10/45/phuong-ly-01.jpg',
  address: {city: 'Hai Duong City', country: 'Viet Nam'},
  age: 19,
  type: 'INFJ',
  male: false,
  languages: ['English', 'Vietnamese'],
  hobbies: ['Game', 'Cooking', 'Reading books'],
  jobs: ['Student', 'Model'],
  notifications: [
    {
      id: 1,
      activity: 'comment',
      name: 'Hai Nguyen',
      date: '15/01/2023',
      time: '12:35',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, inventore! Commodi quod quae aperiam? Natus illum sequi qui ad. Accusamus?',
    },
    {
      id: 2,
      activity: 'tag',
      name: 'Nam Dang',
      date: '14/01/2023',
      time: '10:10',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, inventore! Commodi quod quae aperiam? Natus illum sequi qui ad. Accusamus?',
    },
    {
      id: 3,
      activity: 'follow',
      name: 'Thu Ha',
      date: '12/01/2023',
      time: '06:30',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, inventore! Commodi quod quae aperiam? Natus illum sequi qui ad. Accusamus?',
    },
  ],
  posts: [
    {
      id: 1,
      date: '9/1/2024',
      time: '11:26',
      public: true,
      image:
        'https://scontent.fitm1-1.fna.fbcdn.net/v/t1.6435-9/79215534_1008748486155012_4873477821445439488_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4dc865&_nc_ohc=7wnL8MdVPmoAX8w1IwP&_nc_ht=scontent.fitm1-1.fna&oh=00_AfCMx1k9TBYCxkIT33cbUerEO7FONU6w9v9tCefQCO_P7g&oe=65C4653B',
      like: [3, 4, 5],
      comments: [
        {
          commentId: 1,
          id: 3,
          date: '9/1/2024',
          time: '12:15',
          content: 'This is so beautiful!',
          like: [1, 3, 4, 5],
        },
        {
          commentId: 2,
          id: 4,
          date: '10/1/2024',
          time: '16:00',
          content: 'Your dress is beautifull',
          like: [2, 3, 4, 5],
        },
      ],
    },
  ],
  followed: [2, 3, 4],
  chats: [
    {
      id: 2,
      name: 'Viet Nguyen',
      content: 'How is your day 1',
      readed: true,
      time: '5 hours ago',
      avatar:
        'https://scontent.foko1-1.fna.fbcdn.net/v/t1.6435-9/132962330_1244668259302439_4994385489412702550_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=KtkjTea2aNUAX-nKi39&_nc_oc=AQmyqnOQmmwHyseCP4Gt0oNiBY6A_Hxtx4fsMUAQFLYBJr9BRJ1FHA0QNljEDFjVdyc&_nc_ht=scontent.foko1-1.fna&oh=00_AfCpwBasmIlwxzQmMDygOowkuYL8DG3aMJ3SNIlgQxz51g&oe=65CC01D4',
    },
    {
      id: 3,
      name: 'Lam Tung',
      content: 'How is your day 2',
      readed: false,
      time: '2 hours ago',
      avatar:
        'https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/415519730_10219287228450003_6401148791212119811_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a73e89&_nc_ohc=jOigQP-X2VsAX-lqWgf&_nc_ht=scontent-nrt1-1.xx&oh=00_AfBG0JLIn1U5FriWLPRl_lUr5CgRM__savJETHaGIP9zPg&oe=65A958BC',
    },
    {
      id: 4,
      name: 'Nam Dang',
      content: 'How is your day 3',
      readed: false,
      time: '5 hours ago',
      avatar:
        'https://scontent.fitm1-1.fna.fbcdn.net/v/t1.6435-9/50524950_1149569658557928_363934332999434240_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=73878a&_nc_ohc=_Dn-EKYXLT8AX97QGl7&_nc_ht=scontent.fitm1-1.fna&oh=00_AfC23HH39Mb6kq_bZ-KnQGkTalAYX5z9aw7HnW6ocTqSVA&oe=65CC047E',
    },
    {
      id: 5,
      name: 'Nam Dang',
      content: 'How is your day 4',
      readed: false,
      time: '1 hours ago',
      avatar:
        'https://scontent.fitm1-1.fna.fbcdn.net/v/t1.6435-9/50524950_1149569658557928_363934332999434240_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=73878a&_nc_ohc=_Dn-EKYXLT8AX97QGl7&_nc_ht=scontent.fitm1-1.fna&oh=00_AfC23HH39Mb6kq_bZ-KnQGkTalAYX5z9aw7HnW6ocTqSVA&oe=65CC047E',
    },
    {
      id: 6,
      name: 'Nam Dang',
      content: 'How is your day 5',
      readed: true,
      time: '4 hours ago',
      avatar:
        'https://scontent.fitm1-1.fna.fbcdn.net/v/t1.6435-9/50524950_1149569658557928_363934332999434240_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=73878a&_nc_ohc=_Dn-EKYXLT8AX97QGl7&_nc_ht=scontent.fitm1-1.fna&oh=00_AfC23HH39Mb6kq_bZ-KnQGkTalAYX5z9aw7HnW6ocTqSVA&oe=65CC047E',
    },
  ],
};