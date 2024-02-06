const sequelize = require('sequelize')
const router = require('express').Router();
const {Issues,Vehicle} = require('../../models'); // Update the path to where your Issues model is located



// GET all issues
router.get('/', async (req, res) => {
    try {
        const issues = await Issues.findAll();
        res.json(issues);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET a single issue by id
router.get('/:id', async (req, res) => {
    try {
        const issue = await Issues.findByPk(req.params.id);
        if (issue) {
            res.json(issue);
        } else {
            res.status(404).json({ message: 'Issue not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new issue
router.post('/', async (req, res) => {
    try {
        const issueData = await Issues.create(req.body);
        
        res.status(200).json(issueData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// PUT to update an issue by id
router.put('/:id', async (req, res) => {
    try {
        const updated = await Issues.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedIssue = await Issues.findByPk(req.params.id);
            res.status(200).json(updatedIssue);
        } else {
            res.status(404).json({ message: 'Issue not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE an issue
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Issues.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(200).send();
        } else {
            res.status(404).json({ message: 'Issue not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;