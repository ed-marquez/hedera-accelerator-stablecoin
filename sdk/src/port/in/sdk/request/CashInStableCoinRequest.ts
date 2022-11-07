import { OptionalField } from '../../../../core/decorators/OptionalDecorator.js';
import PublicKey from '../../../../domain/context/account/PublicKey.js';
import {
	AccountBaseRequest,
	ContractBaseRequest,
	RequestAccount,
	RequestPublicKey,
} from './BaseRequest.js';
import ValidatedRequest from './validation/ValidatedRequest.js';
import Validation from './validation/Validation.js';

export default class CashInStableCoinRequest
	extends ValidatedRequest<CashInStableCoinRequest>
	implements AccountBaseRequest, ContractBaseRequest
{
	account: RequestAccount;
	amount: string;
	proxyContractId: string;
	targetId: string;
	tokenId: string;

	@OptionalField()
	publicKey?: RequestPublicKey;

	constructor({
		account,
		amount,
		proxyContractId,
		targetId,
		tokenId,
		publicKey,
	}: {
		account: RequestAccount;
		amount: string;
		proxyContractId: string;
		targetId: string;
		tokenId: string;
		publicKey?: RequestPublicKey;
	}) {
		super({
			account: Validation.checkAccountId(),
			amount: Validation.checkNumber(),
			proxyContractId: Validation.checkContractId(),
			targetId: Validation.checkHederaFormat(),
			tokenId: Validation.checkHederaFormat(),
			publicKey: Validation.checkPublicKey(),
		});

		this.account = account;
		this.amount = amount;
		this.proxyContractId = proxyContractId;
		this.targetId = targetId;
		this.tokenId = tokenId;
		this.publicKey = publicKey;
	}
}
