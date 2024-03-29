BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS goals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS completions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    goal_id INTEGER NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (goal_id) REFERENCES goals(id),
    UNIQUE (goal_id, date)
);

COMMIT;