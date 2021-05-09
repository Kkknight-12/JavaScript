export function damage ( amount ){
  return { 
    type: DAMAGE_SHIELD,
    amount: amount
  }
};

export function repair ( amount ){
    return { 
        type: REPAIR_SHIELD,
        amount: amount
  }
}