const teacherDAO = require('../DAO/teacher.dao');
const teacherController = {}

teacherController.getAll = async (req, res) => {
    teacherDAO.getAll()
        .then(teachers => {
            res.json(teachers)
        })
        .catch(err => {
            res.json({
                status: "Request failed"
            })
        });
}

teacherController.getOne = async (req, res) => {
    teacherDAO.getOne(req.params.workerNumber)
        .then(teacher => {
            if (teacher != null)
                res.json(teacher)
            else
                res.json({
                    status: "Not found"
                });
        })
        .catch(err => {
            res.json(err);
        })
}

teacherController.insertOne = async (req, res) => {
    teacherDAO.insertOne(req.body)
        .then(result => {
            res.json({
                status: result
            });
        })
        .catch(err => {
            res.json({
                status: "Request failed"
            })
        })
}

teacherController.updateOne = async (req, res) => {
    teacherDAO.updateOne(req.params.workerNumber, req.body)
        .then(result => {
            res.json({
                status: result
            });
        })
        .catch(err => {
            res.json({
                status: "Request failed"
            })
        })
}

teacherController.deleteOne = async (req, res) => {
    teacherDAO.deleteOne(req.params.workerNumber)
    .then(result => {
        res.json({
            status: result
        })
    })
    .catch(err => {
        res.json({
            status: "request failed"
        })
    });

}
module.exports = teacherController;