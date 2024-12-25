const AddNewGlossary = async (payload) => {
    // Demo code
    await sequlize.bulkCreate(payload);
};


const GetGlossaries = async (payload) => { 
    // Demo code
    await sequlize.findAll(payload);

}

const GetGlossary = async (payload) => { 
    // Demo code
    await sequlize.findOne(payload);

}

const UpdateGlossary = async (payload) => { 
    // Demo code
    await sequlize.update(payload);

}

const DeleteGlossary = async (payload) => { 
    // Demo code
    await sequlize.destroy(payload);

}


module.exports = {
    AddNewGlossary,
    GetGlossaries,
    GetGlossary,
    UpdateGlossary,
    DeleteGlossary
}