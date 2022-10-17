import { sequelize } from '../models';e
import { nodeEnv } from '../config/environment';

const buildModels = async () => {
  await sequelize.sync({ force: true });
};

if (nodeEnv !== 'test') {
  buildModels();
}

export default buildModels;
