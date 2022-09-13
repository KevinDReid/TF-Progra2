const data = {
  posts: [
    {
      userId: 1,
      username: "kreid",
      userImg:
        "https://i.picsum.photos/id/542/100/100.jpg?hmac=EavgKTsRDE_2g8glcjuC2eb_EcK8WylXYzbiK5i98HU",
      postId: 1,
      postImg: "/images/pizzadough.jpeg",
      likes: 12,
      commentAuthor: ["brian_gomez", "kreid", "fmoche", "luis_navas"],
      comments: [
        "thats a nice dough man",
        "oiasndinas",
        "oiasdnoiasnd",
        "lorem ipsum",
      ],
    },
    {
      userId: 3,
      username: "brian_gomez",
      userImg:
        "https://i.picsum.photos/id/640/100/100.jpg?hmac=w_T17sT5OZPBWOrXtiRegsQxm_lfJ942_gVgOyO5sIY",
      postId: 2,
      postImg: "/images/pizza1.jpeg",
      likes: "249K",
      commentAuthor: ["kreid", "kreid", "luis_navas", "tgrimberg"],
      comments: ["imasmf", "oiasndinas", "oiasdnoiasnd", "lorem ipsum"],
    },
    {
      userId: 1,
      username: "kreid",
      userImg:
        "https://i.picsum.photos/id/542/100/100.jpg?hmac=EavgKTsRDE_2g8glcjuC2eb_EcK8WylXYzbiK5i98HU",
      postId: 3,
      postImg: "/images/tierlist-1.png",
      likes: 6,
      commentAuthor: ["fmoche", "fmoche", "luis_navas", "brian_gomez"],
      comments: [
        "the most awful tier list I have seen in my life",
        "oiasndinas",
        "oiasdnoiasnd",
        "lorem ipsum",
      ],
    },
    {
      userId: 5,
      username: "fmoche",
      userImg:
        "https://i.picsum.photos/id/524/100/100.jpg?hmac=0avlj_3ml3OBJI4GpocHVRDlhSeP6srgGRuPCIUaCy4",
      postId: 4,
      postImg: "/images/pizza-ugi-s.jpeg",
      likes: 53,
      commentAuthor: ["luis_navas", "brian_gomez", "luis_navas", "brian_gomez"],
      comments: ["lmao ugis", "oiasndinas", "oiasdnoiasnd", "lorem ipsum"],
    },
    {
      userId: 4,
      username: "tgrimberg",
      userImg:
        "https://i.picsum.photos/id/964/100/100.jpg?hmac=_id-TbaudbdfOV6_2_XIt8DpumpQJ7SdJFJ-m7Od_wU",
      postId: 5,
      postImg: "/images/pizza-sauce-1.jpeg",
      likes: 15,
      commentAuthor: ["luis_navas", "brian_gomez", "tgrimberg", "brian_gomez"],
      comments: ["nice sauce", "oiasndinas", "oiasdnoiasnd", "lorem ipsum"],
    },
    {
      userId: 3,
      username: "brian_gomez",
      userImg:
        "https://i.picsum.photos/id/640/100/100.jpg?hmac=w_T17sT5OZPBWOrXtiRegsQxm_lfJ942_gVgOyO5sIY",
      postId: 6,
      postImg: "/images/dominos.jpeg",
      likes: "400K",
      commentAuthor: ["tgrimberg", "luis_navas", "brian_gomez", "tgrimberg"],
      comments: ["mmmmmm", "oiasndinas", "oiasdnoiasnd", "lorem ipsum"],
    },
    {
      userId: 2,
      username: "luis_navas",
      userImg:
        "https://i.picsum.photos/id/648/100/100.jpg?hmac=o7JDnU4_1C2PWLUoAnuMYeedPF1TkXhi6jjFJLw_LLo",
      postId: 7,
      postImg: "/images/pizza-sauce-2.webp",
      likes: "1.2M",
      commentAuthor: ["tgrimberg", "tgrimberg", "brian_gomez", "fmoche"],
      comments: [
        "nanana de locos",
        "oiasndinas",
        "oiasdnoiasnd",
        "lorem ipsum",
      ],
    },
    {
      userId: 1,
      username: "kreid",
      userImg:
        "https://i.picsum.photos/id/542/100/100.jpg?hmac=EavgKTsRDE_2g8glcjuC2eb_EcK8WylXYzbiK5i98HU",
      postId: 8,
      postImg: "/images/pizza-hut.jpeg",
      likes: 120,
      commentAuthor: ["fmoche", "luis_navas", "tgrimberg", "brian_gomez"],
      comments: ["siajdoasjd", "oiasndinas", "oiasdnoiasnd", "lorem ipsum"],
    },
    {
      userId: 2,
      username: "luis_navas",
      userImg:
        "https://i.picsum.photos/id/648/100/100.jpg?hmac=o7JDnU4_1C2PWLUoAnuMYeedPF1TkXhi6jjFJLw_LLo",
      postId: 9,
      postImg: "/images/tierlist-2.png",
      likes: "122K",
      commentAuthor: ["luis_navas", "fmoche", "tgrimberg", "fmoche"],
      comments: [
        "Agreed",
        "W",
        "could not have said it better myself",
        "lorem ipsum",
      ],
    },
    {
      userId: 4,
      username: "tgrimberg",
      userImg:
        "https://i.picsum.photos/id/964/100/100.jpg?hmac=_id-TbaudbdfOV6_2_XIt8DpumpQJ7SdJFJ-m7Od_wU",
      postId: 10,
      postImg: "/images/papa-johns.jpeg",
      likes: 135,
      commentAuthor: ["fmoche", "fmoche", "luis_navas", "tgrimberg"],
      comments: ["siajdoasjd", "oiasndinas", "oiasdnoiasnd", "lorem ipsum"],
    },
    {
      userId: 5,
      username: "fmoche",
      userImg:
        "https://i.picsum.photos/id/524/100/100.jpg?hmac=0avlj_3ml3OBJI4GpocHVRDlhSeP6srgGRuPCIUaCy4",
      postId: 11,
      postImg: "/images/pizza-generica.jpeg",
      likes: 163,
      commentAuthor: ["brian_gomez", "fmoche", "tgrimberg", "luis_navas"],
      comments: ["siajdoasjd", "oiasndinas", "oiasdnoiasnd", "lorem ipsum"],
    },
    {
      userId: 2,
      username: "luis_navas",
      userImg:
        "https://i.picsum.photos/id/648/100/100.jpg?hmac=o7JDnU4_1C2PWLUoAnuMYeedPF1TkXhi6jjFJLw_LLo",
      postId: 12,
      postImg: "/images/",
      likes: "526K",
      commentAuthor: ["fmoche", "brian_gomez", "luis_navas", "tgrimberg"],
      comments: ["siajdoasjd", "oiasndinas", "oiasdnoiasnd", "lorem ipsum"],
    },
  ],
  users: [
    {
      username: "kreid",
      name: "juan perez",
      userId: 1,
      password: 0000000,
      email: "asd@asd.com",
      birthday: "01-01-1000",
      dni: 1111111,
      foto: "https://i.picsum.photos/id/542/100/100.jpg?hmac=EavgKTsRDE_2g8glcjuC2eb_EcK8WylXYzbiK5i98HU",
      postNumber: 3,
      followers: 12,
      following: 21,
    },
    {
      username: "luis_navas",
      name: "luis navas",
      userId: 2,
      password: 0000001,
      email: "hola@asd.com",
      birthday: "01-01-1000",
      dni: 1111112,
      foto: "https://i.picsum.photos/id/648/100/100.jpg?hmac=o7JDnU4_1C2PWLUoAnuMYeedPF1TkXhi6jjFJLw_LLo",
      postNumber: 3,
      followers: "1M",
      following: 850,
    },
    {
      username: "brian_gomez",
      name: "brian gomez",
      userId: 3,
      password: 0000010,
      email: "chau@asd.com",
      birthday: "01-01-1000",
      dni: 1111121,
      foto: "https://i.picsum.photos/id/640/100/100.jpg?hmac=w_T17sT5OZPBWOrXtiRegsQxm_lfJ942_gVgOyO5sIY",
      postNumber: 2,
      followers: "872K",
      following: 128,
    },
    {
      username: "tgrimberg",
      name: "sebastian pereira",
      userId: 4,
      password: 0000011,
      email: "gmail@asd.com",
      birthday: "01-01-1000",
      dni: 1111122,
      foto: "https://i.picsum.photos/id/964/100/100.jpg?hmac=_id-TbaudbdfOV6_2_XIt8DpumpQJ7SdJFJ-m7Od_wU",
      postNumber: 2,
      followers: 3238,
      following: 128,
    },
    {
      username: "fmoche",
      name: "silon aubernial",
      userId: 5,
      password: 0000100,
      email: "qwerty@asd.com",
      birthday: "01-01-1000",
      dni: 1111211,
      foto: "https://i.picsum.photos/id/524/100/100.jpg?hmac=0avlj_3ml3OBJI4GpocHVRDlhSeP6srgGRuPCIUaCy4",
      postNumber: 2,
      followers: 2832,
      following: 142,
    },
  ],

  // comentarios: [
  //     {
  //         comentario: 'Genial!!',
  //         quienComento: 'Thiago'
  //     },
  //     {
  //         comentario: '¡Espectacular!',
  //         quienComento: 'Ricardo'
  //     },
  //     {
  //         comentario: 'Wow',
  //         quienComento: 'Kevin'
  //     },
  //     {
  //         comentario: 'Increible',
  //         quienComento: 'Fausto'
  //     },
  // ]

  // <<<<<<< HEAD

  // buscarUsuario: function(userId){
  //     let resultado = []
  //     for (let i = 0; i < users.length; i++) {
  //         const element = users[i].            username;
  //         if (user[i].userId == userId){
  //             resultado.push(element)
  //         }

  //     }
  //     return resultado
  // }

  // =======
  buscarId: function (id) {
    let resultados = [];
    for (let i = 0; i < this.users.length; i++) {
      if (id == this.users[i].userId) {
        resultados.push(this.users[i]);
      }
    }
    return resultados;
  },
  searchImg: function (id) {
    let resultados = [];
    for (let i = 0; i < this.posts.length; i++) {
      if (id == this.posts[i].userId) {
        resultados.push(this.posts[i]);
      }
    }
    return resultados;
  },
  searchImgDetail: function (id) {
    let resultados = [];
    for (let i = 0; i < this.posts.length; i++) {
      if (id == this.posts[i].postId) {
        resultados.push(this.posts[i]);
      }
    }
    return resultados;
  },
  // >>>>>>> 354e346a246a949b52a731836e18d154edf9739e
};
module.exports = data;
