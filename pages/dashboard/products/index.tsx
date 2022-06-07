import type { NextPage } from 'next';
import { DashboardLayout } from 'components/layouts';
import { ProductsDashboard } from 'components/sections';

const DashboardPage: NextPage = () => {
  return (
    <DashboardLayout sectionTitle="Products" pageTitle=' | Products'>
      <ProductsDashboard />
    </DashboardLayout>
  );
};

export default DashboardPage;
