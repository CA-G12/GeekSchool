import { sequelize } from '../models';
import { nodeEnv } from '../config/environment';

const buildModels = async () => {
  await sequelize.sync({ force: true });
};

if (nodeEnv !== 'test') {
  buildModels();
}

export default buildModels;
