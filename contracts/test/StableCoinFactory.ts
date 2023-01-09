
const { ContractId, AccountId }  = require("@hashgraph/sdk");
import "@hashgraph/hardhat-hethers";
import "@hashgraph/sdk";
import {BigNumber} from "ethers";

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

import { deployContractsWithSDK, initializeClients, 
  getOperatorClient,
  getOperatorAccount,
  getOperatorPrivateKey,
  getOperatorE25519,
getOperatorPublicKey,
getNonOperatorClient,
getNonOperatorAccount,
getNonOperatorPrivateKey,
getNonOperatorPublicKey,
getNonOperatorE25519,
deployFactory,
toHashgraphKey
 } from "../scripts/deploy";
 import {
  upgradeTo_SCF,
  admin_SCF,
  changeAdmin_SCF,
  owner_SCF,
  upgrade_SCF,
  changeProxyAdmin_SCF,
  transferOwnership_SCF,
  getProxyAdmin_SCF,
  getProxyImplementation_SCF
} from "../scripts/contractsMethods";

import{clientId, toEvmAddress, getClient} from "../scripts/utils";

let clientSdk: any;

let proxyAddress:any;
let proxyAdminAddress:any;
let factoryAddress:any;

let operatorClient: any;
let nonOperatorClient: any;
let operatorAccount: string;
let nonOperatorAccount: string;
let operatorPriKey: string;
let nonOperatorPriKey: string;
let operatorPubKey: string;
let nonOperatorPubKey: string;
let operatorIsE25519: boolean;
let nonOperatorIsE25519: boolean;


let client1:any;
let client1account: string;
let client1privatekey: string;
let client1publickey: string;
let client1isED25519Type: boolean;


let client2:any;
let client2account: string;
let client2privatekey: string;
let client2publickey: string;
let client2isED25519Type: boolean;

const TokenName = "MIDAS";
const TokenSymbol = "MD";
const TokenDecimals = 3;
const TokenFactor = BigNumber.from(10).pow(TokenDecimals);
const INIT_SUPPLY = BigNumber.from(10).mul(TokenFactor);
const MAX_SUPPLY = BigNumber.from(1000).mul(TokenFactor);
const TokenMemo = "Hedera Accelerator Stable Coin"

describe.skip("StableCoinFactory Tests", function() {
  before(async function  () {         
    // Generate Client 1 and Client 2
    [client1,
      client1account, 
      client1privatekey,
      client1publickey,
      client1isED25519Type,
      client2,
      client2account,
      client2privatekey,
      client2publickey,
      client2isED25519Type] = initializeClients();

      operatorClient = getOperatorClient(client1, client2, clientId);
      nonOperatorClient = getNonOperatorClient(client1, client2, clientId);
      operatorAccount = getOperatorAccount(client1account, client2account, clientId);
      nonOperatorAccount = getNonOperatorAccount(client1account, client2account, clientId);
      operatorPriKey = getOperatorPrivateKey(client1privatekey, client2privatekey, clientId);
      operatorPubKey = getOperatorPublicKey(client1publickey, client2publickey, clientId);
      operatorIsE25519 = getOperatorE25519(client1isED25519Type, client2isED25519Type, clientId);
      nonOperatorIsE25519 = getNonOperatorE25519(client1isED25519Type, client2isED25519Type, clientId);

    });   

  it("Create StableCoin setting all token keys to the Proxy", async function() {
     // Deploy Token using Client
     await deployContractsWithSDK(
        TokenName, 
        TokenSymbol, 
        TokenDecimals, 
        INIT_SUPPLY.toString(), 
        MAX_SUPPLY.toString(), 
        TokenMemo, 
        operatorAccount, 
        operatorPriKey, 
        operatorPubKey,
        operatorIsE25519
      ); 
  });

  it("Create StableCoin setting all token keys to the Account", async function() {
    // Deploy Token using Client
    await deployContractsWithSDK(
       TokenName, 
       TokenSymbol, 
       TokenDecimals, 
       INIT_SUPPLY.toString(), 
       MAX_SUPPLY.toString(), 
       TokenMemo, 
       operatorAccount, 
       operatorPriKey, 
       operatorPubKey,
       operatorIsE25519,
       false,
       false
     ); 
 });

});


describe.skip("StableCoinFactoryProxy and StableCoinFactoryProxyAdmin Tests", function() {
  before(async function  () {         
    // Generate Client 1 and Client 2
    [client1,
      client1account, 
      client1privatekey,
      client1publickey,
      client1isED25519Type,
      client2,
      client2account,
      client2privatekey,
      client2publickey,
      client2isED25519Type] = initializeClients();

      operatorClient = getOperatorClient(client1, client2, clientId);
      nonOperatorClient = getNonOperatorClient(client1, client2, clientId);
      operatorAccount = getOperatorAccount(client1account, client2account, clientId);
      nonOperatorAccount = getNonOperatorAccount(client1account, client2account, clientId);
      operatorPriKey = getOperatorPrivateKey(client1privatekey, client2privatekey, clientId);
      operatorPubKey = getOperatorPublicKey(client1publickey, client2publickey, clientId);
      operatorIsE25519 = getOperatorE25519(client1isED25519Type, client2isED25519Type, clientId);
      nonOperatorIsE25519 = getNonOperatorE25519(client1isED25519Type, client2isED25519Type, clientId);


      // Deploy Token using Client
      clientSdk = getClient()
      clientSdk.setOperator(operatorAccount, toHashgraphKey(operatorPriKey, operatorIsE25519))

      let result = await deployFactory(clientSdk, 
          operatorPriKey)
        
      proxyAddress = result[0];
      proxyAdminAddress = result[1];
      factoryAddress = result[2];
    });   

  it("Retrieve admin and implementation addresses for the Proxy", async function() {
     // We retreive the HederaERC20Proxy admin and implementation
     const implementation = await getProxyImplementation_SCF(ContractId, proxyAdminAddress, operatorClient, proxyAddress.toSolidityAddress());
     const admin = await getProxyAdmin_SCF(ContractId, proxyAdminAddress, operatorClient, proxyAddress.toSolidityAddress());

     // We check their values : success
     expect(implementation.toUpperCase()).to.equals("0X" + factoryAddress.toSolidityAddress().toUpperCase());
     expect(admin.toUpperCase()).to.equals("0X" + proxyAdminAddress.toSolidityAddress().toUpperCase());
  });

  it("Retrieve proxy admin owner", async function() {
    // We retreive the HederaERC20Proxy admin and implementation
    const ownerAccount = await owner_SCF(ContractId, proxyAdminAddress, operatorClient);

    // We check their values : success
    expect(ownerAccount.toUpperCase()).to.equals((await toEvmAddress(operatorAccount, operatorIsE25519)).toUpperCase());
 });
  
  it("Upgrade Proxy implementation without the proxy admin", async function() {
    // Deploy a new contract
    let result = await deployFactory(clientSdk, 
      operatorPriKey)

    const newImplementationContract = result[2];

    // Non Admin upgrades implementation : fail       
    await expect(upgradeTo_SCF(ContractId, proxyAddress, operatorClient, newImplementationContract.toSolidityAddress())).to.eventually.be.rejectedWith(Error);
  });

  it("Change Proxy admin without the proxy admin", async function() {
    // Non Admin changes admin : fail       
    await expect(changeAdmin_SCF(ContractId, proxyAddress, operatorClient, await toEvmAddress(nonOperatorAccount, nonOperatorIsE25519))).to.eventually.be.rejectedWith(Error);
  });

  it("Upgrade Proxy implementation with the proxy admin but without the owner account", async function() {
    // Deploy a new contract
    let result = await deployFactory(clientSdk, 
      operatorPriKey)

    const newImplementationContract = result[2];

    // Upgrading the proxy implementation using the Proxy Admin with an account that is not the owner : fails
    await expect(upgrade_SCF(ContractId, proxyAdminAddress, nonOperatorClient, newImplementationContract.toSolidityAddress(), proxyAddress.toSolidityAddress())).to.eventually.be.rejectedWith(Error);
  });

  it("Change Proxy admin with the proxy admin but without the owner account", async function() {
    // Non Owner changes admin : fail       
    await expect(changeProxyAdmin_SCF(ContractId, proxyAdminAddress, nonOperatorClient, nonOperatorAccount, proxyAddress.toSolidityAddress(), nonOperatorIsE25519)).to.eventually.be.rejectedWith(Error);
  });

  it("Upgrade Proxy implementation with the proxy admin and the owner account", async function() {
    // Deploy a new contract
    let result = await deployFactory(clientSdk, 
      operatorPriKey)

    const newImplementationContract = result[2];

    // Upgrading the proxy implementation using the Proxy Admin with an account that is the owner : success
    await upgrade_SCF(ContractId, proxyAdminAddress, operatorClient, newImplementationContract.toSolidityAddress(), proxyAddress.toSolidityAddress())

    // Check new implementation address
    const implementation = await getProxyImplementation_SCF(ContractId, proxyAdminAddress, operatorClient, proxyAddress.toSolidityAddress());
    expect(implementation.toUpperCase()).to.equals("0X" + newImplementationContract.toSolidityAddress().toUpperCase());

    // reset
    await upgrade_SCF(ContractId, proxyAdminAddress, operatorClient, factoryAddress.toSolidityAddress(), proxyAddress.toSolidityAddress())
  });

  it("Change Proxy admin with the proxy admin and the owner account", async function() {
    // Owner changes admin : success     
    await changeProxyAdmin_SCF(ContractId, proxyAdminAddress, operatorClient, operatorAccount, proxyAddress.toSolidityAddress(), operatorIsE25519);

    // Now we cannot get the admin using the Proxy admin contract.
    await expect(getProxyAdmin_SCF(ContractId, proxyAdminAddress, operatorClient, proxyAddress.toSolidityAddress())).to.eventually.be.rejectedWith(Error);

    // Check that proxy admin has been changed
    const _admin = await admin_SCF(ContractId, proxyAddress, operatorClient);
    expect(_admin.toUpperCase()).to.equals((await toEvmAddress(operatorAccount, operatorIsE25519)).toUpperCase());

    // reset
    await changeAdmin_SCF(ContractId, proxyAddress, operatorClient, await toEvmAddress(nonOperatorAccount, nonOperatorIsE25519));
    await changeAdmin_SCF(ContractId, proxyAddress, nonOperatorClient, proxyAdminAddress.toSolidityAddress());
  });

  it("Transfers Proxy admin owner without the owner account", async function() {
   // Non Owner transfers owner : fail       
   await expect(transferOwnership_SCF(ContractId, proxyAdminAddress, nonOperatorClient, nonOperatorAccount, nonOperatorIsE25519)).to.eventually.be.rejectedWith(Error);
  });

  it("Transfers Proxy admin owner with the owner account", async function() {
   // Owner transfers owner : success       
   await transferOwnership_SCF(ContractId, proxyAdminAddress, operatorClient, nonOperatorAccount, nonOperatorIsE25519);

   // Check
   const ownerAccount = await owner_SCF(ContractId, proxyAdminAddress, operatorClient);
   expect(ownerAccount.toUpperCase()).to.equals((await toEvmAddress(nonOperatorAccount, nonOperatorIsE25519)).toUpperCase());

   // reset      
   await transferOwnership_SCF(ContractId, proxyAdminAddress, nonOperatorClient, operatorAccount, operatorIsE25519);
  });


});