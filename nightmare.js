const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

/*
nightmare
  .goto('https://duckduckgo.com')
  .type('#search_form_input_homepage', 'github nightmare')
  .click('#search_button_homepage')
  .wait('#r1-0 a.result__a')
  .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })
  */

  nightmare
  .goto('http://www.sinsangmarket.kr/v2/goodsDetail?gid=15451250')
  .type('#userid', 'rex721209')
  .type('#userpassword', '')
  .click('.loginButton')
  .wait('.mainSwiper')
  .goto('http://www.sinsangmarket.kr/v2/goodsDetail?gid=15451250')
  //.evaluate(() => document.querySelector('#r1-0 a.result__a').href)
  //.end()
  //.then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })