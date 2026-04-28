import React from 'react';
import styled from 'styled-components';
import { FiAward, FiClock, FiShield, FiUsers } from 'react-icons/fi';
import { stats } from '../data/siteData';

const Wrap = styled.section`
  margin-top: -42px;
  position: relative;
  z-index: 5;
`;

const Grid = styled.div`
  width: min(860px, calc(100% - 44px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #dfe8ef;
  border-radius: 14px;
  min-height: 122px;
  display: grid;
  place-items: center;
  text-align: center;
  box-shadow: 0 9px 24px rgba(12, 31, 52, 0.06);

  svg {
    color: #158ddd;
    font-size: 28px;
    margin-bottom: 10px;
  }

  strong {
    display: block;
    font-family: 'Playfair Display', serif;
    font-size: 1.28rem;
  }

  span {
    color: #5c7390;
    font-size: 0.84rem;
  }
`;

const icons = [FiClock, FiUsers, FiAward, FiShield];

function Stats() {
  return (
    <Wrap>
      <Grid>
        {stats.map(([number, label], index) => {
          const Icon = icons[index];
          return (
            <Card key={label}>
              <div>
                <Icon />
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            </Card>
          );
        })}
      </Grid>
    </Wrap>
  );
}

export default Stats;
