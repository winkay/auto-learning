(function() {
  if (document.location.origin === 'http://edu.inspur.com') {
    console.log('I am learning!')
    var autoInterval = setInterval(function () {

      var progress = document.getElementById('ScheduleText').innerText
      if (progress === '100%') {
        console.log(`learning progress is ${progress}, PEACE OUT!`)
        autoInterval && clearInterval(autoInterval)
        return
      }
      RemoveWarningHtml && RemoveWarningHtml();
      console.log('Remove waning, auto learning now!')
    }, 10*1000)
  }
})();