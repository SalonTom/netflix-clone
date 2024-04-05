import styled from "styled-components";

export const NetflixButton = styled.div<{ onlyIcon? : boolean, hasIcon? : boolean, type?: string}>`
    display: flex;
    align-items: center;
    gap: 12px;
    height: fit-content;
    padding: 8px ${({ hasIcon, onlyIcon }) => (hasIcon || onlyIcon ? '20px' : '16px')} 8px 16px;
    background-color: ${({ theme, type }) => type === 'secondary' ? theme.netflixGrey : theme.netflixWhite};
    color: ${({ theme, type }) => type === 'secondary' ? theme.netflixWhite : theme.netflixBlack};
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color : ${({ theme, type }) => `rgb(from ${type === 'secondary' ? theme.netflixGrey : theme.netflixWhite} r g b / 80%)`};
    }

    svg {
        margin: 0 auto;
    }
`;

NetflixButton.defaultProps = {
  theme: {
    netflixWhite: '#fff',
    netflixGrey: '#b3b3b3',
    netflixBlack: '#141414',
  },
};

export const NetflixButtonCircle = styled(NetflixButton)`
    border-radius: 999999px;
    padding: 8px;
    height: 8px;
    width: 8px;

    @media (min-width: 768px) {
        height: 16px;
        width: 16px;
    }

    @media (min-width: 1024px) {
        height: 16px;
        width: 16px;
    }

    svg {

        height: 8px;
        width: 8px;
    
        @media (min-width: 768px) {
            height: 16px;
            width: 16px;
        }
    }
`