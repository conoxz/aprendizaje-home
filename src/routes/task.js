const express = require('express')
const router = express.Router()
const Student = require('../models/Task')
const Task = require('../models/Task')
const User = require('../models/User')


//User
router.get('/user',async(req,res)=>{ //obtener estudiantes
    const user =  await User.find()
    res.json(user);
    console.log(req.session.todo)

})
router.get('/user/:id',async(req,res)=>{
    const user = await User.findById(req.params.id)
    res.json(user)

})

router.post('/user',async(req,res) =>{ // guardar estudiantes
    const user = new Student(req.body)
    await user.save()
    res.json({
        status: "Estudiante Guardado"
    })
})
router.put('/user/:id',async(req,res) =>{ //Actualizar
    await User.findByIdAndUpdate(req.params.id,req.body)
    res.json({
        status: "Cambios realizados"
    })
})
router.delete('/user/:id',async(req,res)=>{ //Eliminar estudiante
    await User.findByIdAndRemove(req.params.id)
    res.json({
        status:"Usuario Eliminado"
    })
})

//student
router.get('/student',async(req,res)=>{ //obtener estudiantes
    const student =  await Student.find()
    res.json(student);
})
router.get('/student/:id',async(req,res)=>{
    const stu = await Student.findById(req.params.id)
    res.json(stu)
})

router.post('/student',async(req,res) =>{ // guardar estudiantes
    const student = new Student(req.body)
    await student.save()
    res.json({
        status: "Estudiante Guardado"
    })
})

router.put('/student/:id',async(req,res) =>{ //Actualizar
    console.log(req.params.id);
    await Student.findByIdAndUpdate(req.params.id,req.body)
    res.json({
        status: "Cambios realizados"
    })
})
router.delete('/student/:id',async(req,res)=>{ //Eliminar estudiante
    await Task.findByIdAndRemove(req.params.id)
    res.json({
        status:"Estudiante Eliminado"
    })
})

module.exports = router