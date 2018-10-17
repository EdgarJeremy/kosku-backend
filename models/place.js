/**
* File : ./models/Place.js
* Tanggal Dibuat : 10/16/2018, 8:12:00 PM
* Penulis : edgarjeremy
*/

export default (sequelize, DataTypes) => {

    const Place = sequelize.define("place", {
        name: {
            type: DataTypes.STRING(191),
            allowNull: false
        },
        // Fasilitas kamar
        room_length: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        room_width: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        dispenser: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        bed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        wardrobe: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        tv: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        ac: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        desk: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        wifi: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        chair: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        family_stay: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        // Fasilitas Kamar Mandi
        in_bathroom: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        out_bathroom: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        sit_toilet: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        shower: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        // Fasilitas Umum
        living_room: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        kitchen: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        clothesline: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        balcon: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        full_day_access: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        two_wheels_parking: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        four_wheels_parking: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
            underscored: true
        });

    Place.associate = (models) => {
        const { User } = models;
        Place.belongsTo(User, { onDelete: 'cascade' });
    }

    return Place;

}