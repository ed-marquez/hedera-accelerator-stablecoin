import Service from '../Service.js';
import { IImportedToken } from '../../../domain/configuration/interfaces/IImportedToken';
import { wizardService } from '../../../index';
import {
  language,
  utilsService,
  configurationService,
} from '../../../index.js';
import {
  GetRolesRequest,
  StableCoinViewModel,
} from '@hashgraph-dev/stablecoin-npm-sdk';
// import RoleStableCoinsService from './RoleStableCoinService';
import DetailsStableCoinsService from './DetailsStableCoinService.js';

export default class ManageImportedTokenService extends Service {
  constructor() {
    super('Manage Imported Tokens');
  }

  public async start(): Promise<void> {
    await utilsService.cleanAndShowBanner();
    const manageOptions: Array<string> = language.getArrayFromObject(
      'wizard.manageImportedTokens',
    );
    const currentAccount = utilsService.getCurrentAccount();
    let symbol = '';
    switch (
      await utilsService.defaultMultipleAsk(
        language.getText('wizard.importedTokenMenu'),
        manageOptions,
        false,
        {
          network: currentAccount.network,
          account: `${currentAccount.accountId} - ${currentAccount.alias}`,
        },
      )
    ) {
      case language.getText('wizard.manageImportedTokens.Add'):
        await utilsService.cleanAndShowBanner();

        let tokenId = '';
        const getRolesRequestForAdding: GetRolesRequest = new GetRolesRequest({
          targetId: currentAccount.accountId,
          tokenId: '',
        });

        await utilsService.handleValidation(
          () => getRolesRequestForAdding.validate('tokenId'),
          async () => {
            tokenId = await utilsService.defaultSingleAsk(
              language.getText('manageImportedToken.tokenId'),
              '0.0.1234567',
            );
            getRolesRequestForAdding.tokenId = tokenId;
          },
        );

        //call to roles
        const importedTokens = currentAccount.importedTokens;
        while (
          importedTokens.length > 0 &&
          importedTokens
            .map((x) => x.id)
            .includes(getRolesRequestForAdding.tokenId)
        ) {
          console.log(
            language.getText('manageImportedToken.importedTokenAlreadyAdded'),
          );
          tokenId = await utilsService.defaultSingleAsk(
            language.getText('manageImportedToken.tokenId'),
            '0.0.1234567',
          );
          getRolesRequestForAdding.tokenId = tokenId;
        }
        await new DetailsStableCoinsService()
          .getDetailsStableCoins(getRolesRequestForAdding.tokenId, false)
          .then((response: StableCoinViewModel) => {
            symbol = response.symbol;
          });
        importedTokens.push({
          id: getRolesRequestForAdding.tokenId,
          symbol,
        });
        this.updateAccount(importedTokens);
        currentAccount.importedTokens = importedTokens;
        break;
      case language.getText('wizard.manageImportedTokens.Refresh'):
        await utilsService.cleanAndShowBanner();
        if (currentAccount.importedTokens.length === 0) {
          console.log(
            language.getText('manageImportedToken.noImportedTokensRefresh'),
          );
          await this.start();
        }
        //show list to refresh
        const tokenToRefresh = await utilsService.defaultMultipleAsk(
          language.getText('manageImportedToken.tokenToRefresh'),
          currentAccount.importedTokens.map(
            (token) => `${token.id} - ${token.symbol}`,
          ),
          true,
        );
        if (tokenToRefresh === 'Go back') {
          await this.start();
        }

        const importedTokensRefreshed = currentAccount.importedTokens.map(
          (token) => {
            if (token.id === tokenToRefresh.split(' - ')[0]) {
              return {
                id: token.id,
                symbol: token.symbol,
              };
            }
            return token;
          },
        );
        this.updateAccount(importedTokensRefreshed);
        currentAccount.importedTokens = importedTokensRefreshed;
        break;
      case language.getText('wizard.manageImportedTokens.Remove'):
        await utilsService.cleanAndShowBanner();
        if (currentAccount.importedTokens.length === 0) {
          console.log(
            language.getText('manageImportedToken.noImportedTokensDelete'),
          );
          await this.start();
        }
        //show list to delete
        const tokenToDelete = await utilsService.defaultMultipleAsk(
          language.getText('manageImportedToken.tokenToDelete'),
          currentAccount.importedTokens.map(
            (token) => `${token.id} - ${token.symbol}`,
          ),
          true,
        );
        if (tokenToDelete === 'Go back') {
          await this.start();
        }
        const newImportedTokens = currentAccount.importedTokens.filter(
          (token) => token.id !== tokenToDelete.split(' - ')[0],
        );
        this.updateAccount(newImportedTokens);
        currentAccount.importedTokens = newImportedTokens;
        break;
      default:
        await utilsService.cleanAndShowBanner();
        await wizardService.mainMenu();
    }
    utilsService.showMessage(language.getText('general.newLine'));
    await this.start();
  }

  public updateAccount(importedTokens: IImportedToken[]): void {
    const defaultCfgData = configurationService.getConfiguration();
    const currentAccount = utilsService.getCurrentAccount();
    const accounts = defaultCfgData.accounts;
    const accsToUpdate = accounts.map((acc) => {
      if (
        acc.alias === currentAccount.alias &&
        acc.accountId === currentAccount.accountId
      ) {
        return {
          accountId: acc.accountId,
          network: acc.network,
          alias: acc.alias,
          privateKey: acc.privateKey,
          importedTokens: importedTokens,
        };
      }
      return acc;
    });
    defaultCfgData.accounts = accsToUpdate;

    configurationService.setConfiguration(defaultCfgData);
  }

  public mixImportedTokens(tokens: string[]): string[] {
    const currentAccount = utilsService.getCurrentAccount();
    const filterTokens = tokens.filter((token) => {
      if (
        currentAccount.importedTokens &&
        currentAccount.importedTokens.find(
          (tok) => tok.id === token.split(' - ')[0],
        )
      ) {
        return false;
      }
      return true;
    });

    return filterTokens
      .concat(
        currentAccount.importedTokens.map(
          (token) => `${token.id} - ${token.symbol}`,
        ),
      )
      .sort((token1, token2) =>
        +token1.split(' - ')[0].split('.').slice(-1)[0] >
        +token2.split(' - ')[0].split('.').slice(-1)[0]
          ? -1
          : 1,
      );
  }
}
