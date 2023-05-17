// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header =  {
  name: {
    firstname: 'Nelichka',
    lastname: 'Zigmunt',
  },
   position: 'Junior Fullstack JS Developer',
   salary: '$600 в місяць',
   address: 'Istanbul, Turkey',
  }

  var footer = {
    social:{
      email: {
        text: 'nelchik@mail.com',
        href: 'mailto:nelchik@mail.com',
      },
      phone:{
        text: '+380670000774',
        href: 'tel:+380670000774',
      },
      linkedin:{
        text:'linkedIn',
        href:'https://www.linkedin.com/in/dmytro-test',
  },
},
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary', 
    },

    header,

    main: {
      summary:{
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      }, 
  
      experience:{
        title:'Other experience',
        text:'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
        big: false,
      },
    },

    footer,  
  })
})

// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills', 
    },

    header,

    main: {
      skills:[
      {
        name: 'HTML',
        point: 10,
        isTop: true,
      },
      {
        name: 'Handlebars',
        point: 10,
        isTop: false,
      },
      {
        name: 'VS Code',
        point: 10,
      },
      {
        name: 'Git',
        point: 10,
      },
      {
        name: 'Terminal',
        point: 10,
      },
      {
        name: 'NPM',
        point: 10,
      },
      {
        name: 'React JS',
        point: 0,
      },
      {
        name: 'PHP',
        point: null,
      },
     ],
      hobbies:[
        {
          name: 'Reading',
          isMain: true,
        },
        { 
          name: 'Playing piano',
          isMain: false,},
        {
          name: 'Sweeming',
          isMain: false,
        },
      ],
    },

    footer, 
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education', 
    },

    header,

    main: {
      educations: [
            {
            name: 'School',
            isEnd: true,
            },
            {
            name:'Highschool',
            isEnd: false,
            },
            {
              name: 'Univercity',
              isEnd: true,
            },
            {
              name:'Academy',
              isEnd: false,
            },
          ],
     certificates: [
            {
              name: 'English',
              id: 123,
            },
            {
              name: 'Web-Design',
              id: 456,
            },
            {
              name: 'UI/UX',
              id: 789,
            },
        ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work', 
    },

    header,

    main: {
      works:[{
        position: 'Junior Fullstack Developer',
        company: {
          name: 'IT Brains',
          url: 'https://it-brains.com.ua/',
          },
      duration:{
        from: '15.09.2010',
        to: null,
        },
      projectAmount: 3,

      projects: [
        {
          name: 'Resume',
          url: 'https://www.youtube.com/watch?v=zeFW5i1DOYA',
          about: 'Dxdyjfm fnfdyjfy nfjujf dnfjumkgfuym k',
          stacks: [
            {
            name: 'React.js',
            },
            {
            name: 'HTML / CSS',
            },
            {
            name: 'Node.js',
            },
          ],
          stackAmount: 2,
          awards: [
            {
              name: 'Fcgonkifonjkfoipyknoifkniofjm',
            },
            {
              name: 'Certificate dnyjft dtnjty dmufk',
            },
          ],
          awardsAmount: 1,
        }
      ]
      },
      {
        position: 'Junior Fullstack Developer',
        company: {
          name: 'IGM Technology',
          url: null,
        },
      duration:{
        from: '06.03.2019',
        to: '01.09.2020',
      },
      projectAmount: 5,

      projects: [
        {
          name: 'Logoped Kid',
          url: 'https://www.youtube.com/watch?v=zeFW5i1DOYA',
          about: 'Easy talking blablabla bla bla',
          stacks: [
            {
            name: 'React.js',
            },
            {
            name: 'HTML / CSS',
            },
            {
            name: 'Node.js',
            },
          ],
          stackAmount: 2,
          awards: [
            {
              name: 'Awardawardaward 2020',
            },
            {
              name: 'Certificate 2020',
            },
          ],
          awardsAmount: 1,
        }
      ]
      },
      ],
    },

    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
