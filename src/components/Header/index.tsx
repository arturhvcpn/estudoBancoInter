import React, { memo } from 'react';

import { Container, Wrapper, LeftNav, RightNav } from './styles';
import { BancoInter } from '../../assets';

import Button from '../Button';
import AccountDropdown from './AccountDropdown';
import { User } from './Header';

const Header: React.FC = () =>{
  const user: User = { name: 'Artur Polo Norte'};

  return(
    <Container>
      <Wrapper>
          <LeftNav>
            <BancoInter />
              Internet Banking
          </LeftNav>
          <RightNav>
            <Button variant="secondary"> Simulador de Renda Fixa</Button>
            <AccountDropdown user={user} />
          </RightNav>
      </Wrapper>
    </Container>
  );
};

export default memo(Header);
