import express from 'express'
import { getAllNewStudents, addStudent } from './src/newStudent.js'
const app = express()
const port = 3002

// Challenges 1

// Challenge 2

//app.get("/lorem", (request, response) => {
    //  response.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit... odio unde.")
    //})
    
    // challenges 3
    //app.get('/user/:name', (req, res) => {
        // const user = req.params
        //res.send(`Welcome back, ${user.name}`)
        //  })
        
        
        // challenge 4
app.get("/students", getAllNewStudents)
app.get('/', (req, res) => {
    res.send('Create new student named, Benson')
})

app.post("/students", addStudent)

app.get('students/:newname', (req, res) => {
      const user = req.params.prezno
      res.send(`Create new student named, ${newname}`)
    })


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})