/** Group of Assets held by an individual for a financial goal */
export interface Portfolio {
    id: string; //uuid
    name: string;
    description: string;
    holdings: AssetPurchase[]
}

export interface Asset {
    id: string; //class-specific uuid e.g. ASX:IOZ
    name: string;
    location: string;
    assetClass: "shares" | "property" | "cash" | "bonds";
    expectedGrowthPerAnnum: number; //0-1
    expectedReturnPerAnnum: number; //0-1
    valuations: AssetValue[]
}

export interface AssetValue {
    date: string; // ISO8601 date UTC
    value: number; //AUDs
}

export interface AssetPurchase {
    assetId: string;
    unitsPurchased: number;
    price: number; //AUD e.g. 200000.01
    date: string; // ISO8601 date UTC
}