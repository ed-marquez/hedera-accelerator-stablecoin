import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';
import { render } from '../../../../test/index';
import translations from '../../../../translations/en/getBalance.json';
import GetBalanceOperation from '../';

describe(`<${GetBalanceOperation.name} />`, () => {
	test('should render correctly', () => {
		const component = render(<GetBalanceOperation />);

		expect(component.asFragment()).toMatchSnapshot();
	});

	test('should render titles', () => {
		const component = render(<GetBalanceOperation />);

		expect(component.getByTestId('title')).toHaveTextContent(translations.title);
		expect(component.getByTestId('operation-title')).toHaveTextContent(translations.operationTitle);
	});

	test('should have an input to write the account', () => {
		const component = render(<GetBalanceOperation />);

		expect(component.getByTestId('targetAccount')).toBeInTheDocument();
	});

	test('should have a disabled confirm button that is enable when introduce an account', async () => {
		const component = render(<GetBalanceOperation />);

		const button = component.getByTestId('confirm-btn');
		expect(button).toBeDisabled();

		const account = component.getByTestId('targetAccount');
		await userEvent.type(account, '0.0.12345');

		await waitFor(() => {
			expect(button).toBeEnabled();
		});

		const confirmButton = component.getByTestId('confirm-btn');
		await userEvent.click(confirmButton);

		const confirmModalButton = component.getByTestId('modal-action-confirm-button');
		await userEvent.click(confirmModalButton);
	});

	test('should handle GetBalance', async () => {
		const component = render(<GetBalanceOperation />);

		const account = component.getByTestId('targetAccount');
		await userEvent.type(account, '0.0.12345');

		const confirmButton = component.getByTestId('confirm-btn');
		await userEvent.click(confirmButton);

		const confirmModalButton = component.getByTestId('modal-action-confirm-button');
		await userEvent.click(confirmModalButton);
	});
});
