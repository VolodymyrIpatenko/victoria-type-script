import { ProductsVariety, CategoryButton } from "./SportbarGallery.styled";
import { v4 as uuid } from 'uuid';

const id = uuid();
type FilterItem = (arg: string) => void;

interface Props {
  filterItem: FilterItem;
}

const ButtonsList = ({filterItem}:Props) => {
	const buttons = [
    'Амінокислоти',
    'Батончики',
    'Гейнер',
    'Предтреніки',
    'Карнітин',
    'Все',
    'Протеїнові коктейлі',
	];
	
	return (
    <ProductsVariety>
      {buttons.map((button) => (
        <li key={id}>
          <CategoryButton onClick={() => filterItem(button)}>{button}</CategoryButton>
        </li>
      ))}
    </ProductsVariety>
  );
}

export default ButtonsList;