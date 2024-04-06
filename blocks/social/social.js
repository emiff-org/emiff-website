import { decorateIcons } from '../../scripts/aem.js';
import {
  div, span, a,
} from '../../scripts/dom-builder.js';

const SOCIAL_CONFIGS = [
  {
    name: 'facebook',
    link: 'https://www.facebook.com/EvolutionMallorcaFilmFestival/',
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/EVOLUTIONIFF',
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/channel/UCL-uH7R863SfCBm6FbHMsaA',
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/evolutionmallorcafilmfestival/',
  },
  {
    name: 'email',
    link: 'mailto:press@evolutionfilmfestival.com',
  },
];
export default async function decorate(block) {
  if (block.querySelectorAll(':scope > div').length === 0) {
    SOCIAL_CONFIGS.forEach((config) => {
      block.append(div(
        {},
        div(
          {},
          a(
            {
              href: config.link || '#',
              'aria-label': `Link to SAP ${config.name}`,
            },
            span(
              {
                class: ['icon', `icon-${config.name}`],
              },
            ),
          ),
        ),
      ));
    });
  }

  if (block.closest('main')) decorateIcons(block);
}
