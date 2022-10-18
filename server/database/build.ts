import { nodeEnv } from '../config/environment';
import { sequelize } from '../models';

const buildModels = async () => {
  await sequelize.sync({ force: true });
};

if (nodeEnv !== 'test') buildModels();
export default buildModels;
