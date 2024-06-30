import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Subscription extends Model {
    public id!: number;
    public endpoint!: string;
    public p256dh!: string;
    public auth!: string;
}

Subscription.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    endpoint: {
        type: DataTypes.STRING,
        allowNull: false
    },
    p256dh: {
        type: DataTypes.STRING,
        allowNull: false
    },
    auth: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'subscriptions'
});

export default Subscription;
