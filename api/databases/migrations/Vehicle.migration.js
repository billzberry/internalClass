const path = require('path')
const dotenv = require('dotenv')
dotenv.config({ path: path.join(__dirname, `../../.env`)})

class VehicleMigration {

    async createTable(Database) {
        let result = await Database.query(`SHOW TABLES LIKE 'vehicle'`, [])
        if (result && Array.isArray(result) && result.length > 0) {
            console.log('vehicle table already exist.')
        } else {
            const sql = String.raw`
                CREATE TABLE vehicle (
                    vehicle_id bigint(100) PRIMARY KEY NOT NULL,
                    vehicle_type_id bigint(100),
                    brand varchar(255),
                    color text,
                    engine_capacity double(5,2),
                    year_model int,
                    status varchar(50),
                    date_time datetime,
                    session_id bigint(100)
                );
            `
            result = await Database.query(sql, [])
            if (result) {
                console.log('vehicle table is created.')
            } else {
                console.log('Could not create vehicle table. ')
            }
        }
    }

    async createForeignKeys(Database) {
        let result = await Database.query(`SELECT * FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE TABLE_SCHEMA = '${process.env.DB_NAME}' AND TABLE_NAME = 'vehicle' AND CONSTRAINT_NAME LIKE '%ibfk%'`, [])
        if (result && Array.isArray(result) && result.length > 0) {
            console.log('vehicle foreign key already exist.')
        } else {
            const sql = String.raw`
                ALTER TABLE vehicle 
                ADD FOREIGN KEY (vehicle_type_id) 
                REFERENCES vehicle_type(vehicle_type_id);
            `
            result = await Database.query(sql, [])
            if (result) {
                console.log('vehicle table foreign key is created.')
            } else {
                console.log('Could not create vehicle table foreign key. ')
            }
        }
    }
}

module.exports = VehicleMigration