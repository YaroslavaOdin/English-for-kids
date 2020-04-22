
/*for innerMainSection.js*/
let arrCategory = ['category_A', 'category_B', 'category_C', 'category_D', 'category_E', 'category_F', 'category_G', 'category_H'];
let arrCategoryP = ['Action (Set A)', 'Action (Set B)', 'Action (Set C)', 'Adjective', 'Animal (Set A)', 'Animal (Set B)', 'Clothes', 'Emotion'];
let arrImgCategory = ['assets/category_1/image_1.png', 
        'assets/category_2/image_2.png', 
        'assets/category_3/image_3.png', 
        'assets/category_4/image_4.png', 
        'assets/category_5/image_5.png', 
        'assets/category_6/image_6.png',
        'assets/category_7/image_7.png',
        'assets/category_8/image_8.png'];
/*************************/

/*for innerStatistics.js*/
let arr_th = ['section','word', 'translation', 'number of clicks', 'number of guesses', 'number of mistakes', 'error rate'];

let numb_tr_section = ',3,11,19,27,35,43,51,59,';

let arr_name_section=['Action (Set A)', 'Action (Set B)', 'Action (Set C)', 'Adjective', 'Animal (Set A)', 'Animal (Set B)', 'Clothes', 'Emotion'];

let arr_words_eng=['Cry','Dance','Dive','Draw','Fish','Fly','Hug','Jump','Open','Play','Point','Ride','Run','Sing','Skip','Swim','Argue','Build','Carry','Catch','Drive','Drop','Pull','Push','Big','Small','Fast','Slow','Friendly','Unfriendly','Young','Old','Cat','Chick','Chicken','Dog','Horse','Pig','Rabbit','Sheep','Bird','Elephant','Frog','Giraffe','Lion','Mouse','Turtle','Dolphin','Skirt','Pants','Blouse','Dress','Boot','Shirt','Coat','Shoe','Sad','Angry','Happy','Tired','Surprised','Scared','Smile','Laugh'];
let arr_words_ru=['Плакать','Тацевать','Нырять','Рисовать','Ловить рыбу','Летать','Обнимать','Прыгать','Открывать','Играть','Показывать','Ездить','Бегать','Петь','Прыгать','Плавать','Спорить','Строить','Нести','Ловить','Водить','Падать','Тянуть','Толкать','Большой','Маленький','Быстрый','Медленный','Дружелюбный','Недружелюбный','Молодой','Старый','Кот','Цыпленок','Курица','Собака','Лошадь','Синья','Кролик','Овца','Птица','Слон','Лягушка','Жираф','Лев','Мышь','Черепаха','Дельфин','Юбка','Брюки','Блузка','Платье','Ботинок','Рубашка','Пальто','Туфли','Грустный','Сердитый','Счастливый','Уставший','Удивленный','Испуганный','Улыбка','Смех'];
/*************************/

let arrAudio1 = ['assets/category_1/cry.mp3', 
        'assets/category_1/dance.mp3', 
        'assets/category_1/dive.mp3', 
        'assets/category_1/draw.mp3', 
        'assets/category_1/fish.mp3', 
        'assets/category_1/fly.mp3', 
        'assets/category_1/hug.mp3',
        'assets/category_1/jump.mp3'];
        
let arrAudio2 = ['assets/category_2/open.mp3', 
        'assets/category_2/play.mp3',
        'assets/category_2/point.mp3',
        'assets/category_2/ride.mp3',
        'assets/category_2/run.mp3',
        'assets/category_2/sing.mp3',
        'assets/category_2/skip.mp3',
        'assets/category_2/swim.mp3'];

let arrAudio3 = ['assets/category_3/argue.mp3', 
        'assets/category_3/build.mp3',
        'assets/category_3/carry.mp3',
        'assets/category_3/catch.mp3',
        'assets/category_3/drive.mp3',
        'assets/category_3/drop.mp3',
        'assets/category_3/pull.mp3',
        'assets/category_3/push.mp3'];

let arrAudio4 = ['assets/category_4/big.mp3', 
        'assets/category_4/small.mp3',
        'assets/category_4/fast.mp3',
        'assets/category_4/slow.mp3',
        'assets/category_4/friendly.mp3',
        'assets/category_4/unfriendly.mp3',
        'assets/category_4/young.mp3',
        'assets/category_4/old.mp3'];

let arrAudio5 = ['assets/category_5/cat.mp3', 
        'assets/category_5/chick.mp3',
        'assets/category_5/chicken.mp3',
        'assets/category_5/dog.mp3',
        'assets/category_5/horse.mp3',
        'assets/category_5/pig.mp3',
        'assets/category_5/rabbit.mp3',
        'assets/category_5/sheep.mp3'];

let arrAudio6 = ['assets/category_6/bird.mp3', 
        'assets/category_6/elephant.mp3',
        'assets/category_6/frog.mp3',
        'assets/category_6/giraffe.mp3',
        'assets/category_6/lion.mp3',
        'assets/category_6/mouse.mp3',
        'assets/category_6/turtle.mp3',
        'assets/category_6/dolphin.mp3'];

let arrAudio7 = ['assets/category_7/skirt.mp3', 
        'assets/category_7/pants.mp3',
        'assets/category_7/blouse.mp3',
        'assets/category_7/dress.mp3',
        'assets/category_7/boot.mp3',
        'assets/category_7/shirt.mp3',
        'assets/category_7/coat.mp3',
        'assets/category_7/shoe.mp3'];

let arrAudio8 = ['assets/category_8/sad.mp3', 
        'assets/category_8/angry.mp3',
        'assets/category_8/happy.mp3',
        'assets/category_8/tired.mp3',
        'assets/category_8/surprised.mp3',
        'assets/category_8/scared.mp3',
        'assets/category_8/smile.mp3',
        'assets/category_8/laugh.mp3'];

let arrAudioAll = [arrAudio1, arrAudio2, arrAudio3, arrAudio4, arrAudio5, arrAudio6, arrAudio7, arrAudio8];

let map_img_audio_1 = new Map([
  ['assets/category_1/cry.jpg', arrAudio1[0]],
  ['assets/category_1/dance.jpg', arrAudio1[1]],
  ['assets/category_1/dive.jpg', arrAudio1[2]],
  ['assets/category_1/draw.jpg', arrAudio1[3]],
  ['assets/category_1/fish.jpg', arrAudio1[4]],
  ['assets/category_1/fly.jpg', arrAudio1[5]],
  ['assets/category_1/hug.jpg', arrAudio1[6]],
  ['assets/category_1/jump.jpg', arrAudio1[7]]
]);

let map_img_audio_2 = new Map([
  ['assets/category_2/open.jpg', arrAudio2[0]],
  ['assets/category_2/play.jpg', arrAudio2[1]],
  ['assets/category_2/point.jpg', arrAudio2[2]],
  ['assets/category_2/ride.jpg', arrAudio2[3]],
  ['assets/category_2/run.jpg', arrAudio2[4]],
  ['assets/category_2/sing.jpg', arrAudio2[5]],
  ['assets/category_2/skip.jpg', arrAudio2[6]],
  ['assets/category_2/swim.jpg', arrAudio2[7]]
]);

let map_img_audio_3 = new Map([
  ['assets/category_3/argue.jpg', arrAudio3[0]],
  ['assets/category_3/build.jpg', arrAudio3[1]],
  ['assets/category_3/carry.jpg', arrAudio3[2]],
  ['assets/category_3/catch.jpg', arrAudio3[3]],
  ['assets/category_3/drive.jpg', arrAudio3[4]],
  ['assets/category_3/drop.jpg', arrAudio3[5]],
  ['assets/category_3/pull.jpg', arrAudio3[6]],
  ['assets/category_3/push.jpg', arrAudio3[7]]
]);

let map_img_audio_4 = new Map([
  ['assets/category_4/big.jpg', arrAudio4[0]],
  ['assets/category_4/small.jpg', arrAudio4[1]],
  ['assets/category_4/fast.jpg', arrAudio4[2]],
  ['assets/category_4/slow.jpg', arrAudio4[3]],
  ['assets/category_4/friendly.jpg', arrAudio4[4]],
  ['assets/category_4/unfriendly.jpg', arrAudio4[5]],
  ['assets/category_4/young.jpg', arrAudio4[6]],
  ['assets/category_4/old.jpg', arrAudio4[7]]
]);

let map_img_audio_5 = new Map([
  ['assets/category_5/cat.jpg', arrAudio5[0]],
  ['assets/category_5/chick.jpg', arrAudio5[1]],
  ['assets/category_5/chicken.jpg', arrAudio5[2]],
  ['assets/category_5/dog.jpg', arrAudio5[3]],
  ['assets/category_5/horse.jpg', arrAudio5[4]],
  ['assets/category_5/pig.jpg', arrAudio5[5]],
  ['assets/category_5/rabbit.jpg', arrAudio5[6]],
  ['assets/category_5/sheep.jpg', arrAudio5[7]]
]);

let map_img_audio_6 = new Map([
  ['assets/category_6/bird.jpg', arrAudio6[0]],
  ['assets/category_6/elephant.jpg', arrAudio6[1]],
  ['assets/category_6/frog.jpg', arrAudio6[2]],
  ['assets/category_6/giraffe.jpg', arrAudio6[3]],
  ['assets/category_6/lion.jpg', arrAudio6[4]],
  ['assets/category_6/mouse.jpg', arrAudio6[5]],
  ['assets/category_6/turtle.jpg', arrAudio6[6]],
  ['assets/category_6/dolphin.jpg', arrAudio6[7]]
]);

let map_img_audio_7 = new Map([
  ['assets/category_7/skirt.jpg', arrAudio7[0]],
  ['assets/category_7/pants.jpg', arrAudio7[1]],
  ['assets/category_7/blouse.jpg', arrAudio7[2]],
  ['assets/category_7/dress.jpg', arrAudio7[3]],
  ['assets/category_7/boot.jpg', arrAudio7[4]],
  ['assets/category_7/shirt.jpg', arrAudio7[5]],
  ['assets/category_7/coat.jpg', arrAudio7[6]],
  ['assets/category_7/shoe.jpg', arrAudio7[7]]
]);

let map_img_audio_8 = new Map([
  ['assets/category_8/sad.jpg', arrAudio8[0]],
  ['assets/category_8/angry.jpg', arrAudio8[1]],
  ['assets/category_8/happy.jpg', arrAudio8[2]],
  ['assets/category_8/tired.jpg', arrAudio8[3]],
  ['assets/category_8/surprised.jpg', arrAudio8[4]],
  ['assets/category_8/scared.jpg', arrAudio8[5]],
  ['assets/category_8/smile.jpg', arrAudio8[6]],
  ['assets/category_8/laugh.jpg', arrAudio8[7]]
]);

let map_img_audio_all = [map_img_audio_1, map_img_audio_2, map_img_audio_3, map_img_audio_4, map_img_audio_5, map_img_audio_6, map_img_audio_7, map_img_audio_8];

/*for cookies.js*/
let arr_name_cookie_1 = ['Cry','Dance','Dive','Draw','Fish','Fly','Hug','Jump'];
let arr_name_cookie_2 = ['Open','Play','Point','Ride','Run','Sing','Skip','Swim'];
let arr_name_cookie_3 = ['Argue','Build','Carry','Catch','Drive','Drop','Pull','Push'];
let arr_name_cookie_4 = ['Big','Small','Fast','Slow','Friendly','Unfriendly','Young','Old'];
let arr_name_cookie_5 = ['Cat','Chick','Chicken','Dog','Horse','Pig','Rabbit','Sheep'];
let arr_name_cookie_6 = ['Bird','Elephant','Frog','Giraffe','Lion','Mouse','Turtle','Dolphin'];
let arr_name_cookie_7 = ['Skirt','Pants','Blouse','Dress','Boot','Shirt','Coat','Shoe'];
let arr_name_cookie_8 = ['Sad','Angry','Happy','Tired','Surprised','Scared','Smile','Laugh'];

let arr_name_cookie_success_1 = ['Cry_success','Dance_success','Dive_success','Draw_success','Fish_success','Fly_success','Hug_success','Jump_success'];
let arr_name_cookie_success_2 = ['Open_success','Play_success','Point_success','Ride_success','Run_success','Sing_success','Skip_success','Swim_success'];
let arr_name_cookie_success_3 = ['Argue_success','Build_success','Carry_success','Catch_success','Drive_success','Drop_success','Pull_success','Push_success'];
let arr_name_cookie_success_4 = ['Big_success','Small_success','Fast_success','Slow_success','Friendly_success','Unfriendly_success','Young_success','Old_success'];
let arr_name_cookie_success_5 = ['Cat_success','Chick_success','Chicken_success','Dog_success','Horse_success','Pig_success','Rabbit_success','Sheep_success'];
let arr_name_cookie_success_6 = ['Bird_success','Elephant_success','Frog_success','Giraffe_success','Lion_success','Mouse_success','Turtle_success','Dolphin_success'];
let arr_name_cookie_success_7 = ['Skirt_success','Pants_success','Blouse_success','Dress_success','Boot_success','Shirt_success','Coat_success','Shoe_success'];
let arr_name_cookie_success_8 = ['Sad_success','Angry_success','Happy_success','Tired_success','Surprised_success','Scared_success','Smile_success','Laugh_success'];

let arr_name_cookie_error_1 = ['Cry_error','Dance_error','Dive_error','Draw_error','Fish_error','Fly_error','Hug_error','Jump_error'];
let arr_name_cookie_error_2 = ['Open_error','Play_error','Point_error','Ride_error','Run_error','Sing_error','Skip_error','Swim_error'];
let arr_name_cookie_error_3 = ['Argue_error','Build_error','Carry_error','Catch_error','Drive_error','Drop_error','Pull_error','Push_error'];
let arr_name_cookie_error_4 = ['Big_error','Small_error','Fast_error','Slow_error','Friendly_error','Unfriendly_error','Young_error','Old_error'];
let arr_name_cookie_error_5 = ['Cat_error','Chick_error','Chicken_error','Dog_error','Horse_error','Pig_error','Rabbit_error','Sheep_error'];
let arr_name_cookie_error_6 = ['Bird_error','Elephant_error','Frog_error','Giraffe_error','Lion_error','Mouse_error','Turtle_error','Dolphin_error'];
let arr_name_cookie_error_7 = ['Skirt_error','Pants_error','Blouse_error','Dress_error','Boot_error','Shirt_error','Coat_error','Shoe_error'];
let arr_name_cookie_error_8 = ['Sad_error','Angry_error','Happy_error','Tired_error','Surprised_error','Scared_error','Smile_error','Laugh_error'];

let arr_name_cookie_all = [arr_name_cookie_1, arr_name_cookie_2, arr_name_cookie_3, arr_name_cookie_4, arr_name_cookie_5, arr_name_cookie_6, arr_name_cookie_7, arr_name_cookie_8,
                            arr_name_cookie_success_1, arr_name_cookie_success_2, arr_name_cookie_success_3, arr_name_cookie_success_4, arr_name_cookie_success_5, arr_name_cookie_success_6, arr_name_cookie_success_7, arr_name_cookie_success_8, 
                            arr_name_cookie_error_1, arr_name_cookie_error_2, arr_name_cookie_error_3, arr_name_cookie_error_4, arr_name_cookie_error_5, arr_name_cookie_error_6, arr_name_cookie_error_7, arr_name_cookie_error_8];

let arr_name_cookie_error_all = [arr_name_cookie_error_1, arr_name_cookie_error_2, arr_name_cookie_error_3, arr_name_cookie_error_4, arr_name_cookie_error_5, arr_name_cookie_error_6, arr_name_cookie_error_7, arr_name_cookie_error_8];
/*************************/

let map_img_cookie_1 = new Map([
  ['assets/category_1/cry.jpg', arr_words_eng[0]],
  ['assets/category_1/dance.jpg', arr_words_eng[1]],
  ['assets/category_1/dive.jpg', arr_words_eng[2]],
  ['assets/category_1/draw.jpg', arr_words_eng[3]],
  ['assets/category_1/fish.jpg', arr_words_eng[4]],
  ['assets/category_1/fly.jpg', arr_words_eng[5]],
  ['assets/category_1/hug.jpg', arr_words_eng[6]],
  ['assets/category_1/jump.jpg', arr_words_eng[7]]
]);

let map_img_cookie_2 = new Map([
  ['assets/category_2/open.jpg', arr_words_eng[8]],
  ['assets/category_2/play.jpg', arr_words_eng[9]],
  ['assets/category_2/point.jpg', arr_words_eng[10]],
  ['assets/category_2/ride.jpg', arr_words_eng[11]],
  ['assets/category_2/run.jpg', arr_words_eng[12]],
  ['assets/category_2/sing.jpg', arr_words_eng[13]],
  ['assets/category_2/skip.jpg', arr_words_eng[14]],
  ['assets/category_2/swim.jpg', arr_words_eng[15]]
]);

let map_img_cookie_3 = new Map([
  ['assets/category_3/argue.jpg', arr_words_eng[16]],
  ['assets/category_3/build.jpg', arr_words_eng[17]],
  ['assets/category_3/carry.jpg', arr_words_eng[18]],
  ['assets/category_3/catch.jpg', arr_words_eng[19]],
  ['assets/category_3/drive.jpg', arr_words_eng[20]],
  ['assets/category_3/drop.jpg', arr_words_eng[21]],
  ['assets/category_3/pull.jpg', arr_words_eng[22]],
  ['assets/category_3/push.jpg', arr_words_eng[23]]
]);

let map_img_cookie_4 = new Map([
  ['assets/category_4/big.jpg', arr_words_eng[24]],
  ['assets/category_4/small.jpg', arr_words_eng[25]],
  ['assets/category_4/fast.jpg', arr_words_eng[26]],
  ['assets/category_4/slow.jpg', arr_words_eng[27]],
  ['assets/category_4/friendly.jpg', arr_words_eng[28]],
  ['assets/category_4/unfriendly.jpg', arr_words_eng[29]],
  ['assets/category_4/young.jpg', arr_words_eng[30]],
  ['assets/category_4/old.jpg', arr_words_eng[31]]
]);

let map_img_cookie_5 = new Map([
  ['assets/category_5/cat.jpg', arr_words_eng[32]],
  ['assets/category_5/chick.jpg', arr_words_eng[33]],
  ['assets/category_5/chicken.jpg', arr_words_eng[34]],
  ['assets/category_5/dog.jpg', arr_words_eng[35]],
  ['assets/category_5/horse.jpg', arr_words_eng[36]],
  ['assets/category_5/pig.jpg', arr_words_eng[37]],
  ['assets/category_5/rabbit.jpg', arr_words_eng[38]],
  ['assets/category_5/sheep.jpg', arr_words_eng[39]]
]);

let map_img_cookie_6 = new Map([
  ['assets/category_6/bird.jpg', arr_words_eng[40]],
  ['assets/category_6/elephant.jpg', arr_words_eng[41]],
  ['assets/category_6/frog.jpg', arr_words_eng[42]],
  ['assets/category_6/giraffe.jpg', arr_words_eng[43]],
  ['assets/category_6/lion.jpg', arr_words_eng[44]],
  ['assets/category_6/mouse.jpg', arr_words_eng[45]],
  ['assets/category_6/turtle.jpg', arr_words_eng[46]],
  ['assets/category_6/dolphin.jpg', arr_words_eng[47]]
]);

let map_img_cookie_7 = new Map([
  ['assets/category_7/skirt.jpg', arr_words_eng[48]],
  ['assets/category_7/pants.jpg', arr_words_eng[49]],
  ['assets/category_7/blouse.jpg', arr_words_eng[50]],
  ['assets/category_7/dress.jpg', arr_words_eng[51]],
  ['assets/category_7/boot.jpg', arr_words_eng[52]],
  ['assets/category_7/shirt.jpg', arr_words_eng[53]],
  ['assets/category_7/coat.jpg', arr_words_eng[54]],
  ['assets/category_7/shoe.jpg', arr_words_eng[55]]
]);

let map_img_cookie_8 = new Map([
  ['assets/category_8/sad.jpg', arr_words_eng[56]],
  ['assets/category_8/angry.jpg', arr_words_eng[57]],
  ['assets/category_8/happy.jpg', arr_words_eng[58]],
  ['assets/category_8/tired.jpg', arr_words_eng[59]],
  ['assets/category_8/surprised.jpg', arr_words_eng[60]],
  ['assets/category_8/scared.jpg', arr_words_eng[61]],
  ['assets/category_8/smile.jpg', arr_words_eng[62]],
  ['assets/category_8/laugh.jpg', arr_words_eng[63]]
]);

let map_img_cookie_all =[map_img_cookie_1, map_img_cookie_2, map_img_cookie_3, map_img_cookie_4, map_img_cookie_5, map_img_cookie_6, map_img_cookie_7, map_img_cookie_8];

/*for innerCategorySection.js*/
let map_card_11 = new Map([
  ['idCard', 'card_11'],
  ['idFront', 'front_card_11'],
  ['audioPl', "audioPlay('assets/category_1/cry.mp3')"],
  ['srcImg', 'assets/category_1/cry.jpg'],
  ['textP1', 'Cry'],
  ['textP2', 'Плакать']
]);

let map_card_12 = new Map([
  ['idCard', 'card_12'],
  ['idFront', 'front_card_12'],
  ['audioPl', "audioPlay('assets/category_1/dance.mp3')"],
  ['srcImg', 'assets/category_1/dance.jpg'],
  ['textP1', 'Dance'],
  ['textP2', 'Тацевать']
]);

let map_card_13 = new Map([
  ['idCard', 'card_13'],
  ['idFront', 'front_card_13'],
  ['audioPl', "audioPlay('assets/category_1/dive.mp3')"],
  ['srcImg', 'assets/category_1/dive.jpg'],
  ['textP1', 'Dive'],
  ['textP2', 'Нырять']
]);

let map_card_14 = new Map([
  ['idCard', 'card_14'],
  ['idFront', 'front_card_14'],
  ['audioPl', "audioPlay('assets/category_1/draw.mp3')"],
  ['srcImg', 'assets/category_1/draw.jpg'],
  ['textP1', 'Draw'],
  ['textP2', 'Рисовать']
]);

let map_card_15 = new Map([
  ['idCard', 'card_15'],
  ['idFront', 'front_card_15'],
  ['audioPl', "audioPlay('assets/category_1/fish.mp3')"],
  ['srcImg', 'assets/category_1/fish.jpg'],
  ['textP1', 'Fish'],
  ['textP2', 'Ловить рыбу']
]);

let map_card_16 = new Map([
  ['idCard', 'card_16'],
  ['idFront', 'front_card_16'],
  ['audioPl', "audioPlay('assets/category_1/fly.mp3')"],
  ['srcImg', 'assets/category_1/fly.jpg'],
  ['textP1', 'Fly'],
  ['textP2', 'Летать']
]);

let map_card_17 = new Map([
  ['idCard', 'card_17'],
  ['idFront', 'front_card_17'],
  ['audioPl', "audioPlay('assets/category_1/hug.mp3')"],
  ['srcImg', 'assets/category_1/hug.jpg'],
  ['textP1', 'Hug'],
  ['textP2', 'Обнимать']
]);

let map_card_18 = new Map([
  ['idCard', 'card_18'],
  ['idFront', 'front_card_18'],
  ['audioPl', "audioPlay('assets/category_1/jump.mp3')"],
  ['srcImg', 'assets/category_1/jump.jpg'],
  ['textP1', 'Jump'],
  ['textP2', 'Прыгать']
]);

let map_cards1 = new Map([
  ['map_card_11', map_card_11],
  ['map_card_12', map_card_12],
  ['map_card_13', map_card_13],
  ['map_card_14', map_card_14],
  ['map_card_15', map_card_15],
  ['map_card_16', map_card_16],
  ['map_card_17', map_card_17],
  ['map_card_18', map_card_18],
]);

let map_card_21 = new Map([
  ['idCard', 'card_21'],
  ['idFront', 'front_card_21'],
  ['audioPl', "audioPlay('assets/category_2/open.mp3')"],
  ['srcImg', 'assets/category_2/open.jpg'],
  ['textP1', 'Open'],
  ['textP2', 'Открывать']
]);

let map_card_22 = new Map([
  ['idCard', 'card_22'],
  ['idFront', 'front_card_22'],
  ['audioPl', "audioPlay('assets/category_2/play.mp3')"],
  ['srcImg', 'assets/category_2/play.jpg'],
  ['textP1', 'Play'],
  ['textP2', 'Играть']
]);

let map_card_23 = new Map([
  ['idCard', 'card_23'],
  ['idFront', 'front_card_23'],
  ['audioPl', "audioPlay('assets/category_2/point.mp3')"],
  ['srcImg', 'assets/category_2/point.jpg'],
  ['textP1', 'Point'],
  ['textP2', 'Показывать']
]);

let map_card_24 = new Map([
  ['idCard', 'card_24'],
  ['idFront', 'front_card_24'],
  ['audioPl', "audioPlay('assets/category_2/ride.mp3')"],
  ['srcImg', 'assets/category_2/ride.jpg'],
  ['textP1', 'Ride'],
  ['textP2', 'Ездать']
]);

let map_card_25 = new Map([
  ['idCard', 'card_25'],
  ['idFront', 'front_card_25'],
  ['audioPl', "audioPlay('assets/category_2/run.mp3')"],
  ['srcImg', 'assets/category_2/run.jpg'],
  ['textP1', 'Run'],
  ['textP2', 'Бегать']
]);

let map_card_26 = new Map([
  ['idCard', 'card_26'],
  ['idFront', 'front_card_26'],
  ['audioPl', "audioPlay('assets/category_2/sing.mp3')"],
  ['srcImg', 'assets/category_2/sing.jpg'],
  ['textP1', 'Sing'],
  ['textP2', 'Петь']
]);

let map_card_27 = new Map([
  ['idCard', 'card_27'],
  ['idFront', 'front_card_27'],
  ['audioPl', "audioPlay('assets/category_2/skip.mp3')"],
  ['srcImg', 'assets/category_2/skip.jpg'],
  ['textP1', 'Skip'],
  ['textP2', 'Прыгать']
]);

let map_card_28 = new Map([
  ['idCard', 'card_28'],
  ['idFront', 'front_card_28'],
  ['audioPl', "audioPlay('assets/category_2/swim.mp3')"],
  ['srcImg', 'assets/category_2/swim.jpg'],
  ['textP1', 'Swim'],
  ['textP2', 'Плавать']
]);

let map_cards2 = new Map([
  ['map_card_21', map_card_21],
  ['map_card_22', map_card_22],
  ['map_card_23', map_card_23],
  ['map_card_24', map_card_24],
  ['map_card_25', map_card_25],
  ['map_card_26', map_card_26],
  ['map_card_27', map_card_27],
  ['map_card_28', map_card_28],
]);

let map_card_31 = new Map([
  ['idCard', 'card_31'],
  ['idFront', 'front_card_31'],
  ['audioPl', "audioPlay('assets/category_3/argue.mp3')"],
  ['srcImg', 'assets/category_3/argue.jpg'],
  ['textP1', 'Argue'],
  ['textP2', 'Спорить']
]);

let map_card_32 = new Map([
  ['idCard', 'card_32'],
  ['idFront', 'front_card_32'],
  ['audioPl', "audioPlay('assets/category_3/build.mp3')"],
  ['srcImg', 'assets/category_3/build.jpg'],
  ['textP1', 'Build'],
  ['textP2', 'Строить']
]);

let map_card_33 = new Map([
  ['idCard', 'card_33'],
  ['idFront', 'front_card_33'],
  ['audioPl', "audioPlay('assets/category_3/carry.mp3')"],
  ['srcImg', 'assets/category_3/carry.jpg'],
  ['textP1', 'Carry'],
  ['textP2', 'Нести']
]);

let map_card_34 = new Map([
  ['idCard', 'card_34'],
  ['idFront', 'front_card_34'],
  ['audioPl', "audioPlay('assets/category_3/catch.mp3')"],
  ['srcImg', 'assets/category_3/catch.jpg'],
  ['textP1', 'Catch'],
  ['textP2', 'Ловить']
]);

let map_card_35 = new Map([
  ['idCard', 'card_35'],
  ['idFront', 'front_card_35'],
  ['audioPl', "audioPlay('assets/category_3/drive.mp3')"],
  ['srcImg', 'assets/category_3/drive.jpg'],
  ['textP1', 'Drive'],
  ['textP2', 'Водить']
]);

let map_card_36 = new Map([
  ['idCard', 'card_36'],
  ['idFront', 'front_card_36'],
  ['audioPl', "audioPlay('assets/category_3/drop.mp3')"],
  ['srcImg', 'assets/category_3/drop.jpg'],
  ['textP1', 'Drop'],
  ['textP2', 'Падать']
]);

let map_card_37 = new Map([
  ['idCard', 'card_37'],
  ['idFront', 'front_card_37'],
  ['audioPl', "audioPlay('assets/category_3/pull.mp3')"],
  ['srcImg', 'assets/category_3/pull.jpg'],
  ['textP1', 'Pull'],
  ['textP2', 'Тянуть']
]);

let map_card_38 = new Map([
  ['idCard', 'card_38'],
  ['idFront', 'front_card_38'],
  ['audioPl', "audioPlay('assets/category_3/push.mp3')"],
  ['srcImg', 'assets/category_3/push.jpg'],
  ['textP1', 'Push'],
  ['textP2', 'Толкать']
]);

let map_cards3 = new Map([
  ['map_card_31', map_card_31],
  ['map_card_32', map_card_32],
  ['map_card_33', map_card_33],
  ['map_card_34', map_card_34],
  ['map_card_35', map_card_35],
  ['map_card_36', map_card_36],
  ['map_card_37', map_card_37],
  ['map_card_38', map_card_38],
]);

let map_card_41 = new Map([
  ['idCard', 'card_41'],
  ['idFront', 'front_card_41'],
  ['audioPl', "audioPlay('assets/category_4/big.mp3')"],
  ['srcImg', 'assets/category_4/big.jpg'],
  ['textP1', 'Big'],
  ['textP2', 'Большой']
]);

let map_card_42 = new Map([
  ['idCard', 'card_42'],
  ['idFront', 'front_card_42'],
  ['audioPl', "audioPlay('assets/category_4/small.mp3')"],
  ['srcImg', 'assets/category_4/small.jpg'],
  ['textP1', 'Small'],
  ['textP2', 'Маленький']
]);

let map_card_43 = new Map([
  ['idCard', 'card_43'],
  ['idFront', 'front_card_43'],
  ['audioPl', "audioPlay('assets/category_4/fast.mp3')"],
  ['srcImg', 'assets/category_4/fast.jpg'],
  ['textP1', 'Fast'],
  ['textP2', 'Быстрый']
]);

let map_card_44 = new Map([
  ['idCard', 'card_44'],
  ['idFront', 'front_card_44'],
  ['audioPl', "audioPlay('assets/category_4/slow.mp3')"],
  ['srcImg', 'assets/category_4/slow.jpg'],
  ['textP1', 'Slow'],
  ['textP2', 'Медленный']
]);

let map_card_45 = new Map([
  ['idCard', 'card_45'],
  ['idFront', 'front_card_45'],
  ['audioPl', "audioPlay('assets/category_4/friendly.mp3')"],
  ['srcImg', 'assets/category_4/friendly.jpg'],
  ['textP1', 'Friendly'],
  ['textP2', 'Дружелюбный']
]);

let map_card_46 = new Map([
  ['idCard', 'card_46'],
  ['idFront', 'front_card_46'],
  ['audioPl', "audioPlay('assets/category_4/unfriendly.mp3')"],
  ['srcImg', 'assets/category_4/unfriendly.jpg'],
  ['textP1', 'Unfriendly'],
  ['textP2', 'Недружелюбный']
]);

let map_card_47 = new Map([
  ['idCard', 'card_47'],
  ['idFront', 'front_card_47'],
  ['audioPl', "audioPlay('assets/category_4/young.mp3')"],
  ['srcImg', 'assets/category_4/young.jpg'],
  ['textP1', 'Young'],
  ['textP2', 'Молодой']
]);

let map_card_48 = new Map([
  ['idCard', 'card_48'],
  ['idFront', 'front_card_48'],
  ['audioPl', "audioPlay('assets/category_4/old.mp3')"],
  ['srcImg', 'assets/category_4/old.jpg'],
  ['textP1', 'Old'],
  ['textP2', 'Старый']
]);

let map_cards4 = new Map([
  ['map_card_41', map_card_41],
  ['map_card_42', map_card_42],
  ['map_card_43', map_card_43],
  ['map_card_44', map_card_44],
  ['map_card_45', map_card_45],
  ['map_card_46', map_card_46],
  ['map_card_47', map_card_47],
  ['map_card_48', map_card_48],
]);

let map_card_51 = new Map([
  ['idCard', 'card_51'],
  ['idFront', 'front_card_51'],
  ['audioPl', "audioPlay('assets/category_5/cat.mp3')"],
  ['srcImg', 'assets/category_5/cat.jpg'],
  ['textP1', 'Cat'],
  ['textP2', 'Кот']
]);

let map_card_52 = new Map([
  ['idCard', 'card_52'],
  ['idFront', 'front_card_52'],
  ['audioPl', "audioPlay('assets/category_5/chick.mp3')"],
  ['srcImg', 'assets/category_5/chick.jpg'],
  ['textP1', 'Chick'],
  ['textP2', 'Цыпленок']
]);

let map_card_53 = new Map([
  ['idCard', 'card_53'],
  ['idFront', 'front_card_53'],
  ['audioPl', "audioPlay('assets/category_5/chicken.mp3')"],
  ['srcImg', 'assets/category_5/chicken.jpg'],
  ['textP1', 'Chicken'],
  ['textP2', 'Курица']
]);

let map_card_54 = new Map([
  ['idCard', 'card_54'],
  ['idFront', 'front_card_54'],
  ['audioPl', "audioPlay('assets/category_5/dog.mp3')"],
  ['srcImg', 'assets/category_5/dog.jpg'],
  ['textP1', 'Dog'],
  ['textP2', 'Собака']
]);

let map_card_55 = new Map([
  ['idCard', 'card_55'],
  ['idFront', 'front_card_55'],
  ['audioPl', "audioPlay('assets/category_5/horse.mp3')"],
  ['srcImg', 'assets/category_5/horse.jpg'],
  ['textP1', 'Horse'],
  ['textP2', 'Лошадь']
]);

let map_card_56 = new Map([
  ['idCard', 'card_56'],
  ['idFront', 'front_card_56'],
  ['audioPl', "audioPlay('assets/category_5/pig.mp3')"],
  ['srcImg', 'assets/category_5/pig.jpg'],
  ['textP1', 'Pig'],
  ['textP2', 'Синья']
]);

let map_card_57 = new Map([
  ['idCard', 'card_57'],
  ['idFront', 'front_card_57'],
  ['audioPl', "audioPlay('assets/category_5/rabbit.mp3')"],
  ['srcImg', 'assets/category_5/rabbit.jpg'],
  ['textP1', 'Rabbit'],
  ['textP2', 'Кролик']
]);

let map_card_58 = new Map([
  ['idCard', 'card_58'],
  ['idFront', 'front_card_58'],
  ['audioPl', "audioPlay('assets/category_5/sheep.mp3')"],
  ['srcImg', 'assets/category_5/sheep.jpg'],
  ['textP1', 'Sheep'],
  ['textP2', 'Овца']
]);

let map_cards5 = new Map([
  ['map_card_51', map_card_51],
  ['map_card_52', map_card_52],
  ['map_card_53', map_card_53],
  ['map_card_54', map_card_54],
  ['map_card_55', map_card_55],
  ['map_card_56', map_card_56],
  ['map_card_57', map_card_57],
  ['map_card_58', map_card_58],
]);

let map_card_61 = new Map([
  ['idCard', 'card_61'],
  ['idFront', 'front_card_61'],
  ['audioPl', "audioPlay('assets/category_6/bird.mp3')"],
  ['srcImg', 'assets/category_6/bird.jpg'],
  ['textP1', 'Bird'],
  ['textP2', 'Птица']
]);

let map_card_62 = new Map([
  ['idCard', 'card_62'],
  ['idFront', 'front_card_62'],
  ['audioPl', "audioPlay('assets/category_6/elephant.mp3')"],
  ['srcImg', 'assets/category_6/elephant.jpg'],
  ['textP1', 'Elephant'],
  ['textP2', 'Слон']
]);

let map_card_63 = new Map([
  ['idCard', 'card_63'],
  ['idFront', 'front_card_63'],
  ['audioPl', "audioPlay('assets/category_6/frog.mp3')"],
  ['srcImg', 'assets/category_6/frog.jpg'],
  ['textP1', 'Frog'],
  ['textP2', 'Лягушка']
]);

let map_card_64 = new Map([
  ['idCard', 'card_64'],
  ['idFront', 'front_card_64'],
  ['audioPl', "audioPlay('assets/category_6/giraffe.mp3')"],
  ['srcImg', 'assets/category_6/giraffe.jpg'],
  ['textP1', 'Giraffe'],
  ['textP2', 'Жираф']
]);

let map_card_65 = new Map([
  ['idCard', 'card_65'],
  ['idFront', 'front_card_65'],
  ['audioPl', "audioPlay('assets/category_6/lion.mp3')"],
  ['srcImg', 'assets/category_6/lion.jpg'],
  ['textP1', 'Lion'],
  ['textP2', 'Лев']
]);

let map_card_66 = new Map([
  ['idCard', 'card_66'],
  ['idFront', 'front_card_66'],
  ['audioPl', "audioPlay('assets/category_6/mouse.mp3')"],
  ['srcImg', 'assets/category_6/mouse.jpg'],
  ['textP1', 'Mouse'],
  ['textP2', 'Мышь']
]);

let map_card_67 = new Map([
  ['idCard', 'card_67'],
  ['idFront', 'front_card_67'],
  ['audioPl', "audioPlay('assets/category_6/turtle.mp3')"],
  ['srcImg', 'assets/category_6/turtle.jpg'],
  ['textP1', 'Turtle'],
  ['textP2', 'Черепаха']
]);

let map_card_68 = new Map([
  ['idCard', 'card_68'],
  ['idFront', 'front_card_68'],
  ['audioPl', "audioPlay('assets/category_6/dolphin.mp3')"],
  ['srcImg', 'assets/category_6/dolphin.jpg'],
  ['textP1', 'Dolphin'],
  ['textP2', 'Дельфин']
]);

let map_cards6 = new Map([
  ['map_card_61', map_card_61],
  ['map_card_62', map_card_62],
  ['map_card_63', map_card_63],
  ['map_card_64', map_card_64],
  ['map_card_65', map_card_65],
  ['map_card_66', map_card_66],
  ['map_card_67', map_card_67],
  ['map_card_68', map_card_68],
]);

let map_card_71 = new Map([
  ['idCard', 'card_71'],
  ['idFront', 'front_card_71'],
  ['audioPl', "audioPlay('assets/category_7/skirt.mp3')"],
  ['srcImg', 'assets/category_7/skirt.jpg'],
  ['textP1', 'Skirt'],
  ['textP2', 'Юбка']
]);

let map_card_72 = new Map([
  ['idCard', 'card_72'],
  ['idFront', 'front_card_72'],
  ['audioPl', "audioPlay('assets/category_7/pants.mp3')"],
  ['srcImg', 'assets/category_7/pants.jpg'],
  ['textP1', 'Pants'],
  ['textP2', 'Брюки']
]);

let map_card_73 = new Map([
  ['idCard', 'card_73'],
  ['idFront', 'front_card_73'],
  ['audioPl', "audioPlay('assets/category_7/blouse.mp3')"],
  ['srcImg', 'assets/category_7/blouse.jpg'],
  ['textP1', 'Blouse'],
  ['textP2', 'Блузка']
]);

let map_card_74 = new Map([
  ['idCard', 'card_74'],
  ['idFront', 'front_card_74'],
  ['audioPl', "audioPlay('assets/category_7/dress.mp3')"],
  ['srcImg', 'assets/category_7/dress.jpg'],
  ['textP1', 'Dress'],
  ['textP2', 'Платье']
]);

let map_card_75 = new Map([
  ['idCard', 'card_75'],
  ['idFront', 'front_card_75'],
  ['audioPl', "audioPlay('assets/category_7/boot.mp3')"],
  ['srcImg', 'assets/category_7/boot.jpg'],
  ['textP1', 'Boot'],
  ['textP2', 'Ботинок']
]);

let map_card_76 = new Map([
  ['idCard', 'card_76'],
  ['idFront', 'front_card_76'],
  ['audioPl', "audioPlay('assets/category_7/shirt.mp3')"],
  ['srcImg', 'assets/category_7/shirt.jpg'],
  ['textP1', 'Shirt'],
  ['textP2', 'Рубашка']
]);

let map_card_77 = new Map([
  ['idCard', 'card_77'],
  ['idFront', 'front_card_77'],
  ['audioPl', "audioPlay('assets/category_7/coat.mp3')"],
  ['srcImg', 'assets/category_7/coat.jpg'],
  ['textP1', 'Coat'],
  ['textP2', 'Пальто']
]);

let map_card_78 = new Map([
  ['idCard', 'card_78'],
  ['idFront', 'front_card_78'],
  ['audioPl', "audioPlay('assets/category_7/shoe.mp3')"],
  ['srcImg', 'assets/category_7/shoe.jpg'],
  ['textP1', 'Shoe'],
  ['textP2', 'Туфли']
]);

let map_cards7 = new Map([
  ['map_card_71', map_card_71],
  ['map_card_72', map_card_72],
  ['map_card_73', map_card_73],
  ['map_card_74', map_card_74],
  ['map_card_75', map_card_75],
  ['map_card_76', map_card_76],
  ['map_card_77', map_card_77],
  ['map_card_78', map_card_78],
]);

let map_card_81 = new Map([
  ['idCard', 'card_81'],
  ['idFront', 'front_card_81'],
  ['audioPl', "audioPlay('assets/category_8/sad.mp3')"],
  ['srcImg', 'assets/category_8/sad.jpg'],
  ['textP1', 'Sad'],
  ['textP2', 'Грустный']
]);

let map_card_82 = new Map([
  ['idCard', 'card_82'],
  ['idFront', 'front_card_82'],
  ['audioPl', "audioPlay('assets/category_8/angry.mp3')"],
  ['srcImg', 'assets/category_8/angry.jpg'],
  ['textP1', 'Angry'],
  ['textP2', 'Сердитый']
]);

let map_card_83 = new Map([
  ['idCard', 'card_83'],
  ['idFront', 'front_card_83'],
  ['audioPl', "audioPlay('assets/category_8/happy.mp3')"],
  ['srcImg', 'assets/category_8/happy.jpg'],
  ['textP1', 'Happy'],
  ['textP2', 'Счастливый']
]);

let map_card_84 = new Map([
  ['idCard', 'card_84'],
  ['idFront', 'front_card_84'],
  ['audioPl', "audioPlay('assets/category_8/tired.mp3')"],
  ['srcImg', 'assets/category_8/tired.jpg'],
  ['textP1', 'Tired'],
  ['textP2', 'Уставший']
]);

let map_card_85 = new Map([
  ['idCard', 'card_85'],
  ['idFront', 'front_card_85'],
  ['audioPl', "audioPlay('assets/category_8/surprised.mp3')"],
  ['srcImg', 'assets/category_8/surprised.jpg'],
  ['textP1', 'Surprised'],
  ['textP2', 'Удивленный']
]);

let map_card_86 = new Map([
  ['idCard', 'card_86'],
  ['idFront', 'front_card_86'],
  ['audioPl', "audioPlay('assets/category_8/scared.mp3')"],
  ['srcImg', 'assets/category_8/scared.jpg'],
  ['textP1', 'Scared'],
  ['textP2', 'Испуганный']
]);

let map_card_87 = new Map([
  ['idCard', 'card_87'],
  ['idFront', 'front_card_87'],
  ['audioPl', "audioPlay('assets/category_8/smile.mp3')"],
  ['srcImg', 'assets/category_8/smile.jpg'],
  ['textP1', 'Smile'],
  ['textP2', 'Улыбка']
]);

let map_card_88 = new Map([
  ['idCard', 'card_88'],
  ['idFront', 'front_card_88'],
  ['audioPl', "audioPlay('assets/category_8/laugh.mp3')"],
  ['srcImg', 'assets/category_8/laugh.jpg'],
  ['textP1', 'Laugh'],
  ['textP2', 'Смех']
]);

let map_cards8 = new Map([
  ['map_card_81', map_card_81],
  ['map_card_82', map_card_82],
  ['map_card_83', map_card_83],
  ['map_card_84', map_card_84],
  ['map_card_85', map_card_85],
  ['map_card_86', map_card_86],
  ['map_card_87', map_card_87],
  ['map_card_88', map_card_88],
]);

let arr_cards_all = [map_cards1, map_cards2, map_cards3, map_cards4, map_cards5, map_cards6, map_cards7, map_cards8];