import { SlSocialInstagram } from 'react-icons/sl';
import { BsFacebook } from 'react-icons/bs';

interface Social {
  id: number;
  path: string;
  component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const socialsList: Social[] = [
  {
    id: 1,
    path: 'https://www.instagram.com/sport_club_victoria/',
    component: SlSocialInstagram,
  },
  {
    id: 2,
    path: 'https://www.facebook.com/VICTORIAclubsport/',
    component: BsFacebook,
  },
];

export default socialsList;
