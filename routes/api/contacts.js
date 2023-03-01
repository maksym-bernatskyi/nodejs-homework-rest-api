const express = require('express');
const { contacts: ctrl } = require('../../controllers');
const { ctrlWrapper } = require('../../helpers');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.listContacts));

router.get('/:id', ctrlWrapper(ctrl.getContactById));

router.post('/', ctrlWrapper(ctrl.addContact));

router.delete('/:id', ctrlWrapper(ctrl.removeContact));

router.put('/:id', ctrlWrapper(ctrl.updateContact));

router.patch('/:id/favorite', ctrlWrapper(ctrl.updateStatusContact));

module.exports = router;