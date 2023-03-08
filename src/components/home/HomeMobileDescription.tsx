import { Breakpoint } from 'react-socks';
import { Description, MobileHome } from './Home.styled';

const MobileHomeComponent = () => {
  return (
    <Breakpoint small down>
      <MobileHome>
        <Description>
          Спортивний клуб «Вікторія» — це чудове місце для активного відпочинку, а також нових
          знайомств і прекрасного спілкування. У нашому клубі ви гарантовано отримаєте гарний
          настрій і заряд бадьорості.
        </Description>
      </MobileHome>
    </Breakpoint>
  );
};

export default MobileHomeComponent;
