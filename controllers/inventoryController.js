const userModel = require("../models/userModel");
const inventoryModel = require("../models/inventoryModel");

// CREATE INVENTORY
const createInventoryController = async (req, res) => { 
	try {
		const { inventoryType, donor, organization } = req.body;

		// Validation for donor
		if (inventoryType === "in") {
			const donorUser = await userModel.findById(donor);
			if (!donorUser || donorUser.role !== 'donor') {
				throw new Error('Not a donor account');
			}
		}

		// Validation for hospital
		if (inventoryType === 'out') {
			const orgUser = await userModel.findById(organization);
			if (!orgUser || orgUser.role !== 'hospital') {
				throw new Error('Not a hospital account');
			}
		}

		// Save record
		const inventory = new inventoryModel(req.body);
		await inventory.save();

		return res.status(201).send({
			success: true,
			message: 'New Blood Record Added'
		});
	} catch (error) {
		console.log(error);
		return res.status(500).send({
			success: false,
			message: 'Error In Create Inventory API',
			error: error.message
		});
	}
};

module.exports = { createInventoryController };
