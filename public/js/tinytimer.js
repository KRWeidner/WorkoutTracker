var tinyTimer = require("tiny-timer")
const Timer = require('tiny-timer')
 
const timer = new Timer()
 
timer.on('tick', (ms) => console.log('tick', ms))
timer.on('done', () => console.log('done!'))
timer.on('statusChanged', (status) => console.log('status:', status))
 
timer.start(5000) // run for 5 seconds
