import styled from '@emotion/styled';

const Wrapper = styled.div`
  .modal--content {
    background-color: ${props => props.theme.background};

    &__btn-close {
      color: ${props => props.theme.colorPrimary};
      border: 1px solid ${props => props.theme.colorPrimary};

      &:hover {
        background-color: ${props => props.theme.colorPrimary};
        color: ${props => props.theme.background};
      }
    }
    &__title {
      color: ${props => props.theme.colorPrimary};
    }
    &__body {
      .modal--content__desc {
        h5 {
          color: ${props => props.theme.colorPrimary};
        }
        p {
          color: ${props => props.theme.colorSecondary};
        }
      }
    }
    &__footer {
      h5 {
        color: ${props => props.theme.colorPrimary};
      }
      ul {
        li {
          background-color: ${props => props.theme.colorPrimary};
          color: ${props => props.theme.background};
        }
      }
    }
    &__desc {
      color: ${props => props.theme.colorSecondary};
    }
  }
`;

export default Wrapper;
