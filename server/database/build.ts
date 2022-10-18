import { nodeEnv } from '../config/environment';
import { sequelize } from '../models';

const buildModels = () => sequelize.sync({ force: true });

if (nodeEnv !== 'test') buildModels();
export default buildModels;
