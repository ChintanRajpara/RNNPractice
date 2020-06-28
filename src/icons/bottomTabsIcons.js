import {PixelRatio} from 'react-native';

const home_icon_1 = require('../res/home-black-android/res/drawable-hdpi/baseline_home_black_48.png');
const home_icon_1_5 = require('../res/home-black-android/res/drawable-mdpi/baseline_home_black_48.png');
const home_icon_2 = require('../res/home-black-android/res/drawable-xhdpi/baseline_home_black_48.png');
const home_icon_3 = require('../res/home-black-android/res/drawable-xxhdpi/baseline_home_black_48.png');
const home_icon_3_5 = require('../res/home-black-android/res/drawable-xxxhdpi/baseline_home_black_48.png');

const search_icon_1 = require('../res/search-black-android/res/drawable-hdpi/baseline_search_black_48.png');
const search_icon_1_5 = require('../res/search-black-android/res/drawable-mdpi/baseline_search_black_48.png');
const search_icon_2 = require('../res/search-black-android/res/drawable-xhdpi/baseline_search_black_48.png');
const search_icon_3 = require('../res/search-black-android/res/drawable-xxhdpi/baseline_search_black_48.png');
const search_icon_3_5 = require('../res/search-black-android/res/drawable-xxxhdpi/baseline_search_black_48.png');

const add_circle_icon_1 = require('../res/add_circle-black-android/res/drawable-hdpi/baseline_add_circle_black_48.png');
const add_circle_icon_1_5 = require('../res/add_circle-black-android/res/drawable-mdpi/baseline_add_circle_black_48.png');
const add_circle_icon_2 = require('../res/add_circle-black-android/res/drawable-xhdpi/baseline_add_circle_black_48.png');
const add_circle_icon_3 = require('../res/add_circle-black-android/res/drawable-xxhdpi/baseline_add_circle_black_48.png');
const add_circle_icon_3_5 = require('../res/add_circle-black-android/res/drawable-xxxhdpi/baseline_add_circle_black_48.png');

const notifications_icon_1 = require('../res/notifications-black-android/res/drawable-hdpi/baseline_notifications_black_48.png');
const notifications_icon_1_5 = require('../res/notifications-black-android/res/drawable-mdpi/baseline_notifications_black_48.png');
const notifications_icon_2 = require('../res/notifications-black-android/res/drawable-xhdpi/baseline_notifications_black_48.png');
const notifications_icon_3 = require('../res/notifications-black-android/res/drawable-xxhdpi/baseline_notifications_black_48.png');
const notifications_icon_3_5 = require('../res/notifications-black-android/res/drawable-xxxhdpi/baseline_notifications_black_48.png');

const person_icon_1 = require('../res/person-black-android/res/drawable-hdpi/baseline_person_black_48.png');
const person_icon_1_5 = require('../res/person-black-android/res/drawable-mdpi/baseline_person_black_48.png');
const person_icon_2 = require('../res/person-black-android/res/drawable-xhdpi/baseline_person_black_48.png');
const person_icon_3 = require('../res/person-black-android/res/drawable-xxhdpi/baseline_person_black_48.png');
const person_icon_3_5 = require('../res/person-black-android/res/drawable-xxxhdpi/baseline_person_black_48.png');

let home_icon;
let search_icon;
let add_circle_icon;
let notifications_icon;
let person_icon;

const pixelRatio = PixelRatio.get();

if (pixelRatio <= 1) {
  home_icon = home_icon_1;
  search_icon = search_icon_1;
  add_circle_icon = add_circle_icon_1;
  notifications_icon = notifications_icon_1;
  person_icon = person_icon_1;
} else if (pixelRatio > 1 && pixelRatio <= 1.5) {
  home_icon = home_icon_1_5;
  search_icon = search_icon_1_5;
  add_circle_icon = add_circle_icon_1_5;
  notifications_icon = notifications_icon_1_5;
  person_icon = person_icon_1_5;
} else if (pixelRatio > 1.5 && pixelRatio < 2) {
  home_icon = home_icon_2;
  search_icon = search_icon_2;
  add_circle_icon = add_circle_icon_2;
  notifications_icon = notifications_icon_2;
  person_icon = person_icon_2;
} else if (pixelRatio > 2 && pixelRatio < 3) {
  home_icon = home_icon_3;
  search_icon = search_icon_3;
  add_circle_icon = add_circle_icon_3;
  notifications_icon = notifications_icon_3;
  person_icon = person_icon_3;
} else {
  home_icon = home_icon_3_5;
  search_icon = search_icon_3_5;
  add_circle_icon = add_circle_icon_3_5;
  notifications_icon = notifications_icon_3_5;
  person_icon = person_icon_3_5;
}

export default {
  home_icon,
  search_icon,
  add_circle_icon,
  notifications_icon,
  person_icon,
};
