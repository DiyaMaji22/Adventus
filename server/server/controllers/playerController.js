import Player from '../models/Player.js';

export const getAllPlayers = async (req, res) => {
  try {
    const { type, teamId } = req.query;
    const filter = {};
    
    if (type) {
      filter.type = type;
    }
    if (teamId) {
      filter.teamId = teamId;
    }

    const players = await Player.find(filter)
      .populate('teamId', 'name slug logo')
      .sort({ joinDate: -1 });
    
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPlayerBySlug = async (req, res) => {
  try {
    const player = await Player.findOne({ slug: req.params.slug })
      .populate('teamId', 'name slug logo');
    
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    
    res.json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPlayer = async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.status(201).json({
      message: 'Player created successfully',
      player
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true, runValidators: true }
    ).populate('teamId', 'name slug logo');
    
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    
    res.json({
      message: 'Player updated successfully',
      player
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findOneAndDelete({ slug: req.params.slug });
    
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    
    res.json({ message: 'Player deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
