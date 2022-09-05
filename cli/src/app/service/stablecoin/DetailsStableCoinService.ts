import { language } from '../../../index.js';
import { utilsService } from '../../../index.js';
import Service from '../Service.js';
import { StableCoinDetail } from '../../../domain/stablecoin/StableCoinList.js';
import { SDK } from 'hedera-stable-coin-sdk';

/**
 * Create Stable Coin Service
 */
export default class DetailsStableCoinsService extends Service {
  constructor() {
    super('Details Stable Coin');
  }

  /**
   * List Stable Coins can be managed
   */
  public async getDetailsStableCoins(id: string): Promise<void> {
    // Call to list stable coins
    const sdk: SDK = new SDK();
    utilsService.breakLine();
    let respDetail: StableCoinDetail;
    await utilsService.showSpinner(
      sdk
        .getStableCoin({
          stableCoinId: id,
        })
        .then((response: StableCoinDetail) => (respDetail = response)),
      {
        text: language.getText('state.searching'),
        successText: language.getText('state.searchingSuccess') + '\n',
      },
    );

    console.log(respDetail);
    utilsService.breakLine();
  }
}