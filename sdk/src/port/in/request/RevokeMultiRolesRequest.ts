/*
 *
 * Hedera Stable Coin SDK
 *
 * Copyright (C) 2023 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import ValidatedRequest from './validation/ValidatedRequest.js';
import Validation from './validation/Validation.js';
import { StableCoinRole } from '../../../domain/context/stablecoin/StableCoinRole.js';
import { InvalidValue } from './error/InvalidValue.js';

export default class RevokeMultiRolesRequest extends ValidatedRequest<RevokeMultiRolesRequest> {
	tokenId: string;
	roles: StableCoinRole[];
	targetsId: string[];

	constructor({
		tokenId,
		targetsId,
		roles,
	}: {
		tokenId: string;
		targetsId: string[];
		roles: StableCoinRole[];
	}) {
		super({
			tokenId: Validation.checkHederaIdFormat(),
			targetsId: (vals) => {
				if (vals.length == 0) {
					return [
						new InvalidValue(
							`The list of accounts cannot be empty.`,
						),
					];
				}

				for (let i = 0; i < vals.length; i++) {
					const err = Validation.checkHederaIdFormat()(vals[i]);
					if (err.length > 0) {
						return err;
					}
					if (vals.indexOf(vals[i]) != i) {
						return [
							new InvalidValue(
								`account ${vals[i]} is duplicated`,
							),
						];
					}
				}
			},
			roles: (vals) => {
				if (vals.length == 0) {
					return [
						new InvalidValue(`The list of roles cannot be empty.`),
					];
				}

				for (let i = 0; i < vals.length; i++) {
					const err = Validation.checkRole()(vals[i]);
					if (err.length > 0) {
						return err;
					}
					if (vals.indexOf(vals[i]) != i) {
						return [
							new InvalidValue(`role ${vals[i]} is duplicated`),
						];
					}
				}
			},
		});
		this.tokenId = tokenId;
		this.targetsId = targetsId;
		this.roles = roles;
	}
}
