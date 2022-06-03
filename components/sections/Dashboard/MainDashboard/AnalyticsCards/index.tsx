import { BookmarkIcon, ReviewIcon, TagIcon, UserIcon } from 'components/icons';
import { AnalyticsCard } from 'components/ui';
import styled from 'styled-components';

export const AnalyticsCards = () => {
  return (
    <Div>
      <AnalyticsCard
        background_color="#EDFFF0"
        text_color="#83AE89"
        icon={<BookmarkIcon width="40px" height="40px" color="#83AE89"/>}
        title="Total Orders"
        data={'79'}
      />
      <AnalyticsCard
        background_color="#F4F2FF"
        text_color="#867DB1"
        icon={<TagIcon width="45px" height="45px" color="#867DB1"/>}
        title="Total Products"
        data={'79'}
      />
      <AnalyticsCard
        background_color="#FFF3EC"
        text_color="#AF8C7D"
        icon={<ReviewIcon width="40px" height="40px" color="#AF8C7D"/>}
        title="Total Reviews"
        data={'79'}
      />
      <AnalyticsCard
        background_color="#ECFBFF"
        text_color="#42717F"
        icon={<UserIcon width="40px" height="40px" color="#42717F"/>}
        title="Total Users"
        data={'79'}
      />
      <AnalyticsCard
        background_color="#ECFBFF"
        text_color="#42717F"
        icon={<UserIcon width="40px" height="40px" color="#42717F"/>}
        title="Total Users"
        data={'79'}
      />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  gap: 2em;
  justify-content: space-between;
  padding: 2em 0;
`;
