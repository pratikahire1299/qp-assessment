
const Validations = require('src/validations/glossaries.validations');
const GlossaryFactory = require('src/service/glossaries.service');

const AddNewGlossary = {
  description: 'Add new glossary api',
  tags: ['Glossary Management'],
  validate: Validations.add_glossary,
  handler: async (request, h) => GlossaryFactory.AddNewGlossary(request, h),
};

const GetGlossaries  = {
    description: 'Get glossaries api',
    tags: ['Glossary Management'],
    validate: Validations.get_glossaries,
    handler: async (request, h) => GlossaryFactory.GetGlossaries(request, h),
  };

const UpdateGlossary = {
  description: 'Update glossary api',
  tags: ['Glossary Management'],
  validate: Validations.update_glossary,
  handler: async (request, h) => GlossaryFactory.UpdateGlossary(request, h),
};

const GetGlossary  = {
  description: 'Get glossary api',
  tags: ['Glossary Management'],
  validate: Validations.get_glossary,
  handler: async (request, h) => GlossaryFactory.GetGlossary(request, h),
};

 const DeleteGlossary = {
  description: 'Delete glossary api',
  tags: ['Glossary Management'],
  validate: Validations.delete_glossary,
  handler: async (request, h) => GlossaryFactory.DeleteGlossary(request, h),
};


module.exports = {
  AddNewGlossary,
  UpdateGlossary,
  GetGlossaries,
  GetGlossary,
  DeleteGlossary
}