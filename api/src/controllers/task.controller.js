const db = require("../config/database");

// ==> Function responsible for creating a new 'Task':
exports.createTask = async (req, res) => {
    const { description, completed, important, dateAdded, dateofConclusion} = req.body;
    const { rows }  = await db.query(
        "INSERT INTO task (description, completed, important, dateAdded, dateOfConclusion) VALUES ($1, $2, $3, $4, $5)",
        [description, completed, important, dateAdded, dateofConclusion]
    );

    res.status(201).send({
        message: "Task added successfully.",
        body: {
            task: { description, completed, important, dateAdded, dateofConclusion  }
        },
    });
};