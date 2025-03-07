const ruBtn = document.getElementById('ru')
const enBtn = document.getElementById('en')
const huBtn = document.getElementById('hu')

const ruBtn1 = document.getElementById('ru-1')
const enBtn1 = document.getElementById('en-1')
const huBtn1 = document.getElementById('hu-1')


function Toen (){
  enBtn.style.color = 'blue'
  huBtn.style.color = 'black'
  ruBtn.style.color = 'black'

  const home = document.getElementById('href-1')
  const photoSession = document.getElementById('href-2')
  const contacts = document.getElementById('href-3')
  home.textContent = 'About me'
  photoSession.textContent = 'Photo Session'
  contacts.textContent = 'Contacts'

  const home1 = document.getElementById('href-1-h')
  const photoSession1 = document.getElementById('href-2-h')
  const contacts1 = document.getElementById('href-3-h')
  home1.textContent = 'About me'
  photoSession1.textContent = 'Photo Session'
  contacts1.textContent = 'Contacts'

  const mainBtn = document.querySelector('.main--contant-contacts')
  mainBtn.textContent = 'Contacts'

  const MainContant = document.querySelector('.main-contant')
  MainContant.textContent = 'Live emotions, natural light and moments that you want to save. I help you open up in front of the camera and create shots that you will want to fall in love with again and again.'

  const aboutTitle = document.querySelector('.about-title')
  aboutTitle.textContent = 'About me'


  const enHome = document.querySelector('.home--contant-en')
  const ruHome = document.querySelector('.home--contant-ru')
  const huHome = document.querySelector('.home--contant-hu')
  enHome.style.display = 'flex'
  ruHome.style.display = 'none'
  huHome.style.display = 'none'

  const enWorkTitle = document.querySelector('.works-title-en')
  const ruWorkTitle = document.querySelector('.works-title-ru')
  const huWorkTitle = document.querySelector('.works-title-hu')
  enWorkTitle.style.display = 'flex'
  ruWorkTitle.style.display = 'none'
  huWorkTitle.style.display = 'none'

  const gtidTitle1 = document.querySelector('.grid-title-1')
  const gtidTitle2 = document.querySelector('.grid-title-2')
  const gtidTitle3 = document.querySelector('.grid-title-3')
  const gtidTitle4 = document.querySelector('.grid-title-4')
  const gtidTitle5 = document.querySelector('.grid-title-5')
  const gtidTitle6 = document.querySelector('.grid-title-6')
  gtidTitle1.textContent = 'Business'
  gtidTitle2.textContent = 'Concerts'
  gtidTitle3.textContent = 'Events'
  gtidTitle4.textContent = 'Personal'
  gtidTitle5.textContent = 'Studio'
  gtidTitle6.textContent = 'Families'

  const footerMenuen = document.querySelector('.footer--menu-en')
  const footerMenuru = document.querySelector('.footer--menu-ru')
  const footerMenuhu = document.querySelector('.footer--menu-hu')
  footerMenuen.style.display = 'flex'
  footerMenuhu.style.display = 'none'
  footerMenuru.style.display = 'none'
}
enBtn.addEventListener('click', Toen)
enBtn1.addEventListener('click', Toen)


function Toru (){
  ruBtn.style.color = 'blue'
  huBtn.style.color = 'black'
  enBtn.style.color = 'black'

  const home = document.getElementById('href-1')
  const photoSession = document.getElementById('href-2')
  const contacts = document.getElementById('href-3')
  home.textContent = 'Обо мне'
  photoSession.textContent = 'Фото сессии'
  contacts.textContent = 'Контакты'

  const home1 = document.getElementById('href-1-h')
  const photoSession1 = document.getElementById('href-2-h')
  const contacts1 = document.getElementById('href-3-h')
  home1.textContent = 'Обо мне'
  photoSession1.textContent = 'Фото сессии'
  contacts1.textContent = 'Контакты'


  const mainBtn = document.querySelector('.main--contant-contacts')
  mainBtn.textContent = 'Контакты'

  const MainContant = document.querySelector('.main-contant')
  MainContant.textContent = 'Живые эмоции, естественный свет и моменты, которые хочется сохранить. Помогаю вам раскрыться перед камерой и создаю кадры, в которые захочется влюбляться снова и снова.'

  const aboutTitle = document.querySelector('.about-title')
  aboutTitle.textContent = 'Обо мне'


  const enHome = document.querySelector('.home--contant-en')
  const ruHome = document.querySelector('.home--contant-ru')
  const huHome = document.querySelector('.home--contant-hu')
  enHome.style.display = 'none'
  ruHome.style.display = 'flex'
  huHome.style.display = 'none'

  const enWorkTitle = document.querySelector('.works-title-en')
  const ruWorkTitle = document.querySelector('.works-title-ru')
  const huWorkTitle = document.querySelector('.works-title-hu')
  enWorkTitle.style.display = 'none'
  ruWorkTitle.style.display = 'flex'
  huWorkTitle.style.display = 'none'

  const gtidTitle1 = document.querySelector('.grid-title-1')
  const gtidTitle2 = document.querySelector('.grid-title-2')
  const gtidTitle3 = document.querySelector('.grid-title-3')
  const gtidTitle4 = document.querySelector('.grid-title-4')
  const gtidTitle5 = document.querySelector('.grid-title-5')
  const gtidTitle6 = document.querySelector('.grid-title-6')
  gtidTitle1.textContent = 'Бизнес'
  gtidTitle2.textContent = 'Концертные'
  gtidTitle3.textContent = 'Мероприятия'
  gtidTitle4.textContent = 'Персональные'
  gtidTitle5.textContent = 'Студийные'
  gtidTitle6.textContent = 'Семейные'

  const footerMenuen = document.querySelector('.footer--menu-en')
  const footerMenuru = document.querySelector('.footer--menu-ru')
  const footerMenuhu = document.querySelector('.footer--menu-hu')
  footerMenuen.style.display = 'none'
  footerMenuhu.style.display = 'none'
  footerMenuru.style.display = 'flex'
}
ruBtn.addEventListener('click', Toru)
ruBtn1.addEventListener('click', Toru)


function Tohu (){
  huBtn.style.color = 'blue'
  enBtn.style.color = 'black'
  ruBtn.style.color = 'black'

  const home = document.getElementById('href-1')
  const photoSession = document.getElementById('href-2')
  const contacts = document.getElementById('href-3')
  home.textContent = 'Rólam'
  photoSession.textContent = 'Fotózás'
  contacts.textContent = 'Kapcsolatokat'

  const home1 = document.getElementById('href-1-h')
  const photoSession1 = document.getElementById('href-2-h')
  const contacts1 = document.getElementById('href-3-h')
  home1.textContent = 'Rólam'
  photoSession1.textContent = 'Fotózás'
  contacts1.textContent = 'Kapcsolatokat'


  const mainBtn = document.querySelector('.main--contant-contacts')
  mainBtn.textContent = 'Kapcsolatokat'

  const MainContant = document.querySelector('.main-contant')
  MainContant.textContent = 'Őszinte érzelmek, természetes fény és pillanatok, amelyeket örökre megőriznél. Segítek, hogy felszabadultan érezd magad a kamera előtt, és olyan képeket készítek, amelyekbe újra és újra beleszeretsz.'

  const aboutTitle = document.querySelector('.about-title')
  aboutTitle.textContent = 'Rólam'


  const enHome = document.querySelector('.home--contant-en')
  const ruHome = document.querySelector('.home--contant-ru')
  const huHome = document.querySelector('.home--contant-hu')
  enHome.style.display = 'none'
  ruHome.style.display = 'none'
  huHome.style.display = 'flex'

  const enWorkTitle = document.querySelector('.works-title-en')
  const ruWorkTitle = document.querySelector('.works-title-ru')
  const huWorkTitle = document.querySelector('.works-title-hu')
  enWorkTitle.style.display = 'none'
  ruWorkTitle.style.display = 'none'
  huWorkTitle.style.display = 'flex'

  const gtidTitle1 = document.querySelector('.grid-title-1')
  const gtidTitle2 = document.querySelector('.grid-title-2')
  const gtidTitle3 = document.querySelector('.grid-title-3')
  const gtidTitle4 = document.querySelector('.grid-title-4')
  const gtidTitle5 = document.querySelector('.grid-title-5')
  const gtidTitle6 = document.querySelector('.grid-title-6')
  gtidTitle1.textContent = 'Üzleti'
  gtidTitle2.textContent = 'Koncert'
  gtidTitle3.textContent = 'Események'
  gtidTitle4.textContent = 'Személyes'
  gtidTitle5.textContent = 'Stúdió'
  gtidTitle6.textContent = 'Családok'

  const footerMenuen = document.querySelector('.footer--menu-en')
  const footerMenuru = document.querySelector('.footer--menu-ru')
  const footerMenuhu = document.querySelector('.footer--menu-hu')
  footerMenuen.style.display = 'none'
  footerMenuhu.style.display = 'flex'
  footerMenuru.style.display = 'none'
}
huBtn.addEventListener('click', Tohu)
huBtn1.addEventListener('click', Tohu)


/*------------------------------------------------------------------*/
const adaptivePanel = document.querySelector('.adaptive-menu-block')
const openPanel = document.querySelector('.open-panel')
openPanel.addEventListener('click', function(){
  adaptivePanel.style.marginTop = '0'
})

const closePanel = document.querySelector('.close-panel')
closePanel.addEventListener('click', function(){
  adaptivePanel.style.marginTop = '-300%'
})


const home = document.getElementById('href-1')
const photoSession = document.getElementById('href-2')
const contacts = document.getElementById('href-3')
home.addEventListener('click', function(){
  adaptivePanel.style.marginTop = '-300%'
})
photoSession.addEventListener('click', function(){
  adaptivePanel.style.marginTop = '-300%'
})
contacts.addEventListener('click', function(){
  adaptivePanel.style.marginTop = '-300%'
})
