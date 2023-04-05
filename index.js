express = require('express')

app = express()



app.get('/index', (req, res) =>{

    
    res.send('Beginning of the Project')

})

app.listen(8000)



