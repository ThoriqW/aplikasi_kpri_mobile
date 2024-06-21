const Organization = require('../models/Organization');

const getOrganizationByRole = (req, res) => {
    const role = req.query.role;

    console.log('Fetching organization with role:', role);

    Organization.getOrganizationByRole(role, (error, organization) => {
        if (error) {
            console.error('Error fetching organization:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        if (organization.length === 0) {
            console.log('No organization found for role:', role);
            return res.status(404).json({ error: 'No organization found' });
        }
        res.status(200).json(organization);
    });
};

module.exports = {
    getOrganizationByRole,
};
