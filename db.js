import Database from "better-sqlite3"

const db = new Database("./data/employees.db")

db.prepare(`CREATE TABLE IF NOT EXISTS employees (id INTEGER PRIMARY KEY AUTOINCREMENT, company TEXT, lastname TEXT, firstname TEXT, position TEXT, salary REAL, department TEXT, gender TEXT, holiday_days INTEGER, birthdate TEXT)`,).run();