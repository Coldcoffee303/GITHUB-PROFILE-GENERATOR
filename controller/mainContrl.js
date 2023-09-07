const { Router } = require("express")

const home = (req, res) => {
    res.render('homepage')
}


const GetGeneratePlain = (req, res) =>{
    res.render('genPlain')
}



const PostResults = (req, res) => {
    const body = req.body;
    const SkillImages = {
      'Django': '/images/django_icon.png',
      'Angular': '/images/angular_icon.png',
      'React': '/images/react_icon.png',
      'Flutter': '/images/flutter_icon.png',
      'AWS': '/images/aws_icon.png',
      'Googlecloud': '/images/googlecloud_icon.png'
    };
  
    const ProgData = {};
    const SkillData = {};
  
    const ProgImages = {
      'Python': '/images/python_icon.png',
      'Java': '/images/java_icon.png',
      'Mongodb': '/images/mongodb_icon.png',
      'Javascript': '/images/js_icon.png'
    };
  
    for (const key in body) {
      if (body[key] === 'on') {
        if (body.hasOwnProperty(key) && ProgImages[key]) {
          ProgData[key] = ProgImages[key];
        } else if (body.hasOwnProperty(key) && SkillImages[key]) {
          SkillData[key] = SkillImages[key];
        }
      }
    }
  
    let htmlContent = `<h1>${body.Name}</h1>`
  
    htmlContent += `<h2>${body.Location}</h2>`
    htmlContent += `<h2>Mail me at ${body.Email}</h2>`
    htmlContent += `<h2>My Best Interests are ${body.Interests}</h2>`
  
    if (Object.keys(ProgData).length > 0) {
      htmlContent += '<div>'
      htmlContent += '<h2>Programming Languages: </h2>'
      htmlContent += '<table>'
      let count = 0;
  
      for (const Progkey in ProgData) {
  
        if (count === 0) {
          htmlContent += '<tr>'
        }
  
        htmlContent += `<td style="border: 1px solid black;" ><img style="height: 75px; width: 75px;" src="${ProgData[Progkey]}"></td>`
        count += 1;
  
        if (count === 12) {
          htmlContent += '</tr>'
          count = 0;
        }
      }
  
  
      htmlContent += '</table>'
      htmlContent += '</div>'
    }
  
    if (Object.keys(SkillData).length > 0) {
      htmlContent += '<div>'
      htmlContent += '<h2>Skills in my Arsenal: </h2>'
      htmlContent += '<table>'
      let count = 0;
  
      for (const Skillkey in SkillData) {
  
        if (count === 0) {
          htmlContent += '<tr>'
        }
  
        htmlContent += `<td style="border: 2px solid black;" ><img style="height: 75px; width: 75px;" src="${SkillData[Skillkey]}"></td>`
        count += 1;
  
        if (count === 12) {
          htmlContent += '</tr>'
          count = 0;
        }
      }
  
  
      htmlContent += '</table>'
      htmlContent += '</div>'
    }
  
    res.send(htmlContent)
  }
  



















module.exports = {home, GetGeneratePlain, PostResults}