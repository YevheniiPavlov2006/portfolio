const content = {
  navLinks: {
    home: {
      en: 'About me',
      hu: 'Rólam',
      ru: 'Обо мне',
    },
    photos: {
      en: 'Photo Session',
      hu: 'Fotózás',
      ru: 'Фото сессии',
    },
    contacts: {
      en: 'Contacts',
      hu: 'Kapcsolatokat',
      ru: 'Контакты',
    }
  },
  mainContent: {
    en: 'Live emotions, natural light and moments that you want to save. I help you open up in front of the camera and create shots that you will want to fall in love with again and again.',
    hu: 'Őszinte érzelmek, természetes fény és pillanatok, amelyeket örökre megőriznél. Segítek, hogy felszabadultan érezd magad a kamera előtt, és olyan képeket készítek, amelyekbe újra és újra beleszeretsz.',
    ru: 'Живые эмоции, естественный свет и моменты, которые хочется сохранить. Помогаю вам раскрыться перед камерой и создаю кадры, в которые захочется влюбляться снова и снова.'
  },
  aboutTitle: {
    en: 'About me',
    hu: 'Rólam',
    ru: 'Обо мне'
  },
  workTitles: {
    en: ['Business', 'Concerts', 'Events', 'Personal', 'Studio', 'Families'],
    hu: ['Üzleti', 'Koncert', 'Események', 'Személyes', 'Stúdió', 'Családok'],
    ru: ['Бизнес', 'Концертные', 'Мероприятия', 'Персональные', 'Студийные', 'Семейные']
  }
}

const languageTokens = {
  en: 'en',
  hu: 'hu',
  ru: 'ru'
}

const ruBtn = document.getElementById('ru')
const enBtn = document.getElementById('en')
const huBtn = document.getElementById('hu')

const mapLanguageToButton = {
  [languageTokens.en]: enBtn,
  [languageTokens.ru]: ruBtn,
  [languageTokens.hu]: huBtn,
}
const langButtons = [enBtn, ruBtn, huBtn]

// elements to translate
const ruBtn1 = document.getElementById('ru-1')
const enBtn1 = document.getElementById('en-1')
const huBtn1 = document.getElementById('hu-1')
const home1 = document.getElementById('href-1-h')
const photoSession1 = document.getElementById('href-2-h')
const contacts1 = document.getElementById('href-3-h')

const home = document.getElementById('href-1')
const photoSession = document.getElementById('href-2')
const contacts = document.getElementById('href-3')

const mainBtn = document.querySelector('.main--contant-contacts')
const MainContant = document.querySelector('.main-contant')

const aboutTitle = document.querySelector('.about-title')

const gridTitle1 = document.querySelector('.grid-title-1')
const gridTitle2 = document.querySelector('.grid-title-2')
const gridTitle3 = document.querySelector('.grid-title-3')
const gridTitle4 = document.querySelector('.grid-title-4')
const gridTitle5 = document.querySelector('.grid-title-5')
const gridTitle6 = document.querySelector('.grid-title-6')
const gridTitles = [
  gridTitle1,
  gridTitle2,
  gridTitle3,
  gridTitle4,
  gridTitle5,
  gridTitle6
]

const enHome = document.querySelector('.home--contant-en')
const ruHome = document.querySelector('.home--contant-ru')
const huHome = document.querySelector('.home--contant-hu')

const mapLanguageToHome = {
  [languageTokens.en]: enHome,
  [languageTokens.ru]: ruHome,
  [languageTokens.hu]: huHome,
}
const languageHomes = [enHome, ruHome, huHome]

const enWorkTitle = document.querySelector('.works-title-en')
const ruWorkTitle = document.querySelector('.works-title-ru')
const huWorkTitle = document.querySelector('.works-title-hu')

const mapLanguageToTitle = {
  [languageTokens.en]: enWorkTitle,
  [languageTokens.ru]: ruWorkTitle,
  [languageTokens.hu]: huWorkTitle,
}
const languageTitles = [enWorkTitle, ruWorkTitle, huWorkTitle]

const footerMenuen = document.querySelector('.footer--menu-en')
const footerMenuru = document.querySelector('.footer--menu-ru')
const footerMenuhu = document.querySelector('.footer--menu-hu')

const mapLanguageToFooterMenu = {
  [languageTokens.en]: footerMenuen,
  [languageTokens.ru]: footerMenuru,
  [languageTokens.hu]: footerMenuhu,
}
const languageFooterMenus = [footerMenuen, footerMenuru, footerMenuhu]

function updateLanguage(token) {
  langButtons.forEach(btn => btn.style.color = 'black')
  mapLanguageToButton[token].style.color = 'blue'
  
  home.textContent = content.navLinks.home[token]
  photoSession.textContent = content.navLinks.photos[token]
  contacts.textContent = content.navLinks.home[token]
  
  home1.textContent = content.navLinks.home[token]
  photoSession1.textContent = content.navLinks.photos[token]
  contacts1.textContent = content.navLinks.contacts[token]

  mainBtn.textContent = content.navLinks.contacts[token]

  MainContant.textContent = content.mainContent[token]

  aboutTitle.textContent = content.aboutTitle[token]

  languageHomes.forEach(link => {
    link.style.display = 'none'
  })
  console.log(mapLanguageToHome[token].style);
  
  mapLanguageToHome[token].style.display = 'flex'

  languageTitles.forEach(link => {
    link.style.display = 'none'
  })
  mapLanguageToTitle[token].style.display = 'flex'

  gridTitles.forEach((title, index) => {
    title.textContent = content.workTitles[token][index]
  })

  languageFooterMenus.forEach(link => {
    link.style.display = 'none'
  })
  mapLanguageToFooterMenu[token].style.display = 'flex'
}

enBtn.addEventListener('click', () => updateLanguage(languageTokens.en))
enBtn1.addEventListener('click', () => updateLanguage(languageTokens.en))

ruBtn.addEventListener('click', () => updateLanguage(languageTokens.ru))
ruBtn1.addEventListener('click', () => updateLanguage(languageTokens.ru))

huBtn.addEventListener('click', () => updateLanguage(languageTokens.hu))
huBtn1.addEventListener('click', () => updateLanguage(languageTokens.hu))


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

home.addEventListener('click', function(){
  adaptivePanel.style.marginTop = '-300%'
})
photoSession.addEventListener('click', function(){
  adaptivePanel.style.marginTop = '-300%'
})
contacts.addEventListener('click', function(){
  adaptivePanel.style.marginTop = '-300%'
})


