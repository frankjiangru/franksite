import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = styled.footer`
  ${tw`border-t border-gray-800 py-4`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`text-gray-700 hover:text-black-100 mx-2`};
  }
`;

export const Link = styled.a`
  ${tw`text-gray-700 hover:text-black-100 mx-2`};
`;
