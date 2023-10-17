let newStudents = ["Peter", "Debora", "Treth", "Joella", "Ben" ]

export function getAllNewStudents(req, res){
    res.send(newStudents)
}

export function addStudent(req, res){
    const newStudents = req.body
    students.push(newStudents.name)
    res.status(201).send({ message: "student added.", succes: true})
}

