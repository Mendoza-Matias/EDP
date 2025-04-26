const { Car } = require('../database/models')

const getAll = async (req, res) => {
    const cards = await Car.findAll({});
    res.status(200).json(cards);
};
const create = async (req, res) => {
    try {
        const newCard = await Car.create(req.body);
        res.status(201).json(newCard);
    } catch (e) {
        res.status(400).json({ error: e })
    }
}
const findById = async (req, res) => {
    const car = await Car.findByPk(req.params.id);
    if (car) res.status(200).json(car);
    else res.status(404).json({ message: "Not Found" });
}
const deleteById = async (req, res) => {
    const car = await Car.findByPk(req.params.id);
    if (car) {
        const removed = await car.destroy(); //eliminar un elemento
        res.status(200).json(removed);
    } else res.status(404).json({ message: "Not Found" });
}
module.exports = {
    getAll,
    create,
    findById,
    deleteById
};