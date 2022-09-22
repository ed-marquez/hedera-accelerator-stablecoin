/* eslint-disable no-case-declarations */
import {
  StableCoinDetail,
  StableCoinList,
} from '../../../domain/stablecoin/StableCoinList.js';
import {
  language,
  utilsService,
  wizardService,
  configurationService,
} from '../../../index.js';
import Service from '../Service.js';
import DetailsStableCoinsService from './DetailsStableCoinService.js';
import { PublicKey, SDK } from 'hedera-stable-coin-sdk';
import BalanceOfStableCoinsService from './BalanceOfStableCoinService.js';
import CashInStableCoinsService from './CashInStableCoinService.js';
import CashOutStableCoinsService from './CashOutStableCoinService.js';
import WipeStableCoinsService from './WipeStableCoinService.js';
import SupplierRoleStableCoinsService from './SupplierRoleStableCoinService.js';
import RescueStableCoinsService from './RescueStableCoinService.js';
const colors = require('colors');

/**
 * Operation Stable Coin Service
 */
export default class OperationStableCoinService extends Service {
  private stableCoinId;
  private proxyContractId;
  private stableCoinWithSymbol;

  constructor(tokenId?: string, memo?: string, symbol?: string) {
    super('Operation Stable Coin');
    if (tokenId && memo && symbol) {
      this.stableCoinId = tokenId.toString(); //TODO Cambiar name por el id que llegue en la creación del token
      this.proxyContractId = memo;
      this.stableCoinWithSymbol = `${tokenId.toString()} - ${symbol}`;
    }
  }

  /**
   * Start the wizard for operation a stable coin
   */
  public async start(): Promise<void> {
    const sdk: SDK = utilsService.getSDK();
    const currentAccount = utilsService.getCurrentAccount();
    let resp: StableCoinList[];
    if (this.stableCoinId === undefined) {
      //Get list of stable coins to display
      await utilsService.showSpinner(
        sdk
          .getListStableCoin({
            privateKey: currentAccount.privateKey,
          })
          .then((response: StableCoinList[]) => (resp = response)),
        {
          text: language.getText('state.searching'),
          successText: language.getText('state.searchingSuccess') + '\n',
        },
      );

      this.stableCoinId = await utilsService.defaultMultipleAsk(
        language.getText('stablecoin.askToken'),
        resp
          .map((item) => {
            return `${item.id} - ${item.symbol}`;
          })
          .concat('Exit to main menu'),
        configurationService.getConfiguration()?.defaultNetwork,
        `${currentAccount.accountId} - ${currentAccount.alias}`,
      );
      this.stableCoinWithSymbol = this.stableCoinId;
      this.stableCoinId = this.stableCoinId.split(' - ')[0];

      if (this.stableCoinId === 'Exit to main menu') {
        await wizardService.mainMenu();
      } else {
        // Get details to obtain treasury
        await new DetailsStableCoinsService()
          .getDetailsStableCoins(this.stableCoinId, false)
          .then((response: StableCoinDetail) => {
            this.proxyContractId = response.memo;
          });

        await this.operationsStableCoin();
      }
    } else {
      await this.operationsStableCoin();
    }
  }

  private async operationsStableCoin(): Promise<void> {
    const sdk: SDK = utilsService.getSDK();
    const currentAccount = utilsService.getCurrentAccount();
    const wizardOperationsStableCoinOptions = language.getArray(
      'wizard.stableCoinOptions',
    );
    const details = await new DetailsStableCoinsService().getDetailsStableCoins(
      this.stableCoinId,
      false,
    );

    switch (
      await utilsService.defaultMultipleAsk(
        language.getText('stablecoin.askDoSomething'),
        this.disableOptions(wizardOperationsStableCoinOptions, details),
        currentAccount.network,
        `${currentAccount.accountId} - ${currentAccount.alias}`,
        this.stableCoinWithSymbol,
      )
    ) {
      case 'Cash in':
        // Call to mint
        const account2Mint = await utilsService.defaultSingleAsk(
          language.getText('stablecoin.askTargetAccount'),
          currentAccount.accountId,
        );
        if (!sdk.checkIsAddress(account2Mint)) {
          console.log(language.getText('validations.wrongFormatAddress'));

          await this.operationsStableCoin();
        }
        const amount2Mint = await utilsService.defaultSingleAsk(
          language.getText('stablecoin.askCashInAmount'),
          '1',
        );
        if (parseFloat(amount2Mint) < 0) {
          console.log(language.getText('account.wrong'));
          await this.operationsStableCoin();
        }
        try {
          await new CashInStableCoinsService().cashInStableCoin(
            this.proxyContractId,
            currentAccount.privateKey,
            currentAccount.accountId,
            this.stableCoinId,
            account2Mint,
            parseFloat(amount2Mint),
          );
        } catch (error) {
          console.log(colors.red(error.message));
          await this.operationsStableCoin();
        }

        break;
      case 'Details':
        // Call to details
        await new DetailsStableCoinsService().getDetailsStableCoins(
          this.stableCoinId,
        );
        break;
      case 'Balance':
        // Call to balance
        const targetId = await utilsService.defaultSingleAsk(
          language.getText('stablecoin.askAccountToBalance'),
          currentAccount.accountId,
        );
        // Check Address
        if (sdk.checkIsAddress(targetId)) {
          await new BalanceOfStableCoinsService().getBalanceOfStableCoin(
            this.proxyContractId,
            currentAccount.privateKey,
            currentAccount.accountId,
            targetId,
            this.stableCoinId,
          );
        } else {
          console.log(language.getText('validations.wrongFormatAddress'));

          await this.operationsStableCoin();
        }

        break;
      case 'Cash out':
        const amount2Burn = await utilsService.defaultSingleAsk(
          language.getText('stablecoin.askCashOutAmount'),
          '1',
        );
        try {
          await new CashOutStableCoinsService().cashOutStableCoin(
            this.proxyContractId,
            configurationService.getConfiguration().accounts[0].privateKey,
            configurationService.getConfiguration().accounts[0].accountId,
            this.stableCoinId,
            parseFloat(amount2Burn),
          );
        } catch (error) {
          console.log(colors.red(error.message));
          await this.operationsStableCoin();
        }

        break;
      case 'Wipe':
        // Call to Wipe
        const account2Wipe = await utilsService.defaultSingleAsk(
          language.getText('stablecoin.askTargetAccount'),
          currentAccount.accountId,
        );
        if (!sdk.checkIsAddress(account2Wipe)) {
          console.log(language.getText('validations.wrongFormatAddress'));
          await this.operationsStableCoin();
        }
        const amount2Wipe = await utilsService.defaultSingleAsk(
          language.getText('stablecoin.askWipeAmount'),
          '1',
        );
        if (parseFloat(amount2Wipe) < 0) {
          console.log(language.getText('validations.wrongFormatAddress'));
          await this.operationsStableCoin();
        }

        try {
          await new WipeStableCoinsService().wipeStableCoin(
            this.proxyContractId,
            currentAccount.privateKey,
            currentAccount.accountId,
            this.stableCoinId,
            account2Wipe,
            parseFloat(amount2Wipe),
          );
        } catch (error) {
          console.log(colors.red(error.message));
          await this.operationsStableCoin();
        }

        break;
      case 'Rescue':
        // Call to Rescue
        const amount2Rescue = await utilsService.defaultSingleAsk(
          language.getText('stablecoin.askRescueAmount'),
          '1',
        );

        if (parseFloat(amount2Rescue) <= 0) {
          console.log(language.getText('validations.lessZero'));
          utilsService.breakLine();

          await this.operationsStableCoin();
        }

        try {
          await new RescueStableCoinsService().rescueStableCoin(
            this.proxyContractId,
            currentAccount.privateKey,
            currentAccount.accountId,
            this.stableCoinId,
            parseFloat(amount2Rescue),
          );
        } catch (err) {
          console.log(colors.red(err.message));
          await this.operationsStableCoin();
        }

        console.log(
          language
            .getText('rescue.success')
            .replace('${tokens}', amount2Rescue),
        );

        utilsService.breakLine();

        // Call to balance
        await new BalanceOfStableCoinsService().getBalanceOfStableCoin(
          this.proxyContractId,
          currentAccount.privateKey,
          currentAccount.accountId,
          currentAccount.accountId,
          this.stableCoinId,
        );

        break;
      case 'Role management':
        // Call to Supplier Role
        await this.supplierFlow();
        break;
      case wizardOperationsStableCoinOptions[
        wizardOperationsStableCoinOptions.length - 1
      ]:
      default:
        await wizardService.mainMenu();
    }

    await this.operationsStableCoin();
  }

  /**
   * Supplier Flow
   */
  private async supplierFlow(): Promise<void> {
    const sdk: SDK = utilsService.getSDK();
    const currentAccount = utilsService.getCurrentAccount();
    const supplierOptions = language.getArray('wizard.supplierOptions');
    const editSupplierOptions = language.getArray(
      'wizard.editSupplierRoleOptions',
    );
    let accountTarget = '0.0.0';
    let limit = '';
    const supplierService = new SupplierRoleStableCoinsService();
    const supplierRoleType = language.getArray('wizard.supplierRoleType');

    switch (
      await utilsService.defaultMultipleAsk(
        language.getText('stablecoin.askEditSupplierRole'),
        supplierOptions,
      )
    ) {
      case supplierOptions[0]:
        //Call to give role
        accountTarget = await utilsService.defaultSingleAsk(
          language.getText('stablecoin.accountTarget'),
          accountTarget,
        );

        if (!sdk.checkIsAddress(accountTarget)) {
          console.log(language.getText('validations.wrongFormatAddress'));
          await this.supplierFlow();
        }

        const roleType = await utilsService.defaultMultipleAsk(
          language.getText('stablecoin.askSupplierRoleType'),
          supplierRoleType,
        );
        if (roleType === supplierRoleType[supplierRoleType.length - 1])
          await this.supplierFlow();
        if (roleType === supplierRoleType[0]) {
          //Give unlimited
          //Call to SDK
          const alreadyUnlimitedSupplierRole =
            await supplierService.checkSupplierRoleStableCoin(
              this.proxyContractId,
              accountTarget,
              currentAccount.privateKey,
              currentAccount.accountId,
              'unlimited',
            );
          if (!alreadyUnlimitedSupplierRole) {
            await supplierService.giveSupplierRoleStableCoin(
              this.proxyContractId,
              accountTarget,
              currentAccount.privateKey,
              currentAccount.accountId,
              'unlimited',
            );
          } else {
            console.log(language.getText('supplier.alreadyUnlimitedRole'));
          }
        }
        if (roleType === supplierRoleType[1]) {
          //Give limited
          limit = await utilsService.defaultSingleAsk(
            language.getText('stablecoin.supplierRoleLimit'),
            '1',
          );
          //Call to SDK
          const alreadySupplierRole =
            await supplierService.checkSupplierRoleStableCoin(
              this.proxyContractId,
              accountTarget,
              currentAccount.privateKey,
              currentAccount.accountId,
              'limited',
            );
          if (!alreadySupplierRole) {
            await supplierService.giveSupplierRoleStableCoin(
              this.proxyContractId,
              accountTarget,
              currentAccount.privateKey,
              currentAccount.accountId,
              'limited',
              parseInt(limit),
            );
          } else {
            console.log(language.getText('supplier.alreadyRole'));
          }
        }

        break;
      case supplierOptions[1]:
        //Call to revoke role
        accountTarget = await utilsService.defaultSingleAsk(
          language.getText('stablecoin.accountTarget'),
          accountTarget,
        );
        if (!sdk.checkIsAddress(accountTarget)) {
          console.log(language.getText('validations.wrongFormatAddress'));
          await this.supplierFlow();
        }
        //Call to SDK
        await supplierService.revokeSupplierRoleStableCoin(
          this.proxyContractId,
          accountTarget,
          currentAccount.privateKey,
          currentAccount.accountId,
        );
        break;
      case supplierOptions[2]:
        //Call to edit role
        const editOption = await utilsService.defaultMultipleAsk(
          language.getText('stablecoin.askEditSupplierRole'),
          editSupplierOptions,
        );
        console.log(editOption);
        if (editOption === editSupplierOptions[editSupplierOptions.length - 1])
          await this.supplierFlow();
        if (editOption === editSupplierOptions[0]) {
          //Increase limit
          accountTarget = await utilsService.defaultSingleAsk(
            language.getText('stablecoin.accountTarget'),
            accountTarget,
          );
          if (!sdk.checkIsAddress(accountTarget)) {
            console.log(language.getText('validations.wrongFormatAddress'));
            await this.supplierFlow();
          }
          limit = await utilsService.defaultSingleAsk(
            language.getText('stablecoin.amountIncrease'),
            '1',
          );
          //Call to SDK
          const alreadySupplierRole =
            await supplierService.checkSupplierRoleStableCoin(
              this.proxyContractId,
              accountTarget,
              currentAccount.privateKey,
              currentAccount.accountId,
              'limited',
            );
          if (alreadySupplierRole) {
            await supplierService.editSupplierRoleStableCoin(
              this.proxyContractId,
              accountTarget,
              currentAccount.privateKey,
              currentAccount.accountId,
              editOption,
              parseInt(limit),
            );
          } else {
            console.log(language.getText('supplier.notRole'));
          }
        }
        if (editOption === editSupplierOptions[1]) {
          //Decrease limit
          accountTarget = await utilsService.defaultSingleAsk(
            language.getText('stablecoin.accountTarget'),
            accountTarget,
          );
          if (!sdk.checkIsAddress(accountTarget)) {
            console.log(language.getText('validations.wrongFormatAddress'));
            await this.supplierFlow();
          }
          limit = await utilsService.defaultSingleAsk(
            language.getText('stablecoin.amountDecrease'),
            '1',
          );
          //Call to SDK
          const alreadySupplierRole =
            await supplierService.checkSupplierRoleStableCoin(
              this.proxyContractId,
              accountTarget,
              currentAccount.privateKey,
              currentAccount.accountId,
              'limited',
            );
          if (alreadySupplierRole) {
            await supplierService.editSupplierRoleStableCoin(
              this.proxyContractId,
              accountTarget,
              currentAccount.privateKey,
              currentAccount.accountId,
              editOption,
              parseInt(limit),
            );
          } else {
            console.log(language.getText('supplier.notRole'));
          }
        }
        if (editOption === editSupplierOptions[2]) {
          //Reset
          accountTarget = await utilsService.defaultSingleAsk(
            language.getText('stablecoin.accountTarget'),
            accountTarget,
          );
          if (!sdk.checkIsAddress(accountTarget)) {
            console.log(language.getText('validations.wrongFormatAddress'));
            await this.supplierFlow();
          }
          //Call to SDK
          const alreadySupplierRole =
            await supplierService.checkSupplierRoleStableCoin(
              this.proxyContractId,
              accountTarget,
              currentAccount.privateKey,
              currentAccount.accountId,
              'limited',
            );
          if (alreadySupplierRole) {
            await supplierService.editSupplierRoleStableCoin(
              this.proxyContractId,
              accountTarget,
              currentAccount.privateKey,
              currentAccount.accountId,
              editOption,
              0,
            );
          } else {
            console.log(language.getText('supplier.notRole'));
          }
        }

        break;
      case supplierOptions[supplierOptions.length - 1]:
      default:
        await this.operationsStableCoin();
    }
    await this.supplierFlow();
  }

  private disableOptions(
    options: string[],
    details: StableCoinDetail,
  ): string[] {
    const sdk: SDK = utilsService.getSDK();
    const currentAccount = utilsService.getCurrentAccount();
    let result: string[] = options;
    if (
      (details && details?.supplyKey === null) ||
      (details?.supplyKey instanceof PublicKey &&
        details?.supplyKey?.key !== sdk.getPublicKey(currentAccount.privateKey))
    ) {
      result = options.filter((opt) => opt !== 'Cash in');
    }
    if (
      (details && details?.wipeKey === null) ||
      (details?.wipeKey instanceof PublicKey &&
        details?.wipeKey?.key !== sdk.getPublicKey(currentAccount.privateKey))
    ) {
      result = options.filter((opt) => opt !== 'Wipe');
    }
    return result;
  }
}
