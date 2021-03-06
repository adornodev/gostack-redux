import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.6;
  }

  div {
    text-align: right;
    margin-right: 15px;

    strong {
      display: block;
      color: #fff;
      font-size: 16px;
    }

    span {
      font-size: 14px;
      color: #999;
    }
  }
`;
