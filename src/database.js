const mongoose = require('mongoose');
//!Cuidado, tienes tu cuenta de mongoose visualizada, esto es una mala practica

mongoose.connect('mongodb+srv://JazzoLopez:rVZ29T6UqNBDrCHv@cluster0.oahxtpe.mongodb.net/ticontrol?retryWrites=true&w=majority&appName=AtlasApp') //Recibe el conecction string 
    .then(db => console.log('Mongodb atlas connected')) //Si fue exitoso
    .catch(err => console.error(err)); //Si tenemos un error
