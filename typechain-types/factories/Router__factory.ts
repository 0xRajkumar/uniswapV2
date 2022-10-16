/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Router, RouterInterface } from "../Router";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factoryAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "_swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountADesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBDesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountB",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountB",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "removeLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountInMax",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "swapTokensForExactTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200250d3803806200250d8339818101604052810190620000379190620000e8565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200011a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b08262000083565b9050919050565b620000c281620000a3565b8114620000ce57600080fd5b50565b600081519050620000e281620000b7565b92915050565b6000602082840312156200010157620001006200007e565b5b60006200011184828501620000d1565b91505092915050565b6123e3806200012a6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806342712a671461005c578063472b43f31461008c578063c0e3ee6b146100bc578063ca3d6539146100ed578063f5901d4d1461011f575b600080fd5b6100766004803603810190610071919061140a565b61013b565b6040516100839190611550565b60405180910390f35b6100a660048036038101906100a1919061140a565b6103d4565b6040516100b39190611550565b60405180910390f35b6100d660048036038101906100d19190611572565b610679565b6040516100e492919061160e565b60405180910390f35b61010760048036038101906101029190611637565b610882565b604051610116939291906116d9565b60405180910390f35b61013960048036038101906101349190611922565b610b50565b005b6060600073__$8f1551ddb6659c4f61d022a243d43a4098$__63192128b260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168988886040518563ffffffff1660e01b815260040161019c9493929190611a8e565b600060405180830381865af41580156101b9573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906101e29190611b7a565b905085816000815181106101f9576101f8611bc3565b5b602002602001015110610241576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023890611c4f565b60405180910390fd5b61037b8585600081811061025857610257611bc3565b5b905060200201602081019061026d9190611c6f565b3373__$8f1551ddb6659c4f61d022a243d43a4098$__63a188fe0560008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168a8a60008181106102bd576102bc611bc3565b5b90506020020160208101906102d29190611c6f565b8b8b60018181106102e6576102e5611bc3565b5b90506020020160208101906102fb9190611c6f565b6040518463ffffffff1660e01b815260040161031993929190611c9c565b602060405180830381865af4158015610336573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035a9190611ce8565b8460008151811061036e5761036d611bc3565b5b6020026020010151610eab565b6103c781868680806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505085610b50565b8091505095945050505050565b6060600073__$8f1551ddb6659c4f61d022a243d43a4098$__63bb7b9c7660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168988886040518563ffffffff1660e01b81526004016104359493929190611a8e565b600060405180830381865af4158015610452573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061047b9190611b7a565b905085816001835161048d9190611d44565b8151811061049e5761049d611bc3565b5b6020026020010151116104e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104dd90611dc4565b60405180910390fd5b610620858560008181106104fd576104fc611bc3565b5b90506020020160208101906105129190611c6f565b3373__$8f1551ddb6659c4f61d022a243d43a4098$__63a188fe0560008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168a8a600081811061056257610561611bc3565b5b90506020020160208101906105779190611c6f565b8b8b600181811061058b5761058a611bc3565b5b90506020020160208101906105a09190611c6f565b6040518463ffffffff1660e01b81526004016105be93929190611c9c565b602060405180830381865af41580156105db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ff9190611ce8565b8460008151811061061357610612611bc3565b5b6020026020010151610eab565b61066c81868680806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505085610b50565b8091505095945050505050565b600080600073__$8f1551ddb6659c4f61d022a243d43a4098$__63a188fe0560008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168b8b6040518463ffffffff1660e01b81526004016106d993929190611c9c565b602060405180830381865af41580156106f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071a9190611ce8565b90508073ffffffffffffffffffffffffffffffffffffffff166323b872dd33838a6040518463ffffffff1660e01b815260040161075993929190611df3565b6020604051808303816000875af1158015610778573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079c9190611e62565b506000808273ffffffffffffffffffffffffffffffffffffffff166389afcb44876040518263ffffffff1660e01b81526004016107d99190611e8f565b60408051808303816000875af11580156107f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081b9190611eaa565b9150915087821015801561082f5750868110155b61086e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086590611f36565b60405180910390fd5b818194509450505050965096945050505050565b60008060008073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663531aa03e8c8c6040518363ffffffff1660e01b81526004016108f9929190611f56565b602060405180830381865afa158015610916573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093a9190611ce8565b73ffffffffffffffffffffffffffffffffffffffff1614156109f65760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e34336158b8b6040518363ffffffff1660e01b81526004016109b1929190611f56565b6020604051808303816000875af11580156109d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f49190611ce8565b505b610a048a8a8a8a8a8a61101b565b8093508194505050600073__$8f1551ddb6659c4f61d022a243d43a4098$__63a188fe0560008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168d8d6040518463ffffffff1660e01b8152600401610a6993929190611c9c565b602060405180830381865af4158015610a86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aaa9190611ce8565b9050610ab88b338387610eab565b610ac48a338386610eab565b8073ffffffffffffffffffffffffffffffffffffffff16636a627842866040518263ffffffff1660e01b8152600401610afd9190611e8f565b6020604051808303816000875af1158015610b1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b409190611f7f565b9150509750975097945050505050565b60005b60018351610b619190611d44565b811015610ea557600080848381518110610b7e57610b7d611bc3565b5b602002602001015185600185610b949190611fac565b81518110610ba557610ba4611bc3565b5b602002602001015191509150600073__$8f1551ddb6659c4f61d022a243d43a4098$__63544caa5684846040518363ffffffff1660e01b8152600401610bec929190612002565b6040805180830381865af4158015610c08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2c919061202b565b509050600087600186610c3f9190611fac565b81518110610c5057610c4f611bc3565b5b602002602001015190506000808373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614610c9857826000610c9c565b6000835b91509150600060028a51610cb09190611d44565b8810610cbc5788610d7f565b73__$8f1551ddb6659c4f61d022a243d43a4098$__63a188fe0560008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16888d60028d610d069190611fac565b81518110610d1757610d16611bc3565b5b60200260200101516040518463ffffffff1660e01b8152600401610d3d93929190611c9c565b602060405180830381865af4158015610d5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7e9190611ce8565b5b905073__$8f1551ddb6659c4f61d022a243d43a4098$__63a188fe0560008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1689896040518463ffffffff1660e01b8152600401610ddc93929190611c9c565b602060405180830381865af4158015610df9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1d9190611ce8565b73ffffffffffffffffffffffffffffffffffffffff1663022c0d9f8484846040518463ffffffff1660e01b8152600401610e59939291906120a2565b600060405180830381600087803b158015610e7357600080fd5b505af1158015610e87573d6000803e3d6000fd5b50505050505050505050508080610e9d906120ec565b915050610b53565b50505050565b6000808573ffffffffffffffffffffffffffffffffffffffff16858585604051602401610eda93929190611df3565b6040516020818303038152906040527f23b872dd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610f6491906121af565b6000604051808303816000865af19150503d8060008114610fa1576040519150601f19603f3d011682016040523d82523d6000602084013e610fa6565b606091505b5091509150818015610fd45750600081511480610fd3575080806020019051810190610fd29190611e62565b5b5b611013576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100a90612212565b60405180910390fd5b505050505050565b60008060008073__$8f1551ddb6659c4f61d022a243d43a4098$__633274946160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168c8c6040518463ffffffff1660e01b815260040161107c93929190611c9c565b6040805180830381865af4158015611098573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110bc9190611eaa565b915091506000806000841480156110d35750600083145b156110f15789898092508193505050818195509550505050506112f2565b600073__$8f1551ddb6659c4f61d022a243d43a4098$__63ad615dec8c87876040518463ffffffff1660e01b815260040161112e93929190612232565b602060405180830381865af415801561114b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116f9190611f7f565b90508981116111d557878110156111bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b2906122b5565b60405180910390fd5b8a81809350819450505082829650965050505050506112f2565b600073__$8f1551ddb6659c4f61d022a243d43a4098$__63ad615dec8c87896040518463ffffffff1660e01b815260040161121293929190612232565b602060405180830381865af415801561122f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112539190611f7f565b90508b811115611298576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128f90612321565b60405180910390fd5b898110156112db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d29061238d565b60405180910390fd5b818b80945081955050508383975097505050505050505b965096945050505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61132481611311565b811461132f57600080fd5b50565b6000813590506113418161131b565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261136c5761136b611347565b5b8235905067ffffffffffffffff8111156113895761138861134c565b5b6020830191508360208202830111156113a5576113a4611351565b5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006113d7826113ac565b9050919050565b6113e7816113cc565b81146113f257600080fd5b50565b600081359050611404816113de565b92915050565b60008060008060006080868803121561142657611425611307565b5b600061143488828901611332565b955050602061144588828901611332565b945050604086013567ffffffffffffffff8111156114665761146561130c565b5b61147288828901611356565b93509350506060611485888289016113f5565b9150509295509295909350565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6114c781611311565b82525050565b60006114d983836114be565b60208301905092915050565b6000602082019050919050565b60006114fd82611492565b611507818561149d565b9350611512836114ae565b8060005b8381101561154357815161152a88826114cd565b9750611535836114e5565b925050600181019050611516565b5085935050505092915050565b6000602082019050818103600083015261156a81846114f2565b905092915050565b60008060008060008060c0878903121561158f5761158e611307565b5b600061159d89828a016113f5565b96505060206115ae89828a016113f5565b95505060406115bf89828a01611332565b94505060606115d089828a01611332565b93505060806115e189828a01611332565b92505060a06115f289828a016113f5565b9150509295509295509295565b61160881611311565b82525050565b600060408201905061162360008301856115ff565b61163060208301846115ff565b9392505050565b600080600080600080600060e0888a03121561165657611655611307565b5b60006116648a828b016113f5565b97505060206116758a828b016113f5565b96505060406116868a828b01611332565b95505060606116978a828b01611332565b94505060806116a88a828b01611332565b93505060a06116b98a828b01611332565b92505060c06116ca8a828b016113f5565b91505092959891949750929550565b60006060820190506116ee60008301866115ff565b6116fb60208301856115ff565b61170860408301846115ff565b949350505050565b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61175982611710565b810181811067ffffffffffffffff8211171561177857611777611721565b5b80604052505050565b600061178b6112fd565b90506117978282611750565b919050565b600067ffffffffffffffff8211156117b7576117b6611721565b5b602082029050602081019050919050565b60006117db6117d68461179c565b611781565b905080838252602082019050602084028301858111156117fe576117fd611351565b5b835b8181101561182757806118138882611332565b845260208401935050602081019050611800565b5050509392505050565b600082601f83011261184657611845611347565b5b81356118568482602086016117c8565b91505092915050565b600067ffffffffffffffff82111561187a57611879611721565b5b602082029050602081019050919050565b600061189e6118998461185f565b611781565b905080838252602082019050602084028301858111156118c1576118c0611351565b5b835b818110156118ea57806118d688826113f5565b8452602084019350506020810190506118c3565b5050509392505050565b600082601f83011261190957611908611347565b5b813561191984826020860161188b565b91505092915050565b60008060006060848603121561193b5761193a611307565b5b600084013567ffffffffffffffff8111156119595761195861130c565b5b61196586828701611831565b935050602084013567ffffffffffffffff8111156119865761198561130c565b5b611992868287016118f4565b92505060406119a3868287016113f5565b9150509250925092565b6119b6816113cc565b82525050565b6119c581611311565b82525050565b600082825260208201905092915050565b6000819050919050565b6119ef816113cc565b82525050565b6000611a0183836119e6565b60208301905092915050565b6000611a1c60208401846113f5565b905092915050565b6000602082019050919050565b6000611a3d83856119cb565b9350611a48826119dc565b8060005b85811015611a8157611a5e8284611a0d565b611a6888826119f5565b9750611a7383611a24565b925050600181019050611a4c565b5085925050509392505050565b6000606082019050611aa360008301876119ad565b611ab060208301866119bc565b8181036040830152611ac3818486611a31565b905095945050505050565b600081519050611add8161131b565b92915050565b6000611af6611af18461179c565b611781565b90508083825260208201905060208402830185811115611b1957611b18611351565b5b835b81811015611b425780611b2e8882611ace565b845260208401935050602081019050611b1b565b5050509392505050565b600082601f830112611b6157611b60611347565b5b8151611b71848260208601611ae3565b91505092915050565b600060208284031215611b9057611b8f611307565b5b600082015167ffffffffffffffff811115611bae57611bad61130c565b5b611bba84828501611b4c565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082825260208201905092915050565b7f65786365737369766520616d6f756e7400000000000000000000000000000000600082015250565b6000611c39601083611bf2565b9150611c4482611c03565b602082019050919050565b60006020820190508181036000830152611c6881611c2c565b9050919050565b600060208284031215611c8557611c84611307565b5b6000611c93848285016113f5565b91505092915050565b6000606082019050611cb160008301866119ad565b611cbe60208301856119ad565b611ccb60408301846119ad565b949350505050565b600081519050611ce2816113de565b92915050565b600060208284031215611cfe57611cfd611307565b5b6000611d0c84828501611cd3565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611d4f82611311565b9150611d5a83611311565b925082821015611d6d57611d6c611d15565b5b828203905092915050565b7f696e73756666696369656e7420616d6f756e7400000000000000000000000000600082015250565b6000611dae601383611bf2565b9150611db982611d78565b602082019050919050565b60006020820190508181036000830152611ddd81611da1565b9050919050565b611ded816113cc565b82525050565b6000606082019050611e086000830186611de4565b611e156020830185611de4565b611e2260408301846115ff565b949350505050565b60008115159050919050565b611e3f81611e2a565b8114611e4a57600080fd5b50565b600081519050611e5c81611e36565b92915050565b600060208284031215611e7857611e77611307565b5b6000611e8684828501611e4d565b91505092915050565b6000602082019050611ea46000830184611de4565b92915050565b60008060408385031215611ec157611ec0611307565b5b6000611ecf85828601611ace565b9250506020611ee085828601611ace565b9150509250929050565b7f496e73756666696369656e7420616d6f756e7400000000000000000000000000600082015250565b6000611f20601383611bf2565b9150611f2b82611eea565b602082019050919050565b60006020820190508181036000830152611f4f81611f13565b9050919050565b6000604082019050611f6b6000830185611de4565b611f786020830184611de4565b9392505050565b600060208284031215611f9557611f94611307565b5b6000611fa384828501611ace565b91505092915050565b6000611fb782611311565b9150611fc283611311565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611ff757611ff6611d15565b5b828201905092915050565b600060408201905061201760008301856119ad565b61202460208301846119ad565b9392505050565b6000806040838503121561204257612041611307565b5b600061205085828601611cd3565b925050602061206185828601611cd3565b9150509250929050565b600082825260208201905092915050565b50565b600061208c60008361206b565b91506120978261207c565b600082019050919050565b60006080820190506120b760008301866115ff565b6120c460208301856115ff565b6120d16040830184611de4565b81810360608301526120e28161207f565b9050949350505050565b60006120f782611311565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561212a57612129611d15565b5b600182019050919050565b600081519050919050565b600081905092915050565b60005b8381101561216957808201518184015260208101905061214e565b83811115612178576000848401525b50505050565b600061218982612135565b6121938185612140565b93506121a381856020860161214b565b80840191505092915050565b60006121bb828461217e565b915081905092915050565b7f536166655472616e736665724661696c65640000000000000000000000000000600082015250565b60006121fc601283611bf2565b9150612207826121c6565b602082019050919050565b6000602082019050818103600083015261222b816121ef565b9050919050565b600060608201905061224760008301866119bc565b61225460208301856119bc565b61226160408301846119bc565b949350505050565b7f696e73756666696369656e7420616d6f756e7420420000000000000000000000600082015250565b600061229f601583611bf2565b91506122aa82612269565b602082019050919050565b600060208201905081810360008301526122ce81612292565b9050919050565b7f6c6f7720616d6f756e74204120616e6420420000000000000000000000000000600082015250565b600061230b601283611bf2565b9150612316826122d5565b602082019050919050565b6000602082019050818103600083015261233a816122fe565b9050919050565b7f696e73756666696369656e7420616d6f756e7420410000000000000000000000600082015250565b6000612377601583611bf2565b915061238282612341565b602082019050919050565b600060208201905081810360008301526123a68161236a565b905091905056fea2646970667358221220be34e1df26b2d4e3c3d82c790962616a85db375014baa1a7f592e53d06c884f964736f6c634300080a0033";

type RouterConstructorParams =
  | [linkLibraryAddresses: RouterLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Router__factory extends ContractFactory {
  constructor(...args: RouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, Router__factory.linkBytecode(linkLibraryAddresses), signer);
    }
    this.contractName = "Router";
  }

  static linkBytecode(linkLibraryAddresses: RouterLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$8f1551ddb6659c4f61d022a243d43a4098\\$__", "g"),
      linkLibraryAddresses["contracts/Library.sol:Library"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    _factoryAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Router> {
    return super.deploy(_factoryAddress, overrides || {}) as Promise<Router>;
  }
  getDeployTransaction(
    _factoryAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factoryAddress, overrides || {});
  }
  attach(address: string): Router {
    return super.attach(address) as Router;
  }
  connect(signer: Signer): Router__factory {
    return super.connect(signer) as Router__factory;
  }
  static readonly contractName: "Router";
  public readonly contractName: "Router";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RouterInterface {
    return new utils.Interface(_abi) as RouterInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Router {
    return new Contract(address, _abi, signerOrProvider) as Router;
  }
}

export interface RouterLibraryAddresses {
  ["contracts/Library.sol:Library"]: string;
}
