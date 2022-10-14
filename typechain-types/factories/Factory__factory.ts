/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Factory, FactoryInterface } from "../Factory";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allPools",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenB",
        type: "address",
      },
    ],
    name: "createPool",
    outputs: [
      {
        internalType: "address",
        name: "pool",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50614346806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620000465760003560e01c806341d1de97146200004b578063531aa03e1462000081578063e343361514620000b7575b600080fd5b620000696004803603810190620000639190620006ae565b620000ed565b60405162000078919062000725565b60405180910390f35b6200009f600480360381019062000099919062000773565b6200012d565b604051620000ae919062000725565b60405180910390f35b620000d56004803603810190620000cf919062000773565b6200016f565b604051620000e4919062000725565b60405180910390f35b60018181548110620000fe57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006020528160005260406000206020528060005260406000206000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415620001e3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001da906200081b565b60405180910390fd5b6000808373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16106200022257838562000225565b84845b91509150600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200029c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000293906200088d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614620003a9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003a090620008ff565b60405180910390fd5b600060405180602001620003bd9062000660565b6020820181038252601f19601f82011660405250905060008383604051602001620003ea92919062000971565b604051602081830303815290604052805190602001209050808251602084016000f594508473ffffffffffffffffffffffffffffffffffffffff1663485cc95585856040518363ffffffff1660e01b81526004016200044b929190620009a1565b600060405180830381600087803b1580156200046657600080fd5b505af11580156200047b573d6000803e3d6000fd5b50505050846000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550846000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001859080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505092915050565b61394280620009cf83390190565b600080fd5b6000819050919050565b620006888162000673565b81146200069457600080fd5b50565b600081359050620006a8816200067d565b92915050565b600060208284031215620006c757620006c66200066e565b5b6000620006d78482850162000697565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200070d82620006e0565b9050919050565b6200071f8162000700565b82525050565b60006020820190506200073c600083018462000714565b92915050565b6200074d8162000700565b81146200075957600080fd5b50565b6000813590506200076d8162000742565b92915050565b600080604083850312156200078d576200078c6200066e565b5b60006200079d858286016200075c565b9250506020620007b0858286016200075c565b9150509250929050565b600082825260208201905092915050565b7f73616d6520746f6b656e73000000000000000000000000000000000000000000600082015250565b600062000803600b83620007ba565b91506200081082620007cb565b602082019050919050565b600060208201905081810360008301526200083681620007f4565b9050919050565b7f7a65726f20616464726573730000000000000000000000000000000000000000600082015250565b600062000875600c83620007ba565b915062000882826200083d565b602082019050919050565b60006020820190508181036000830152620008a88162000866565b9050919050565b7f706f6f6c20616c72656164792063726561746564000000000000000000000000600082015250565b6000620008e7601483620007ba565b9150620008f482620008af565b602082019050919050565b600060208201905081810360008301526200091a81620008d8565b9050919050565b60008160601b9050919050565b60006200093b8262000921565b9050919050565b60006200094f826200092e565b9050919050565b6200096b620009658262000700565b62000942565b82525050565b60006200097f828562000956565b60148201915062000991828462000956565b6014820191508190509392505050565b6000604082019050620009b8600083018562000714565b620009c7602083018462000714565b939250505056fe60e06040523480156200001157600080fd5b506040518060400160405280600981526020017f556e6973776170563200000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f5556320000000000000000000000000000000000000000000000000000000000815250601282600090805190602001906200009892919062000178565b508160019080519060200190620000b192919062000178565b508060ff1660808160ff16815250504660a08181525050620000d8620000e860201b60201c565b60c0818152505050505062000429565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200011c919062000338565b60405180910390207fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc646306040516020016200015d959493929190620003cc565b60405160208183030381529060405280519060200120905090565b828054620001869062000257565b90600052602060002090601f016020900481019282620001aa5760008555620001f6565b82601f10620001c557805160ff1916838001178555620001f6565b82800160010185558215620001f6579182015b82811115620001f5578251825591602001919060010190620001d8565b5b50905062000205919062000209565b5090565b5b80821115620002245760008160009055506001016200020a565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200027057607f821691505b6020821081141562000287576200028662000228565b5b50919050565b600081905092915050565b60008190508160005260206000209050919050565b60008154620002bc8162000257565b620002c881866200028d565b94506001821660008114620002e65760018114620002f8576200032f565b60ff198316865281860193506200032f565b620003038562000298565b60005b83811015620003275781548189015260018201915060208101905062000306565b838801955050505b50505092915050565b6000620003468284620002ad565b915081905092915050565b6000819050919050565b620003668162000351565b82525050565b6000819050919050565b62000381816200036c565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003b48262000387565b9050919050565b620003c681620003a7565b82525050565b600060a082019050620003e360008301886200035b565b620003f260208301876200035b565b6200040160408301866200035b565b62000410606083018562000376565b6200041f6080830184620003bb565b9695505050505050565b60805160a05160c0516134e9620004596000396000610e3201526000610dfe01526000610dd801526134e96000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80635a3d5493116100b857806389afcb441161007c57806389afcb441461037d57806395d89b41146103ae578063a9059cbb146103cc578063d21220a7146103fc578063d505accf1461041a578063dd62ed3e1461043657610142565b80635a3d5493146102b35780636a627842146102d157806370a08231146103015780637dc0a1fa146103315780637ecebe001461034d57610142565b806318160ddd1161010a57806318160ddd146101ef57806323b872dd1461020d578063313ce5671461023d5780633644e5151461025b578063485cc955146102795780635909c0d51461029557610142565b8063022c0d9f1461014757806306fdde03146101635780630902f1ac14610181578063095ea7b3146101a15780630dfe1681146101d1575b600080fd5b610161600480360381019061015c9190612495565b610466565b005b61016b610983565b60405161017891906125b6565b60405180910390f35b610189610a11565b60405161019893929190612620565b60405180910390f35b6101bb60048036038101906101b69190612657565b610a6e565b6040516101c891906126b2565b60405180910390f35b6101d9610b60565b6040516101e691906126dc565b60405180910390f35b6101f7610b86565b6040516102049190612706565b60405180910390f35b61022760048036038101906102229190612721565b610b8c565b60405161023491906126b2565b60405180910390f35b610245610dd6565b6040516102529190612790565b60405180910390f35b610263610dfa565b60405161027091906127c4565b60405180910390f35b610293600480360381019061028e91906127df565b610e57565b005b61029d610f86565b6040516102aa9190612706565b60405180910390f35b6102bb610f8c565b6040516102c89190612706565b60405180910390f35b6102eb60048036038101906102e6919061281f565b610f92565b6040516102f89190612706565b60405180910390f35b61031b6004803603810190610316919061281f565b6112c4565b6040516103289190612706565b60405180910390f35b61034b60048036038101906103469190612878565b6112dc565b005b6103676004803603810190610362919061281f565b611506565b6040516103749190612706565b60405180910390f35b6103976004803603810190610392919061281f565b61151e565b6040516103a59291906128df565b60405180910390f35b6103b6611a22565b6040516103c391906125b6565b60405180910390f35b6103e660048036038101906103e19190612657565b611ab0565b6040516103f391906126b2565b60405180910390f35b610404611bc4565b60405161041191906126dc565b60405180910390f35b610434600480360381019061042f9190612960565b611bea565b005b610450600480360381019061044b91906127df565b611ee3565b60405161045d9190612706565b60405180910390f35b60008511806104755750600084115b6104b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ab90612a4e565b60405180910390fd5b6000806104bf610a11565b5091509150816dffffffffffffffffffffffffffff16871080156104f25750806dffffffffffffffffffffffffffff1686105b610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890612aba565b60405180910390fd5b600087111561056857610567600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168689611f08565b5b600086111561059f5761059e600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168688611f08565b5b600084849050111561061b578473ffffffffffffffffffffffffffffffffffffffff1663a49794ba3389896040518463ffffffff1660e01b81526004016105e893929190612b11565b600060405180830381600087803b15801561060257600080fd5b505af1158015610616573d6000803e3d6000fd5b505050505b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161067891906126dc565b6020604051808303816000875af1158015610697573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106bb9190612b70565b90506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161071a91906126dc565b6020604051808303816000875af1158015610739573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075d9190612b70565b9050600089856dffffffffffffffffffffffffffff1661077d9190612bcc565b831161078a5760006107ce565b89600860009054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff166107c29190612bcc565b836107cd9190612bcc565b5b9050600089856dffffffffffffffffffffffffffff166107ee9190612bcc565b83116107fb57600061083f565b896008600e9054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff166108339190612bcc565b8361083e9190612bcc565b5b905060008211806108505750600081115b61088f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088690612c4c565b60405180910390fd5b600060038361089e9190612c6c565b856103e86108ac9190612c6c565b6108b69190612bcc565b905060006003836108c79190612c6c565b856103e86108d59190612c6c565b6108df9190612bcc565b9050620f4240876dffffffffffffffffffffffffffff16896dffffffffffffffffffffffffffff166109119190612c6c565b61091b9190612c6c565b81836109279190612c6c565b1015610968576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095f90612d12565b60405180910390fd5b61097486868a8a6112dc565b50505050505050505050505050565b6000805461099090612d61565b80601f01602080910402602001604051908101604052809291908181526020018280546109bc90612d61565b8015610a095780601f106109de57610100808354040283529160200191610a09565b820191906000526020600020905b8154815290600101906020018083116109ec57829003601f168201915b505050505081565b6000806000600860009054906101000a90046dffffffffffffffffffffffffffff166008600e9054906101000a90046dffffffffffffffffffffffffffff166008601c9054906101000a900463ffffffff16925092509250909192565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610b4e9190612706565b60405180910390a36001905092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610cc2578281610c419190612bcc565b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b82600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d119190612bcc565b9250508190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef85604051610dc29190612706565b60405180910390a360019150509392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f00000000000000000000000000000000000000000000000000000000000000004614610e3057610e2b612079565b610e52565b7f00000000000000000000000000000000000000000000000000000000000000005b905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614158015610ec15750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b610f00576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef790612ddf565b60405180910390fd5b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60095481565b600a5481565b600080600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610ff091906126dc565b6020604051808303816000875af115801561100f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110339190612b70565b90506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161109291906126dc565b6020604051808303816000875af11580156110b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d59190612b70565b90506000600860009054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff16836111119190612bcc565b905060006008600e9054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff168361114d9190612bcc565b9050600080600254141561119057610bb8611172838561116d9190612c6c565b612105565b61117c9190612bcc565b905061118b6000610bb861217f565b611225565b611222600860009054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff16846002546111ce9190612c6c565b6111d89190612e2e565b6008600e9054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff16846002546112139190612c6c565b61121d9190612e2e565b61224f565b90505b6000811015611269576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126090612aba565b60405180910390fd5b611273878261217f565b6112b78585600860009054906101000a90046dffffffffffffffffffffffffffff166008600e9054906101000a90046dffffffffffffffffffffffffffff166112dc565b8095505050505050919050565b60036020528060005260406000206000915090505481565b6dffffffffffffffffffffffffffff80168410801561130a57506dffffffffffffffffffffffffffff801683105b611349576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134090612eab565b60405180910390fd5b60006008601c9054906101000a900463ffffffff164203905060008163ffffffff1611801561138857506000836dffffffffffffffffffffffffffff16115b80156113a457506000826dffffffffffffffffffffffffffff16115b15611474578063ffffffff166113e9846113bd85612268565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1661229c90919063ffffffff16565b027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166009819055508063ffffffff1661144e8361142286612268565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1661229c90919063ffffffff16565b027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600a819055505b5083600860006101000a8154816dffffffffffffffffffffffffffff02191690836dffffffffffffffffffffffffffff160217905550826008600e6101000a8154816dffffffffffffffffffffffffffff02191690836dffffffffffffffffffffffffffff160217905550426008601c6101000a81548163ffffffff021916908363ffffffff16021790555050505050565b60056020528060005260406000206000915090505481565b6000806000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161157e91906126dc565b6020604051808303816000875af115801561159d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c19190612b70565b90506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161162091906126dc565b6020604051808303816000875af115801561163f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116639190612b70565b90506000600360003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600060025482856116ba9190612c6c565b6116c49190612e2e565b9050600060025483856116d79190612c6c565b6116e19190612e2e565b90506000821180156116f35750600081115b611732576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161172990612f17565b60405180910390fd5b61173c30846122c2565b611769600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168984611f08565b611796600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168983611f08565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b81526004016117f3929190612f37565b600060405180830381600087803b15801561180d57600080fd5b505af1158015611821573d6000803e3d6000fd5b50505050600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401611882929190612f37565b600060405180830381600087803b15801561189c57600080fd5b505af11580156118b0573d6000803e3d6000fd5b50505050600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161190f91906126dc565b6020604051808303816000875af115801561192e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119529190612b70565b9450600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016119af91906126dc565b6020604051808303816000875af11580156119ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119f29190612b70565b93506000806119ff610a11565b5091509150611a10878784846112dc565b83839850985050505050505050915091565b60018054611a2f90612d61565b80601f0160208091040260200160405190810160405280929190818152602001828054611a5b90612d61565b8015611aa85780601f10611a7d57610100808354040283529160200191611aa8565b820191906000526020600020905b815481529060010190602001808311611a8b57829003601f168201915b505050505081565b600081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611b019190612bcc565b9250508190555081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611bb29190612706565b60405180910390a36001905092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b42841015611c2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c2490612fac565b60405180910390fd5b60006001611c39610dfa565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98a8a8a600560008f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050558b604051602001611cc196959493929190612fcc565b60405160208183030381529060405280519060200120604051602001611ce89291906130a5565b6040516020818303038152906040528051906020012085858560405160008152602001604052604051611d1e94939291906130dc565b6020604051602081039080840390855afa158015611d40573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614158015611db457508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b611df3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dea9061316d565b60405180910390fd5b85600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92587604051611ed29190612706565b60405180910390a350505050505050565b6004602052816000526040600020602052806000526040600020600091509150505481565b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051602401611f35929190612f37565b6040516020818303038152906040527fa9059cbb000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051611fbf91906131d4565b6000604051808303816000865af19150503d8060008114611ffc576040519150601f19603f3d011682016040523d82523d6000602084013e612001565b606091505b50915091508115806120325750600081511415801561203157508080602001905181019061202f9190613217565b155b5b15612072576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161206990613290565b60405180910390fd5b5050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516120ab9190613344565b60405180910390207fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc646306040516020016120ea95949392919061335b565b60405160208183030381529060405280519060200120905090565b6000600382111561216c57819050600060016002846121249190612e2e565b61212e91906133ae565b90505b8181101561216657809150600281828561214b9190612e2e565b61215591906133ae565b61215f9190612e2e565b9050612131565b5061217a565b6000821461217957600190505b5b919050565b806002600082825461219191906133ae565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516122439190612706565b60405180910390a35050565b600081831061225e5781612260565b825b905092915050565b60006e010000000000000000000000000000826dffffffffffffffffffffffffffff16612295919061342c565b9050919050565b6000816dffffffffffffffffffffffffffff16836122ba9190613482565b905092915050565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546123119190612bcc565b9250508190555080600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516123869190612706565b60405180910390a35050565b600080fd5b600080fd5b6000819050919050565b6123af8161239c565b81146123ba57600080fd5b50565b6000813590506123cc816123a6565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006123fd826123d2565b9050919050565b61240d816123f2565b811461241857600080fd5b50565b60008135905061242a81612404565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261245557612454612430565b5b8235905067ffffffffffffffff81111561247257612471612435565b5b60208301915083600182028301111561248e5761248d61243a565b5b9250929050565b6000806000806000608086880312156124b1576124b0612392565b5b60006124bf888289016123bd565b95505060206124d0888289016123bd565b94505060406124e18882890161241b565b935050606086013567ffffffffffffffff81111561250257612501612397565b5b61250e8882890161243f565b92509250509295509295909350565b600081519050919050565b600082825260208201905092915050565b60005b8381101561255757808201518184015260208101905061253c565b83811115612566576000848401525b50505050565b6000601f19601f8301169050919050565b60006125888261251d565b6125928185612528565b93506125a2818560208601612539565b6125ab8161256c565b840191505092915050565b600060208201905081810360008301526125d0818461257d565b905092915050565b60006dffffffffffffffffffffffffffff82169050919050565b6125fb816125d8565b82525050565b600063ffffffff82169050919050565b61261a81612601565b82525050565b600060608201905061263560008301866125f2565b61264260208301856125f2565b61264f6040830184612611565b949350505050565b6000806040838503121561266e5761266d612392565b5b600061267c8582860161241b565b925050602061268d858286016123bd565b9150509250929050565b60008115159050919050565b6126ac81612697565b82525050565b60006020820190506126c760008301846126a3565b92915050565b6126d6816123f2565b82525050565b60006020820190506126f160008301846126cd565b92915050565b6127008161239c565b82525050565b600060208201905061271b60008301846126f7565b92915050565b60008060006060848603121561273a57612739612392565b5b60006127488682870161241b565b93505060206127598682870161241b565b925050604061276a868287016123bd565b9150509250925092565b600060ff82169050919050565b61278a81612774565b82525050565b60006020820190506127a56000830184612781565b92915050565b6000819050919050565b6127be816127ab565b82525050565b60006020820190506127d960008301846127b5565b92915050565b600080604083850312156127f6576127f5612392565b5b60006128048582860161241b565b92505060206128158582860161241b565b9150509250929050565b60006020828403121561283557612834612392565b5b60006128438482850161241b565b91505092915050565b612855816125d8565b811461286057600080fd5b50565b6000813590506128728161284c565b92915050565b6000806000806080858703121561289257612891612392565b5b60006128a0878288016123bd565b94505060206128b1878288016123bd565b93505060406128c287828801612863565b92505060606128d387828801612863565b91505092959194509250565b60006040820190506128f460008301856126f7565b61290160208301846126f7565b9392505050565b61291181612774565b811461291c57600080fd5b50565b60008135905061292e81612908565b92915050565b61293d816127ab565b811461294857600080fd5b50565b60008135905061295a81612934565b92915050565b600080600080600080600060e0888a03121561297f5761297e612392565b5b600061298d8a828b0161241b565b975050602061299e8a828b0161241b565b96505060406129af8a828b016123bd565b95505060606129c08a828b016123bd565b94505060806129d18a828b0161291f565b93505060a06129e28a828b0161294b565b92505060c06129f38a828b0161294b565b91505092959891949750929550565b7f696e76616c696420616d6f756e74000000000000000000000000000000000000600082015250565b6000612a38600e83612528565b9150612a4382612a02565b602082019050919050565b60006020820190508181036000830152612a6781612a2b565b9050919050565b7f696e73756666696369656e74206c697175696469747900000000000000000000600082015250565b6000612aa4601683612528565b9150612aaf82612a6e565b602082019050919050565b60006020820190508181036000830152612ad381612a97565b9050919050565b600082825260208201905092915050565b50565b6000612afb600083612ada565b9150612b0682612aeb565b600082019050919050565b6000608082019050612b2660008301866126cd565b612b3360208301856126f7565b612b4060408301846126f7565b8181036060830152612b5181612aee565b9050949350505050565b600081519050612b6a816123a6565b92915050565b600060208284031215612b8657612b85612392565b5b6000612b9484828501612b5b565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612bd78261239c565b9150612be28361239c565b925082821015612bf557612bf4612b9d565b5b828203905092915050565b7f696e73756666696369656e7420696e70757420616d6f756e7400000000000000600082015250565b6000612c36601983612528565b9150612c4182612c00565b602082019050919050565b60006020820190508181036000830152612c6581612c29565b9050919050565b6000612c778261239c565b9150612c828361239c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612cbb57612cba612b9d565b5b828202905092915050565b7f696e76616c696420636f6e7374616e7400000000000000000000000000000000600082015250565b6000612cfc601083612528565b9150612d0782612cc6565b602082019050919050565b60006020820190508181036000830152612d2b81612cef565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612d7957607f821691505b60208210811415612d8d57612d8c612d32565b5b50919050565b7f506f6f6c3a207a65726f20616464726573730000000000000000000000000000600082015250565b6000612dc9601283612528565b9150612dd482612d93565b602082019050919050565b60006020820190508181036000830152612df881612dbc565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612e398261239c565b9150612e448361239c565b925082612e5457612e53612dff565b5b828204905092915050565b7f62616c616e6365206f766572666c6f7700000000000000000000000000000000600082015250565b6000612e95601083612528565b9150612ea082612e5f565b602082019050919050565b60006020820190508181036000830152612ec481612e88565b9050919050565b7f6e6f7420656e6f756768206c6971756964697479000000000000000000000000600082015250565b6000612f01601483612528565b9150612f0c82612ecb565b602082019050919050565b60006020820190508181036000830152612f3081612ef4565b9050919050565b6000604082019050612f4c60008301856126cd565b612f5960208301846126f7565b9392505050565b7f5045524d49545f444541444c494e455f45585049524544000000000000000000600082015250565b6000612f96601783612528565b9150612fa182612f60565b602082019050919050565b60006020820190508181036000830152612fc581612f89565b9050919050565b600060c082019050612fe160008301896127b5565b612fee60208301886126cd565b612ffb60408301876126cd565b61300860608301866126f7565b61301560808301856126f7565b61302260a08301846126f7565b979650505050505050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b600061306e60028361302d565b915061307982613038565b600282019050919050565b6000819050919050565b61309f61309a826127ab565b613084565b82525050565b60006130b082613061565b91506130bc828561308e565b6020820191506130cc828461308e565b6020820191508190509392505050565b60006080820190506130f160008301876127b5565b6130fe6020830186612781565b61310b60408301856127b5565b61311860608301846127b5565b95945050505050565b7f494e56414c49445f5349474e4552000000000000000000000000000000000000600082015250565b6000613157600e83612528565b915061316282613121565b602082019050919050565b600060208201905081810360008301526131868161314a565b9050919050565b600081519050919050565b600081905092915050565b60006131ae8261318d565b6131b88185613198565b93506131c8818560208601612539565b80840191505092915050565b60006131e082846131a3565b915081905092915050565b6131f481612697565b81146131ff57600080fd5b50565b600081519050613211816131eb565b92915050565b60006020828403121561322d5761322c612392565b5b600061323b84828501613202565b91505092915050565b7f5472616e736665724661696c6564000000000000000000000000000000000000600082015250565b600061327a600e83612528565b915061328582613244565b602082019050919050565b600060208201905081810360008301526132a98161326d565b9050919050565b60008190508160005260206000209050919050565b600081546132d281612d61565b6132dc8186613198565b945060018216600081146132f757600181146133085761333b565b60ff1983168652818601935061333b565b613311856132b0565b60005b8381101561333357815481890152600182019150602081019050613314565b838801955050505b50505092915050565b600061335082846132c5565b915081905092915050565b600060a08201905061337060008301886127b5565b61337d60208301876127b5565b61338a60408301866127b5565b61339760608301856126f7565b6133a460808301846126cd565b9695505050505050565b60006133b98261239c565b91506133c48361239c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156133f9576133f8612b9d565b5b828201905092915050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b600061343782613404565b915061344283613404565b9250817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561347757613476612b9d565b5b828202905092915050565b600061348d82613404565b915061349883613404565b9250826134a8576134a7612dff565b5b82820490509291505056fea2646970667358221220da5bc900e8fb286aacb63001f883efcf6c0d83bb1fd2929b09202f19c576188e64736f6c634300080a0033a2646970667358221220995b4184e25f77a0afa747a87fb01f6cf88222feb068f9feb534ddf59263cef764736f6c634300080a0033";

type FactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Factory__factory extends ContractFactory {
  constructor(...args: FactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Factory";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Factory> {
    return super.deploy(overrides || {}) as Promise<Factory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Factory {
    return super.attach(address) as Factory;
  }
  connect(signer: Signer): Factory__factory {
    return super.connect(signer) as Factory__factory;
  }
  static readonly contractName: "Factory";
  public readonly contractName: "Factory";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryInterface {
    return new utils.Interface(_abi) as FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Factory {
    return new Contract(address, _abi, signerOrProvider) as Factory;
  }
}