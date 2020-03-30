const request = require('request')
request.post('http://34.204.88.22:8000', {
          json: {     name: 'kim kyuho',
                      todo: 'buy a drink'
                    }
}, (error, res, body) => {
          if (error) {
                      console.error(error)
                      return
                    }
          console.log(`statusCode: ${res.statusCode}`)
          console.log(body)
})
