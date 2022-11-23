import type { SystemStyleObject, IconProps as ChakraIconProps } from '@chakra-ui/react';
import { forwardRef, useMemo, useState } from 'react';
import type { Ref } from 'react';
import type { Control } from 'react-hook-form';
import Icon from '../Icon';
import type { SelectControllerProps, SelectOption, SelectThemeStyle } from './SelectController';
import { SelectController } from './SelectController';
import type { GroupBase, SelectInstance } from 'chakra-react-select';

export interface SearchSelectControllerProps
	extends Omit<SelectControllerProps, 'overrideStyles' | 'id' | 'variant'> {
	control: Control<Record<string, SelectOption['value']>>;
	styles: Partial<SelectThemeStyle> & {
		wrapperOpened?: SystemStyleObject;
		wrapperClosed?: SystemStyleObject;
	};
	iconStyles?: Omit<ChakraIconProps, 'as'>;
}
const SearchSelectController = forwardRef(
	(
		{
			control,
			styles,
			iconStyles,
			name,
			'data-testid': dataTestId,
			...props
		}: SearchSelectControllerProps,
		ref: Ref<SelectInstance<unknown, boolean, GroupBase<unknown>>>,
	) => {
		const [isMenuOpened, setIsMenuOpened] = useState(false);

		const { wrapperOpened, wrapperClosed, ...restStyles } = styles;
		const overrideStyles = useMemo(
			() => ({
				...restStyles,
				wrapper: !isMenuOpened ? wrapperClosed : wrapperOpened,
			}),
			[isMenuOpened],
		);

		return (
			<SelectController
				control={control}
				name={name}
				isSearchable
				addonDown={
					isMenuOpened ? (
						<Icon name='MagnifyingGlass' w={5} h={5} {...iconStyles} />
					) : (
						<Icon name='CaretDown' w={4} h={4} {...iconStyles} />
					)
				}
				data-testid={dataTestId}
				onMenuOpen={() => setIsMenuOpened(true)}
				onMenuClose={() => setIsMenuOpened(false)}
				overrideStyles={overrideStyles}
				{...props}
				variant='unstyled'
				ref={ref}
			/>
		);
	},
);

SearchSelectController.displayName = 'SearchSelectController';

export default SearchSelectController;
