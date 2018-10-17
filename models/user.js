export default (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        full_name: {
            type: DataTypes.STRING(191),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(191),
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(191),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(191),
            allowNull: false
        },
        id_card: {
            type: DataTypes.STRING(191),
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM(['administrator', 'owner']),
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        last_login: {
            type: DataTypes.DATE,
            defaultValue: null
        }
    }, {
            underscored: true
        });

    User.associate = (models) => {
        const { Token, Place } = models;
        User.hasMany(Token, { onDelete: 'cascade' });
        User.hasMany(Place);
    }

    return User;
}