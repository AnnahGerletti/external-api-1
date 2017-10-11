
import request from 'superagent'

export function getRobot(text, cb) {
    request
        .get(`https://robohash.p.mashape.com/index.php?text=${text}`)
        .set('X-Mashape-Key', 'SdsP8G2JX5mshrEyF4C2mXpN2vrep1g0HxqjsnsmWUtTTWOd5m')
        .set('Accept', 'application/json')
        .end((err, res) => {
          console.log(res)
            if (err) {console.log(err + 'error')}
            else {cb(JSON.parse(res.text))}
        })
}

//console.log(res) you find out the that imageUrl tag is on the text key of the response

//the callback returns string in res.text which has been parsed into a JSON obj

//"{\"imageUrl\":\"http:\\/\\/bit.ly\\/2ygavaL\"}" => need to JSON.parse(above) to get it to a json obj

//robot api is configured wrong and sends the wrong data type, see in network tab Content-Type:
//Should be application/json but is text/html
