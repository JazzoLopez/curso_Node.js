const studentDAO = require('../DAO/student.dao');

const studentController = {}

studentController.getAll = async(req, res) => {
    studentDAO.getAll()
    .then(students =>{
        res.json(students)//Si fue exitoso devuelve los estudiantes
    }) 
    .catch(err => res.json({
        status: "request failed"//Si tenemos un error devolvemos el error 
    })) 

};
module.exports = studentController;