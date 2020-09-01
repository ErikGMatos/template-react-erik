import React from 'react';

import PropTypes from 'prop-types';

import {
  Container,
  WrapperList,
  Dots,
  PageButton,
  ControlButton,
} from './styles';

export default function Pagination({
  totalPages,
  selectedPage,
  isLoading,
  step,
  onPageChange,
}) {
  const getRange = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((v, i) => i + start);
  };
  const range = {
    start: Math.round(selectedPage - step / 2),
    end: Math.round(selectedPage + step / 2),
  };
  if (range.start - 1 === 1 || range.end + 1 === totalPages) {
    range.start += 1;
    range.end += 1;
  }
  let pages =
    selectedPage > step
      ? getRange(
          Math.min(range.start, totalPages - step),
          Math.min(range.end, totalPages)
        )
      : getRange(1, Math.min(totalPages, step + 1));

  const withDots = (value, pair) =>
    pages.length + 1 !== totalPages ? pair : [value];

  if (pages[0] !== 1) {
    pages = withDots(1, [1, '...']).concat(pages);
  }

  if (pages[pages.length - 1] < totalPages) {
    pages = pages.concat(withDots(totalPages, ['...', totalPages]));
  }

  const paginate = pageNumber => {
    if (pageNumber === selectedPage) return;
    if (isLoading) return;
    onPageChange(pageNumber);
  };

  const handlePageChange = page => {
    paginate(page);
  };

  const handlePrev = () => {
    if (selectedPage > 1) paginate(selectedPage - 1);
  };

  const handleNext = () => {
    if (selectedPage < totalPages) paginate(selectedPage + 1);
  };

  return (
    <Container>
      <WrapperList isLoading={isLoading}>
        <ControlButton
          type="button"
          onClick={() => handlePrev()}
          disabled={selectedPage === 1}
        >
          {'<'}
        </ControlButton>

        {pages.map(page =>
          page === '...' ? (
            <Dots key={String(Math.random() * 1000)}>{page}</Dots>
          ) : (
            <PageButton
              key={String(page)}
              active={selectedPage === page}
              type="button"
              onClick={() => handlePageChange(page)}
              disabled={isLoading}
            >
              {page}
            </PageButton>
          )
        )}

        <ControlButton
          type="button"
          onClick={() => handleNext()}
          disabled={selectedPage === totalPages}
        >
          {'>'}
        </ControlButton>
      </WrapperList>
    </Container>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  selectedPage: PropTypes.number,
  isLoading: PropTypes.bool,
  step: PropTypes.number,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  selectedPage: 1,
  isLoading: false,
  step: 4,
  onPageChange: () => {},
};
