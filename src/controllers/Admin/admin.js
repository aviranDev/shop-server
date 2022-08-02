import Admin from '../../Models/Admin.js';

const adminEntery = async (req, res) => {
	const admin = new Admin(req.session.admin ? req.session.admin : {});
	req.session.admin = admin;
	res.status(201).send(admin);
};

export default adminEntery;
