import request from 'superagent'

export function getRobot (text, cb) {
  request
    .get(`https://robohash.p.mashape.com/index.php?text=${text}`)
    .set('X-Mashape-Key', 'SdsP8G2JX5mshrEyF4C2mXpN2vrep1g0HxqjsnsmWUtTTWOd5m')
    .set('Accept', 'application/json')
    .end((err, res) => {
      console.log(err)
      cb(res.body)
    })
}
