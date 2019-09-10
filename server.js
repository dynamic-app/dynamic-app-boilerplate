/*
 * @server
 * for full server site see: https://github.com/sahat/hackathon-starter
 */

// ----------------------------------------------------- //
// ---------------------- Setup ------------------------ //
// ----------------------------------------------------- //

const express = require('express')
const app = express()

const port = 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// ----------------------------------------------------- //
// ------------------- Website - SPA ------------------- //
// ----------------------------------------------------- //

app.use(express.static(__dirname + '/src'));

app.get(/^(.)*/, (req, res) => {
  res.sendFile(__dirname + '/src/index.html')
})


// ----------------------------------------------------- //
// ------------------- error handler ------------------- //
// ----------------------------------------------------- //

app.use((req, res, next) => {
  const err = new httpError(404)
  return next(err)
})


// ---- (development) ---- //

app.use((err, req, res, next) => {
   res.status(err.status ||  err && err.message ? 400 : 500).send({error: err && err.message ? err.message : err })
   console.log(err && err.message ? err.message : err)
   res.end()
})



// ----------------------------------------------------- //
// --------------------- Contact us -------------------- //
// ----------------------------------------------------- //

// const nodeMailer = require('nodemailer'); // https://nodemailer.com/about/

// const serviceMailUser = 'example@gmail.com';
// const serviceMailPass = 'example@gmail.com';
// const contactIsBlocking = false;

// app.post('/contact-us', async (req, res) => {

//   if (contactIsBlocking) {
//     return;
//   }
  
//   let transporter = nodeMailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 465,
//       secure: true,
//       auth: {
//           user: serviceMailUser,
//           pass: serviceMailPass
//       }
//   });

//   const resData = await transporter.sendMail({
//       from: data.from, // sender address
//       to: serviceMailUser, // list of receivers
//       subject: data.subject, // Subject line
//       text: data.body, // plain text body
//       html: data.htmlBody // html body
//   });
 
//   if (resData) {
//     res.send('succsse');
//   } else {
//     res.send('error');
//   }
// })


// ----------------------------------------------------- //
// ------------------- Upload file ------------------- //
// ----------------------------------------------------- //

// const multer = require('multer'); // install this package before used :)

// const upload = multer({ 
//   storage: multer.diskStorage({
//     destination: __dirname + '/uploads',
//     filename: function (req, file, cb) {
//       cb(null,  Date.now() + '-' + file.originalname)
//     }
//   })
// })

// app.post('/upload', upload.array('files', 12), (req, res) => {
//   res.send(req.files.map(item => {
//     return {
//       originalname: item.originalname,
//       filename: item.filename,
//       filepath: `/uploads/${item.filename}`
//     }
//   }));
// })


// ----------------------------------------------------- //
// ------------------ Server rendering ----------------- //
// ----------------------------------------------------- //

// const puppeteer = require('puppeteer'); // install this package before used :)

// app.use(async (req, res, next) => {
//   const isBoot = ''.test(req.path);
//   if (isBoot) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(req.path);
//     await page.evaluate(() => {
//       res.send(page);
//     });
//     await browser.close();
//   }
// })
