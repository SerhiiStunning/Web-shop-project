const Router = require('express')
const router = new Router()
// Імпорт роутерів
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const basketRouter = require('./basketRouter')
const basketDevicesRouter = require('./basketDeviceRouter')
const ratingRouter = require('./ratingRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter) 
router.use('/device', deviceRouter)
router.use('/basket', basketRouter)
router.use('/basketdevices', basketDevicesRouter)
router.use('/rating', ratingRouter)

module.exports = router