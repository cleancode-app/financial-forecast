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
    assetClass: "shares" | "property" | "cash" | "bonds";
    expectedGrowthPerAnnum: number; //0-1
    expectedReturnPerAnnum: number; //0-1
}

export interface AssetPurchase {
    assetId: string;
    price: number; //AUD e.g. 200000.01
    date: string; // ISO8601 date UTC
}