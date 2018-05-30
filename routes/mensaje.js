var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET mensaje listing. */
router.get('/', function(req, res, next) {
  res.render('mensaje', { title: 'Mensaje' });
});

/*Formulario que diligencia el cliente*/
router.post('/enviar', function(req, res, next){

  var transporter = nodemailer.createTransport(
    {
      service: 'gmail',
      auth:{
        user:'******@gmail.com',//usuario real de gmail 
        pass: '*****'//contraseña del usuario real
      }
    });

    var mailOptions = {
      from: 'Ejemplo Prueba <ejemploprueba@outlook.com>',
      to: '******@gmail.com',//mismo usuario de la línea 17
      subject: 'Datos del Formulario',
      text: 'Se ha enviado un mensaje desde el formulario de mensaje, Nombre: ' + req.body.de + ' E-mail: ' + req.body.email + ' Mensaje: ' + req.body.mensaje,
      html: '<p>Se ha enviado un mensaje desde el formulario de mensaje</p><ul><li>Nombre: ' + req.body.de +'</li><li>E-mail: ' + req.body.email + '</li><li>Mensaje: ' + req.body.mensaje +'</li><ul>'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if(error)
      { 
        console.log(error);        
        res.redirect('/mensaje');       
        /*NOTA: Tener en cuenta que si la cuenta de gmail que se esta usando no tiene la habilitada "Permitir el acceso de aplicaciones menos seguras" saldrá un error y no llegara el mensaje */
      }
      else
      {
        console.log('Mensaje enviado ' + info.response);        
        res.redirect('/');
      }
    });
});

module.exports = router;
