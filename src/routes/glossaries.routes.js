
const GlossariesController = require('src/controller/glossaries.controller');

module.exports = [

 // Admin Side APIS - 
  { method: 'POST', path: '/v1/glossaries', options: GlossariesController.AddNewGlossary },
  { method: 'PUT', path: '/v1/glossaries/{id}', options: GlossariesController.UpdateGlossary },
  { method: 'DELETE', path: '/v1/glossaries/{id}', options: GlossariesController.DeleteGlossary },

  // Admin And User Side APIS - 
  { method: 'GET', path: '/v1/glossaries', options: GlossariesController.GetGlossaries },
  { method: 'GET', path: '/v1/glossaries/{id}', options: GlossariesController.GetGlossary },
];