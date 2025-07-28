const getAllExamples = (req, res) => {
	res.json([
		{ id: 1, name: 'Example 1' },
		{ id: 2, name: 'Example 2' },
	]);
};

module.exports = {
	getAllExamples,
};
