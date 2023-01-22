import { FC } from 'react';
import { IMAGES } from '../../utils/constants';

type SocialMediaLinks = {
  id: number;
  name: string;
  imgLink: string;
  url: string;
};

export const SocialMedia: FC = () => {
  const socialMediaLinks: SocialMediaLinks[] = [
    { id: 1, name: 'Instagram', imgLink: IMAGES.InstagramIcon, url: '#' },
    { id: 2, name: 'Facebook', imgLink: IMAGES.FacebookIcon, url: '#' },
    { id: 3, name: 'Twitter', imgLink: IMAGES.TwitterIcon, url: '#' },
    { id: 4, name: 'WhatsApp', imgLink: IMAGES.WhatsAppIcon, url: '#' },
  ];

  return (
    <ul className="social-media">
      {socialMediaLinks?.map(({ id, name, url, imgLink }) => (
        <li className="social-media-item" key={id}>
          <a href={url}>
            <img src={imgLink} alt={`${name} Icon`} />
          </a>
        </li>
      ))}
    </ul>
  );
};
