/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  HederaERC20Proxy,
  HederaERC20ProxyInterface,
} from "../../contracts/HederaERC20Proxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405260405162000f0838038062000f08833981016040819052620000269162000496565b8282828281620000398282600062000053565b506200004790508262000090565b505050505050620005c9565b6200005e83620000eb565b6000825111806200006c5750805b156200008b576200008983836200012d60201b620002701760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620000bb6200015c565b604080516001600160a01b03928316815291841660208301520160405180910390a1620000e88162000195565b50565b620000f6816200024a565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606062000155838360405180606001604052806027815260200162000ee160279139620002fe565b9392505050565b60006200018660008051602062000ec183398151915260001b620003e460201b620002181760201c565b546001600160a01b0316919050565b6001600160a01b038116620002005760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b806200022960008051602062000ec183398151915260001b620003e460201b620002181760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6200026081620003e760201b6200029c1760201c565b620002c45760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620001f7565b80620002297f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b620003e460201b620002181760201c565b60606001600160a01b0384163b620003685760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401620001f7565b600080856001600160a01b03168560405162000385919062000576565b600060405180830381855af49150503d8060008114620003c2576040519150601f19603f3d011682016040523d82523d6000602084013e620003c7565b606091505b509092509050620003da828286620003f6565b9695505050505050565b90565b6001600160a01b03163b151590565b606083156200040757508162000155565b825115620004185782518084602001fd5b8160405162461bcd60e51b8152600401620001f7919062000594565b80516001600160a01b03811681146200044c57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004845781810151838201526020016200046a565b83811115620000895750506000910152565b600080600060608486031215620004ac57600080fd5b620004b78462000434565b9250620004c76020850162000434565b60408501519092506001600160401b0380821115620004e557600080fd5b818601915086601f830112620004fa57600080fd5b8151818111156200050f576200050f62000451565b604051601f8201601f19908116603f011681019083821181831017156200053a576200053a62000451565b816040528281528960208487010111156200055457600080fd5b6200056783602083016020880162000467565b80955050505050509250925092565b600082516200058a81846020870162000467565b9190910192915050565b6020815260008251806020840152620005b581604085016020870162000467565b601f01601f19169190910160400192915050565b6108e880620005d96000396000f3fe60806040526004361061005e5760003560e01c80635c60da1b116100435780635c60da1b146100a85780638f283970146100d9578063f851a440146100f95761006d565b80633659cfe6146100755780634f1ef286146100955761006d565b3661006d5761006b61010e565b005b61006b61010e565b34801561008157600080fd5b5061006b610090366004610772565b610128565b61006b6100a336600461078d565b61016f565b3480156100b457600080fd5b506100bd6101e0565b6040516001600160a01b03909116815260200160405180910390f35b3480156100e557600080fd5b5061006b6100f4366004610772565b61021b565b34801561010557600080fd5b506100bd610245565b6101166102ab565b610126610121610365565b61036f565b565b610130610393565b6001600160a01b0316336001600160a01b0316141561016757610164816040518060200160405280600081525060006103c6565b50565b61016461010e565b610177610393565b6001600160a01b0316336001600160a01b031614156101d8576101d38383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250600192506103c6915050565b505050565b6101d361010e565b60006101ea610393565b6001600160a01b0316336001600160a01b031614156102105761020b610365565b905090565b61021861010e565b90565b610223610393565b6001600160a01b0316336001600160a01b0316141561016757610164816103f1565b600061024f610393565b6001600160a01b0316336001600160a01b031614156102105761020b610393565b6060610295838360405180606001604052806027815260200161088c60279139610445565b9392505050565b6001600160a01b03163b151590565b6102b3610393565b6001600160a01b0316336001600160a01b031614156101265760405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f7879207461726760648201527f6574000000000000000000000000000000000000000000000000000000000000608482015260a4015b60405180910390fd5b600061020b610539565b3660008037600080366000845af43d6000803e80801561038e573d6000f35b3d6000fd5b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b6103cf83610561565b6000825111806103dc5750805b156101d3576103eb8383610270565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61041a610393565b604080516001600160a01b03928316815291841660208301520160405180910390a1610164816105a1565b60606001600160a01b0384163b6104c45760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e74726163740000000000000000000000000000000000000000000000000000606482015260840161035c565b600080856001600160a01b0316856040516104df919061083c565b600060405180830381855af49150503d806000811461051a576040519150601f19603f3d011682016040523d82523d6000602084013e61051f565b606091505b509150915061052f828286610679565b9695505050505050565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6103b7565b61056a816106b2565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001600160a01b03811661061d5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161035c565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b039290921691909117905550565b60608315610688575081610295565b8251156106985782518084602001fd5b8160405162461bcd60e51b815260040161035c9190610858565b6001600160a01b0381163b61072f5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e747261637400000000000000000000000000000000000000606482015260840161035c565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610640565b80356001600160a01b038116811461076d57600080fd5b919050565b60006020828403121561078457600080fd5b61029582610756565b6000806000604084860312156107a257600080fd5b6107ab84610756565b9250602084013567ffffffffffffffff808211156107c857600080fd5b818601915086601f8301126107dc57600080fd5b8135818111156107eb57600080fd5b8760208285010111156107fd57600080fd5b6020830194508093505050509250925092565b60005b8381101561082b578181015183820152602001610813565b838111156103eb5750506000910152565b6000825161084e818460208701610810565b9190910192915050565b6020815260008251806020840152610877816040850160208701610810565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212208504b988246859a0012dcb7aafab165915b715926755f2a2d1c956c252d1c76a64736f6c634300080a0033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type HederaERC20ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HederaERC20ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HederaERC20Proxy__factory extends ContractFactory {
  constructor(...args: HederaERC20ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    admin_: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<HederaERC20Proxy> {
    return super.deploy(
      _logic,
      admin_,
      _data,
      overrides || {}
    ) as Promise<HederaERC20Proxy>;
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    admin_: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  override attach(address: string): HederaERC20Proxy {
    return super.attach(address) as HederaERC20Proxy;
  }
  override connect(signer: Signer): HederaERC20Proxy__factory {
    return super.connect(signer) as HederaERC20Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HederaERC20ProxyInterface {
    return new utils.Interface(_abi) as HederaERC20ProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HederaERC20Proxy {
    return new Contract(address, _abi, signerOrProvider) as HederaERC20Proxy;
  }
}