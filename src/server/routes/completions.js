const express = require('express');
const db = require('../db');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();

router.get('/completions', authenticateToken, async (req, res) => {
  db.all('SELECT * FROM completions', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(
      rows.map((row) => ({
        title: 'Completion',
        start: row.date,
        end: row.date,
        color: 'red',
      }))
    );
  });
});

router.post('/completions', authenticateToken, async (req, res) => {
  const { date } = req.body;
  db.run(
    'INSERT INTO completions(goal_id, date) VALUES (?, ?)',
    [1, date],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res
        .status(201)
        .json({ id: this.lastID, start: date, end: date, color: 'red' });
    }
  );
});

router.delete('/completions/:id', authenticateToken, (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM completions WHERE id = ?', id, function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: 'Completion not found' });
      return;
    }
    res.status(204).end();
  });
});

router.put('/completions/:id', authenticateToken, (req, res) => {
  const id = req.params.id;
  const { date } = req.body;
  db.run(
    'UPDATE completions SET date = ? WHERE id = ?',
    [date, id],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (this.changes === 0) {
        res.status(404).json({ error: 'Completion not found' });
        return;
      }
      res.json({ id: id, start: date, end: date, color: 'red' });
    }
  );
});

module.exports = router;

// const express = require('express');
// const db = require('../db');
// const authenticateToken = require('../middleware/authenticateToken');
// const router = express.Router();

// router.delete('/completions/:id', authenticateToken, (req, res) => {
//   const id = req.params.id;
//   db.run('DELETE FROM completions WHERE id = ?', id, function (err) {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     if (this.changes === 0) {
//       res.status(404).json({ error: 'Completion not found' });
//     } else {
//       res.status(200).json({ id });
//     }
//   });
// });

// router.put('/completions/:id', authenticateToken, (req, res) => {
//   const id = req.params.id;
//   const { date } = req.body;
//   db.run(
//     'UPDATE completions SET date = ? WHERE id = ?',
//     [date, id],
//     function (err) {
//       if (err) {
//         res.status(500).json({ error: err.message });
//         return;
//       }
//       if (this.changes === 0) {
//         res.status(404).json({ error: 'Completion not found' });
//       } else {
//         res.status(200).json({ id, date });
//       }
//     }
//   );
// });

// module.exports = router;

// import axios from '../axios';

// export const markCompletion = async (date) => {
//   try {
//     const response = await axios.post('/completions', { date });
//     return response.data;
//   } catch (error) {
//     console.error('Error marking completion:', error);
//   }
// };

// export const deleteCompletion = async (id) => {
//   try {
//     await axios.delete(`/completions/${id}`);
//     return true;
//   } catch (error) {
//     console.error('Error deleting completion:', error);
//   }
// };

// export const editCompletion = async (id, date) => {
//   try {
//     await axios.put(`/completions/${id}`, { date });
//     return true;
//   } catch (error) {
//     console.error('Error editing completion:', error);
//   }
// };
