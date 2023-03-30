const { UUIDV4 } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const image = sequelize.define('image', {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
          },  
          filename: {
            type:DataTypes.STRING,
          },
          filetype: {
            type: DataTypes.STRING
          },
          data: {
            type: DataTypes.BLOB('long')
          }
    },
    {
        timestamps:false,
    });
    return image;
}