const { db } = require('./models');

async function resetDb() {
  try {
    await db.sync({force: true});
    console.log('synced');
  } catch (err) {
    console.log('DB sync failed')
  } finally {
    await process.exit();
  }
}

resetDb();
