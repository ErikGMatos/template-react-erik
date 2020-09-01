import React, { useRef, useEffect, forwardRef, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Select, { components } from 'react-select';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import IconFilledTag from '~/assets/img/svg/icones/icon-tag-filled-black.icone.svg';

import InputCheckBox from './InputCheckbox';
import {
  Container,
  Label,
  Icon,
  WrapperMenuList,
  LineCheckbox,
  ApplyWrapper,
  ApplyButton,
} from './styles';

const SelectCheckBox = forwardRef(
  (
    {
      name,
      label,
      options,
      multiple,
      placeholder,
      noOptionsMessage,
      full,
      widthControl,
      defaultform,
      labelfull,
      icon,
      isApplyDisabled,
      onApply,
      maxHeight,
      ...rest
    },
    parentRef
  ) => {
    const ref = useRef(null);
    const selectRef = parentRef || ref;

    const { fieldName, registerField, defaultValue, error } = useField(name);
    let scrollRef = null;

    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
      if (!selectRef.current) return;
      registerField({
        name: fieldName,
        ref: selectRef.current,
        path: 'state.value',
        getValue: reference => {
          if (rest.isMulti) {
            if (!reference.state.value) {
              return [];
            }
            return reference.state.value.map(option => option.value);
          }
          if (!reference.state.value) {
            return '';
          }
          return reference.state.value;
        },
      });
    }, [fieldName, name, registerField, rest.isMulti, selectRef]);

    function getDefaultValue() {
      if (!defaultValue) return null;

      if (!multiple) {
        return options.find(option => option.id === defaultValue);
      }

      return options.filter(option => defaultValue.includes(option.id));
    }

    function getBgColor(isSelected, isFocused, isDisabled) {
      if (isDisabled) return null;
      if (isSelected) return '#ecedf2';
      if (isFocused) return '#f9f9fb';
      return null;
    }

    const colourStyles = {
      control: (styles, { isDisabled }) => ({
        ...styles,
        border: defaultform ? '1px solid #ecedf2' : 'none',
        borderTop: 'none',
        borderRight: 'none',
        borderLeft: 'none',
        lineHeight: '20px',
        minHeight: '30px',
        maxHeight: '30px',
        color: '#4d4c59',
        fontSize: defaultform ? '1.6rem' : '1.2rem',
        fontWeight: defaultform ? 400 : 500,
        padding: defaultform ? '0' : '0 0 0 5px',
        borderRadius: defaultform ? '0' : '100px',
        boxShadow: defaultform ? 'none' : '1px 2px 8px 0 rgba(0,0,0,.1)',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        width: 'auto',
        pointerEvents: 'auto',
        '&:hover': {
          borderColor: defaultform ? '#ecedf2' : '',
        },
        '> div': defaultform && {
          padding: '0',
        },
        background: `#fff url(${IconFilledTag}) no-repeat 12px center`,
        backgroundSize: '16px',
      }),

      singleValue: (styles, { isDisabled }) => ({
        color: isDisabled ? '#c5c6d0' : '#4d4c59',
        lineHeight: '25px',
        width: 'auto',
        maxWidth: '450px',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }),

      indicatorSeparator: styles => ({ ...styles, display: 'none' }),

      clearIndicator: styles => ({ ...styles, display: 'none' }),

      valueContainer: styles => ({
        ...styles,
        minHeight: '30px',
        height: '30px',
        flexWrap: 'nowrap',
      }),

      menuList: () => ({
        padding: '0 8px',
      }),

      menu: provided => ({
        ...provided,
        width: 'auto',
        whiteSpace: 'nowrap',
      }),

      placeholder: () => ({
        display: 'none',
      }),

      dropdownIndicator: (base, state) => ({
        ...base,
        transition: 'transform .4s ease-in-out',
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
        padding: '7px 5px',
      }),

      option: (styles, { isSelected, isFocused, isDisabled }) => ({
        ...styles,
        backgroundColor: getBgColor(isSelected, isFocused, isDisabled),
        color: isDisabled ? '#e1e2ea' : '#8b8c99',
        padding: 0,
        cursor: 'pointer',
        fontWeight: 300,
        fontSize: '1.4rem',
        lineHeight: '20px',
        textAlign: 'left',

        '&:hover': {
          backgroundColor: isDisabled ? '#fff' : '#ecedf2',
          borderRadius: '2px',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
        },
      }),

      multiValue: base => ({
        ...base,
        display: 'none',
      }),
    };

    const DropdownIndicator = props => {
      const { isDisabled } = props;
      return (
        <components.DropdownIndicator {...props}>
          <Icon
            defaultform={defaultform.toString()}
            disabled={isDisabled}
            size={16}
          />
        </components.DropdownIndicator>
      );
    };

    const Option = props => {
      const { isSelected, data, selectOption } = props;

      return (
        components.Option && (
          <components.Option {...props}>
            <LineCheckbox
              onClick={e => {
                selectOption({ ...data });
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <InputCheckBox
                readOnly
                type="checkbox"
                id={data.id}
                name={data.id}
                checked={isSelected}
              />
              <label htmlFor={data.id}>{data.title}</label>
            </LineCheckbox>
          </components.Option>
        )
      );
    };

    const MenuList = props => {
      // let height = null;
      // const el = document.querySelector('[class$=MenuList]');
      // if (el) {
      //   height = el.getBoundingClientRect().height;
      // }
      return (
        <>
          <PerfectScrollbar
            ref={scroll => {
              scrollRef = scroll;
            }}
            options={{
              wheelSpeed: 0.8,
              wheelPropagation: false,
            }}
          >
            <WrapperMenuList>
              <components.MenuList {...props} />
            </WrapperMenuList>
          </PerfectScrollbar>
          <ApplyWrapper>
            <ApplyButton
              disabled={isApplyDisabled}
              linkbutton
              onClick={onApply}
            >
              aplicar
            </ApplyButton>
          </ApplyWrapper>
        </>
      );
    };

    return (
      <Container
        isFocused={colourStyles}
        error={error}
        defaultform={defaultform}
        showMenu={showMenu}
        maxHeight={maxHeight}
      >
        {label && <Label htmlFor={fieldName}>{label}</Label>}
        <Select
          components={{ DropdownIndicator, MenuList, Option }}
          styles={colourStyles}
          menuIsOpen={isOpen}
          name={fieldName}
          aria-label={fieldName}
          options={options}
          isMulti
          hideSelectedOptions={false}
          closeMenuOnSelect={false}
          noOptionsMessage={() => 'Nenhuma opção encontrada'}
          defaultValue={getDefaultValue()}
          isSearchable={false}
          ref={selectRef}
          getOptionValue={option => option.id}
          getOptionLabel={option => option.title}
          onMenuClose={() => {
            setShowMenu(false);
            setIsOpen(false);
          }}
          onMenuOpen={() => {
            setIsOpen(true);
            setShowMenu(true);
            setTimeout(() => {
              if (!scrollRef) return;
              scrollRef.updateScroll();
            }, 400);
          }}
          {...rest}
        />
        {error && <span>{error}</span>}
      </Container>
    );
  }
);
SelectCheckBox.propTypes = {
  onApply: PropTypes.func,
  isApplyDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object]),
  selectOption: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  widthControl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  labelfull: PropTypes.bool,
  noOptionsMessage: PropTypes.func,
  full: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ),
  multiple: PropTypes.bool,
  isDisabled: PropTypes.bool,
  children: PropTypes.node,
  defaultform: PropTypes.bool,
  icon: PropTypes.string,
  maxHeight: PropTypes.number,
};

SelectCheckBox.defaultProps = {
  onApply: () => {},
  isApplyDisabled: false,
  isSelected: false,
  data: {},
  selectOption: () => {},
  full: false,
  label: '',
  placeholder: '',
  noOptionsMessage: () => {},
  list: [{ id: 0 }, { title: '' }],
  options: [{ id: 0 }, { title: '' }],
  multiple: false,
  isDisabled: false,
  children: null,
  widthControl: '',
  labelfull: false,
  defaultform: false,
  icon: '',
  maxHeight: 300,
};

export default SelectCheckBox;
