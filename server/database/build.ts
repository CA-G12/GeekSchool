import { sequelize } from '../models';

const buildModels = async () => {
  await sequelize.sync({ force: true });
};

buildModels();

export default buildModels;
