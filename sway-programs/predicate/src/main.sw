predicate;

use std::{b512::B512, constants::ZERO_B256, ecr::ec_recover_address};

configurable {
    MAIN_ADDRESS: b256 = ZERO_B256,
    BURNER_ADDRESS: b256 = ZERO_B256,
}

fn main(signature: b256, message: B512) -> bool {
    if let Ok(signer) = ec_recover_address(message, signature) {
        let address = signer.bits();
        // Either key can sign
        address == MAIN_ADDRESS || address == BURNER_ADDRESS
    } else {
        false
    }
}
