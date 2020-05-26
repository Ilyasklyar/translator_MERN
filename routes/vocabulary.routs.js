const {Router} = require('express')
const Vocabulary = require('../models/Vocabulary')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.get('/hello', function(req, res) {
    res.send('hello wwww');
  });
router.post('/add', auth, async (req, res) => {
    try{
        const {text,wordTranslate} = req.body

        const vocabulary = new Vocabulary({ textInput: text, textTranslate: wordTranslate, owner: req.user.userId })
        await vocabulary.save()

        res.status(201).json({ message: 'Текст сохранен' })
    } catch(e) {
       res.status(500).json({message: 'что-то пошло не так попробуйте снова'})
    }
})

router.get('/', auth, async (req, res) => {
    try{
  
        const text = await Vocabulary.find({ owner: req.user.userId })
        res.json(text)
    } catch(e) {
       res.status(500).json({message: 'что-то пошло не так попробуйте снова'})
    }
})

router.post('/delete', async (req, res) => {
    try{
        const {id} = req.body
        console.log(id)
        const text = await Vocabulary.deleteOne({ "_id": id})
        res.json(text)
    } catch(e) {
       res.status(500).json({message: 'что-то пошло не так попробуйте снова'})
    }
})

module.exports = router