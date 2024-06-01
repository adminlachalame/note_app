const {Note} = require('../models');

exports.getAllNotes = async (req, res) => {
    try{
        const notes = await Note.findAll();
        res.render('index',{notes});
    }catch(err){
        res.status(500).send({error:err.message});
    }
};

exports.addNote = async (req, res) => {
    const {title, content} = req.body;
    try{
        await Note.create({title, content});
        res.redirect('/');
    }catch(err){
        res.status(500).send({error:err.message});
    }
};
exports.updateNote = async (req, res) => {
    const {id} = req.params;
    const {title, content} = req.body;
    try{
        const note = await Note.findByPk(id);
        if(!note){
            return res.status(404).json({error:'Note not Found'});
        }
        await note.update({title, content});
        res.redirect(`/`);
    }catch (err){
        res.status(500).send({error:err.message});
    }
};
exports.deleteNote = async (req, res) => {
    const {id} = req.params;
    try{
        const note = await Note.findByPk(id);
        if(!note){
            return res.status(404).json({error:'khong tim thay'});
        }
        await note.destroy();
        res.redirect('/');
    }catch (err){
        res.status(500).send({error:err.message});
    }
}

exports.apiDeleteNote = async (req, res) => {
    const {id} = req.params;
    try{
        const note = await Note.findByPk(id);
        if(!note){
            return res.status(404).json({error:'khong tim thay'});
        }
        await note.destroy();
        res.json({message:'Note deleted'});
    }catch (err){
        res.status(500).send({error:err.message});
    }
}