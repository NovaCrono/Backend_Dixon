const express = require('express');
const {Router} = require('express');
const router = Router();
const Controlador_Proyecto = require('../controladores/Control_Proyecto');
const Controlador_AnteProyecto = require('../controladores/Control_AnteProyecto');
const Controlador_Correcion = require('../controladores/Control_Correcion');
const Controlador_Usuario = require('../controladores/Control_Usuario');

router.get('/viewProyect', Controlador_Proyecto.viewProyect);
router.post('/createProyect', Controlador_Proyecto.createProyect); //----
router.get('/deleteProyect/:id', Controlador_Proyecto.deleteProyect);

router.get('/viewAnteProyect', Controlador_AnteProyecto.viewAnteProyect);
router.post('/createAnteProyect', Controlador_AnteProyecto.createAnteProyect);
router.get('/deleteAnteProyect/:id', Controlador_AnteProyecto.deleteAnteProyect);

router.get('/viewCorrection', Controlador_Correcion.viewCorrection);
router.post('/createCorrection', Controlador_Correcion.createCorrection);

router.get('/viewUser', Controlador_Usuario.viewUser);
router.post('/logIn', Controlador_Usuario.login);

module.exports = router;