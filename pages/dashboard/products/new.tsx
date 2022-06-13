import type { NextPage } from 'next';
import { DashboardLayout } from 'components/layouts';
import { NewProductDashboard } from 'components/sections';


const DashboardNewProductPage: NextPage = () => {
  return (
    <DashboardLayout sectionTitle="New Product" pageTitle=' - Create new product'>
      <NewProductDashboard />
    </DashboardLayout>
  );
};

export default DashboardNewProductPage;
