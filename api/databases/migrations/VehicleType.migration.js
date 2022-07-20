

class VehicleTypeMigration {

    async createTable(Database) {
        let result = await Database.query(`SHOW TABLES LIKE 'vehicle_type'`, [])
        if (result && Array.isArray(result) && result.length > 0) {
            console.log('vehicle_type table already exist.')
        } else {
            const sql = String.raw`
                CREATE TABLE vehicle_type (
                    vehicle_type_id bigint(100) PRIMARY KEY NOT NULL,
                    name varchar(255),
                    description text,
                    status varchar(50),
                    date_time datetime,
                    session_id bigint(100)
                );
            `
            result = await Database.query(sql, [])
            if (result) {
                console.log('vehicle_type table is created.')
            } else {
                console.log('Could not create vehicle_type table. ')
            }
        }
    }
}

module.exports = VehicleTypeMigration