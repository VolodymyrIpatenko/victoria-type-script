import { Breakpoint } from 'react-socks';
import { Description, MobileHome } from './Home.styled';
import '@fremtind/jkl-core/core.min.css';
import Observer from '../../utils/Observer';

const MobileHomeComponent = () => {
  return (
    <Breakpoint small down>
      <MobileHome>
        <Observer>
          <Description>
            Спортивний клуб «Вікторія» — це чудове місце для активного відпочинку, а також нових
            знайомств і прекрасного спілкування. У нашому клубі ви гарантовано отримаєте гарний
            настрій і заряд бадьорості.
          </Description>
        </Observer>
      </MobileHome>
    </Breakpoint>
  );
};

export default MobileHomeComponent;
