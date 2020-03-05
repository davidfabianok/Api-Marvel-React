import React, { useState } from 'react';
import styled from '@emotion/styled';
import Modal from '../Modal';
import './style.scss';

const Wrapper = styled.article`
  background-color: ${props => props.theme.background};
  .card--body {
    .card--body__title {
      color: ${props => props.theme.colorPrimary};
    }
    .card--body__description {
      color: ${props => props.theme.colorSecondary};
    }
  }
`;

const Card = ({ title, description, image, alt, comics }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const toggleModal = () => {
    setVisibleModal(!visibleModal);
  };
  return (
    <>
      <Wrapper onClick={toggleModal} className='card'>
        <div className='card--img'>
          <img src={image} alt={alt} />
        </div>
        <div className='card--body'>
          <h3 className='card--body__title'>{title}</h3>
          <p className='card--body__description'>
            {description
              ? description.slice(0, 60) + '...'
              : 'Description not available.'}
          </p>
        </div>
      </Wrapper>

      <Modal show={visibleModal} onClose={toggleModal}>
        <h2 className='modal--content__title'>{title}</h2>
        <div className='modal--content__body'>
          <div className='modal--content__img'>
            <img src={image} alt={alt} />
          </div>
          <div className='modal--content__desc'>
            <h5>Description</h5>
            <p>{description ? description : 'Description not available.'}</p>
          </div>
        </div>
        <div className='modal--content__footer'>
          <h5>Comics</h5>

          {comics.available ? (
            <ul>
              {comics.items.map(comic => (
                <li>{comic.name}</li>
              ))}
            </ul>
          ) : (
            <p className='modal--content__desc'>Comics not available.</p>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Card;
