function init(sequelize) {
    let glocary = sequelize.sequelize.define('glocary', {
        id: { type: sequelize.DataTypes.STRING, allowNull: false, primaryKey: true, defaultValue: sequelize.DataTypes.UUIDV4 },
        name: { type: sequelize.DataTypes.STRING },
        price: { type: sequelize.DataTypes.STRING },
        description: { type: sequelize.DataTypes.TEXT },
        inventory: { type: sequelize.DataTypes.NUMBER }
    },
        {
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        });
    return { glocary };
};


module.exports = {
    init
};