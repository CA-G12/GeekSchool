import { sequelize } from '../models';

const buildModels = async () => {
  await sequelize.sync({ force: true });
  // eslint-disable-next-line no-console
  console.log('All models were synchronized successfully.');
};

buildModels();

export default buildModels;
