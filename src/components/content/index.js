// dependencies
import styled from 'styled-components';

// components
import Box from '../box';

// styles
import { color, media } from '../../styles/theme';

const Content = styled(Box)`
  background: ${color.white};
  flex: 1 0 auto; /* sticky footer */
  padding: 1.5em 1em;
  transition: 0.35s; /* off-canvas transition */
  z-index: 1; /* above off-canvas */

  ${media.small} {
    padding: 1.5em 2em;
  }

  /* content overlay when nav is opened */
  &:after {
    background: ${color.black};
    content: "";
    height: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 0;
    transition: opacity 0.35s, width 0.1s 0.35s, height 0.1s 0.35s;
  }
`;

export default Content;
