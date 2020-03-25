'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Word = app.model.define('words', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    word: STRING,
    phonetic: STRING,
    desc: STRING,
    tags: STRING,
    created_at: DATE,
    updated_at: DATE,
  });

  return Word;
};
