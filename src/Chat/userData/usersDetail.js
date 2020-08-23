const users = [
    {
      name: 'Ram Kumar',
      time: '01:05 AM',
      active:true,
      userImg: 'https://i.ytimg.com/vi/K4zm30yeHHE/maxresdefault.jpg',
      messages: [
        {
          type: 'send',
          value: 'Hi'
        },
        {
          type: 'receive',
          value: 'How are you?'
        }
      ]
    },
    {
      name: 'Prathap Bose',
      time: '02:50 AM',
      active:true,
      userImg: 'https://www.popcultureshocktoys.com/content/images/thumbs/0006453_optimus-prime-classic-series_600.jpeg',
      messages: [
        {
          type: 'send',
          value: 'Hi'
        },
        {
          type: 'receive',
          value: 'I have some work ! I supposed to finish today itself , u guys carry on , i will join from tomorrow onwards'
        },
        {
          type: 'send',
          value: 'It is not good time to talk , you just leave now , we will meet later and discuss about this later'
        },
        {
          type: 'receive',
          value: '',
          attachment:true
        },
        {
          type: 'receive',
          value: 'welcome ! '
        }
      ]
    },
    {
      name: 'Paneer Selvam',
      time: '12:11 PM',
      active:true,
      userImg: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg',
      messages: [
        {
          type: 'send',
          value: 'Hi'
        },
        {
          type: 'receive',
          value: 'See you later!'
        }
      ]
    },
    {
      name: 'Prasanth',
      time: '01:08 PM',
      active:false,
      userImg: 'http://i66.tinypic.com/2qtbqxe.jpg',
      messages: [
        {
          type: 'send',
          value: 'Hi'
        },
        {
          type: 'receive',
          value: 'Come soon!'
        }
      ]
    },
    {
      name: 'Varun Daga',
      time: '05:05 PM',
      active:false,
      userImg: 'https://cdn.vox-cdn.com/thumbor/AYUayCXcqYxHDkR4a1N9azY5c_8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9375391/MV5BYjg1Yjk1MTktYzE5Mi00ODkwLWFkZTQtNTYxYTY3ZDVmMWUxXkEyXkFqcGdeQXVyNjUwNzk3NDc_._V1_.jpg',
      messages: [
        {
          type: 'send',
          value: 'Hi'
        },
        {
          type: 'receive',
          value: 'Happy birthday!'
        }
      ]
    },
    {
      name: 'Ishan Jain',
      time: '06:05 PM',
      active:false,
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzQ3HEvJBpgptB48mdCwRt_BHrmNrDwQiIlrjgJbDKihAV_NI',
      messages: [
        {
          type: 'send',
          value: 'Hi'
        },
        {
          type: 'receive',
          value: 'Let us meet soon'
        }
      ]
    }
  ]

  module.exports = users 