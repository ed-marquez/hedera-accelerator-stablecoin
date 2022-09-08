export interface IRequestContracts {
	treasuryId: string;
	privateKey: string;
	accountId: string;
}
export interface IRequestContractsAmount extends IRequestContracts {
	amount: number;
}

export interface IRequestSupplier extends IRequestContracts {
	amount?: number;
	address: string;
}

export interface IRequestBalanceOf extends IRequestContracts {
	targetId: string;
}