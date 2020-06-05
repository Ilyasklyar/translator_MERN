const {Router} = require('express')
const Vocabulary = require('../models/Vocabulary')
const auth = require('../middleware/auth.middleware')
const router = Router()


router.post('/add', auth, async (req, res) => {
    try{
        const {text,wordTranslate} = req.body

        const textCheck = await Vocabulary.findOne({ textInput: text, owner: req.user.userId})

        if(textCheck) {
            return res.status(400).json({ message: 'данный перевод уже есть в Вашем словаре' })
        }

        const vocabulary = new Vocabulary({ textInput: text, textTranslate: wordTranslate, owner: req.user.userId })
        await vocabulary.save()

        res.status(201).json({ message: 'Текст добавлен в словарь' })

    } catch(e) {
       res.status(500).json({message: 'что-то пошло не так попробуйте снова'})
    }
})

router.get('/', auth, paginatedResults(Vocabulary), async (req, res) => {
    res.json(res.paginatedResults)
})
function paginatedResults(model) {
    return async (req, res, next) => {
      const page = parseInt(req.query.page)
      const limit = parseInt(req.query.limit)
  
      const startIndex = (page - 1) * limit
      const endIndex = page * limit
  
      const results = {}
  
      if (endIndex < await model.countDocuments({ owner: req.user.userId }).exec()) {
        results.next = {
          page: page + 1,
          limit: limit
        }
      }
      results.next = {
        page: page + 1,
        limit: limit
      }
      
      if (startIndex >= 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        }  
      }

      results.page = {
        page: page,
        limit: limit
      }  
      results.countItem = await model.countDocuments({ owner: req.user.userId }).exec()

      try {
        results.results = await model.find({ owner: req.user.userId }).limit(limit).skip(startIndex).exec()
        res.paginatedResults = results
        next()
      } catch (e) {
        res.status(500).json({message: 'что-то пошло не так попробуйте снова'})
      }
    }
  }

router.post('/delete', async (req, res) => {
    try{
        const {id} = req.body
        const text = await Vocabulary.deleteOne({ "_id": id})
        res.json(text)
    } catch(e) {
       res.status(500).json({message: 'что-то пошло не так попробуйте снова'})
    }
})

module.exports = router