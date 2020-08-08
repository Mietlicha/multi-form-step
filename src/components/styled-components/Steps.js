import styled from 'styled-components';

const Button = styled.button`
  background: #f79605;
  color: white;
  text-transform: uppercase;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  letter-spacing: 2px;
  border-radius: 7px;
  cursor: pointer;

  &::hover {
    background: #bf1650;
  }

  &::active,
  &::focus {
    transition: 0.3s all;
    transform: translateY(2px);
    opacity: 0.8;
    outline: none;
  }
`;

export const StepComplete = styled.div`
  display: flex;
`;

export const Next = styled(Button)`
  margin-left: auto;
  margin-left: 1rem;
`;

export const Previous = styled(Button)`
  margin-right: auto;
`;
