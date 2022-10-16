import { sequelize } from '../models';

const buildModels = async () => {
  await sequelize.sync({ force: true });
  console.log('All models were synchronized successfully.');
};

buildModels();

export default buildModels;
