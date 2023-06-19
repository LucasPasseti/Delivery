import Motoboy from "../models/Motoboy.js";

// CREATE
export const createMotoboy = async (req, res, next) => {
  const newMotoboy = new Motoboy(req.body);

  try{
      const savedMotoboy = await newMotoboy.save();
      res.status(200).json(savedMotoboy);
  }catch(err) {
      next(err);
  } 
}
// UPDATE
export const updateMotoboy = async (req, res) => {
  try {
    const { id } = req.params;
    const motoboyData = req.body;
    const updatedMotoboy = await Motoboy.findByIdAndUpdate(id, motoboyData, { new: true });
    if (updatedMotoboy) {
      res.json(updatedMotoboy);
    } else {
      res.status(404).json({ error: 'Motoboy not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update motoboy' });
  }
};

// DELETE
export const deleteMotoboy = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMotoboy = await Motoboy.findByIdAndRemove(id);
    if (deletedMotoboy) {
      res.json({ message: 'Motoboy deleted successfully' });
    } else {
      res.status(404).json({ error: 'Motoboy not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete motoboy' });
  }
};

// GET
export const getMotoboy = async (req, res) => {
  try {
    const { id } = req.params;
    const motoboy = await Motoboy.findById(id);
    if (motoboy) {
      res.json(motoboy);
    } else {
      res.status(404).json({ error: 'Motoboy not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to get motoboy' });
  }
};

// GET ALL
export const getAllMotoboys = async (req, res) => {
  try {
    const motoboys = await Motoboy.find();
    res.json(motoboys);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get motoboys' });
  }
};