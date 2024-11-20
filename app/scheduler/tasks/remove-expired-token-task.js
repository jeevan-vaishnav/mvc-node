const BaseTask = require("./base-tasks");
const { sequelize } = require("../../models");

class RemoveExpiredRefreshTokensTask extends BaseTask {
  async handle() {
    await sequelize.
    query(`DELETE FROM refresh_tokens where created_at < now()-'7 day'::"interval"`);

    this.info("Finished!");

  }
}

module.exports = RemoveExpiredRefreshTokensTask;
