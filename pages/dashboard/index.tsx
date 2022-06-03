import type { NextPage } from 'next';
import { DashboardLayout } from 'components/layouts';
import { MainDashboard } from 'components/sections';

const DashboardPage: NextPage = () => {
  return (
    <DashboardLayout sectionTitle="Dashboard">
      <MainDashboard />
    </DashboardLayout>
  );
};

export default DashboardPage;

