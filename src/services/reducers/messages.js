const initialState = {
    messagesArray: [
        {id:1, messages: [
          {isOwner:true, text: 'Что,  Мансур,  не жарко теперь тебе?', timeStamp: '22:51'},
          {isOwner:false, text: 'Спрашиваю, не жарко ему теперь?', timeStamp: '22:51'},
          {isOwner:false, text: 'Какой полк?', timeStamp: '22:51'},
          {isOwner:true, text: 'Тысяча тридцать четвертый.', timeStamp: '22:51'},
          {isOwner:true, text: 'Вези дальше. Тут тысяча двадцать шестой.', timeStamp: '22:51'}
        ]},
        {id:2, messages: [
          {isOwner:true, text: 'Какая санрота?', timeStamp: '21:15'},
          {isOwner:false, text: 'Тысяча тридцать шестая.', timeStamp: '21:15'},
          {isOwner:false, text: 'Значит, наша! Принимай тяжелораненого!', timeStamp: '21:15'},
          {isOwner:true, text: 'Сколько фрицев в котле?', timeStamp: '21:15'},
          {isOwner:false, text: 'Тысяч сорок.', timeStamp: '21:15'}
        ]},
        {id:3, messages: [
          {isOwner:false, text: 'Чем же он отравился?', timeStamp: '21:17'},
          {isOwner:true, text: 'А вон, видишь, что-то из тех бутылей выпил.', timeStamp: '21:17'},
          {isOwner:false, text: 'Ну что, Мансур, как дела?', timeStamp: '21:14'},
          {isOwner:true, text: 'Фашисты прорвали оборону.', timeStamp: '21:24'},
          {isOwner:false, text: 'Так а что мы с тобой сидим?!', timeStamp: '21:47'}
        ]},
        {id:4, messages: [
          {isOwner:false, text: 'Куда их?', timeStamp: '21:17'},
          {isOwner:true, text: 'В Гумрак', timeStamp: '21:17'},
          {isOwner:false, text: 'Комсорг, а не против, если еще по сто?', timeStamp: '21:14'},
          {isOwner:true, text: 'Можно', timeStamp: '21:24'},
          {isOwner:false, text: 'Где брали-то?', timeStamp: '21:47'}
        ]},
        {id:5, messages: [
          {isOwner:false, text: 'Спортсмен?', timeStamp: '21:17'},
          {isOwner:true, text: 'Ага!', timeStamp: '21:17'},
          {isOwner:false, text: 'Во-первых, не "ага", а "так точно"...', timeStamp: '21:14'},
          {isOwner:true, text: 'Виноват,  товарищ  капитан.', timeStamp: '21:24'},
          {isOwner:false, text: 'Во-вторых, какой вид спорта?', timeStamp: '21:47'}
        ]},
      ]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {

        default: {
            return state
        }
    }
}