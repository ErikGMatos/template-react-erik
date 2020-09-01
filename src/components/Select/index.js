import React, { useRef, useEffect, forwardRef, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Select, { components } from 'react-select';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import {
  Container,
  Label,
  Icon,
  WrapperMenuList,
  LabelSelect,
  Divlabel,
} from './styles';

const ReactSelect = forwardRef(
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
      maxHeight,
      menuPlacement,
      isSearchable,
      isLoading: selectLoading,
      isDisabled: selectDisabled,
      ...rest
    },
    parentRef
  ) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const selectRef = parentRef || ref;

    const { fieldName, registerField, defaultValue, error } = useField(name);
    let scrollRef = null;

    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [heightTop, setHeightTop] = useState(0);
    const [widthInput, setWidthInput] = useState(0);
    const [childrenTextSelected, setChildrenTextSelected] = useState('');
    const [showSingleValue, setShowSingleValue] = useState(false);

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

    function getWidthControl(fullPX, widthControlPX) {
      if (fullPX) return '100%';
      if (widthControlPX) return widthControlPX;
      return '150px';
    }

    function getWidthMenu(fullPX, widthControlPX, labelfullPX) {
      if (labelfullPX) return 'max-content';
      if (fullPX || labelfullPX) return '-webkit-fill-available';
      if (widthControlPX) return widthControlPX;
      return 'max-content';
    }

    const customStyles = {
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
        backgroundColor: '#fff',
        boxShadow: defaultform ? 'none' : '1px 2px 8px 0 rgba(0,0,0,.1)',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        width: getWidthControl(full, widthControl),
        pointerEvents: 'auto',
        '&:hover': {
          borderColor: defaultform ? '#ecedf2' : '',
        },
        '> div': defaultform && {
          padding: '0',
        },
      }),

      input: styles => ({
        ...styles,
        margin: '2px 2px 2px 5px',
        paddingLeft: 8,
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
        width: getWidthMenu(full, widthControl, labelfull),
      }),

      placeholder: (styles, { isDisabled }) => ({
        color: isDisabled ? '#c5c6d0' : '#4d4c59',
        fontWeight: defaultform ? 400 : 500,
        fontSize: defaultform ? '1.6rem' : '1.2rem',
        lineHeight: '25px',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
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
        padding: 7,
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

    const MenuList = props => {
      const { children, selectProps } = props;
      setTimeout(() => {
        const { value, placeholder: defaultPlaceholder } = selectProps;
        if (value) setChildrenTextSelected(value?.title || value[0]?.title);
        else setChildrenTextSelected(defaultPlaceholder);
        let height = null;
        let width = null;
        const el = containerRef.current.querySelector('[class$=-menu]');

        if (el) {
          height = el.getBoundingClientRect().height;
          width = el.getBoundingClientRect().width;
          setHeightTop(height);
          setWidthInput(width);
        }
      });
      return (
        <>
          <PerfectScrollbar
            ref={scroll => {
              scrollRef = scroll;
            }}
            options={{
              wheelSpeed: 0.8,
              minScrollbarLength: 60,
              wheelPropagation: false,
            }}
          >
            <WrapperMenuList>
              <components.MenuList {...props}>{children}</components.MenuList>
            </WrapperMenuList>
          </PerfectScrollbar>
        </>
      );
    };

    return (
      <Container
        ref={containerRef}
        isFocused={customStyles}
        error={error}
        defaultform={defaultform}
        showMenu={showMenu}
        maxHeight={maxHeight}
        menuPlacement={menuPlacement}
        heightTop={heightTop}
        widthInput={widthInput}
        showSingleValue={showSingleValue}
        isSearchable={isSearchable}
        isDisabled={selectDisabled}
        isLoading={selectLoading}
      >
        {label && <Label htmlFor={fieldName}>{label}</Label>}

        <Select
          components={{
            DropdownIndicator,
            MenuList,
          }}
          isDisabled={selectDisabled}
          isLoading={selectLoading}
          styles={customStyles}
          menuIsOpen={selectDisabled || selectLoading ? false : isOpen}
          name={fieldName}
          aria-label={fieldName}
          options={options}
          isMulti={multiple}
          noOptionsMessage={() => 'Nenhuma opção encontrada'}
          defaultValue={getDefaultValue()}
          ref={selectRef}
          placeholder={placeholder || 'Selecione'}
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
          isSearchable={isSearchable}
          menuPlacement={menuPlacement}
          {...rest}
          onInputChange={char => {
            if (char) return setShowSingleValue(true);
            setShowSingleValue(false);
          }}
        />
        <Divlabel {...rest} label={label}>
          <LabelSelect>{childrenTextSelected}</LabelSelect>
        </Divlabel>

        {error && <span>{error}</span>}
      </Container>
    );
  }
);

ReactSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  widthControl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  selectProps: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  labelfull: PropTypes.bool,
  noOptionsMessage: PropTypes.func,
  full: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ).isRequired,
  multiple: PropTypes.bool,
  isDisabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  isLoading: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  children: PropTypes.node,
  defaultform: PropTypes.bool,
  maxHeight: PropTypes.number,
  menuPlacement: PropTypes.string,
  isSearchable: PropTypes.bool,
};

ReactSelect.defaultProps = {
  full: false,
  label: '',
  placeholder: '',
  noOptionsMessage: () => {},
  multiple: false,
  isDisabled: false,
  isLoading: false,
  children: null,
  widthControl: '',
  selectProps: '',
  labelfull: false,
  defaultform: false,
  maxHeight: 300,
  menuPlacement: 'bottom',
  isSearchable: true,
};

export default ReactSelect;
