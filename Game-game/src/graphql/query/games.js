  
module.exports = async (_, {}, {models}) => {
    return models.Game.find();
};
