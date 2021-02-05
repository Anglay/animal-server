const express = require('express')
const fs = require('fs');
const path = require('path');

const app = express()
const port = 3000


app.get('/', (req, res) => {
    // const dir = new URL('file:///e:')
    // console.log(dir)
    // fs.readdirSync(dir).forEach(file => {
    //     // const dirFile = path.resolve(dir.pathname,'./'+file)
    //     const state = fs.statSync(`D:\\${file}`)
    // })
    const dir = 'E:\\animal'
    fs.readdirSync(dir).map(file => {
        const dirFile = path.join(dir,file)
        fs.access(dirFile, fs.constants.R_OK | fs.constants.W_OK, (err) => {
            if (err) {
                console.log(err)
            } else {
                const state = fs.statSync(dirFile)
                console.log(state)
            }
        });
    })
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})