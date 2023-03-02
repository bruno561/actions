## Run Integration

### Smoke Payload

```bash
{"selected_tests":[],"create_new_account":true,"account_info_overrides":{"account_type":"Individual","identity":{},"suitability":{},"joint":{}},"dynamic_params":{"test_mode":"smoke"},"title":""}
```

### Matrix Payload

```bash
[
   {
      "selected_tests":[
         1,
         2,
         15,
         17,
         12,
         3,
         4,
         5,
         6,
         7,
         8,
         9,
         10,
         11,
         13,
         14,
         16,
         18,
         19,
         20,
         21,
         22,
         23
      ],
      "create_new_account":true,
      "account_info_overrides":{
         "account_type":"Individual",
         "identity":{
            
         },
         "suitability":{
            
         },
         "joint":{
            
         }
      },
      "dynamic_params":{
         
      },
      "title":"Smoke Test - Individual Account"
   },
   {
      "selected_tests":[
         1,
         2,
         15,
         17,
         12,
         3,
         4,
         5,
         6,
         7,
         8,
         9,
         10,
         11,
         13,
         16,
         18,
         19,
         20,
         21,
         22,
         23
      ],
      "create_new_account":true,
      "account_info_overrides":{
         "account_type":"Joint",
         "identity":{
            
         },
         "suitability":{
            
         },
         "joint":{
            "joint_dob":"2003-08-03T12:42:20.417Z",
            "tax_id":"26040165081",
            "email":"it.joint.auto@avenue.us",
            "full_name":"IT JOINT ACCOUNT",
            "tax_residence":"Brasileira",
            "joint_cep":"19885300",
            "joint_city":"São Paulo",
            "joint_complement":"IT JOINT COMPLEMENT",
            "joint_neighborhood":"IT JOINT NEIGHBORHOOD",
            "joint_number":"1000",
            "joint_state":"SP",
            "joint_street":"IT JOINT STREET",
            "business_type":"EDUCATION",
            "employer":"IT JOINT EMPLOYER",
            "phone":"+5500000000000",
            "working":"EMPLOYED"
         },
         "tax_residence":"Brasileira"
      },
      "dynamic_params":{
         
      },
      "title":"Smoke Test - Joint Account"
   },
   {
      "selected_tests":[
         19
      ],
      "create_new_account":true,
      "account_info_overrides":{
         "account_type":"Individual",
         "identity":{
            
         },
         "suitability":{
            
         },
         "joint":{
            
         }
      },
      "dynamic_params":{
         "kyc_validation":"manual"
      },
      "title":"Cadastro - Individual Account Manual Approval"
   },
   {
      "selected_tests":[
         19
      ],
      "create_new_account":true,
      "account_info_overrides":{
         "account_type":"Joint",
         "identity":{
            
         },
         "suitability":{
            
         },
         "joint":{
            "joint_dob":"2003-08-03T12:45:09.698Z",
            "tax_id":"54274381064",
            "email":"it.joint.manual@avenue.us",
            "full_name":"IT JOINT ACCOUNT MANUAL",
            "tax_residence":"Brasileira",
            "joint_cep":"19880230",
            "joint_city":"São Paulo",
            "joint_complement":"IT JOINT COMPLEMENT",
            "joint_neighborhood":"IT JOINT NEIGHBORHOOD",
            "joint_number":"800",
            "joint_state":"SP",
            "joint_street":"IT JOINT STREET",
            "business_type":"EDUCATION",
            "employer":"IT JOINT EMPLOYER",
            "phone":"+5500000000000",
            "working":"EMPLOYED"
         },
         "tax_residence":"Brasileira"
      },
      "dynamic_params":{
         "kyc_validation":"manual"
      },
      "title":"Cadastro - Joint Account Manual Approval"
   },
   {
      "selected_tests":[
         7,
         1,
         2
      ],
      "create_new_account":true,
      "account_info_overrides":{
         "account_type":"Individual",
         "identity":{
            
         },
         "suitability":{
            
         },
         "joint":{
            
         }
      },
      "dynamic_params":{
         
      },
      "title":"Trading",
      "mov_fin_settings":{
         "initial_br_funding_amt":70000,
         "initial_usd_transfer_amt":15000
      },
      "assert_settings":{
         "skip_money_bin":false,
         "skip_audit":false,
         "skip_balance":false,
         "skip_position":false,
         "skip_apex_braggart":false
      }
   },
   {
      "selected_tests":[
         1,
         2,
         14
      ],
      "create_new_account":true,
      "account_info_overrides":{
         "account_type":"Individual",
         "identity":{
            
         },
         "suitability":{
            
         },
         "joint":{
            
         }
      },
      "dynamic_params":{
         
      },
      "title":"Crypto",
      "mov_fin_settings":{
         "initial_br_funding_amt":70000,
         "initial_usd_transfer_amt":15000
      }
   },
   {
      "selected_tests":[
         1,
         2,
         16
      ],
      "create_new_account":true,
      "account_info_overrides":{
         "account_type":"Individual",
         "identity":{
            
         },
         "suitability":{
            
         },
         "joint":{
            
         }
      },
      "dynamic_params":{
         
      },
      "title":"Mutualfunds",
      "mov_fin_settings":{
         "initial_br_funding_amt":70000,
         "initial_usd_transfer_amt":15000
      }
   },
   {
      "selected_tests":[
         1,
         12,
         8
      ],
      "create_new_account":true,
      "account_info_overrides":{
         "account_type":"Individual",
         "identity":{
            
         },
         "suitability":{
            
         },
         "joint":{
            
         }
      },
      "dynamic_params":{
         
      },
      "title":"Banking",
      "mov_fin_settings":{
         "initial_br_funding_amt":70000,
         "initial_usd_transfer_amt":15000
      }
   }
]
```