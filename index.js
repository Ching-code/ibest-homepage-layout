const slideMenuTrigger = document.querySelector('.slideMenuTrigger')
const slideMenu = document.querySelector('.outerWrap header')
const logo = document.querySelector('.logo')
const outerLinkList = document.querySelector('.outerLinkList')
const socialBox = document.querySelector('.socialBox')
const languageBox = document.querySelector('.languageBox')
const slideMenuArea = document.querySelector('.slideMenuArea')
const body = document.querySelector('body')

const header = document.querySelector('.outerWrap header')


// 側邊欄切換按鈕點擊事件
slideMenuTrigger.addEventListener('click', () => {
  slideMenu.classList.toggle('slideMenu')
  slideMenuTrigger.classList.toggle('slideMenu')
  slideMenuTrigger.classList.toggle('show')
  logo.classList.toggle('slideMenu')
  outerLinkList.classList.toggle('slideMenu')
  socialBox.classList.toggle('slideMenu')
  slideMenuArea.classList.toggle('show')
  body.classList.toggle('ovh')
})

// 側邊攔 header 滾動顏色變化監聽
window.addEventListener('scroll', function () {
  const bannerArea = document.querySelector('.bannerArea')
  const bannerRect = bannerArea.getBoundingClientRect()

  const elements = [slideMenuTrigger, logo, outerLinkList, socialBox, languageBox]

  elements.forEach(element => {
    const rect = element.getBoundingClientRect()

    if(rect.bottom >= bannerRect.bottom) {
      element.classList.add('scrolled')
    } else {
      element.classList.remove('scrolled')
    }
  })

  const wrap = document.querySelector('header .wrap')
  const wrapRect = wrap.getBoundingClientRect()
  if(wrapRect.top >= bannerRect.bottom) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

// 檢查動畫載入效果
setTimeout(() => {
  const aboutArea = document.querySelector('.aboutArea')
  const titleBoxes = document.querySelectorAll('.titleBox')
  aboutArea.classList.add('show')
  titleBoxes.forEach(titleBox => {
    titleBox.classList.add('show')
  })
  const foodAreas = document.querySelectorAll('.foodArea')
  foodAreas.forEach(foodArea => {
    foodArea.classList.add('show')
  })

  const newsArea = document.querySelector('.newsArea')
  newsArea.classList.add('show')

  const joinArea = document.querySelector('.joinArea')
  joinArea.classList.add('show')

  const footer = document.querySelector('footer')
  footer.classList.add('show')

  const locationArea = document.querySelector('.locationArea')
  locationArea.classList.add('show')
  const locationSecBox = document.querySelector('.locationSecBox')
  locationSecBox.classList.add('show')

  const qualityArea = document.querySelector('.qualityArea')
  qualityArea.classList.add('show')

  const qualityBox = document.querySelector('.qualityBox')
  qualityBox.classList.add('show')
}, 2000)


// 側邊欄 submenu
const nav = document.querySelector('.slideMenuArea .nav')

nav.addEventListener('click', function(e) {
  if(e.target && e.target.tagName === 'SPAN' && window.innerWidth < 1200) {
    const submenu = e.target.nextElementSibling
    if (submenu.classList.contains('show')) {
      submenu.style.height = '0px'
      setTimeout(() => {
        submenu.classList.remove('show')
      }, 600)
    } else {
      submenu.classList.add('show')
      submenu.style.height = submenu.scrollHeight + 'px'
    }
    e.target.parentNode.classList.toggle('open')
  }
})

window.addEventListener('resize', function() {
  if(window.innerWidth >= 1200) {
    const submenus = document.querySelectorAll('.slideMenuArea .submenu')
    submenus.forEach(submenu => {
      submenu.style.height = ''
      submenu.classList.remove('show')
    })
  } else {
    if(!submenu.classList.contains('show')) {
      submenu.style.height = '0px'
    }
  }
})


// privacy 按鈕消失
const privacyArea = document.querySelector('.privacyArea')

const clearPrivacyBtns = document.querySelectorAll('.privacyArea .btn')

clearPrivacyBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    privacyArea.style.display = 'none'
  })
})
