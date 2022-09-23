const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const ejemplo = require('../sample.json');


router.get('/', (req, res) => {
    res.json(ejemplo)
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('RECIBIDO');
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    console.log(req.params);
    _.each(ejemplo, (persona, i) => {
        if (persona.id == id){
            res.send(persona);
        }
    })
    
});

router.put('/:id', (req,res) =>{
    const {id} = req.params;
    const {name, carnet} = req.body;
    _.each(ejemplo, (persona, i) => {
        if (persona.id == id){
            persona.name = name;
            persona.carnet = carnet;
        }
    })
    res.send(ejemplo);
})

module.exports = router;