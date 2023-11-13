const NotesSchema = require('../models/Notes');

const createNotes = async (req, resp) => {
    try {
        const { title, description, tag } = req.body;
        const task = await NotesSchema.create({
            user: req.user.id,
            title: title,
            description: description,
            tag: tag,
        });

        resp.send(task);

    }

    catch (error) {
        console.error(error.message);
        resp.status(500).send("Internal Server Error");
    }

}


const getNotes = async (req, resp) => {
    try {
        const userId = req.user.id;
        const task = await NotesSchema.find({ user: userId });
        if (!task)
            console.log("user Not found");
        resp.send(task);
    }
    catch (error) {
        console.error(error.message);
        resp.status(500).send("Internal Server Error");
    }

};

const deleteNotes = async (req, resp) => {
    try {
        // Find the note to be delete and delete it
        let note = await NotesSchema.findById(req.params.id);
        if (!note) { return resp.status(404).send("Not Found") }

        // Allow deletion only if user owns this NotesSchema
        if (note.user.toString() !== req.user.id) {
            return resp.status(401).send("Not Allowed");
        }

        note = await NotesSchema.findByIdAndDelete(req.params.id)
        resp.json({ "Success": "NotesSchema has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        resp.status(500).send("Internal Server Error");
    }
}


module.exports = { createNotes, getNotes, deleteNotes };