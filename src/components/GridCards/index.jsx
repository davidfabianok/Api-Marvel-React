import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { SearchContext } from '../../context';
import Card from '../Card';
import Alert from '../Alert';

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
`;

const GridCards = () => {
  const { cards, loading } = useContext(SearchContext);
  return (
    !loading ? (
      <Wrapper className='grid-card'>
        {cards.length > 0 ? (
          cards.map(card => {
            const { id, name, description, thumbnail, comics } = card;
            return (
              <Card
                key={id}
                title={name}
                description={description}
                image={`${thumbnail.path}.${thumbnail.extension}`}
                alt={thumbnail.path}
                comics={comics}
              />
            );
          })
        ) : (
          <Alert msg={'No results found for your search...'} />
        )}
      </Wrapper>
    ) : (
      <Alert msg={'Loading...'} />
    )
  );
};

export default GridCards;
