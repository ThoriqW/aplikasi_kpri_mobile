const pool = require('../configs/db');

const getOrganizationByRole = (role, callback) => {
    const query = role ? 'SELECT * FROM organizations WHERE role = ?' : 'SELECT * FROM organizations';
    const params = role ? [role] : [];

    console.log('Executing query:', query);
    console.log('With parameters:', params);

    pool.query(query, params, (error, results) => {
        if (error) {
            console.error('Database query error:', error);
            return callback(error);
        }
        console.log('Query results:', results);
        callback(null, results);
    });
};

module.exports = {
    getOrganizationByRole,
};
